/* ===== py shared motion layer =====
   Driven by body attributes:
     data-fx       : comma-separated selectors → scroll-reveal (fade + rise), staggered per parent
     data-fx-count : selectors whose numeric text counts up when scrolled into view
     data-fx-ring  : conic-gradient ring elements whose --p fills (and % label counts) on view
   The early inline bootstrap (top of <body>) installs the hide rule so there is no flash;
   this file only observes and animates. Respects prefers-reduced-motion. */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var body = document.body;
  var EASE = 'cubic-bezier(.2,.7,.2,1)';

  function each(sel, fn) {
    if (!sel) return;
    sel.split(',').forEach(function (s) {
      s = s.trim();
      if (s) document.querySelectorAll(s).forEach(fn);
    });
  }

  var docEl = document.documentElement;

  /* When the tab is in the background, CSS transitions freeze at their
     start frame — content would look stuck at opacity:0. Force reveal
     targets visible instantly while hidden; let them animate once the
     tab becomes visible (if nothing has shown yet). */
  var revSel0 = body.getAttribute('data-fx');
  if (revSel0) {
    var instSt = document.createElement('style');
    instSt.textContent = '.pf-instant :is(' + revSel0 + '){opacity:1!important;transform:none!important;filter:none!important;transition:none!important}';
    document.head.appendChild(instSt);
    if (document.hidden) docEl.classList.add('pf-instant');
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden && !document.querySelector('.fx-shown')) {
        docEl.classList.remove('pf-instant');
      }
    });
  }

  /* ---------- scroll reveal + stagger ---------- */
  var revSel = body.getAttribute('data-fx');
  if (revSel && !reduce) {
    var els = [];
    each(revSel, function (e) { if (els.indexOf(e) < 0) els.push(e); });

    var counters = new Map();
    els.forEach(function (e) {
      var p = e.parentNode;
      var n = counters.get(p) || 0;
      e.dataset.fxDelay = Math.min(n * 0.06, 0.42);
      counters.set(p, n + 1);
    });

    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        var e = en.target;
        e.style.transitionDelay = (e.dataset.fxDelay || 0) + 's';
        e.classList.add('fx-shown');
        io.unobserve(e);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (e) { io.observe(e); });

    // safety: never leave anything stuck hidden
    setTimeout(function () { els.forEach(function (e) { e.classList.add('fx-shown'); }); }, 2400);
  } else if (revSel && reduce) {
    each(revSel, function (e) { e.classList.add('fx-shown'); });
  }

  /* ---------- count up ---------- */
  function numNode(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      var n = el.childNodes[i];
      if (n.nodeType === 3 && /\d/.test(n.nodeValue)) return n;
    }
    return null;
  }
  function countUp(el) {
    var node = numNode(el);
    var raw = node ? node.nodeValue : el.textContent;
    var m = raw.match(/^(\s*[^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!m) return;
    var pre = m[1], numStr = m[2], suf = m[3];
    var comma = numStr.indexOf(',') > -1;
    var dec = (numStr.split('.')[1] || '').length;
    var target = parseFloat(numStr.replace(/,/g, ''));
    if (!isFinite(target)) return;
    function fmt(v) {
      var s = dec ? v.toFixed(dec) : Math.round(v).toString();
      if (comma) s = Math.round(v).toLocaleString('en-US');
      return pre + s + suf;
    }
    function write(t) { if (node) node.nodeValue = t; else el.textContent = t; }
    if (reduce) { write(fmt(target)); return; }
    var dur = 1100, t0 = null;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      p = 1 - Math.pow(1 - p, 3);
      write(fmt(target * p));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var countSel = body.getAttribute('data-fx-count');
  if (countSel) {
    var cio = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        countUp(en.target);
        cio.unobserve(en.target);
      });
    }, { threshold: 0.4 });
    each(countSel, function (e) { cio.observe(e); });
  }

  /* ---------- ring fill ---------- */
  function ringFill(el) {
    var target = parseFloat(getComputedStyle(el).getPropertyValue('--p')) || 0;
    var label = el.querySelector('i');
    var isPct = label && /^\s*\d+%\s*$/.test(label.textContent);
    if (reduce) { el.style.setProperty('--p', target); return; }
    var dur = 1200, t0 = null;
    el.style.setProperty('--p', 0);
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      var v = target * e;
      el.style.setProperty('--p', v.toFixed(2));
      if (isPct) label.textContent = Math.round(v) + '%';
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var ringSel = body.getAttribute('data-fx-ring');
  if (ringSel) {
    var rio = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        ringFill(en.target);
        rio.unobserve(en.target);
      });
    }, { threshold: 0.4 });
    each(ringSel, function (e) { rio.observe(e); });
  }

  /* ============================================================
     Beautify layer — shared polish applied to every page that
     loads this file. All additive + animation-only, gated on
     reduced-motion. No markup changes required per page.
     ============================================================ */
  (function beautify() {
    var fine = matchMedia('(pointer: fine)').matches;

    /* ---- injected stylesheet ---- */
    var css = '';

    /* 1 — richer reveal: blur + scale + rise (overrides the plain
          translateY from the inline bootstrap; same target set). */
    if (revSel && !reduce) {
      css +=
        '.js-fx :is(' + revSel + '){transition:opacity .8s cubic-bezier(.2,.7,.2,1),' +
        'transform .65s cubic-bezier(.2,.7,.2,1),filter .8s cubic-bezier(.2,.7,.2,1)}' +
        '.js-fx :is(' + revSel + '):not(.fx-shown){opacity:0;transform:translateY(26px) scale(.975);filter:blur(7px)}';
    }

    /* 2 — hover lift on common cards (snappy transform, slow opacity
          so reveal fade is untouched). */
    var LIFT = '.stat,.nx,.card,.badge,.sc,.mod,.cert,.qa,.matcard,.lcard,.acard';
    css +=
      '.js-fx :is(' + LIFT + '){transition:opacity .7s cubic-bezier(.2,.7,.2,1),' +
      'transform .3s cubic-bezier(.2,.7,.2,1),box-shadow .3s ease,border-color .25s ease,filter .7s cubic-bezier(.2,.7,.2,1)}';
    if (!reduce) {
      css +=
        '.js-fx :is(' + LIFT + '):hover{transform:translateY(-5px);' +
        'box-shadow:0 26px 50px -24px oklch(0.42 0.1 288/.42);border-color:var(--accent-line)}';
    }

    /* 3 — cursor spotlight + slow sheen sweep on big gradient panels. */
    var SPOT = '.resume,.hero,.final-card,.phead,.panel-intro,.qcard .qhead,.levelcard,.herobox';
    css +=
      '.pf-spot{position:relative;isolation:isolate;}' +
      '.pf-spot::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;' +
      'z-index:3;mix-blend-mode:screen;opacity:0;transition:opacity .5s ease;' +
      'background:radial-gradient(360px circle at var(--mx,50%) var(--my,0%),oklch(1 0 0/.18),transparent 62%);}' +
      (reduce ? '' : '.pf-spot:hover::after{opacity:1;}') +
      '.pf-spot::before{content:"";position:absolute;top:0;bottom:0;width:55%;z-index:2;pointer-events:none;' +
      'border-radius:inherit;background:linear-gradient(105deg,transparent,oklch(1 0 0/.13),transparent);' +
      (reduce ? 'display:none;' : 'animation:pfSheen 7.5s ease-in-out infinite;') + '}' +
      '@keyframes pfSheen{0%{left:-60%}55%,100%{left:130%}}';

    /* 4 — shimmer travelling across progress-bar fills. */
    if (!reduce) {
      css +=
        '.js-fx :is(.track i,.pbar i,.bar>i,.xpbar i,.pfill,.progress i,.lvbar i){position:relative;overflow:hidden;}' +
        '.js-fx :is(.track i,.pbar i,.bar>i,.xpbar i,.pfill,.progress i,.lvbar i)::after{content:"";position:absolute;' +
        'top:0;bottom:0;width:40%;background:linear-gradient(90deg,transparent,oklch(1 0 0/.55),transparent);' +
        'animation:pfShim 2.4s ease-in-out infinite;}' +
        '@keyframes pfShim{0%{left:-45%}60%,100%{left:115%}}';
    }

    /* 5 — gradient buttons get a sheen on hover. */
    css +=
      '.btn-primary,.btn-ok{position:relative;overflow:hidden;}' +
      '.btn-primary::after,.btn-ok::after{content:"";position:absolute;top:0;bottom:0;left:-75%;width:55%;' +
      'background:linear-gradient(105deg,transparent,oklch(1 0 0/.32),transparent);transform:skewX(-18deg);' +
      'transition:left .6s cubic-bezier(.2,.7,.2,1);pointer-events:none;}' +
      (reduce ? '' : '.btn-primary:hover::after,.btn-ok:hover::after{left:135%;}');

    /* 6 — logo mark: periodic shine + hover pop. */
    css +=
      '.tb-mk{position:relative;overflow:hidden;transition:transform .25s cubic-bezier(.2,.7,.2,1);}' +
      '.tb-logo:hover .tb-mk{transform:rotate(-4deg) scale(1.08);}' +
      (reduce ? '' :
        '.tb-mk::after{content:"";position:absolute;top:0;bottom:0;left:-80%;width:55%;' +
        'background:linear-gradient(105deg,transparent,oklch(1 0 0/.5),transparent);transform:skewX(-18deg);' +
        'animation:pfMk 5.5s ease-in-out infinite;}@keyframes pfMk{0%,72%{left:-80%}86%,100%{left:140%}}');

    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);

    /* ---- tag spotlight panels + track the pointer ---- */
    each(SPOT, function (el) { el.classList.add('pf-spot'); });
    if (fine && !reduce) {
      document.querySelectorAll('.pf-spot').forEach(function (el) {
        el.addEventListener('pointermove', function (e) {
          var r = el.getBoundingClientRect();
          el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
          el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
        });
      });
    }
  })();
})();

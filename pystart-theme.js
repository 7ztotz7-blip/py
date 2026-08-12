/* Shared colour-theme preference. Loaded in <head> so pages render in the
   selected theme before their content appears. */
(function () {
  var key = 'pystart-theme';
  var theme = 'light';
  try { theme = localStorage.getItem(key) === 'dark' ? 'dark' : 'light'; } catch (_) {}
  document.documentElement.dataset.theme = theme;
  var style = document.createElement('style');
  style.textContent = ':root[data-theme="dark"]{color-scheme:dark;--ink:oklch(0.93 .012 255);--muted:oklch(.73 .018 255);--faint:oklch(.62 .018 255);--line:oklch(.32 .018 255);--line-soft:oklch(.27 .014 255);--line2:oklch(.27 .014 255);--bg:oklch(.18 .025 255);--soft:oklch(.235 .025 255);--card:oklch(.225 .024 255);--accent:oklch(.7 .14 255);--accent-deep:oklch(.78 .11 245);--accent-d:oklch(.78 .11 245);--accent-2:oklch(.68 .14 232);--accent-soft:oklch(.3 .06 255);--accent-s:oklch(.3 .06 255);--accent-line:oklch(.48 .09 255);--accent-l:oklch(.48 .09 255);--ok:oklch(.72 .13 155);--ok-deep:oklch(.78 .11 155);--ok-d:oklch(.78 .11 155);--ok-soft:oklch(.28 .055 155);--ok-s:oklch(.28 .055 155);--ok-line:oklch(.45 .08 155);--ok-l:oklch(.45 .08 155);--warm:oklch(.8 .12 72);--warm-deep:oklch(.84 .1 75);--warm-s:oklch(.3 .05 72);--warm-soft:oklch(.3 .05 72);--warm-l:oklch(.48 .08 72);--warm-line:oklch(.48 .08 72);--lock:oklch(.58 .018 255)}';
  document.head.appendChild(style);
  window.pySetTheme = function (nextTheme) {
    var next = nextTheme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(key, next); } catch (_) {}
    return next;
  };
})();

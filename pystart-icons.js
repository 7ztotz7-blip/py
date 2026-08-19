/* A small, dependency-free icon set used for application UI. */
(function(){
  var paths={
    chart:'M4 19V9m5 10V5m5 14v-7m5 7V3',box:'M4 7.5 12 3l8 4.5v9L12 21l-8-4.5zM4 7.5l8 4.5 8-4.5M12 12v9',
    book:'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5zm0 0V19',clock:'M12 7v5l3.5 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
    bulb:'M9 18h6m-5 3h4M8.2 14.5A6 6 0 1 1 15.8 14.5c-.9.75-1.3 1.47-1.3 2.5h-5c0-1.03-.4-1.75-1.3-2.5',
    lock:'M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5z',user:'M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
    moon:'M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5',key:'M15.5 7.5a4.5 4.5 0 1 0-3.7 7l-6.3 6.3v-3h-2v-2h2v-2h2l1.1-1.1a4.5 4.5 0 0 0 6.9-5.2',
    play:'M8 5v14l11-7z',file:'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 0v6h6M8 13h8m-8 4h5',
    check:'m5 12 4 4L19 6',spark:'m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7z',
    gear:'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.12 2.12-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56v.08h-3v-.08a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-2.12-2.12.06-.06A1.7 1.7 0 0 0 7 15a1.7 1.7 0 0 0-1.56-1.04h-.08v-3h.08A1.7 1.7 0 0 0 7 9.92a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.12-2.12.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.04-1.56V4.6h3v.1a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.12 2.12-.06.06a1.7 1.7 0 0 0-.34 1.88 1.7 1.7 0 0 0 1.56 1.04h.08v3h-.08A1.7 1.7 0 0 0 19.4 15Z'
  };
  window.pyIcon=function(name,size){var d=paths[name]||paths.spark,s=size||16;return '<svg class="ui-icon" width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="'+d+'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';};
  function render(){document.querySelectorAll('[data-ui-icon]').forEach(function(el){el.innerHTML=window.pyIcon(el.dataset.uiIcon,el.dataset.uiIconSize||16);});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();

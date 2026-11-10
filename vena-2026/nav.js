(function(){
  var P = window.VENA_PAGES || [];
  var parts = location.pathname.split('/').filter(Boolean);
  var here = parts.length ? parts[parts.length - (parts[parts.length-1].indexOf('.')>-1 ? 2 : 1)] : '';
  var i = -1; for (var k=0;k<P.length;k++) if (P[k].dir===here) i=k;
  function a(href, text){ return '<a href="'+href+'" style="color:inherit;text-decoration:none;padding:10px 12px;display:inline-block">'+text+'</a>'; }
  function bar(){
    var prev = i>0 ? a('../'+P[i-1].dir+'/?v='+window.VENA_LINKV, '← '+P[i-1].title) : '<span></span>';
    var next = (i>=0 && i<P.length-1) ? a('../'+P[i+1].dir+'/?v='+window.VENA_LINKV, P[i+1].title+' →') : '<span></span>';
    var d = document.createElement('nav');
    d.setAttribute('style','display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px;font:17px/1.3 system-ui,sans-serif;background:#f4efe6;border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding:2px 8px;');
    d.innerHTML = prev + a('../', '☰ Все дни') + next;
    return d;
  }
  document.addEventListener('DOMContentLoaded', function(){
    var st=document.createElement('style'); st.id='VENA_FONT';
    st.textContent=':root{--size-caption:15px!important;--size-small:17px!important;--size-body:18px!important;--size-prose:19px!important}body{font-size:18px}.prose p,.head__sub{line-height:1.6}';
    document.head.appendChild(st);
    document.body.insertBefore(bar(), document.body.firstChild);
    document.body.appendChild(bar());
  });
})();

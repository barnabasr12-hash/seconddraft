
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
}
const backToTop = document.getElementById('backToTop');
if(backToTop){
  const toggle = ()=>backToTop.classList.toggle('show',window.scrollY>520);
  window.addEventListener('scroll',toggle,{passive:true}); toggle();
  backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

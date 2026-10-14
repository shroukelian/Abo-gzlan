document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(e => { e.forEach(x => { if (x.isIntersecting) { x.target.classList.add('visible'); observer.unobserve(x.target) } }) }, { threshold: .15 });
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 6) * 90}ms`; observer.observe(el) });

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.getElementById('photoGrid').addEventListener('click', e => {
    if (e.target.tagName === 'IMG') { lightboxImg.src = e.target.src; lightbox.classList.add('open') }
});
lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});
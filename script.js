const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav-list');

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');

  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute(
    'aria-label',
    isOpen ? 'Cerrar navegación' : 'Abrir navegación'
  );
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});


/* =========================================
   ANIMACIONES
========================================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll('.reveal')
  .forEach((element) => observer.observe(element));

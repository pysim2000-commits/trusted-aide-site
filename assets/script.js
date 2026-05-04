// Trusted-Aide v4 – script.js

// Theme toggle
const themeBtn = document.querySelector('[data-theme-toggle]');
const root = document.documentElement;
const saved = localStorage.getItem('ta-theme');
if (saved) root.setAttribute('data-theme', saved);
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('ta-theme', next);
  });
}

// Mobile nav
const menuBtn = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
  });
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => obs.observe(el));
}

// Contact form honeypot + basic submit
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const hp = form.querySelector('.hp-field input');
    if (hp && hp.value) { e.preventDefault(); return; }
    // Formspree handles the rest
  });
}

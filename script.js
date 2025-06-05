// script.js

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => preloader.remove(), 600);
});

// Scroll Reveal for Categories
const categories = document.querySelectorAll('.menu-category');
const observerOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);
categories.forEach(cat => revealObserver.observe(cat));

// Set Current Year in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Back to Top Button
const backBtn = document.getElementById('back-to-top-btn');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) backBtn.classList.add('visible');
  else backBtn.classList.remove('visible');
});
backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Order Preview Toggle
const orderBar = document.getElementById('order-preview-bar');
const toggleHeader = document.getElementById('order-preview-toggle-header');
toggleHeader.addEventListener('click', () => {
  orderBar.classList.toggle('visible');
});

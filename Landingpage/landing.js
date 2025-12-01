// landing.js — Modern Scroll & Navbar Interactivity
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section, .hero');
  const navLinks = document.querySelectorAll('#navbar ul li a');

  // 🔹 Shrink Navbar + Background Change on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('shrink', 'scrolled');
    } else {
      navbar.classList.remove('shrink', 'scrolled');
    }

    // 🔹 Highlight Active Menu Link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // 🔹 Smooth reveal animation on scroll using Intersection Observer
  const revealElements = document.querySelectorAll('section, .hero-content, .card');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => observer.observe(el));

  // 🔹 Form Submit (demo effect)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for contacting SkillCraft! We will get back to you soon.');
    form.reset();
  });
});
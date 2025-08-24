// Small helper script for Jax's Junk & Metal website
//
// This file implements two pieces of interactivity: a responsive mobile menu
// toggle and a simple handler for the contact form. On narrow viewports the
// navigation links collapse into a hamburger icon; clicking it toggles the
// visibility of the menu. The contact form handler shows a friendly alert
// instead of attempting to send the form to a server.

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.navbar ul');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Contact form submission handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Display a simple thank‑you message. In a real application, you
      // would send this data to a back‑end for processing.
      alert('Thank you for reaching out! We will get back to you shortly.');
      contactForm.reset();
    });
  }
});
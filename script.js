// Smooth scroll for sidebar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    this.classList.add('active');

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Reveal animation on scroll
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (const element of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

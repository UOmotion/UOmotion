
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('table[width="80%"][align="center"] td');
  if (!cards.length) return;

  const reveal = el => el.classList.add('in');

  if (!('IntersectionObserver' in window)) {
    cards.forEach(reveal);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        reveal(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(c => io.observe(c));
});

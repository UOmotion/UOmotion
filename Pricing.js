document.addEventListener("DOMContentLoaded", () => {
  // 1) Animate title + subtitle like Team (.enter class)
  const title = document.querySelector('body > center h1');
  const subtitle = document.querySelector('body > center p');

  const ioTitle = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('enter');
        ioTitle.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  if (title)   ioTitle.observe(title);
  if (subtitle) ioTitle.observe(subtitle);

  // 2) Reveal product cards (same 1s ease-out pace set in CSS)
  const cards = document.querySelectorAll('table[width="80%"][align="center"] td');
  if (!cards.length) return;

  // Fallback if IntersectionObserver is missing
  if (!('IntersectionObserver' in window)) {
    cards.forEach(c => c.classList.add('in'));
    if (title) title.classList.add('enter');
    if (subtitle) subtitle.classList.add('enter');
    return;
  }

  const ioCards = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        ioCards.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(c => ioCards.observe(c));
});

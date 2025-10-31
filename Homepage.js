// Fade in the hero (<center>) smoothly
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('body > center');
  if (hero) requestAnimationFrame(() => hero.classList.add('in'));

  // Ripple on the CTA (only the big homepage button)
  const cta = document.querySelector('body > center form button');
  if (cta) {
    cta.addEventListener('click', (e) => {
      const rect = cta.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const r = document.createElement('span');
      Object.assign(r.style, {
        position: 'absolute',
        inset: '0',
        borderRadius: 'inherit',
        pointerEvents: 'none',
        background: 'rgba(255,255,255,.35)',
        transition: 'opacity .45s ease',
        mask: `radial-gradient(circle ${size}px at ${e.clientX-rect.left}px ${e.clientY-rect.top}px, #000 0, #0000 60%)`
      });
      cta.style.position = 'relative';
      cta.appendChild(r);
      requestAnimationFrame(() => r.style.opacity = '0');
      setTimeout(() => r.remove(), 500);
    });
  }
});

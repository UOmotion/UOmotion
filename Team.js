// === Animate Team Title on Scroll ===
document.addEventListener("DOMContentLoaded", () => {
  const teamTitle = document.querySelector(".team-title");

  // Fade in title when it enters the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          teamTitle.classList.add("enter");
        }
      });
    },
    { threshold: 0.5 }
  );

  if (teamTitle) {
    observer.observe(teamTitle);
  }

  // === Ripple effect for each team cell ===
  const teamCells = document.querySelectorAll(".team-cell");
  teamCells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      // Remove existing ripple if any
      const oldRipple = cell.querySelector(".ripple");
      if (oldRipple) oldRipple.remove();

      // Create new ripple element
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      cell.appendChild(ripple);

      // Calculate ripple size and position
      const rect = cell.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      // Remove ripple after animation
      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    });
  });

  // === Menu scroll color consistency ===
  const topMenu = document.querySelector(".top-menu");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // When scrolling up, make menu bar stay solid
    if (currentScroll < lastScroll) {
      topMenu.style.backgroundColor = "#8f001a";
    } else {
      topMenu.style.backgroundColor = "#8f001a";
    }

    lastScroll = currentScroll;
  });
});

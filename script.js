// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Highlight the active tab while scrolling
const sections = document.querySelectorAll('.block[id]');
const tabs = document.querySelectorAll('.tab');

const setActiveTab = (id) => {
  tabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.getAttribute('href') === `#${id}`);
  });
};

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveTab(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));
}

// Keep the active tab scrolled into view on the mobile tab strip
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    setTimeout(() => tab.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' }), 50);
  });
});

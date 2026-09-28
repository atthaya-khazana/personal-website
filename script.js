// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- View switching: show one section at a time ----
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('[data-view-link]');
const sidebarNav = document.getElementById('sidebarNav');
const navToggle = document.getElementById('navToggle');

const validIds = new Set(Array.from(views).map((v) => v.id));

function showView(id) {
  if (!validIds.has(id)) id = 'home';

  views.forEach((view) => {
    view.classList.toggle('is-active', view.id === id);
  });

  navLinks.forEach((link) => {
    const linkId = (link.getAttribute('href') || '').replace('#', '');
    link.classList.toggle('is-active', linkId === id);
  });

  // Scroll the new view to its top and move focus to its heading
  const activeView = document.getElementById(id);
  if (activeView) {
    activeView.scrollTop = 0;
    const heading = activeView.querySelector('h1, h2');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
  }
}

function navigateTo(id, { pushState = true } = {}) {
  showView(id);
  if (pushState) {
    history.pushState(null, '', `#${id}`);
  }
  // Close the mobile menu after navigating
  if (sidebarNav) sidebarNav.classList.remove('is-open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
}

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('#')) {
      e.preventDefault();
      navigateTo(href.replace('#', ''));
    }
  });
});

window.addEventListener('popstate', () => {
  showView(window.location.hash.replace('#', '') || 'home');
});

// Initial view on page load
showView(window.location.hash.replace('#', '') || 'home');

// ---- Mobile menu toggle ----
if (navToggle && sidebarNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = sidebarNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

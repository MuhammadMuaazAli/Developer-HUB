// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });

  // Close on link click (mobile)
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Highlight active link (by data-active on page UL or fallback to URL)
  const activeKey = navLinks.getAttribute('data-active');
  if (activeKey) {
    navLinks.querySelectorAll('a').forEach(a => {
      if (a.href && a.href.toLowerCase().includes(`${activeKey}.html`)) a.classList.add('active');
    });
  } else {
    const url = location.pathname.split('/').pop();
    navLinks.querySelectorAll('a').forEach(a => {
      if (a.getAttribute('href') === url) a.classList.add('active');
    });
  }
}

// Smooth scroll for in-page hash
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Search filter (index only)
const searchInput = document.getElementById('searchInput');
const topicsGrid = document.getElementById('topicsGrid');
if (searchInput && topicsGrid) {
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    topicsGrid.querySelectorAll('.topic-card').forEach(card => {
      const text = (card.innerText || card.textContent).toLowerCase();
      card.style.display = text.includes(q) ? 'block' : 'none';
    });
  });
}

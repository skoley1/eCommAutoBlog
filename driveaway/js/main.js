/* ===== DriveAway — Main JS ===== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Active nav link ──────────────────────────────
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  // ── Mobile menu toggle ───────────────────────────
  const toggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // ── Search tabs ──────────────────────────────────
  document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // ── Fleet filter buttons (cars.html) ─────────────
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.car-card[data-category]').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          card.style.animation = 'fadeIn 0.25s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ── Sort select ──────────────────────────────────
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const grid = document.getElementById('carsGrid');
      if (!grid) return;
      const cards = Array.from(grid.querySelectorAll('.car-card'));
      cards.sort((a, b) => {
        const priceA = parseInt(a.dataset.price || 0);
        const priceB = parseInt(b.dataset.price || 0);
        if (sortSelect.value === 'price-asc') return priceA - priceB;
        if (sortSelect.value === 'price-desc') return priceB - priceA;
        return 0;
      });
      cards.forEach(c => grid.appendChild(c));
    });
  }

  // ── Copy promo code ──────────────────────────────
  document.querySelectorAll('.copy-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.deal-code-row')?.querySelector('.deal-code')?.textContent?.trim();
      if (!code) return;
      navigator.clipboard.writeText(code).then(() => showToast('Code "' + code + '" copied!'));
    });
  });

  // ── Contact form ─────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      showToast("Message sent! We'll reply within 24 hours.");
      contactForm.reset();
    });
  }

  // ── Reserve buttons ──────────────────────────────
  document.querySelectorAll('.reserve-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Redirecting to booking…');
      setTimeout(() => {
        window.location.href = 'index.html#search';
      }, 800);
    });
  });

  // ── Smooth scroll for anchor links ───────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // ── Toast helper ─────────────────────────────────
  window.showToast = function(msg, duration = 3000) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast';
      toast.innerHTML = '<span class="toast-icon">✓</span><span class="toast-msg"></span>';
      document.body.appendChild(toast);
    }
    toast.querySelector('.toast-msg').textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
  };

});

// ── Fade-in animation ────────────────────────────
const style = document.createElement('style');
style.textContent = `@keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }`;
document.head.appendChild(style);

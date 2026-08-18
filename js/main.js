/* ===== RoarAway — Main JS ===== */

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

  // ── 24/7 Helpline Chat Widget ─────────────────────
  (function initChat() {
    const fab     = document.getElementById('chatFab');
    const panel   = document.getElementById('chatPanel');
    const badge   = document.getElementById('chatBadge');
    const label   = document.getElementById('chatLabel');
    const msgs    = document.getElementById('chatMessages');
    const input   = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');
    const chips   = document.getElementById('chatChips');
    if (!fab || !panel) return;

    // Auto-responses keyed to user keywords
    const autoReplies = [
      { test: /book|reserv|rental/i,   reply: 'Sure! You can manage your booking at any time from our website. Would you like me to redirect you to the booking page, or is there something specific you need help with?' },
      { test: /roadside|breakdown|tow|flat|tire|accident/i, reply: 'I understand — roadside assistance is available 24×7. Please call our emergency line at 1-800-DRIVE-99 and a team member will be with you within 30 minutes.' },
      { test: /cancel|refund/i,        reply: 'Cancellations made 48+ hours before pickup are fully refunded. You can cancel via "Manage Booking" on the site, or I can escalate this to a live agent right now.' },
      { test: /rate|price|cost|fee|cheap/i, reply: 'Our rates start from $39/day for economy cars with no hidden fees. Check our live deals page for current promotions and up to 30% off weekly rentals!' },
      { test: /location|airport|pickup|drop/i, reply: 'We have 500+ pickup locations across all 50 states including all major airports. Visit the Locations page to find the nearest spot to you.' },
      { test: /hi|hello|hey|good/i,    reply: 'Hello! Great to hear from you. How can I help you today? You can ask about bookings, rates, locations, or roadside assistance.' },
    ];
    const fallback = "Thanks for reaching out! A live support agent will follow up with you shortly. For urgent matters please call 1-800-DRIVE-99 (available 24×7).";

    function nowTime() {
      return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function appendMsg(text, type) {
      const wrap = document.createElement('div');
      wrap.className = 'chat-msg chat-msg--' + type;
      const bubble = document.createElement('div');
      bubble.className = 'chat-bubble';
      bubble.textContent = text;
      const time = document.createElement('span');
      time.className = 'chat-msg-time';
      time.textContent = nowTime();
      wrap.appendChild(bubble);
      wrap.appendChild(time);
      msgs.appendChild(wrap);
      msgs.scrollTop = msgs.scrollHeight;
      return wrap;
    }

    function showTyping() {
      const wrap = document.createElement('div');
      wrap.className = 'chat-msg chat-msg--agent';
      wrap.innerHTML = '<div class="chat-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>';
      msgs.appendChild(wrap);
      msgs.scrollTop = msgs.scrollHeight;
      return wrap;
    }

    function agentReply(userText) {
      const typing = showTyping();
      const matched = autoReplies.find(r => r.test.test(userText));
      setTimeout(() => {
        typing.remove();
        appendMsg(matched ? matched.reply : fallback, 'agent');
      }, 900 + Math.random() * 400);
    }

    function sendMessage(text) {
      text = text.trim();
      if (!text) return;
      appendMsg(text, 'user');
      input.value = '';
      input.style.height = '';
      agentReply(text);
    }

    // Toggle open / close
    fab.addEventListener('click', () => {
      const isOpen = panel.classList.toggle('is-open');
      fab.classList.toggle('is-open', isOpen);
      fab.setAttribute('aria-expanded', isOpen);
      panel.setAttribute('aria-hidden', !isOpen);
      if (isOpen) {
        badge.classList.add('hidden');
        label.classList.add('hidden');
        input.focus();
      } else {
        label.classList.remove('hidden');
      }
    });

    // Quick reply chips
    chips.addEventListener('click', e => {
      const chip = e.target.closest('.chat-chip');
      if (!chip) return;
      sendMessage(chip.dataset.reply);
      // remove chips after first use so panel stays clean
      chips.style.display = 'none';
    });

    // Send button
    sendBtn.addEventListener('click', () => sendMessage(input.value));

    // Enter to send (Shift+Enter = newline)
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input.value);
      }
    });

    // Auto-grow textarea
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 80) + 'px';
    });
  })();

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

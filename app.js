// =============================================
//  ENVIGUIDE MANAGEMENT SUITE — APP JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // ── Active nav item highlight ──────────────────────────────────────
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // ── Export Report button feedback ─────────────────────────────────
    const exportBtn = document.querySelector('.export-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const original = exportBtn.innerHTML;
            exportBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Exported!
      `;
            exportBtn.style.background = '#16a34a';
            setTimeout(() => {
                exportBtn.innerHTML = original;
                exportBtn.style.background = '';
            }, 2000);
        });
    }

    // ── KPI card entrance animation ───────────────────────────────────
    const kpiCards = document.querySelectorAll('.kpi-card');
    kpiCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(18px)';
        card.style.transition = `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`;
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });

    // ── Chart cards entrance animation ────────────────────────────────
    const chartCards = document.querySelectorAll('.chart-card');
    chartCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(18px)';
        card.style.transition = `opacity 0.45s ease ${0.35 + i * 0.1}s, transform 0.45s ease ${0.35 + i * 0.1}s`;
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });

    // ── Animated KPI counters ─────────────────────────────────────────
    function animateCounter(el, target, suffix = '', decimals = 0) {
        const duration = 1200;
        const start = performance.now();
        const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const value = eased * target;
            el.textContent = decimals > 0
                ? value.toFixed(decimals) + suffix
                : Math.round(value).toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }

    // Observe KPI cards and trigger counters on visibility
    const kpiValues = [
        { selector: '.kpi-card:nth-child(1) .kpi-value', target: 2847, suffix: ' kg' },
        { selector: '.kpi-card:nth-child(2) .kpi-value', target: 1243, suffix: ' kg' },
        { selector: '.kpi-card:nth-child(3) .kpi-value', target: 72.5, suffix: '%', decimals: 1 },
        { selector: '.kpi-card:nth-child(4) .kpi-value', target: 487, suffix: ' kg' },
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const match = kpiValues.find(k => entry.target.matches(k.selector.split(' ')[0]));
                if (match) {
                    const valueEl = entry.target.querySelector('.kpi-value');
                    if (valueEl) animateCounter(valueEl, match.target, match.suffix, match.decimals || 0);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.kpi-card').forEach(card => observer.observe(card));

    // Trigger counters directly after short delay (fallback)
    setTimeout(() => {
        kpiValues.forEach(({ selector, target, suffix, decimals }) => {
            const el = document.querySelector(selector + ' .kpi-value') || document.querySelector(selector);
            if (el) animateCounter(el, target, suffix, decimals || 0);
        });
    }, 300);

    // ── Search bar live filter (UI feedback) ──────────────────────────
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            // Highlight matching nav items
            navItems.forEach(item => {
                const text = item.querySelector('span')?.textContent.toLowerCase() || '';
                if (query && text.includes(query)) {
                    item.style.background = 'rgba(34,197,94,0.15)';
                    item.style.color = '#22c55e';
                } else {
                    item.style.background = '';
                    item.style.color = '';
                }
            });
            if (!query) {
                navItems.forEach(item => {
                    item.style.background = '';
                    item.style.color = '';
                    document.querySelector('.nav-item.active')?.style && null;
                });
            }
        });
    }

});

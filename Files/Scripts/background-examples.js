// Simple matrix rain effect for the canvas example
(function () {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = 0, height = 0;
    let fontSize = 16;
    let columns = 0;
    let drops = [];
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function setupCanvas() {
        const rect = canvas.getBoundingClientRect();
        width = Math.max(300, Math.floor(rect.width));
        height = Math.max(150, Math.floor(rect.height));
        canvas.width = width;
        canvas.height = height;
        fontSize = Math.max(12, Math.floor(Math.min(20, width / 60)));
        columns = Math.floor(width / fontSize);
        drops = new Array(columns).fill(1).map(() => Math.floor(Math.random() * height / fontSize));
        ctx.font = fontSize + 'px monospace';
    }

    function draw() {
        if (reduced) return; // do nothing when motion reduced
        // translucent black background to fade out old chars
        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#00ff41';
        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    let rafId = null;
    function loop() {
        draw();
        rafId = requestAnimationFrame(loop);
    }

    function start() {
        cancelAnimationFrame(rafId);
        setupCanvas();
        if (!reduced) loop();
    }

    window.addEventListener('resize', () => {
        // debounce quickly
        clearTimeout(window._matrixResize);
        window._matrixResize = setTimeout(() => {
            setupCanvas();
        }, 120);
    });

    // start when DOM ready
    document.addEventListener('DOMContentLoaded', start);
})();

/* Interactive background: pointer tracking + click ripples */
(function () {
    const section = document.getElementById('interactiveBg');
    if (!section) return;

    // Throttle pointer updates with rAF
    let raf = null;
    function onPointerMove(e) {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            const rect = section.getBoundingClientRect();
            // support touch and mouse events
            const clientX = e.clientX ?? (e.touches && e.touches[0] && e.touches[0].clientX) ?? (rect.left + rect.width / 2);
            const clientY = e.clientY ?? (e.touches && e.touches[0] && e.touches[0].clientY) ?? (rect.top + rect.height / 2);
            const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
            const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
            const px = (x / rect.width) * 100;
            const py = (y / rect.height) * 100;
            section.style.setProperty('--mx', px + '%');
            section.style.setProperty('--my', py + '%');
        });
    }

    function createRipple(clientX, clientY) {
        const rect = section.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const size = Math.max(rect.width, rect.height) * 0.3;
        const el = document.createElement('span');
        el.className = 'ripple';
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        section.appendChild(el);
        // remove after animation
        el.addEventListener('animationend', () => el.remove());
        setTimeout(() => { try { el.remove() } catch (e) { } }, 900);
    }

    // pointer events
    section.addEventListener('pointermove', onPointerMove, { passive: true });
    section.addEventListener('pointerdown', (ev) => {
        createRipple(ev.clientX, ev.clientY);
    });

    // touch fallback
    section.addEventListener('touchstart', (ev) => {
        if (ev.touches && ev.touches[0]) createRipple(ev.touches[0].clientX, ev.touches[0].clientY);
    }, { passive: true });

    // reset on leave
    section.addEventListener('pointerleave', () => {
        section.style.setProperty('--mx', '50%');
        section.style.setProperty('--my', '50%');
    });
})();

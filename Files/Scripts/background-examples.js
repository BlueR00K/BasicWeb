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

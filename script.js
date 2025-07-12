document.addEventListener('DOMContentLoaded', () => {
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');

    // 1. İsteğiniz üzerine şifre güncellendi.
    const correctPassword = 'yemlee.3438';

    const checkPassword = () => {
        if (passwordInput.value === correctPassword) {
            passwordOverlay.style.opacity = '0';
            setTimeout(() => {
                passwordOverlay.style.display = 'none';
                // 2. Ana içeriği gösteren 'hidden' class'ı kaldırıldı.
                mainContent.classList.remove('hidden');
                // 3. Animasyonları başlatan fonksiyon çağrıldı.
                initAnimations();
            }, 500); // Animasyonun bitmesi için yarım saniye bekle
        } else {
            errorMessage.style.display = 'block';
            passwordInput.focus();
        }
    };

    passwordSubmit.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') checkPassword();
    });

    // Sayfa ilk açıldığında şifre kutusuna odaklan
    passwordInput.focus();

    function initAnimations() {
        // Arka Plan Animasyonu (particles.js)
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                "particles": {
                    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                    "color": { "value": "#4ade80" },
                    "shape": { "type": "circle" },
                    "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
                    "size": { "value": 3, "random": true },
                    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
                    "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
                    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
                },
                "retina_detect": true
            });
        }

        // Kaydırma Animasyonları (Intersection Observer)
        const revealElements = document.querySelectorAll('.scroll-reveal');
        const observerOptions = {
            root: null,
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Animasyon bir kere çalıştıktan sonra gözlemciyi durdurabiliriz.
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);
        revealElements.forEach(el => observer.observe(el));

        // Grafik Animasyonu
        const chart = document.getElementById('chart');
        if (chart) {
            const chartObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    document.getElementById('yemlee-bar').style.width = '60%';
                    chartObserver.unobserve(chart); // Animasyon bir kere çalışsın
                }
            }, { threshold: 0.8 });
            chartObserver.observe(chart);
        }
    }
});

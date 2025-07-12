document.addEventListener('DOMContentLoaded', () => {
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');

    const checkPassword = () => {
        const correctPassword = 'yemle.3438';
        if (passwordInput.value === correctPassword) {
            passwordOverlay.style.opacity = '0';
            setTimeout(() => {
                passwordOverlay.style.display = 'none';
                mainContent.style.display = 'block';
                // Şifre doğruysa animasyonları başlat
                initAnimations();
            }, 500);
        } else {
            errorMessage.style.display = 'block';
            passwordInput.focus();
        }
    };

    passwordSubmit.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') checkPassword();
    });
    passwordInput.focus();

    function initAnimations() {
        // Particles.js Arka Plan Animasyonu
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#4ade80" },
                "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
                "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 3, "random": true, "anim": { "enable": false } },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });

        // Scroll Reveal Animasyonları
        const revealElements = document.querySelectorAll('.scroll-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));

        // Grafik Animasyonu
        const chart = document.getElementById('chart');
        const yemleeBar = document.getElementById('yemlee-bar');
        const chartObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                yemleeBar.style.width = '60%';
                chartObserver.unobserve(chart); // Animasyon bir kere çalışsın
            }
        }, { threshold: 0.8 });
        
        if(chart) {
            chartObserver.observe(chart);
        }
    }
});

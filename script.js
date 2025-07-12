document.addEventListener('DOMContentLoaded', () => {
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');
    const correctPassword = 'yemlee.3438';

    const checkPassword = () => {
        if (passwordInput.value === correctPassword) {
            gsap.to(passwordOverlay, { opacity: 0, duration: 0.5, onComplete: () => {
                passwordOverlay.style.display = 'none';
                mainContent.classList.remove('hidden');
                initAnimations();
            }});
        } else {
            errorMessage.style.display = 'block';
            passwordInput.focus();
        }
    };

    passwordSubmit.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkPassword(); });
    passwordInput.focus();

    function initAnimations() {
        // Particles.js
        particlesJS('particles-js', {
            particles: { number: { value: 100, density: { enable: true, value_area: 800 } }, color: { value: '#4ade80' }, shape: { type: 'circle' }, opacity: { value: 0.6, random: true }, size: { value: 4, random: true }, line_linked: { enable: true, distance: 150, color: '#4ade80', opacity: 0.3 }, move: { enable: true, speed: 2 } },
            interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } } }
        });

        // GSAP Animations
        gsap.from('.animate-fade-in', { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
        gsap.from('.animate-fade-in-delay', { opacity: 0, y: 50, duration: 1, delay: 0.5 });

        // Charts
        const ahmetChart = new Chart(document.getElementById('ahmetChart'), {
            type: 'bar',
            data: { labels: ['Google Erişim', 'Yemlee Erişim'], datasets: [{ label: 'Kullanıcı Erişimi', data: [100, 130], backgroundColor: ['#ef4444', '#4ade80'] }] },
            options: { scales: { y: { beginAtZero: true } }, plugins: { legend: { display: false } } }
        });

        const ayseChart = new Chart(document.getElementById('ayseChart'), {
            type: 'line',
            data: { labels: ['Arama', 'Düzenleme', 'Paylaşım'], datasets: [{ label: 'Süre (Dakika)', data: [5, 3, 2], borderColor: '#4ade80', fill: false }] },
            options: { scales: { y: { beginAtZero: true } } }
        });
    }
});

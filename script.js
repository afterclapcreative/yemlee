document.addEventListener('DOMContentLoaded', () => {
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');
    const correctPassword = 'yemlee.3438';

    const checkPassword = () => {
        errorMessage.style.display = 'none'; // Hide error message first
        if (passwordInput.value === correctPassword) {
            // Use vanilla JavaScript animation instead of GSAP
            passwordOverlay.style.transition = 'opacity 0.5s ease';
            passwordOverlay.style.opacity = '0';
            setTimeout(() => {
                passwordOverlay.style.display = 'none';
                mainContent.classList.remove('hidden');
                initAnimations();
            }, 500);
        } else {
            errorMessage.style.display = 'block';
            passwordInput.focus();
        }
    };

    passwordSubmit.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkPassword(); });
    passwordInput.focus();

    function initAnimations() {
        // Particles.js - check if particles library is loaded
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: { number: { value: 100, density: { enable: true, value_area: 800 } }, color: { value: '#4ade80' }, shape: { type: 'circle' }, opacity: { value: 0.6, random: true }, size: { value: 4, random: true }, line_linked: { enable: true, distance: 150, color: '#4ade80', opacity: 0.3 }, move: { enable: true, speed: 2 } },
                interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } } }
            });
        }

        // GSAP Animations - check if GSAP is loaded
        if (typeof gsap !== 'undefined') {
            gsap.from('.animate-fade-in', { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
            gsap.from('.animate-fade-in-delay', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
        }

        // Initialize charts with loading states
        initCharts();
    }

    function initCharts() {
        // Simulate loading time and then show charts
        setTimeout(() => {
            if (typeof Chart !== 'undefined') {
                // Hide loading spinners
                const ahmetLoading = document.getElementById('ahmetChartLoading');
                const ayseLoading = document.getElementById('ayseChartLoading');
                
                if (ahmetLoading) ahmetLoading.style.display = 'none';
                if (ayseLoading) ayseLoading.style.display = 'none';

                // Show charts
                const ahmetCanvas = document.getElementById('ahmetChart');
                const ayseCanvas = document.getElementById('ayseChart');
                
                if (ahmetCanvas) ahmetCanvas.style.display = 'block';
                if (ayseCanvas) ayseCanvas.style.display = 'block';

                // Create Ahmet's chart
                const ahmetChart = new Chart(ahmetCanvas, {
                    type: 'bar',
                    data: { 
                        labels: ['Google Ads', 'Yemlee AI'], 
                        datasets: [
                            { 
                                label: 'Erişim (Milyon)', 
                                data: [100, 130], 
                                backgroundColor: ['#ef4444', '#4ade80'],
                                borderColor: ['#dc2626', '#22c55e'],
                                borderWidth: 2
                            },
                            {
                                label: 'Maliyet Verimliliği (%)',
                                data: [100, 125],
                                backgroundColor: ['#f59e0b', '#10b981'],
                                borderColor: ['#d97706', '#059669'],
                                borderWidth: 2
                            }
                        ]
                    },
                    options: { 
                        responsive: true,
                        scales: { 
                            y: { 
                                beginAtZero: true,
                                ticks: { color: '#9ca3af' },
                                grid: { color: '#374151' }
                            },
                            x: {
                                ticks: { color: '#9ca3af' },
                                grid: { color: '#374151' }
                            }
                        },
                        plugins: { 
                            legend: { 
                                display: true,
                                labels: { color: '#9ca3af' }
                            }
                        }
                    }
                });

                // Create Ayşe's chart
                const ayseChart = new Chart(ayseCanvas, {
                    type: 'line',
                    data: { 
                        labels: ['Arama', 'Düzenleme', 'Paylaşım'], 
                        datasets: [
                            { 
                                label: 'Geleneksel Yöntem (Dakika)', 
                                data: [15, 30, 20], 
                                borderColor: '#ef4444',
                                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                fill: true,
                                tension: 0.4
                            },
                            {
                                label: 'Yemlee AI (Dakika)',
                                data: [2, 3, 2],
                                borderColor: '#4ade80',
                                backgroundColor: 'rgba(74, 222, 128, 0.1)',
                                fill: true,
                                tension: 0.4
                            }
                        ]
                    },
                    options: { 
                        responsive: true,
                        scales: { 
                            y: { 
                                beginAtZero: true,
                                ticks: { color: '#9ca3af' },
                                grid: { color: '#374151' }
                            },
                            x: {
                                ticks: { color: '#9ca3af' },
                                grid: { color: '#374151' }
                            }
                        },
                        plugins: {
                            legend: {
                                display: true,
                                labels: { color: '#9ca3af' }
                            }
                        }
                    }
                });
            } else {
                // If Chart.js is not loaded, hide loading and show fallback
                const ahmetLoading = document.getElementById('ahmetChartLoading');
                const ayseLoading = document.getElementById('ayseChartLoading');
                
                if (ahmetLoading) {
                    ahmetLoading.innerHTML = '<p class="text-gray-400">Grafik yükleniyor...</p>';
                }
                if (ayseLoading) {
                    ayseLoading.innerHTML = '<p class="text-gray-400">Grafik yükleniyor...</p>';
                }
            }
        }, 1500); // 1.5 second delay for loading effect
    }
});

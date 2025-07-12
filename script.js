document.addEventListener('DOMContentLoaded', () => {
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');

    // Şifreyi kontrol etme fonksiyonu
    const checkPassword = () => {
        // İstenen şifre: yemle.3438
        const correctPassword = 'yemle.3438';
        if (passwordInput.value === correctPassword) {
            // Şifre doğruysa, overlay'i yavaşça gizle ve ana içeriği göster
            passwordOverlay.style.opacity = '0';
            setTimeout(() => {
                passwordOverlay.style.display = 'none';
                mainContent.style.display = 'block';
            }, 500); // Opaklık animasyonuyla senkronize
        } else {
            // Şifre yanlışsa hata mesajı göster
            errorMessage.style.display = 'block';
            passwordInput.focus();
        }
    };

    // Butona tıklandığında şifreyi kontrol et
    passwordSubmit.addEventListener('click', checkPassword);

    // Enter tuşuna basıldığında şifreyi kontrol et
    passwordInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });

    // Sayfa yüklendiğinde input'a odaklan
    passwordInput.focus();
});

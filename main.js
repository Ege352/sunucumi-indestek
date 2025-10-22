// Form gönderiminde loading efekti
document.getElementById('complaintForm').addEventListener('submit', function(e) {
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.innerHTML = 'Gönderiliyor...';
    submitBtn.classList.add('loading');
    
    // 1 saniye sonra eski haline getir (gerçek uygulamada API cevabını beklerdin)
    setTimeout(() => {
        submitBtn.innerHTML = 'Şikayeti Gönder';
        submitBtn.classList.remove('loading');
        
        // Başarı mesajı göster
        showAlert('Şikayetiniz başarıyla gönderildi!', 'success');
    }, 1000);
});

// Alert göster fonksiyonu
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert-${type}`;
    alert.textContent = message;
    
    document.querySelector('.container').prepend(alert);
    
    // 3 saniye sonra kaldır
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Enter tuşu ile hızlı gönderim
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        const activeForm = document.querySelector('form:not(.hidden)');
        if (activeForm) {
            activeForm.dispatchEvent(new Event('submit'));
        }
    }
});
// 1. Navbar Değişimi: Sayfa kaydırıldığında menüye gölge ve renk ekler
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#ffffff';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
    }
});

// 2. Form Kontrolü: Boş form gönderilmesini engeller ve kullanıcıya mesaj verir
const contactForm = document.getElementById('appointment-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Sayfanın yenilenmesini engeller
        
        // Basit bir başarı mesajı (Daha profesyonel durur)
        const btn = document.querySelector('.btn-submit');
        btn.innerText = 'Mesajınız Gönderiliyor...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Mesajınız başarıyla iletildi. En kısa sürede size döneceğiz.');
            contactForm.reset();
            btn.innerText = 'Randevu Talebi Gönder';
            btn.disabled = false;
        }, 2000);
    });
}

// 3. Yumuşak Geçiş (Smooth Scroll) Destekleyici
// Bazı eski tarayıcılar için JS ile destek veriyoruz
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
 document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Sayfanın yenilenmesini engeller

            const btn = this.querySelector('.btn-submit');
            const originalText = btn.innerText;

            // Gönderiliyor efekti
            btn.innerText = "Gönderiliyor...";
            btn.disabled = true;
            btn.style.opacity = "0.7";

            // Simüle edilmiş bir bekleme süresi (1.5 saniye)
            setTimeout(() => {
                alert("Teşekkürler! Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız.");
                
                form.reset(); // Formu temizle
                btn.innerText = originalText;
                btn.disabled = false;
                btn.style.opacity = "1";
            }, 1500);
        });
    }
}); 
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


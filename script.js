document.addEventListener('DOMContentLoaded', function() {
    // تغيير خلفية قسم البطل عند التمرير
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            heroSection.style.backgroundPosition = `${x * 30}px ${y * 30}px`;
        });

        heroSection.addEventListener('mouseout', function() {
            heroSection.style.backgroundPosition = 'center';
        });
    }

    // إظهار/إخفاء تفاصيل إضافية لبطاقات الحصص
    const classCards = document.querySelectorAll('#classes .class-card');
    classCards.forEach(card => {
        const details = card.querySelector('p');
        const originalText = details.textContent;
        const moreText = ' ... المزيد';
        const lessText = ' ... أقل';
        const fullText = originalText + ' [نص تفصيلي إضافي للحصة]'; // يمكنك استبدال هذا النص

        if (originalText.length > 50) {
            details.textContent = originalText.substring(0, 50) + moreText;
            card.addEventListener('click', function() {
                if (details.textContent.includes(moreText)) {
                    details.textContent = fullText + lessText;
                } else if (details.textContent.includes(lessText)) {
                    details.textContent = originalText.substring(0, 50) + moreText;
                }
            });
        }
    });

    // تأثير اهتزاز بسيط للأزرار عند النقر
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('shake');
            setTimeout(() => {
                this.classList.remove('shake');
            }, 500);
        });
    });
});

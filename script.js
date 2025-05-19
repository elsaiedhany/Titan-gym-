document.addEventListener('DOMContentLoaded', function() {
    const subscribeButtons = document.querySelectorAll('#subscription-plans .plan .button');

    subscribeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // لمنع الانتقال الافتراضي للرابط
            const planName = this.parentNode.querySelector('h3').textContent;
            alert(`تم النقر على زر الاشتراك لخطة: ${planName}`);
            // يمكنك هنا إضافة المزيد من التعليمات البرمجية لمعالجة الاشتراك
        });
    });
});

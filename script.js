// JavaScript لإظهار رسالة عند الضغط (للتوضيح فقط)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const menuItem = event.target.closest('.menu-item');
        const itemName = menuItem.querySelector('.item-details h3').textContent;
        alert(`تم إضافة "${itemName}" للسلة (هذه وظيفة تجريبية للتوضيح).`);
        // في الموقع الحقيقي، هذا الزر سيقوم بإضافة المنتج لبيانات سلة التسوق الفعلية
        // ويتطلب برمجة JavaScript متقدمة وربط مع الخادم.
    });
});

// تحديث السنة في الفوتر تلقائياً
const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// يمكن إضافة JavaScript هنا للتحكم في اختيار الفرع وتأثيره على العرض (إذا لزم الأمر)
const branchSelector = document.getElementById('branch');
if (branchSelector) {
    branchSelector.addEventListener('change', function() {
        console.log('تم اختيار الفرع:', this.value);
        // هنا يمكنك إضافة منطق لتغيير المنيو المعروض أو الأسعار بناءً على الفرع
        // مثال: alert('سيتم عرض منيو فرع ' + this.options[this.selectedIndex].text);
    });
}

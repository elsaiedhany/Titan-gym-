// JavaScript لإظهار رسالة عند الضغط (للتوضيح فقط)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const menuItemContainer = event.target.closest('.menu-item');
        if (!menuItemContainer) return; // حماية إضافية

        const itemNameElement = menuItemContainer.querySelector('.item-details h3');
        const itemName = itemNameElement ? itemNameElement.textContent : 'منتج غير معروف';
        
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
        // مثال: alert('سيتم عرض منيو فرع ' + this.options[this.selectedIndex].text);
        // هنا يمكنك إضافة منطق برمجي لتغيير المنيو المعروض ديناميكياً أو أسعار معينة بناءً على الفرع المختار
        // هذا قد يتطلب جلب بيانات مختلفة من الخادم أو إظهار/إخفاء أقسام من الصفحة
    });
}

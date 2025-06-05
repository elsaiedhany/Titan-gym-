document.addEventListener('DOMContentLoaded', () => {
    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('loaded');
                // تفعيل أنيميشن الهيرو بعد تحميل البريلودر
                const heroSection = document.querySelector('.hero-section');
                if (heroSection) {
                    // يمكنك إضافة كلاس 'loaded' هنا إذا كانت أنيميشنات الهيرو تعتمد عليه
                    // أو دع أنيميشن CSS يبدأ تلقائياً كما هو مُعرَّف الآن
                    const heroElementsToAnimate = heroSection.querySelectorAll('.animate-on-scroll');
                    heroElementsToAnimate.forEach(el => el.classList.add('is-visible')); // إظهار عناصر الهيرو مباشرة
                }
            }, 500);
        });
    }

    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top-btn');
    if (backToTopButton) { /* ... (كودك الأصلي) ... */ }

    // --- Scroll Animations (Intersection Observer - مجمع ومعدل) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-category-box');
    if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');

                    // لتأثير الأنيميشن المتتالي لعناصر القائمة داخل الفئة
                    if (entry.target.classList.contains('menu-category')) {
                        const menuItems = entry.target.querySelectorAll('.menu-item');
                        menuItems.forEach((item, index) => {
                            // تأكد أن CSS لـ .menu-item لديه animation-name, duration, etc.
                            // وأن opacity:0 والـ transform المبدئي مُعرَّف
                            // الـ animation-delay سيطبق هنا
                            item.style.animationDelay = `${index * 0.08}s`;
                        });
                    }
                    // يمكنك إضافة منطق مشابه لأقسام أخرى إذا احتاجت تأخير ديناميكي
                    // مثل .testimonial-card أو .gallery-item إذا أردت تحكم أدق من CSS nth-child
                    if (entry.target.classList.contains('testimonials-grid')) {
                        const cards = entry.target.querySelectorAll('.testimonial-card');
                        cards.forEach((card, index) => { card.style.transitionDelay = `${index * 0.12}s`; });
                    }
                    if (entry.target.classList.contains('gallery-grid')) {
                        const items = entry.target.querySelectorAll('.gallery-item');
                        items.forEach((item, index) => { item.style.transitionDelay = `${index * 0.07}s`; });
                    }
                     if (entry.target.classList.contains('featured-categories-grid')) { // لمربعات الفئات
                        const boxes = entry.target.querySelectorAll('.animate-category-box');
                        boxes.forEach((box, index) => { box.style.transitionDelay = `${index * 0.15}s`; });
                    }


                    if (!entry.target.classList.contains('menu-category') && !entry.target.classList.contains('testimonials-grid') && !entry.target.classList.contains('gallery-grid') && !entry.target.classList.contains('featured-categories-grid') ) {
                         // لا توقف المراقبة عن الفئات الرئيسية التي تحتوي عناصر متتالية تحتاج للتأخير في كل مرة
                         // أو إذا أردت أن الأنيميشن يعمل مرة واحدة فقط، قم بإلغاء الشرط أعلاه
                         observerInstance.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.1 }); // يمكن تعديل threshold

        animatedElements.forEach(el => {
            // لا نراقب عناصر الهيرو هنا إذا كنا سنفعل أنيميشنها عند تحميل البريلودر
            if (!el.closest('.hero-section')) {
                 observer.observe(el);
            }
        });
    } else { // Fallback
        animatedElements.forEach(el => {
            if (!el.closest('.hero-section')) {
                el.classList.add('is-visible');
            }
        });
    }


    // ============================================================================
    // == هنا يجب أن تدرج كامل كود سلة المشتريات من ملف script.js الأصلي الخاص بك ==
    // == (الدوال addToCart, updateCartDisplayAndSave, renderCartItems, etc.)   ==
    // ============================================================================
    // const menuItemsElements = document.querySelectorAll('.menu-item');
    // const cartItemsContainer = document.getElementById('cart-items-container');
    // ... الخ ...


    // --- Show More / Show Less Functionality ---
    const categories = document.querySelectorAll('.menu-category');
    const initialItemsToShow = 4; // يمكنك تعديل هذا الرقم

    categories.forEach(category => {
        const menuItems = category.querySelectorAll('.menu-item');
        const showMoreButton = category.querySelector('.show-more-btn');

        if (menuItems.length > initialItemsToShow) {
            if (showMoreButton) showMoreButton.style.display = 'block';
            for (let i = initialItemsToShow; i < menuItems.length; i++) {
                if (menuItems[i]) menuItems[i].classList.add('item-hidden');
            }
            if (showMoreButton) {
                showMoreButton.addEventListener('click', function() {
                    const isCurrentlyExpanded = this.getAttribute('aria-expanded') === 'true';
                    // ... (أكمل باقي منطق "عرض المزيد/أقل" الذي أرسلته سابقاً) ...
                    if (!isCurrentlyExpanded) {
                        for (let i = initialItemsToShow; i < menuItems.length; i++) {
                           if (menuItems[i]) { 
                                menuItems[i].classList.remove('item-hidden');
                                // أنميشن بسيط لظهور العناصر (اختياري)
                                menuItems[i].style.opacity = '0';
                                menuItems[i].style.transform = 'translateY(10px)';
                                setTimeout(() => { 
                                    menuItems[i].style.opacity = '1';
                                    menuItems[i].style.transform = 'translateY(0)';
                                    menuItems[i].style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                                 }, 50 * (i - initialItemsToShow));
                            }
                        }
                        this.textContent = 'عرض أقل';
                        this.setAttribute('aria-expanded', 'true');
                    } else {
                        for (let i = initialItemsToShow; i < menuItems.length; i++) {
                            if (menuItems[i]) menuItems[i].classList.add('item-hidden');
                        }
                        this.textContent = 'عرض المزيد';
                        this.setAttribute('aria-expanded', 'false');
                        // اختياري: تمرير لأعلى القسم عند "عرض أقل"
                        // category.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                });
            }
        } else if (showMoreButton) {
            showMoreButton.style.display = 'none';
        }
    });

    // --- Copyright Year (من كودك الأصلي) ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) { /* ... (كودك الأصلي) ... */ }

    // --- Lightbox Initialization (إذا قررت استخدام مكتبة Lightbox) ---
    // مثال:
    // if (typeof lightbox !== 'undefined') {
    //     lightbox.option({ /* ... خيارات Lightbox ... */ });
    // }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (menuToggle && mainNavUl) {
        menuToggle.addEventListener('click', function() {
            mainNavUl.classList.toggle('active');
            const isExpanded = mainNavUl.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            if (isExpanded) {
                menuToggle.textContent = '✕'; // Close icon
                menuToggle.setAttribute('aria-label', 'إغلاق القائمة');
            } else {
                menuToggle.textContent = '☰'; // Menu icon
                menuToggle.setAttribute('aria-label', 'فتح القائمة');
            }
        });

        // Close menu when a link is clicked (for single-page navigation)
        document.querySelectorAll('.main-nav ul a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNavUl.classList.contains('active')) {
                    mainNavUl.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.textContent = '☰';
                    menuToggle.setAttribute('aria-label', 'فتح القائمة');
                }
            });
        });
    }

    // Update current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Basic Contact Form Submission (Placeholder for actual submission logic)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Basic validation (example)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'يرجى ملء جميع الحقول المطلوبة.';
                formMessage.className = 'form-message error'; // Add error class
                return;
            }

            // Simulate form submission
            formMessage.textContent = 'شكراً لك! تم إرسال رسالتك بنجاح. (هذه رسالة تجريبية)';
            formMessage.className = 'form-message success'; // Add success class
            contactForm.reset(); // Clear the form

            // IMPORTANT: For a real website, you would send the data to a server here
            // using fetch() or XMLHttpRequest.
            // Example:
            // const formData = new FormData(contactForm);
            // fetch('your-server-endpoint', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            //     formMessage.textContent = 'تم إرسال رسالتك بنجاح!';
            //     formMessage.className = 'form-message success';
            //     contactForm.reset();
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            //     formMessage.textContent = 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.';
            //     formMessage.className = 'form-message error';
            // });
        });
    }

    // Optional: Active link highlighting based on scroll position
    // This is a bit more complex and can be added later if needed.
    // It involves checking the scroll position against the position of each section.

});

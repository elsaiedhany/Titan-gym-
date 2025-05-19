document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optional: Change burger icon to X and back
            const icon = navToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = navToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Optional: Active link highlighting based on scroll (simple version)
    // You might want a more robust solution for complex sites
    const sections = document.querySelectorAll('main section');
    const navLi = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust offset if you have a fixed header
            if (pageYOffset >= (sectionTop - sectionHeight / 3 - 80)) { // 80 is approx header height
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
        // Ensure "الرئيسية" is active when at the very top
        if (window.pageYOffset < sections[0].offsetTop - 80) {
             navLi.forEach(a => a.classList.remove('active'));
             const homeLink = document.querySelector('.nav-links a[href="#hero"]');
             if (homeLink) homeLink.classList.add('active');
        }
    });


    // Smooth scrolling for anchor links (if html scroll-behavior is not enough)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if (targetElement) {
    //             // Consider fixed header height if you have one
    //             const headerOffset = 80; // Example: height of your fixed header
    //             const elementPosition = targetElement.getBoundingClientRect().top;
    //             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    //             window.scrollTo({
    //                 top: offsetPosition,
    //                 behavior: "smooth"
    //             });
    //         }
    //     });
    // });

    // Simple Contact Form Submission (Frontend Only - Prevents actual submission)
    // For a real form, you'd need backend code.
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual submission for this demo
            alert('شكراً لك! تم استلام رسالتك (هذه مجرد محاكاة).');
            // Here you would typically send data to a server using fetch() or XMLHttpRequest
            contactForm.reset(); // Clear the form
        });
    }

});

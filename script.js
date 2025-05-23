document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // Target <html> for class

    // Function to set theme and save preference
    function setTheme(theme) {
        if (theme === 'light') {
            htmlElement.classList.remove('dark-mode');
            htmlElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else { // Default to dark
            htmlElement.classList.remove('light-mode');
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme');
    // Ensure default is dark if no theme is saved or if saved theme is invalid
    if (savedTheme === 'light') {
        setTheme('light');
    } else {
        setTheme('dark'); // Default to dark if no theme or theme is 'dark' or invalid
    }
    // Apply the class on page load to ensure no flicker from default browser to themed.
    // The class is already on the <html> tag in the HTML, this JS just confirms it.


    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark-mode')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }


    // Update current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Placeholder for "Add to cart" functionality
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuItem = this.closest('.menu-item');
            if (menuItem) {
                const itemNameElement = menuItem.querySelector('h4');
                if (itemNameElement) {
                    const itemName = itemNameElement.textContent;
                    alert(`"${itemName}" تم إضافته للسلة (وظيفة تجريببية).`);
                    // Future: Implement actual cart logic here
                }
            }
        });
    });
});

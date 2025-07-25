document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");
    const image = document.querySelector(".img");

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

    // Apply Zoom-Out Effect on Page Load
    setTimeout(() => {
        image.classList.remove("zoom-out");
    }, 1000);
});



document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate');
    
    // Function to check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight * 0.75) &&
            rect.bottom >= (window.innerHeight * 0.25)
        );
    };
    
    // Function to handle scroll events
    const handleScroll = () => {
        animatedElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    };
    
    // Initial check
    handleScroll();
    
    // Throttle scroll events for performance
    let isScrolling;
    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(handleScroll, 50);
    }, { passive: true });
});



// scrolled
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
         if (window.scrollY > 50) {
       navbar.classList.add("scrolled");
} else {
   navbar.classList.remove("scrolled");
}
});


// product

 // Filter functionality
 document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        
        // Get category to show
        const category = btn.dataset.category;
        
        // Hide all product sections
        document.querySelectorAll('.product-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected category
        document.getElementById(`${category}-products`).classList.add('active');
    });
});

// Wishlist toggle
document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            this.style.color = '#d23c3c';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            this.style.color = '#ccc';
        }
    });
});
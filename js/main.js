/**
 * Main JavaScript file for Portfolio Website
 * Handles core functionality including navigation, smooth scrolling, and dark mode
 */

// Global variables
let isDarkMode = false;
let isMobileMenuOpen = false;

// DOM elements
const navigation = document.getElementById('navigation');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const darkModeToggle = document.getElementById('dark-mode-toggle');

/**
 * Initialize the application
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize all app functionality
 */
function initializeApp() {
    // Initialize dark mode
    initializeDarkMode();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize navigation highlighting
    initializeNavigationHighlighting();
    
    console.log('Portfolio website initialized successfully');
}

/**
 * Initialize dark mode functionality
 */
function initializeDarkMode() {
    // Check for saved dark mode preference or default to system preference
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else if (savedTheme === 'light') {
        disableDarkMode();
    } else {
        // No saved preference - follow system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
    
    // Listen for system theme changes (only if user hasn't set a preference)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const currentTheme = localStorage.getItem('darkMode');
        // Only auto-switch if user hasn't manually set a preference
        if (!currentTheme) {
            if (e.matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        }
    });
}

/**
 * Enable dark mode
 */
function enableDarkMode() {
    if (isDarkMode) return; // Prevent redundant updates
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    isDarkMode = true;
    updateDarkModeIcons();
}

/**
 * Disable dark mode
 */
function disableDarkMode() {
    if (!isDarkMode) return; // Prevent redundant updates
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
    isDarkMode = false;
    updateDarkModeIcons();
}

/**
 * Update dark mode toggle button icons
 */
function updateDarkModeIcons() {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (isDarkMode) {
        // Dark mode is ON - show sun icon (to switch to light)
        if (sunIcon) {
            sunIcon.classList.remove('hidden');
            sunIcon.classList.add('opacity-100');
        }
        if (moonIcon) {
            moonIcon.classList.add('hidden');
            moonIcon.classList.remove('opacity-100');
        }
    } else {
        // Light mode is ON - show moon icon (to switch to dark)
        if (sunIcon) {
            sunIcon.classList.add('hidden');
            sunIcon.classList.remove('opacity-100');
        }
        if (moonIcon) {
            moonIcon.classList.remove('hidden');
            moonIcon.classList.add('opacity-100');
        }
    }
}

/**
 * Initialize mobile menu functionality
 */
function initializeMobileMenu() {
    if (!mobileMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    document.addEventListener('click', (e) => {
        if (isMobileMenuOpen && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMobileMenuOpen) {
            closeMobileMenu();
        }
    });
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    if (isMobileMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

/**
 * Open mobile menu
 */
function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.getElementById('menu-icon')?.classList.add('hidden');
    document.getElementById('close-icon')?.classList.remove('hidden');
    isMobileMenuOpen = true;
    document.body.style.overflow = 'hidden';
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.getElementById('menu-icon')?.classList.remove('hidden');
    document.getElementById('close-icon')?.classList.add('hidden');
    isMobileMenuOpen = false;
    document.body.style.overflow = '';
}

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (isDarkMode) {
                // Currently dark, switch to light
                localStorage.setItem('darkMode', 'light');
                disableDarkMode();
            } else {
                // Currently light, switch to dark
                localStorage.setItem('darkMode', 'dark');
                enableDarkMode();
            }
        });
    }
    
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', throttle(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navigation?.classList.add('bg-white/95', 'dark:bg-dark-900/95');
        } else {
            navigation?.classList.remove('bg-white/95', 'dark:bg-dark-900/95');
        }
        
        lastScrollY = currentScrollY;
    }, 100));
}

/**
 * Initialize smooth scrolling
 */
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

/**
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} duration - Duration of scroll in milliseconds
 */
function scrollToSection(sectionId, duration = 1200) {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    
    if (Math.abs(distance) < 10) return;
    
    const startTime = performance.now();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        duration = 100;
    }
    
    function animation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeInOut = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        window.scrollTo(0, startPosition + distance * easeInOut);
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
    if (isMobileMenuOpen) {
        closeMobileMenu();
    }
}

/**
 * Initialize navigation highlighting based on scroll position
 */
function initializeNavigationHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-primary-600', 'dark:text-primary-400');
                    link.classList.add('text-dark-600', 'dark:text-dark-300');
                });
                
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.remove('text-dark-600', 'dark:text-dark-300');
                    activeLink.classList.add('text-primary-600', 'dark:text-primary-400');
                }
            }
        });
    }
    
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
    updateActiveNavLink();
}

/**
 * Utility function to debounce function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility function to throttle function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Handle keyboard navigation
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && e.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.focus();
        }
    }
    
    if (e.key === 'Escape') {
        const offcanvas = document.getElementById('work-offcanvas');
        if (offcanvas && !offcanvas.classList.contains('hidden')) {
            window.dispatchEvent(new CustomEvent('closeOffcanvas'));
        }
    }
});

/**
 * Handle window resize
 */
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        closeMobileMenu();
    }
}, 250));

/**
 * Handle page visibility change
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.classList.add('page-hidden');
    } else {
        document.body.classList.remove('page-hidden');
    }
});

// Export functions for use in other modules
window.scrollToSection = scrollToSection;
window.portfolioUtils = {
    debounce,
    throttle,
    scrollToSection
};
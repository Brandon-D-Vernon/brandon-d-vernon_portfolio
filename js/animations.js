/**
 * Animation system for Portfolio Website
 * Handles scroll-triggered animations and interactive effects
 */

// Animation configuration
const animationConfig = {
    duration: 600,
    delay: 100,
    easing: 'ease-out',
    threshold: 0.2, // Increased for earlier trigger
    rootMargin: '0px 0px -10% 0px' // Adjusted for smoother entry
};

// Animation types
const animationTypes = {
    fadeInUp: 'animate-fade-in-up',
    fadeInLeft: 'animate-fade-in-left',
    fadeInRight: 'animate-fade-in-right',
    fadeIn: 'animate-fade-in',
    slideInLeft: 'animate-slide-in-left',
    slideInRight: 'animate-slide-in-right',
    scaleIn: 'animate-scale-in',
    bounceIn: 'animate-bounce-in',
    slideUp: 'animate-slide-up'
};

// Global variables
let intersectionObserver = null;
let animatedElements = new Set();
let isReducedMotion = false;

/**
 * Initialize animation system
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
});

/**
 * Initialize animation system
 */
function initializeAnimations() {
    // Check for reduced motion preference
    isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Listen for reduced motion changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
        isReducedMotion = e.matches;
        if (isReducedMotion) {
            applyReducedMotionStyles();
        } else {
            enableAllAnimations();
        }
    });
    
    if (isReducedMotion) {
        applyReducedMotionStyles();
        return;
    }
    
    // Initialize intersection observer for scroll animations
    initializeIntersectionObserver();
    
    // Initialize skill tooltips
    initializeSkillTooltips();
    
    // Initialize hover effects
    initializeHoverEffects();
    
    // Initialize parallax effects
    initializeParallaxEffects();
    
    console.log('Animation system initialized');
}

/**
 * Initialize intersection observer for scroll animations
 */
function initializeIntersectionObserver() {
    const options = {
        threshold: animationConfig.threshold,
        rootMargin: animationConfig.rootMargin
    };
    
    intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animatedElements.has(entry.target)) {
                animateElement(entry.target);
                animatedElements.add(entry.target);
                intersectionObserver.unobserve(entry.target); // Unobserve after animation
            }
        });
    }, options);
    
    // Observe animatable elements
    const animatableElements = document.querySelectorAll(`
        .home-heading, .home-subtitle, .home-cta,
        .about-title, .about-image, .about-content,
        .work-title, .work-subtitle, .work-item,
        .skills-title, .skills-subtitle, .skill-category,
        .contact-title, .contact-subtitle, .contact-info, .contact-form
    `);
    
    animatableElements.forEach(element => {
        intersectionObserver.observe(element);
    });
}

/**
 * Animate element based on its class
 * @param {HTMLElement} element - Element to animate
 */
function animateElement(element) {
    // Remove initial styles
    element.classList.remove('opacity-0', 'transform', 'translate-y-8', 'translate-x-8', '-translate-x-8');
    
    // Determine animation type and delay
    let animationType = animationTypes.fadeInUp;
    let delay = 0;
    
    if (element.classList.contains('home-heading')) {
        animationType = animationTypes.fadeInUp;
        delay = 0;
    } else if (element.classList.contains('home-subtitle')) {
        animationType = animationTypes.fadeInUp;
        delay = 200;
    } else if (element.classList.contains('home-cta')) {
        animationType = animationTypes.bounceIn;
        delay = 400;
    } else if (element.classList.contains('about-title')) {
        animationType = animationTypes.fadeInUp;
        delay = 0;
    } else if (element.classList.contains('about-image')) {
        animationType = animationTypes.fadeInRight;
        delay = 200;
    } else if (element.classList.contains('about-content')) {
        animationType = animationTypes.fadeInLeft;
        delay = 400;
    } else if (element.classList.contains('work-title')) {
        animationType = animationTypes.fadeInUp;
        delay = 0;
    } else if (element.classList.contains('work-subtitle')) {
        animationType = animationTypes.fadeInUp;
        delay = 200;
    } else if (element.classList.contains('work-item')) {
        animationType = animationTypes.scaleIn;
        const items = document.querySelectorAll('.work-item');
        const index = Array.from(items).indexOf(element);
        delay = index * 150; // Increased delay for smoother stagger
    } else if (element.classList.contains('skills-title')) {
        animationType = animationTypes.fadeInUp;
        delay = 0;
    } else if (element.classList.contains('skills-subtitle')) {
        animationType = animationTypes.fadeInUp;
        delay = 200;
    } else if (element.classList.contains('skill-category')) {
        animationType = animationTypes.fadeInUp;
        const categories = document.querySelectorAll('.skill-category');
        const index = Array.from(categories).indexOf(element);
        delay = index * 150;
    } else if (element.classList.contains('contact-title')) {
        animationType = animationTypes.fadeInUp;
        delay = 0;
    } else if (element.classList.contains('contact-subtitle')) {
        animationType = animationTypes.fadeInUp;
        delay = 200;
    } else if (element.classList.contains('contact-info')) {
        animationType = animationTypes.fadeInLeft;
        delay = 400;
    } else if (element.classList.contains('contact-form')) {
        animationType = animationTypes.fadeInRight;
        delay = 600;
    }
    
    // Apply animation with delay
    setTimeout(() => {
        element.classList.add(animationType);
    }, delay);
}

/**
 * Initialize skill tooltips
 */
function initializeSkillTooltips() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const tooltipId = item.getAttribute('aria-describedby');
        const tooltip = tooltipId ? document.getElementById(tooltipId) : null;
        
        if (!tooltip) return;
        
        // Show tooltip on hover/focus
        item.addEventListener('mouseenter', () => showTooltip(tooltip));
        item.addEventListener('mouseleave', () => hideTooltip(tooltip));
        item.addEventListener('focus', () => showTooltip(tooltip));
        item.addEventListener('blur', () => hideTooltip(tooltip));
        
        // Keyboard support
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTooltip(tooltip);
            }
        });
    });
}

/**
 * Show tooltip
 * @param {HTMLElement} tooltip - Tooltip element
 */
function showTooltip(tooltip) {
    tooltip.classList.remove('hidden', 'opacity-0');
    tooltip.classList.add('opacity-100');
}

/**
 * Hide tooltip
 * @param {HTMLElement} tooltip - Tooltip element
 */
function hideTooltip(tooltip) {
    tooltip.classList.remove('opacity-100');
    tooltip.classList.add('opacity-0');
    
    setTimeout(() => {
        tooltip.classList.add('hidden');
    }, 200);
}

/**
 * Toggle tooltip
 * @param {HTMLElement} tooltip - Tooltip element
 */
function toggleTooltip(tooltip) {
    if (tooltip.classList.contains('hidden')) {
        showTooltip(tooltip);
    } else {
        hideTooltip(tooltip);
    }
}

/**
 * Initialize hover effects
 */
function initializeHoverEffects() {
    // Work item hover effects
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translate3d(0, -8px, 0)';
            item.style.transition = 'transform 0.3s ease-out';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translate3d(0, 0, 0)';
        });
    });
    
    // Skill item hover effects
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translate3d(8px, 0, 0)';
            item.style.transition = 'transform 0.2s ease-out';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translate3d(0, 0, 0)';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'transform 0.2s ease-out';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
}

/**
 * Initialize parallax effects
 */
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', throttle(requestTick, 16), { passive: true });
}

/**
 * Apply reduced motion styles
 */
function applyReducedMotionStyles() {
    const animatableElements = document.querySelectorAll(`
        .home-heading, .home-subtitle, .home-cta,
        .about-title, .about-image, .about-content,
        .work-title, .work-subtitle, .work-item,
        .skills-title, .skills-subtitle, .skill-category,
        .contact-title, .contact-subtitle, .contact-info, .contact-form
    `);
    
    animatableElements.forEach(element => {
        element.classList.remove('opacity-0', 'transform', 'translate-y-8', 'translate-x-8', '-translate-x-8');
        element.style.animation = 'none';
        element.style.transform = 'none';
        element.style.opacity = '1';
    });
}

/**
 * Enable all animations
 */
function enableAllAnimations() {
    const style = document.querySelector('style[data-reduced-motion]');
    if (style) {
        style.remove();
    }
}

/**
 * Animate counter (for statistics or numbers)
 * @param {HTMLElement} element - Element containing number
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

/**
 * Create typing animation effect
 * @param {HTMLElement} element - Element to animate
 * @param {string} text - Text to type
 * @param {number} speed - Typing speed in ms
 */
function typeText(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;
    
    const timer = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        
        if (i >= text.length) {
            clearInterval(timer);
        }
    }, speed);
}

/**
 * Create fade in animation for any element
 * @param {HTMLElement} element - Element to animate
 * @param {number} delay - Delay in ms
 */
function fadeIn(element, delay = 0) {
    element.style.opacity = '0';
    element.style.transition = `opacity ${animationConfig.duration}ms ${animationConfig.easing}`;
    
    setTimeout(() => {
        element.style.opacity = '1';
    }, delay);
}

/**
 * Create slide in animation for any element
 * @param {HTMLElement} element - Element to animate
 * @param {string} direction - Direction: 'left', 'right', 'up', 'down'
 * @param {number} delay - Delay in ms
 */
function slideIn(element, direction = 'up', delay = 0) {
    const transforms = {
        left: 'translateX(-100%)',
        right: 'translateX(100%)',
        up: 'translateY(100%)',
        down: 'translateY(-100%)'
    };
    
    element.style.transform = transforms[direction] || transforms.up;
    element.style.opacity = '0';
    element.style.transition = `transform ${animationConfig.duration}ms ${animationConfig.easing}, opacity ${animationConfig.duration}ms ${animationConfig.easing}`;
    
    setTimeout(() => {
        element.style.transform = 'translate3d(0, 0, 0)';
        element.style.opacity = '1';
    }, delay);
}

/**
 * Stagger animation for multiple elements
 * @param {NodeList|Array} elements - Elements to animate
 * @param {string} animationType - Type of animation
 * @param {number} staggerDelay - Delay between each element
 */
function staggerAnimation(elements, animationType = 'fadeInUp', staggerDelay = 150) {
    Array.from(elements).forEach((element, index) => {
        setTimeout(() => {
            animateElement(element);
        }, index * staggerDelay);
    });
}

/**
 * Create floating animation
 * @param {HTMLElement} element - Element to animate
 * @param {number} intensity - Animation intensity (1-10)
 */
function createFloatingAnimation(element, intensity = 3) {
    const keyframes = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-${intensity}px); }
        }
    `;
    
    if (!document.querySelector('#float-keyframes')) {
        const style = document.createElement('style');
        style.id = 'float-keyframes';
        style.textContent = keyframes;
        document.head.appendChild(style);
    }
    
    element.style.animation = `float 3s ease-in-out infinite`;
}

/**
 * Handle page visibility changes
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.classList.add('page-hidden');
    } else {
        document.body.classList.remove('page-hidden');
    }
});

// Export functions for use in other modules
window.animationUtils = {
    animateElement,
    animateCounter,
    typeText,
    fadeIn,
    slideIn,
    staggerAnimation,
    createFloatingAnimation
};
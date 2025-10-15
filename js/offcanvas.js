/**
 * Offcanvas functionality for Portfolio Website
 * Handles work project detail modal/offcanvas
 */

// Project data
const projects = {
    1: {
        title: "Home Garden 101",
        role: "Full-Stack Developer",
        responsibilities: [
            "Developed and maintained a custom WordPress theme optimized for speed and scalability.",
            "Integrated WooCommerce for seamless online service booking and payment processing.",
            "Built dynamic features using PHP and jQuery to enhance user interaction and responsiveness.",
            "Structured and optimized MySQL databases for efficient content and product data management.",
            "Ensured cross-browser compatibility and mobile responsiveness using Modernizr testing."
        ],
        technologies: ["WordPress", "MySQL", "jQuery", "PHP", "Modernizr", "WooCommerce"],
        image: "images/work-section/homegarden101.png",
        link: "https://homegardenone01.com"
    },
    2: {
        title: "Spektrum Magazine",
        role: "Full-Stack Developer, SEO Specialist",
        responsibilities: [
            "Designed and implemented a custom WordPress layout for digital magazine publication.",
            "Optimized site structure and metadata for improved SEO and higher organic reach.",
            "Developed user-friendly article submission and categorization workflows.",
            "Integrated e-commerce functionality for digital issue sales via WooCommerce.",
            "Improved site performance through caching, database optimization, and modern JS techniques."
        ],
        technologies: ["WordPress", "MySQL", "jQuery", "PHP", "Google analytics"],
        image: "images/work-section/spektrummagazine.jpg",
        link: "http://www.spektrummagazine.com"
    },
    3: {
        title: "Butter Bakery",
        role: "Front-End Developer, SEO Specialist",
        responsibilities: [
            "Customized Squarespace templates for a modern, visually appealing bakery brand presence.",
            "Implemented biometric authentication",
            "Optimized images and fonts to achieve faster page loading and higher Core Web Vitals scores.",
            "Ensured accessibility and responsiveness across all devices and browsers.",
            "Enhanced interactivity and animation using Core.js and Modernizr-based fallbacks."
        ],
        technologies: ["Squarespace", "Open Graph", "Modernizr", "Adobe Fonts", "Core.js", "Open Graph"],
        image: "images/work-section/butterbackery.png",
        link: "https://butterbakery.life"
    },
    4: {
        title: "Advantage Video System",
        role: "Full-Stack Developer, SEO Specialist",
        responsibilities: [
            "Developed a responsive corporate website using Elementor and custom WordPress modules.",
            "Configured Nginx server for improved site speed and caching performance.",
            "Implemented on-page and technical SEO improvements for local business ranking.",
            "Built custom PHP-based integrations for video showcase and contact automation.",
            "Managed and optimized MySQL database for consistent uptime and query efficiency."
        ],
        technologies: ["WordPress", "MySQL", "jQuery", "PHP", "Nginx", "Elementor"],
        image: "images/work-section/advantagevideosystem.png",
        link: "https://advantagevideosystems.com"
    },
    5: {
        title: "iLead-Worldwide",
        role: "Front-End Developer, SEO Specialist",
        responsibilities: [
            "Created a clean, professional Wix layout with React-based enhancements for improved UX.",
            "Ensured consistent cross-browser compatibility using Polyfill and responsive Bootstrap grids.",
            "Improved website SEO through structured metadata, mobile optimization, and keyword targeting.",
            "Collaborated with stakeholders to refine UI elements that align with brand goals.",
            "Streamlined performance and reduced page load times through code and asset optimization."
        ],
        technologies: ["Wix", "React", "Bootstrap", "Polyfill"],
        image: "images/work-section/ileadworldwide.png",
        link: "https://www.ilead-worldwide.com/"
    },
    6: {
        title: "Happy Dot Box",
        role: "Front-End Developer",
        responsibilities: [
            "Customized Shopify templates to align with brand identity and improve product visibility.",
            "Integrated Facebook Pixel and analytics tools for conversion tracking and ad optimization.",
            "Utilized jQuery and Bootstrap to build interactive product displays and responsive layouts.",
            "Enhanced site security and performance through Cloudflare CDN and optimized hosted libraries.",
            "Implemented Modernizr to maintain consistent functionality across various browsers."
        ],
        technologies: ["Shopify", "jQuery", "Bootstrap", "Cloudfare", "Google Hosted Libraries", "cdnjs", "Modernizr", "Facebook Pixel"],
        image: "images/work-section/happydotbox.png",
        link: "https://happydotbox.com"
    }
};

// DOM elements
let offcanvas = null;
let offcanvasPanel = null;
let offcanvasClose = null;
let isOffcanvasOpen = false;
let currentProject = null;
let focusableElements = [];
let lastFocusedElement = null;

/**
 * Initialize offcanvas functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeOffcanvas();
});

/**
 * Initialize offcanvas system
 */
function initializeOffcanvas() {
    // Get DOM elements
    offcanvas = document.getElementById('work-offcanvas');
    offcanvasPanel = document.getElementById('offcanvas-panel');
    offcanvasClose = document.getElementById('offcanvas-close');
    
    if (!offcanvas || !offcanvasPanel || !offcanvasClose) {
        console.warn('Offcanvas elements not found');
        return;
    }
    
    // Add click handlers to work items
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.addEventListener('click', handleWorkItemClick);
        item.addEventListener('keydown', handleWorkItemKeydown);
    });
    
    // Close button handler
    offcanvasClose.addEventListener('click', closeOffcanvas);
    
    // Overlay click handler
    const overlay = offcanvas.querySelector('.offcanvas-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeOffcanvas);
    }
    
    // Add click handler for project link
    const linkElement = document.getElementById('project-link');
    if (linkElement) {
        linkElement.addEventListener('click', (e) => {
            const url = linkElement.getAttribute('href');
            if (url && url !== '#') {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Listen for close events
    window.addEventListener('closeOffcanvas', closeOffcanvas);
    
    console.log('Offcanvas system initialized');
}

/**
 * Handle work item click
 * @param {Event} e - Click event
 */
function handleWorkItemClick(e) {
    const projectId = e.currentTarget.getAttribute('data-project');
    if (projectId) {
        openOffcanvas(projectId);
    }
}

/**
 * Handle work item keyboard interaction
 * @param {Event} e - Keyboard event
 */
function handleWorkItemKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const projectId = e.currentTarget.getAttribute('data-project');
        if (projectId) {
            openOffcanvas(projectId);
        }
    }
}

/**
 * Handle keyboard navigation in offcanvas
 * @param {Event} e - Keyboard event
 */
function handleKeyboardNavigation(e) {
    if (!isOffcanvasOpen) return;
    
    if (e.key === 'Escape') {
        closeOffcanvas();
        return;
    }
    
    if (e.key === 'Tab') {
        handleTabNavigation(e);
    }
}

/**
 * Handle tab navigation for focus trap
 * @param {Event} e - Keyboard event
 */
function handleTabNavigation(e) {
    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey) {
        if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        }
    } else {
        if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
}

/**
 * Get all focusable elements in offcanvas
 * @returns {Array} Array of focusable elements
 */
function getFocusableElements() {
    const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    return Array.from(offcanvas.querySelectorAll(selector)).filter(el => {
        return !el.disabled && !el.hidden && el.offsetParent !== null;
    });
}

/**
 * Open offcanvas with project details
 * @param {string} projectId - Project ID
 */
function openOffcanvas(projectId) {
    const project = projects[projectId];
    if (!project) {
        console.warn(`Project not found: ${projectId}`);
        return;
    }
    
    currentProject = project;
    lastFocusedElement = document.activeElement;
    
    // Populate offcanvas content
    populateOffcanvasContent(project);
    
    // Show offcanvas
    offcanvas.classList.remove('hidden');
    
    // Handle reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        offcanvasPanel.classList.remove('translate-x-full');
        isOffcanvasOpen = true;
        document.body.style.overflow = 'hidden';
        offcanvas.setAttribute('aria-hidden', 'false');
        offcanvas.setAttribute('role', 'dialog');
        offcanvas.setAttribute('aria-modal', 'true');
        
        focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
        console.log(`Offcanvas opened for project: ${project.title} (reduced motion)`);
        return;
    }
    
    // Start animation
    requestAnimationFrame(() => {
        setTimeout(() => {
            offcanvasPanel.classList.remove('translate-x-full');
        }, 50);
    });
    
    isOffcanvasOpen = true;
    document.body.style.overflow = 'hidden';
    
    // Add ARIA attributes
    offcanvas.setAttribute('aria-hidden', 'false');
    offcanvas.setAttribute('role', 'dialog');
    offcanvas.setAttribute('aria-modal', 'true');
    
    // Focus management
    setTimeout(() => {
        focusableElements = getFocusableElements();
        const projectLink = document.getElementById('project-link');
        if (projectLink) {
            projectLink.focus();
        } else if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }, 300);
    
    console.log(`Offcanvas opened for project: ${project.title}`);
}

/**
 * Close offcanvas
 */
function closeOffcanvas() {
    if (!isOffcanvasOpen) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        offcanvasPanel.classList.add('translate-x-full');
        offcanvas.classList.add('hidden');
        isOffcanvasOpen = false;
        document.body.style.overflow = '';
        offcanvas.setAttribute('aria-hidden', 'true');
        offcanvas.removeAttribute('role');
        offcanvas.removeAttribute('aria-modal');
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
        currentProject = null;
        console.log('Offcanvas closed (reduced motion)');
        return;
    }
    
    // Start close animation
    offcanvasPanel.classList.add('translate-x-full');
    
    // Hide offcanvas after animation
    setTimeout(() => {
        offcanvas.classList.add('hidden');
        isOffcanvasOpen = false;
        document.body.style.overflow = '';
        offcanvas.setAttribute('aria-hidden', 'true');
        offcanvas.removeAttribute('role');
        offcanvas.removeAttribute('aria-modal');
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
        currentProject = null;
    }, 300);
    
    console.log('Offcanvas closed');
}

/**
 * Populate offcanvas content with project data
 * @param {Object} project - Project data
 */
function populateOffcanvasContent(project) {
    // Update title
    const titleElement = document.getElementById('offcanvas-title');
    if (titleElement) {
        titleElement.textContent = project.title;
    }
    
    // Update role
    const roleElement = document.getElementById('project-role');
    if (roleElement) {
        roleElement.textContent = project.role;
    }
    
    // Update responsibilities
    const responsibilitiesElement = document.getElementById('project-responsibilities');
    if (responsibilitiesElement) {
        responsibilitiesElement.innerHTML = '';
        project.responsibilities.forEach(responsibility => {
            const li = document.createElement('li');
            li.textContent = responsibility;
            responsibilitiesElement.appendChild(li);
        });
    }
    
    // Update technologies
    const technologiesElement = document.getElementById('project-technologies');
    if (technologiesElement) {
        technologiesElement.innerHTML = '';
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200';
            span.textContent = tech;
            technologiesElement.appendChild(span);
        });
    }
    
    // Update project link
    const linkElement = document.getElementById('project-link');
    if (linkElement) {
        linkElement.href = project.link;
    }
    
    // Update project image
    const imageElement = document.getElementById('project-image');
    if (imageElement) {
        imageElement.src = project.image;
        imageElement.alt = project.title;
        
        // Handle image load error
        imageElement.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDIyNVYxNzVIMTc1VjEyNVoiIGZpbGw9IiM5Q0E5QkMiLz4KPHN2ZyB4PSIxODAiIHk9IjEzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMlM2LjQ4IDIyIDEyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTIgMlpNMTMgMTdIMTFWMTVIMTNWMTdaTTEzIDEzSDExVjdIMTNWMTNaIiBmaWxsPSIjNjQ3NDhCIi8+Cjwvc3ZnPgo8dGV4dCB4PSIyMDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjQ3NDhCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPgo=';
            this.alt = 'Image not found';
        };
    }
}

/**
 * Get current project data
 * @returns {Object|null} Current project data
 */
function getCurrentProject() {
    return currentProject;
}

/**
 * Check if offcanvas is open
 * @returns {boolean} True if offcanvas is open
 */
function getOffcanvasState() {
    return isOffcanvasOpen;
}

// Export functions for use in other modules
window.offcanvasUtils = {
    openOffcanvas,
    closeOffcanvas,
    getCurrentProject,
    getOffcanvasState
};

/**
 * Secure Contact Form with Formspree Integration
 * Handles form validation, submission, and user feedback
 */

// CONFIGURATION - Replace with your Formspree form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdkwpyay';

// DOM elements
let contactForm = null;
let messageCounter = null;
let messageTextarea = null;
let isSubmitting = false;

// Rate limiting
const RATE_LIMIT_KEY = 'contactFormLastSubmit';
const RATE_LIMIT_DURATION = 60000; // 1 minute between submissions

// Form validation rules
const validationRules = {
    firstName: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s\-']+$/,
        message: 'Please enter a valid first name (2-50 characters, letters only)'
    },
    lastName: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s\-']+$/,
        message: 'Please enter a valid last name (2-50 characters, letters only)'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    inquiry: {
        required: true,
        message: 'Please select an inquiry type'
    },
    message: {
        required: true,
        minLength: 10,
        maxLength: 1000,
        message: 'Please enter a message (10-1000 characters)'
    }
};

/**
 * Initialize contact form functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
});

/**
 * Initialize contact form system
 */
function initializeContactForm() {
    contactForm = document.getElementById('contact-form');
    messageCounter = document.getElementById('message-count');
    messageTextarea = document.getElementById('message');
    
    if (!contactForm) {
        console.warn('Contact form not found');
        return;
    }
    
    // Add event listeners
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
    
    // Message counter
    if (messageTextarea && messageCounter) {
        messageTextarea.addEventListener('input', updateMessageCounter);
        updateMessageCounter();
    }
    
    // Radio button validation
    const radioButtons = contactForm.querySelectorAll('input[name="inquiry"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => clearFieldError(radio));
    });
    
    console.log('Contact form initialized');
}

/**
 * Check rate limiting
 * @returns {boolean} True if allowed to submit
 */
function checkRateLimit() {
    const lastSubmitTime = sessionStorage.getItem(RATE_LIMIT_KEY);
    if (lastSubmitTime) {
        const timeSinceLastSubmit = Date.now() - parseInt(lastSubmitTime);
        if (timeSinceLastSubmit < RATE_LIMIT_DURATION) {
            const remainingSeconds = Math.ceil((RATE_LIMIT_DURATION - timeSinceLastSubmit) / 1000);
            showErrorMessage(`Please wait ${remainingSeconds} seconds before submitting again.`);
            return false;
        }
    }
    return true;
}

/**
 * Handle form submission
 * @param {Event} e - Submit event
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (isSubmitting) {
        return;
    }
    
    // Check rate limiting
    if (!checkRateLimit()) {
        return;
    }
    
    // Validate form
    const isValid = validateForm();
    if (!isValid) {
        return;
    }
    
    isSubmitting = true;
    
    // Update submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="flex items-center justify-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...</span>';
    
    try {
        // Get and sanitize form data
        const formData = new FormData(contactForm);
        const sanitizedData = {};
        
        for (let [key, value] of formData.entries()) {
            sanitizedData[key] = sanitizeInput(value);
        }
        
        // Submit to Formspree
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify(sanitizedData)
        });
        
        if (response.ok) {
            // Set rate limit timestamp
            sessionStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
            
            showSuccessMessage();
            contactForm.reset();
            updateMessageCounter();
        } else {
            const data = await response.json();
            showErrorMessage(data.error || 'An error occurred while sending your message. Please try again.');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showErrorMessage('Network error. Please check your connection and try again.');
    } finally {
        // Reset submit button
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        isSubmitting = false;
    }
}

/**
 * Validate entire form
 * @returns {boolean} True if form is valid
 */
function validateForm() {
    let isValid = true;
    
    clearAllErrors();
    
    Object.keys(validationRules).forEach(fieldName => {
        const field = contactForm.querySelector(`[name="${fieldName}"]`);
        if (field) {
            const fieldValid = validateField(field);
            if (!fieldValid) {
                isValid = false;
            }
        }
    });
    
    return isValid;
}

/**
 * Validate individual field
 * @param {HTMLElement} field - Form field element
 * @returns {boolean} True if field is valid
 */
function validateField(field) {
    const fieldName = field.name;
    const rules = validationRules[fieldName];
    
    if (!rules) {
        return true;
    }
    
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    if (rules.required && !value) {
        isValid = false;
        errorMessage = rules.message;
    }
    
    if (isValid && value) {
        if (rules.minLength && value.length < rules.minLength) {
            isValid = false;
            errorMessage = rules.message;
        }
        
        if (rules.maxLength && value.length > rules.maxLength) {
            isValid = false;
            errorMessage = rules.message;
        }
    }
    
    if (isValid && value && rules.pattern) {
        if (!rules.pattern.test(value)) {
            isValid = false;
            errorMessage = rules.message;
        }
    }
    
    if (fieldName === 'inquiry' && !contactForm.querySelector('input[name="inquiry"]:checked')) {
        isValid = false;
        errorMessage = rules.message;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }
    
    return isValid;
}

/**
 * Show field error
 * @param {HTMLElement} field - Form field element
 * @param {string} message - Error message
 */
function showFieldError(field, message) {
    const errorElement = document.getElementById(`${field.name}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
    
    field.classList.add('border-red-500', 'focus:ring-red-500');
    field.classList.remove('border-dark-300', 'dark:border-dark-600', 'focus:ring-primary-500');
    
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', `${field.name}-error`);
}

/**
 * Clear field error
 * @param {HTMLElement} field - Form field element
 */
function clearFieldError(field) {
    const errorElement = document.getElementById(`${field.name}-error`);
    if (errorElement) {
        errorElement.classList.add('hidden');
    }
    
    field.classList.remove('border-red-500', 'focus:ring-red-500');
    field.classList.add('border-dark-300', 'dark:border-dark-600', 'focus:ring-primary-500');
    
    field.removeAttribute('aria-invalid');
}

/**
 * Clear all form errors
 */
function clearAllErrors() {
    const errorElements = contactForm.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.classList.add('hidden');
    });
    
    const fields = contactForm.querySelectorAll('input, textarea');
    fields.forEach(field => {
        clearFieldError(field);
    });
}

/**
 * Update message character counter
 */
function updateMessageCounter() {
    if (!messageTextarea || !messageCounter) return;
    
    const currentLength = messageTextarea.value.length;
    const maxLength = parseInt(messageTextarea.getAttribute('maxlength'));
    
    messageCounter.textContent = currentLength;
    
    if (currentLength > maxLength * 0.9) {
        messageCounter.classList.add('text-red-500', 'dark:text-red-400');
        messageCounter.classList.remove('text-dark-500', 'dark:text-dark-400');
    } else {
        messageCounter.classList.remove('text-red-500', 'dark:text-red-400');
        messageCounter.classList.add('text-dark-500', 'dark:text-dark-400');
    }
}

/**
 * Show success message
 */
function showSuccessMessage() {
    const successElement = document.getElementById('form-success');
    const errorElement = document.getElementById('form-error');
    
    if (successElement) {
        successElement.classList.remove('hidden');
    }
    
    if (errorElement) {
        errorElement.classList.add('hidden');
    }
    
    if (successElement) {
        successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    setTimeout(() => {
        if (successElement) {
            successElement.classList.add('hidden');
        }
    }, 5000);
}

/**
 * Show error message
 * @param {string} message - Error message
 */
function showErrorMessage(message) {
    const successElement = document.getElementById('form-success');
    const errorElement = document.getElementById('form-error');
    
    if (errorElement) {
        errorElement.classList.remove('hidden');
        const errorText = errorElement.querySelector('span');
        if (errorText) {
            errorText.textContent = message;
        }
    }
    
    if (successElement) {
        successElement.classList.add('hidden');
    }
    
    if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

/**
 * Sanitize input to prevent XSS
 * @param {string} input - User input
 * @returns {string} Sanitized input
 */
function sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

/**
 * Handle mobile keyboard visibility
 */
function handleMobileKeyboard() {
    if (window.innerWidth <= 768) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                setTimeout(() => {
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            });
        });
    }
}

/**
 * Debounce utility function
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

// Initialize mobile features
document.addEventListener('DOMContentLoaded', function() {
    handleMobileKeyboard();
    window.addEventListener('resize', debounce(handleMobileKeyboard, 250));
});

// Export functions
window.contactFormUtils = {
    validateForm,
    validateField,
    clearAllErrors,
    sanitizeInput
};
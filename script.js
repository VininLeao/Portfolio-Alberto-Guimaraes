/**
 * APOLLO PROJECT - ALBERTO GUIMARÃES
 * Main JavaScript File - Final Version
 * 
 * This file handles all interactive functionality including:
 * - Multi-language system
 * - Portfolio filtering (updated for video/design categories)
 * - Modal management
 * - Scroll animations
 * - Navigation interactions
 * - Form handling
 */

// ==========================================
// GLOBAL VARIABLES AND INITIALIZATION
// ==========================================

let currentLanguage = 'pt'; // Default language
let isMenuOpen = false;
let activeFilter = 'all';

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const languageButtons = document.querySelectorAll('.lang-btn');
const preloader = document.querySelector('#preloader');

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeLanguageSystem();
    initializeNavigation();
    initializeScrollAnimations();
    initializePortfolio();
    initializeModals();
    initializeForms();
    initializePreloader();
    
    console.log('🎬 Apollo Project initialized successfully');
});

// ==========================================
// PRELOADER MANAGEMENT
// ==========================================

function initializePreloader() {
    if (!preloader) return;
    
    // Hide preloader after page load
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Remove from DOM after animation
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000); // Show for at least 1 second
    });
}

// ==========================================
// MULTI-LANGUAGE SYSTEM
// ==========================================

function initializeLanguageSystem() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Set initial language
    setLanguage(currentLanguage);
    
    // Add event listeners to language buttons
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newLanguage = this.getAttribute('data-lang');
            setLanguage(newLanguage);
        });
    });
}

function setLanguage(language) {
    if (!translations[language]) {
        console.warn(`Language "${language}" not found, falling back to Portuguese`);
        language = 'pt';
    }
    
    currentLanguage = language;
    
    // Update active language button
    languageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === language) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-key]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = getTranslation(key, language);
        
        if (translation) {
            // Handle different types of elements
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.type === 'submit' || element.type === 'button') {
                    element.value = translation;
                } else {
                    element.placeholder = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update document language and title
    document.documentElement.lang = language;
    
    // Save language preference
    localStorage.setItem('preferred-language', language);
    
    console.log(`🌍 Language changed to: ${language}`);
}

function getTranslation(key, language) {
    const keys = key.split('.');
    let translation = translations[language];
    
    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            console.warn(`Translation key "${key}" not found for language "${language}"`);
            return null;
        }
    }
    
    return translation;
}

// ==========================================
// NAVIGATION MANAGEMENT
// ==========================================

function initializeNavigation() {
    // Handle scroll effects on navbar
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Handle mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (isMenuOpen && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
    
    // Update active navigation item based on current page
    updateActiveNavItem();
}

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate hamburger lines
    const lines = hamburger.querySelectorAll('span');
    if (isMenuOpen) {
        lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        lines[0].style.transform = '';
        lines[1].style.opacity = '';
        lines[2].style.transform = '';
    }
}

function closeMobileMenu() {
    isMenuOpen = false;
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    
    const lines = hamburger.querySelectorAll('span');
    lines.forEach(line => {
        line.style.transform = '';
        line.style.opacity = '';
    });
}

function updateActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function initializeScrollAnimations() {
    // Create intersection observer for reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe all elements with reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// PORTFOLIO FUNCTIONALITY (UPDATED FOR VIDEO/DESIGN)
// ==========================================

function initializePortfolio() {
    // Only run on work page
    if (!document.querySelector('.portfolio-grid')) return;
    
    initializeFilters();
    initializePortfolioHovers();
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            setActiveFilter(filter);
            filterPortfolioItems(filter, portfolioItems);
        });
    });
}

function setActiveFilter(filter) {
    activeFilter = filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
}

function filterPortfolioItems(filter, items) {
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
            // Animate in
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 100);
        } else {
            item.classList.add('hidden');
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
        }
    });
}

function initializePortfolioHovers() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const thumbnail = item.querySelector('.portfolio-thumbnail');
        const playIndicator = item.querySelector('.play-indicator');
        
        if (playIndicator) {
            // This is a video item - add hover effects for video preview
            item.addEventListener('mouseenter', function() {
                playIndicator.style.transform = 'scale(1.2)';
            });
            
            item.addEventListener('mouseleave', function() {
                playIndicator.style.transform = 'scale(1)';
            });
        }
        
        // Add zoom effect for images
        item.addEventListener('mouseenter', function() {
            if (thumbnail) {
                thumbnail.style.transform = 'scale(1.1)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (thumbnail) {
                thumbnail.style.transform = 'scale(1)';
            }
        });
    });
}

// ==========================================
// MODAL MANAGEMENT
// ==========================================

function initializeModals() {
    const portfolioButtons = document.querySelectorAll('.portfolio-btn');
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    
    if (!modal) return;
    
    // Add click listeners to portfolio buttons
    portfolioButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // Close modal events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalCategory = modal.querySelector('.modal-category');
    const modalMedia = modal.querySelector('.modal-media');
    const challengeText = modal.querySelector('.challenge-text');
    const solutionText = modal.querySelector('.solution-text');
    const resultText = modal.querySelector('.result-text');
    
    // Project data (in a real implementation, this would come from a CMS or API)
    const projectData = getProjectData(projectId);
    
    if (!projectData) {
        console.error(`Project data not found for ID: ${projectId}`);
        return;
    }
    
    // Populate modal content
    modalTitle.textContent = projectData.title[currentLanguage] || projectData.title.en;
    modalCategory.textContent = projectData.category[currentLanguage] || projectData.category.en;
    challengeText.textContent = projectData.challenge[currentLanguage] || projectData.challenge.en;
    solutionText.textContent = projectData.solution[currentLanguage] || projectData.solution.en;
    resultText.textContent = projectData.result[currentLanguage] || projectData.result.en;
    
    // Add media content
    modalMedia.innerHTML = '';
    if (projectData.type === 'video') {
        modalMedia.innerHTML = `
            <video controls>
                <source src="${projectData.videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else {
        modalMedia.innerHTML = `
            <img src="${projectData.imageUrl}" alt="${projectData.title[currentLanguage] || projectData.title.en}">
        `;
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    
    // Stop any playing videos
    const videos = modal.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}

function getProjectData(projectId) {
    // Updated project data for video creation and graphic design
    const projects = {
        project1: {
            title: {
                pt: "Vídeo de Marca para Startup de Tecnologia",
                en: "Tech Startup Brand Video",
                es: "Video de Marca para Startup Tecnológica"
            },
            category: {
                pt: "Criação de Vídeo",
                en: "Video Creation",
                es: "Creación de Video"
            },
            type: "video",
            videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=165&oauth2_token_id=57447761",
            challenge: {
                pt: "Uma startup de tecnologia B2B precisava de um vídeo que comunicasse sua proposta de valor complexa de forma simples e envolvente para investidores e clientes corporativos.",
                en: "A B2B tech startup needed a video that would communicate their complex value proposition in a simple and engaging way for investors and corporate clients.",
                es: "Una startup tecnológica B2B necesitaba un video que comunicara su propuesta de valor compleja de manera simple y atractiva para inversores y clientes corporativos."
            },
            solution: {
                pt: "Criei uma narrativa visual focada em resultados, desenvolvendo roteiro, filmagem e edição com animações limpas e depoimentos reais de clientes para demonstrar o impacto real da solução.",
                en: "I created a results-focused visual narrative, developing script, filming and editing with clean animations and real customer testimonials to demonstrate the real impact of the solution.",
                es: "Creé una narrativa visual enfocada en resultados, desarrollando guión, filmación y edición con animaciones limpias y testimonios reales de clientes para demostrar el impacto real de la solución."
            },
            result: {
                pt: "O vídeo gerou 300% mais engajamento que o conteúdo anterior e contribuiu para uma rodada de investimento bem-sucedida de $5M.",
                en: "The video generated 300% more engagement than previous content and contributed to a successful $5M investment round.",
                es: "El video generó 300% más engagement que el contenido anterior y contribuyó a una ronda de inversión exitosa de $5M."
            }
        },
        project2: {
            title: {
                pt: "Identidade Visual Corporativa",
                en: "Corporate Visual Identity",
                es: "Identidad Visual Corporativa"
            },
            category: {
                pt: "Design Gráfico",
                en: "Graphic Design",
                es: "Diseño Gráfico"
            },
            type: "image",
            imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            challenge: {
                pt: "Uma empresa Fortune 500 precisava de uma identidade visual consistente para suas redes sociais e materiais de marketing, mantendo a autoridade da marca.",
                en: "A Fortune 500 company needed a consistent visual identity for their social media and marketing materials while maintaining brand authority.",
                es: "Una empresa Fortune 500 necesitaba una identidad visual consistente para sus redes sociales y materiales de marketing, manteniendo la autoridad de la marca."
            },
            solution: {
                pt: "Desenvolvi um sistema de design gráfico completo com templates para redes sociais, banners promocionais e materiais corporativos, criando consistência visual em todas as plataformas.",
                en: "I developed a complete graphic design system with templates for social media, promotional banners and corporate materials, creating visual consistency across all platforms.",
                es: "Desarrollé un sistema de diseño gráfico completo con plantillas para redes sociales, banners promocionales y materiales corporativos, creando consistencia visual en todas las plataformas."
            },
            result: {
                pt: "A nova identidade visual aumentou o reconhecimento da marca em 45% e os materiais foram adotados em todas as filiais internacionais.",
                en: "The new visual identity increased brand recognition by 45% and the materials were adopted across all international branches.",
                es: "La nueva identidad visual aumentó el reconocimiento de la marca en 45% y los materiales fueron adoptados en todas las sucursales internacionales."
            }
        }
        // Additional projects would follow the same pattern...
    };
    
    return projects[projectId] || null;
}

// ==========================================
// FORM HANDLING
// ==========================================

function initializeForms() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
        
        // Add real-time validation
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', validateField);
            field.addEventListener('input', clearFieldError);
        });
    }
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!validateContactForm(data)) {
        return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = getTranslation('form_sending', currentLanguage) || 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showSuccessModal();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        console.log('📧 Contact form submitted:', data);
    }, 2000);
}

function validateContactForm(data) {
    const errors = [];
    
    // Required field validation
    if (!data.name || data.name.trim().length < 2) {
        errors.push('name');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('email');
    }
    
    if (!data.service) {
        errors.push('service');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('message');
    }
    
    // Show errors
    if (errors.length > 0) {
        errors.forEach(fieldName => {
            showFieldError(fieldName);
        });
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    clearFieldError(field.name);
    
    // Validation rules
    switch (field.name) {
        case 'name':
            if (value.length < 2) {
                showFieldError('name', getTranslation('error_name_short', currentLanguage) || 'Name must be at least 2 characters');
            }
            break;
        case 'email':
            if (!isValidEmail(value)) {
                showFieldError('email', getTranslation('error_email_invalid', currentLanguage) || 'Please enter a valid email address');
            }
            break;
        case 'message':
            if (value.length < 10) {
                showFieldError('message', getTranslation('error_message_short', currentLanguage) || 'Message must be at least 10 characters');
            }
            break;
    }
}

function showFieldError(fieldName, message = null) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    
    // Remove existing error
    clearFieldError(fieldName);
    
    // Add error class
    field.classList.add('error');
    field.style.borderColor = '#FF6B6B';
    
    // Add error message
    if (message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.color = '#FF6B6B';
        errorElement.style.fontSize = 'var(--font-size-small)';
        errorElement.style.marginTop = 'var(--spacing-xs)';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }
}

function clearFieldError(fieldName) {
    const field = typeof fieldName === 'string' ? 
        document.querySelector(`[name="${fieldName}"]`) : fieldName;
    
    if (!field) return;
    
    field.classList.remove('error');
    field.style.borderColor = '';
    
    // Remove error message
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

function showSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Make closeSuccessModal available globally for the HTML onclick
window.closeSuccessModal = closeSuccessModal;

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance optimization
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

// Throttle function for scroll events
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

// ==========================================
// ERROR HANDLING
// ==========================================

window.addEventListener('error', function(e) {
    console.error('🚨 JavaScript Error:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('🚨 Unhandled Promise Rejection:', e.reason);
});

// ==========================================
// PERFORMANCE MONITORING
// ==========================================

// Log performance metrics
window.addEventListener('load', function() {
    // Use Performance API to log loading times
    if ('performance' in window) {
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        console.log('📊 Page Load Performance:', {
            'DOM Content Loaded': navigationTiming.domContentLoadedEventEnd - navigationTiming.navigationStart,
            'Full Load': navigationTiming.loadEventEnd - navigationTiming.navigationStart,
            'First Paint': performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime || 'N/A'
        });
    }
});
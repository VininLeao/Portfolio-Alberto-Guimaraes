/**
 * APOLLO PROJECT - ALBERTO GUIMARÃES
 * Main JavaScript File
 * 
 * This file handles all interactive functionality including:
 * - Multi-language system
 * - Portfolio filtering
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
// PORTFOLIO FUNCTIONALITY
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
                // Here you could add logic to play a video preview
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
    // Mock project data - in production, this would come from a database or CMS
    const projects = {
        project1: {
            title: {
                pt: "Vídeo de Marca para Startup de Tecnologia",
                en: "Tech Startup Brand Video",
                es: "Video de Marca para Startup Tecnológica"
            },
            category: {
                pt: "Edição de Vídeo",
                en: "Video Editing",
                es: "Edición de Video"
            },
            type: "video",
            videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=165&oauth2_token_id=57447761",
            challenge: {
                pt: "Uma startup de tecnologia B2B precisava de um vídeo que comunicasse sua proposta de valor complexa de forma simples e envolvente para investidores e clientes corporativos.",
                en: "A B2B tech startup needed a video that would communicate their complex value proposition in a simple and engaging way for investors and corporate clients.",
                es: "Una startup tecnológica B2B necesitaba un video que comunicara su propuesta de valor compleja de manera simple y atractiva para inversores y clientes corporativos."
            },
            solution: {
                pt: "Criei uma narrativa visual focada em resultados, usando animações limpas e depoimentos reais de clientes para demonstrar o impacto real da solução.",
                en: "I created a results-focused visual narrative, using clean animations and real customer testimonials to demonstrate the real impact of the solution.",
                es: "Creé una narrativa visual enfocada en resultados, usando animaciones limpias y testimonios reales de clientes para demostrar el impacto real de la solución."
            },
            result: {
                pt: "O vídeo gerou 300% mais engajamento que o conteúdo anterior e contribuiu para uma rodada de investimento bem-sucedida de $5M.",
                en: "The video generated 300% more engagement than previous content and contributed to a successful $5M investment round.",
                es: "El video generó 300% más engagement que el contenido anterior y contribuyó a una ronda de inversión exitosa de $5M."
            }
        },
        project2: {
            title: {
                pt: "Retratos Executivos Corporativos",
                en: "Corporate Executive Portraits",
                es: "Retratos Ejecutivos Corporativos"
            },
            category: {
                pt: "Fotografia",
                en: "Photography",
                es: "Fotografía"
            },
            type: "image",
            imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            challenge: {
                pt: "Uma empresa Fortune 500 precisava de retratos executivos que transmitissem autoridade e acessibilidade para sua nova campanha de liderança.",
                en: "A Fortune 500 company needed executive portraits that conveyed both authority and approachability for their new leadership campaign.",
                es: "Una empresa Fortune 500 necesitaba retratos ejecutivos que transmitieran autoridad y accesibilidad para su nueva campaña de liderazgo."
            },
            solution: {
                pt: "Desenvolvi um estilo de iluminação cinematográfica que destacava a personalidade de cada executivo enquanto mantinha consistência visual em toda a série.",
                en: "I developed a cinematic lighting style that highlighted each executive's personality while maintaining visual consistency throughout the series.",
                es: "Desarrollé un estilo de iluminación cinematográfica que destacaba la personalidad de cada ejecutivo mientras mantenía consistencia visual en toda la serie."
            },
            result: {
                pt: "A campanha aumentou a confiança da marca em 45% e os retratos foram licenciados para uso em publicações especializadas.",
                en: "The campaign increased brand trust by 45% and the portraits were licensed for use in industry publications.",
                es: "La campaña aumentó la confianza de la marca en 45% y los retratos fueron licenciados para uso en publicaciones especializadas."
            }
        },
        project3: {
            title: {
                pt: "Produção de Série para YouTube",
                en: "YouTube Series Production",
                es: "Producción de Serie para YouTube"
            },
            category: {
                pt: "Edição de Vídeo",
                en: "Video Editing",
                es: "Edición de Video"
            },
            type: "video",
            videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=165&oauth2_token_id=57447761",
            challenge: {
                pt: "Um criador de conteúdo queria elevar a qualidade de produção de sua série educacional para competir com canais premium.",
                en: "A content creator wanted to elevate the production quality of their educational series to compete with premium channels.",
                es: "Un creador de contenido quería elevar la calidad de producción de su serie educativa para competir con canales premium."
            },
            solution: {
                pt: "Implementei um workflow de edição padronizado com templates customizados, motion graphics e uma identidade visual consistente.",
                en: "I implemented a standardized editing workflow with custom templates, motion graphics, and consistent visual identity.",
                es: "Implementé un workflow de edición estandarizado con plantillas personalizadas, motion graphics e identidad visual consistente."
            },
            result: {
                pt: "A série cresceu 250% em subscribers em 6 meses e gerou parcerias com marcas premium no nicho educacional.",
                en: "The series grew 250% in subscribers over 6 months and generated partnerships with premium brands in the educational niche.",
                es: "La serie creció 250% en suscriptores en 6 meses y generó asociaciones con marcas premium en el nicho educativo."
            }
        },
        project4: {
            title: {
                pt: "Campanha de Fotografia de Produto",
                en: "Product Photography Campaign",
                es: "Campaña de Fotografía de Producto"
            },
            category: {
                pt: "Fotografia",
                en: "Photography",
                es: "Fotografía"
            },
            type: "image",
            imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            challenge: {
                pt: "Uma marca de tecnologia de consumo precisava de imagens de produto que destacassem detalhes técnicos mantendo apelo emocional.",
                en: "A consumer tech brand needed product images that highlighted technical details while maintaining emotional appeal.",
                es: "Una marca de tecnología de consumo necesitaba imágenes de producto que destacaran detalles técnicos manteniendo atractivo emocional."
            },
            solution: {
                pt: "Criei um setup de estúdio que combinava iluminação técnica precisa com elementos de lifestyle para contextualizar o uso dos produtos.",
                en: "I created a studio setup that combined precise technical lighting with lifestyle elements to contextualize product usage.",
                es: "Creé una configuración de estudio que combinaba iluminación técnica precisa con elementos de lifestyle para contextualizar el uso de productos."
            },
            result: {
                pt: "As imagens resultaram em 180% de aumento nas conversões do e-commerce e foram usadas em campanhas publicitárias internacionais.",
                en: "The images resulted in a 180% increase in e-commerce conversions and were used in international advertising campaigns.",
                es: "Las imágenes resultaron en 180% de aumento en las conversiones del e-commerce y fueron usadas en campañas publicitarias internacionales."
            }
        },
        project5: {
            title: {
                pt: "Conteúdo para Redes Sociais",
                en: "Social Media Content",
                es: "Contenido para Redes Sociales"
            },
            category: {
                pt: "Edição de Vídeo",
                en: "Video Editing",
                es: "Edición de Video"
            },
            type: "video",
            videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=165&oauth2_token_id=57447761",
            challenge: {
                pt: "Uma agência de marketing precisava de um sistema escalável para produzir conteúdo de vídeo consistente para múltiplos clientes.",
                en: "A marketing agency needed a scalable system to produce consistent video content for multiple clients.",
                es: "Una agencia de marketing necesitaba un sistema escalable para producir contenido de video consistente para múltiples clientes."
            },
            solution: {
                pt: "Desenvolvi templates modulares e um guia de estilo que permitiu produção rápida mantendo qualidade premium e identidade única para cada marca.",
                en: "I developed modular templates and a style guide that enabled rapid production while maintaining premium quality and unique identity for each brand.",
                es: "Desarrollé plantillas modulares y una guía de estilo que permitió producción rápida manteniendo calidad premium e identidad única para cada marca."
            },
            result: {
                pt: "O sistema reduziu o tempo de produção em 60% e aumentou a satisfação do cliente, gerando 40% mais projetos recorrentes.",
                en: "The system reduced production time by 60% and increased client satisfaction, generating 40% more recurring projects.",
                es: "El sistema redujo el tiempo de producción en 60% y aumentó la satisfacción del cliente, generando 40% más proyectos recurrentes."
            }
        },
        project6: {
            title: {
                pt: "Fotografia de Lifestyle de Marca",
                en: "Brand Lifestyle Photography",
                es: "Fotografía de Lifestyle de Marca"
            },
            category: {
                pt: "Fotografia",
                en: "Photography",
                es: "Fotografía"
            },
            type: "image",
            imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            challenge: {
                pt: "Uma marca de estilo de vida premium precisava de imagens que capturassem a essência de seus valores de sustentabilidade e sofisticação.",
                en: "A premium lifestyle brand needed images that captured the essence of their sustainability and sophistication values.",
                es: "Una marca de estilo de vida premium necesitaba imágenes que capturaran la esencia de sus valores de sostenibilidad y sofisticación."
            },
            solution: {
                pt: "Criei uma direção de arte que combinou cenários naturais com elementos de design contemporâneo, usando luz natural para realçar autenticidade.",
                en: "I created an art direction that combined natural settings with contemporary design elements, using natural light to enhance authenticity.",
                es: "Creé una dirección de arte que combinó escenarios naturales con elementos de diseño contemporáneo, usando luz natural para realzar autenticidad."
            },
            result: {
                pt: "A campanha gerou o maior engajamento orgânico da história da marca e estabeleceu uma identidade visual que foi adotada globalmente.",
                en: "The campaign generated the highest organic engagement in the brand's history and established a visual identity that was adopted globally.",
                es: "La campaña generó el mayor engagement orgánico en la historia de la marca y estableció una identidad visual que fue adoptada globalmente."
            }
        }
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
    
    // In production, you might want to send this to an error tracking service
    // trackError(e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('🚨 Unhandled Promise Rejection:', e.reason);
    
    // In production, you might want to send this to an error tracking service
    // trackError(e.reason);
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
/**
 * APOLLO PROJECT - ALBERTO GUIMARÃES
 * Multi-language Translation System - FINAL REVISION
 * 
 * Updated with specific video editing and photo editing skills
 * Removed all references to photography as a service
 */

const translations = {
    // ==========================================
    // PORTUGUESE (BRAZIL) - PRIMARY LANGUAGE
    // ==========================================
    pt: {
        // Navigation
        nav_home: "Início",
        nav_work: "Portfólio",
        nav_about: "Sobre",
        nav_contact: "Contato",
        
        // Common elements
        loading: "Carregando",
        scroll_text: "Role",
        view_project: "Ver Projeto",
        view_all_work: "Ver Todo Portfólio",
        
        // Home page - Meta
        home_title: "Alberto Guimarães - Editor de Vídeo & Editor de Fotos",
        home_description: "Editor de vídeo criativo e apaixonado, especializado em transformar ideias em conteúdo visual impactante para marcas e criadores.",
        
        // Home page - Hero
        hero_title: "Editor de Vídeo & Editor de Fotos",
        hero_subtitle: "Transformando ideias em narrativas visuais envolventes que conectam marcas com suas audiências",
        hero_cta_work: "Ver Portfólio",
        hero_cta_contact: "Iniciar Projeto",
        
        // Home page - Featured Work
        featured_title: "Trabalhos em Destaque",
        featured_subtitle: "Projetos selecionados que mostram minha paixão por storytelling visual",
        featured_project1_title: "Campanha para Startup de Tech",
        featured_project1_desc: "Vídeo de marca para startup em crescimento",
        featured_project2_title: "Edição de Imagens Corporativas",
        featured_project2_desc: "Retoque e edição de retratos profissionais",
        featured_project3_title: "Conteúdo para Influenciador",
        featured_project3_desc: "Produção de série para YouTube",
        
        // Categories
        video_editing: "Edição de Vídeo",
        image_editing: "Edição de Imagem",
        
        // Home page - Services
        services_title: "Serviços",
        services_subtitle: "Soluções criativas para dar vida às suas ideias",
        service1_title: "Edição de Vídeo",
        service1_desc: "Do conceito à entrega, criando conteúdo que conta a história da sua marca de forma autêntica.",
        service2_title: "Pós-Produção",
        service2_desc: "Edição cuidadosa, correção de cor e efeitos visuais para elevar o seu conteúdo.",
        service3_title: "Edição de Fotos",
        service3_desc: "Retoque e edição de imagens para comunicar sua mensagem com clareza e impacto.",
        service4_title: "Consultoria Criativa",
        service4_desc: "Ajudando você a definir a direção visual que melhor representa sua marca.",
        
        // Home page - CTA
        cta_title: "Vamos criar algo incrível juntos?",
        cta_subtitle: "Conte-me sobre seu projeto e vamos transformar sua visão em realidade",
        cta_button: "Iniciar Conversa",
        
        // Work page - Meta
        work_title: "Portfólio - Alberto Guimarães",
        work_description: "Explore meu portfólio: projetos de edição de vídeo e edição de imagens que contam histórias autênticas.",
        
        // Work page - Content
        work_page_title: "Portfólio",
        work_page_subtitle: "Uma coleção dos meus projetos favoritos de storytelling visual",
        filter_all: "Todos os Trabalhos",
        filter_video: "Edição de Vídeo",
        filter_photography: "Edição de Imagem",
        
        // Work page - Projects
        project1_title: "Vídeo de Marca para Startup de Tech",
        project1_category: "Edição de Vídeo",
        project2_title: "Edição de Retratos Executivos",
        project2_category: "Edição de Imagem",
        project3_title: "Produção de Série para YouTube",
        project3_category: "Edição de Vídeo",
        project4_title: "Edição de Fotos de Produto",
        project4_category: "Edição de Imagem",
        project5_title: "Conteúdo para Redes Sociais",
        project5_category: "Edição de Vídeo",
        project6_title: "Edição de Fotos de Lifestyle",
        project6_category: "Edição de Imagem",
        
        // Modal - Case Study
        challenge_title: "Desafio",
        solution_title: "Solução",
        result_title: "Resultado",
        
        // About page - Meta
        about_title: "Sobre - Alberto Guimarães",
        about_description: "Conheça minha jornada como editor de vídeo e editor de fotos, minha paixão pelos detalhes e como trabalho para criar conteúdo que realmente importa.",
        
        // About page - Content
        about_page_title: "Sobre Alberto",
        about_intro: "Editor de vídeo e editor de fotos apaixonado por transformar ideias em histórias visuais que conectam e inspiram.",
        about_description_full: "Especializado em criar conteúdo visual autêntico que ressoa com diferentes audiências, sempre focando na mensagem que sua marca quer transmitir.",
        
        // About page - Values (replacing experience numbers)
        values_title: "Meus Valores",
        value_passion_title: "Paixão por Detalhes",
        value_passion_desc: "Uma dedicação total a cada frame, corte e cor para garantir um resultado final impactante.",
        value_collab_title: "Processo Colaborativo",
        value_collab_desc: "Comunicação clara e ágil para garantir que sua visão seja perfeitamente executada.",
        value_focus_title: "Foco no Seu Objetivo",
        value_focus_desc: "Mais do que um visual bonito, o objetivo é criar uma peça que funcione para sua marca e atinja suas metas.",
        
        // About page - Philosophy
        philosophy_title: "Filosofia Criativa",
        philosophy_quote: "Para mim, editar não é só juntar clipes. É encontrar o ritmo, a emoção e a história que vive dentro do material bruto.",
        philosophy_description: "Minha abordagem combina técnica com sensibilidade criativa, garantindo que cada elemento visual sirva à história que queremos contar. Acredito que conteúdo autêntico cria conexões genuínas.",
        
        // About page - Skills
        skills_title: "Habilidades & Expertise",
        video_skills_title: "Edição de Vídeo",
        video_skill_social_media: "Edição de Vídeos para Redes Sociais (Reels, TikTok, Shorts)",
        video_skill_youtube: "Edição para YouTube (Vlogs, Tutoriais, Reviews)",
        video_skill_corporate: "Edição de Vídeos Corporativos (Institucionais, Promocionais)",
        video_skill_color_grading: "Color Grading e Correção de Cor",
        video_skill_motion_graphics: "Animações e Motion Graphics (Básicos)",
        
        photo_skills_title: "Edição de Imagem & Retoque",
        photo_skill_retouching: "Retoque de Fotos (Pessoas, Produtos)",
        photo_skill_color_correction: "Correção de Cor e Balanço de Branco em Fotos",
        photo_skill_background_removal: "Remoção e Substituição de Fundos",
        photo_skill_manipulation: "Manipulação e Composição de Imagens",
        photo_skill_optimization: "Otimização de Imagens para Web e Redes Sociais",
        
        creative_skills_title: "Consultoria Criativa",
        skill_strategy: "Estratégia Criativa",
        skill_brand: "Desenvolvimento de Marca",
        skill_campaign: "Conceito de Campanha",
        skill_direction: "Direção de Arte",
        
        tech_skills_title: "Tecnologia",
        skill_premiere: "Adobe Premiere Pro",
        skill_after: "After Effects",
        skill_photoshop: "Photoshop",
        skill_davinci: "DaVinci Resolve",
        
        // About page - Process
        process_title: "Como Trabalho",
        step1_title: "Descoberta",
        step1_desc: "Entendo sua marca, objetivos e público para criar uma base sólida para o projeto.",
        step2_title: "Conceito",
        step2_desc: "Desenvolvo ideias criativas que se alinham com sua visão e falam com sua audiência.",
        step3_title: "Produção",
        step3_desc: "Executo a visão criativa com atenção aos detalhes e excelência técnica.",
        step4_title: "Entrega",
        step4_desc: "Entrego o material final otimizado para suas plataformas e canais específicos.",
        
        // About page - CTA
        about_cta_title: "Pronto para dar vida à sua ideia?",
        about_cta_subtitle: "Vamos conversar sobre como posso ajudar no seu próximo projeto",
        
        // Contact page - Meta
        contact_title: "Contato - Alberto Guimarães",
        contact_description: "Entre em contato comigo para discutir seu próximo projeto de edição de vídeo ou edição de fotos. Vamos criar algo incrível juntos.",
        
        // Contact page - Content
        contact_page_title: "Vamos Criar Juntos",
        contact_page_subtitle: "Pronto para transformar sua ideia em conteúdo visual marcante? Vamos conversar sobre seu projeto.",
        
        // Contact page - Form
        contact_form_title: "Conte-me Sobre Seu Projeto",
        form_name: "Nome *",
        form_email: "Email *",
        form_company: "Empresa",
        form_service: "Serviço *",
        form_select_service: "Selecione um serviço",
        service_video_production: "Produção de Vídeo",
        service_video_editing: "Edição de Vídeo",
        service_photo_editing: "Edição de Fotos",
        service_creative_direction: "Consultoria Criativa",
        service_other: "Outro",
        form_budget: "Orçamento Estimado (Opcional)",
        form_budget_placeholder: "Ex: $100 - $1000 USD",
        form_timeline: "Cronograma",
        form_select_timeline: "Selecione o cronograma",
        timeline_urgent: "Urgente (Rush job)",
        timeline_1month: "1 Mês",
        timeline_2_3months: "2-3 Meses",
        timeline_flexible: "Flexível",
        form_message: "Detalhes do Projeto *",
        form_message_placeholder: "Conte-me sobre seu projeto, objetivos e qualquer detalhe específico...",
        form_submit: "Enviar Mensagem",
        form_sending: "Enviando...",
        
        // Contact page - Info
        contact_info_title: "Vamos Conversar",
        contact_email_title: "Email",
        contact_phone_title: "WhatsApp",
        contact_location_title: "Localização",
        contact_location: "São Paulo, Brasil",
        contact_hours_title: "Tempo de Resposta",
        contact_hours: "Até 24 horas",
        
        // Contact page - Availability
        availability_title: "Disponibilidade Atual",
        availability_status: "Aceitando novos projetos",
        availability_description: "Atualmente disponível para novos projetos. Projetos urgentes podem ser acomodados com cronograma flexível.",
        
        // Contact page - FAQ
        faq_title: "Perguntas Frequentes",
        faq1_question: "Qual é o tempo típico dos seus projetos?",
        faq1_answer: "Projetos de edição de vídeo geralmente levam 1-3 semanas, dependendo da complexidade. Edição de fotos normalmente 1-2 semanas. Projetos urgentes são possíveis com prazo acordado.",
        faq2_question: "Você trabalha com clientes internacionais?",
        faq2_answer: "Sim! Trabalho com clientes no Brasil e no exterior. Toda comunicação pode ser em português, inglês ou espanhol conforme necessário.",
        faq3_question: "O que está incluído na edição de vídeo?",
        faq3_answer: "Edição completa incluindo cortes, correção de cor, mixagem de áudio, efeitos visuais e entrega em formatos otimizados para suas plataformas.",
        faq4_question: "Você ajuda com estratégia criativa?",
        faq4_answer: "Sim! Ofereço consultoria criativa incluindo desenvolvimento de conceito e direcionamento visual para garantir que seu conteúdo tenha máximo impacto.",
        
        // Success messages
        success_title: "Mensagem Enviada!",
        success_message: "Obrigado pelo interesse! Entrarei em contato em breve para conversarmos sobre seu projeto.",
        success_close: "Fechar",
        
        // Error messages
        error_name_short: "Nome deve ter pelo menos 2 caracteres",
        error_email_invalid: "Por favor, insira um endereço de email válido",
        error_message_short: "Mensagem deve ter pelo menos 10 caracteres",
        
        // Footer
        footer_copyright: "© 2024 Alberto Guimarães. Todos os direitos reservados."
    },
    
    // ==========================================
    // ENGLISH (US) - INTERNATIONAL MARKET
    // ==========================================
    en: {
        // Navigation
        nav_home: "Home",
        nav_work: "Work",
        nav_about: "About",
        nav_contact: "Contact",
        
        // Common elements
        loading: "Loading",
        scroll_text: "Scroll",
        view_project: "View Project",
        view_all_work: "View All Work",
        
        // Home page - Meta
        home_title: "Alberto Guimarães - Video Editor & Photo Editor",
        home_description: "Creative and passionate video editor, specialized in transforming ideas into impactful visual content for brands and creators.",
        
        // Home page - Hero
        hero_title: "Video Editor & Photo Editor",
        hero_subtitle: "Transforming ideas into engaging visual narratives that connect brands with their audiences",
        hero_cta_work: "View Work",
        hero_cta_contact: "Start Project",
        
        // Home page - Featured Work
        featured_title: "Featured Work",
        featured_subtitle: "Selected projects that showcase my passion for visual storytelling",
        featured_project1_title: "Tech Startup Campaign",
        featured_project1_desc: "Brand video for growing startup",
        featured_project2_title: "Corporate Image Editing",
        featured_project2_desc: "Professional portrait retouching and editing",
        featured_project3_title: "Influencer Content",
        featured_project3_desc: "YouTube series production",
        
        // Categories
        video_editing: "Video Editing",
        image_editing: "Image Editing",
        
        // Home page - Services
        services_title: "Services",
        services_subtitle: "Creative solutions to bring your ideas to life",
        service1_title: "Video Editing",
        service1_desc: "From concept to delivery, creating content that tells your brand's story authentically.",
        service2_title: "Post-Production",
        service2_desc: "Careful editing, color correction, and visual effects to elevate your content.",
        service3_title: "Photo Editing",
        service3_desc: "Retouching and editing images to communicate your message with clarity and impact.",
        service4_title: "Creative Consulting",
        service4_desc: "Helping you define the visual direction that best represents your brand.",
        
        // Home page - CTA
        cta_title: "Let's create something amazing together?",
        cta_subtitle: "Tell me about your project and let's turn your vision into reality",
        cta_button: "Start Conversation",
        
        // Work page - Meta
        work_title: "Portfolio - Alberto Guimarães",
        work_description: "Explore my portfolio: video editing and image editing projects that tell authentic stories.",
        
        // Work page - Content
        work_page_title: "Portfolio",
        work_page_subtitle: "A collection of my favorite visual storytelling projects",
        filter_all: "All Work",
        filter_video: "Video Editing",
        filter_photography: "Image Editing",
        
        // Work page - Projects
        project1_title: "Tech Startup Brand Video",
        project1_category: "Video Editing",
        project2_title: "Executive Portrait Editing",
        project2_category: "Image Editing",
        project3_title: "YouTube Series Production",
        project3_category: "Video Editing",
        project4_title: "Product Photo Editing",
        project4_category: "Image Editing",
        project5_title: "Social Media Content",
        project5_category: "Video Editing",
        project6_title: "Lifestyle Photo Editing",
        project6_category: "Image Editing",
        
        // Modal - Case Study
        challenge_title: "Challenge",
        solution_title: "Solution",
        result_title: "Result",
        
        // About page - Meta
        about_title: "About - Alberto Guimarães",
        about_description: "Learn about my journey as a video editor and photo editor, my passion for details and how I work to create content that truly matters.",
        
        // About page - Content
        about_page_title: "About Alberto",
        about_intro: "Video editor and photo editor passionate about transforming ideas into visual stories that connect and inspire.",
        about_description_full: "Specialized in creating authentic visual content that resonates with different audiences, always focusing on the message your brand wants to convey.",
        
        // About page - Values (replacing experience numbers)
        values_title: "My Values",
        value_passion_title: "Passion for Details",
        value_passion_desc: "A total dedication to each frame, cut and color to ensure an impactful final result.",
        value_collab_title: "Collaborative Process",
        value_collab_desc: "Clear and agile communication to ensure your vision is perfectly executed.",
        value_focus_title: "Focus on Your Goal",
        value_focus_desc: "More than beautiful visuals, the goal is to create a piece that works for your brand and achieves your goals.",
        
        // About page - Philosophy
        philosophy_title: "Creative Philosophy",
        philosophy_quote: "For me, editing isn't just about joining clips. It's about finding the rhythm, emotion, and story that lives within the raw material.",
        philosophy_description: "My approach combines technique with creative sensitivity, ensuring that every visual element serves the story we want to tell. I believe authentic content creates genuine connections.",
        
        // About page - Skills
        skills_title: "Skills & Expertise",
        video_skills_title: "Video Editing",
        video_skill_social_media: "Social Media Video Editing (Reels, TikTok, Shorts)",
        video_skill_youtube: "YouTube Editing (Vlogs, Tutorials, Reviews)",
        video_skill_corporate: "Corporate Video Editing (Institutional, Promotional)",
        video_skill_color_grading: "Color Grading and Color Correction",
        video_skill_motion_graphics: "Animations and Basic Motion Graphics",
        
        photo_skills_title: "Image Editing & Retouching",
        photo_skill_retouching: "Photo Retouching (People, Products)",
        photo_skill_color_correction: "Color Correction and White Balance in Photos",
        photo_skill_background_removal: "Background Removal and Replacement",
        photo_skill_manipulation: "Image Manipulation and Composition",
        photo_skill_optimization: "Image Optimization for Web and Social Media",
        
        creative_skills_title: "Creative Consulting",
        skill_strategy: "Creative Strategy",
        skill_brand: "Brand Development",
        skill_campaign: "Campaign Concept",
        skill_direction: "Art Direction",
        
        tech_skills_title: "Technology",
        skill_premiere: "Adobe Premiere Pro",
        skill_after: "After Effects",
        skill_photoshop: "Photoshop",
        skill_davinci: "DaVinci Resolve",
        
        // About page - Process
        process_title: "How I Work",
        step1_title: "Discovery",
        step1_desc: "Understanding your brand, goals, and audience to create a solid foundation for the project.",
        step2_title: "Concept",
        step2_desc: "Developing creative ideas that align with your vision and speak to your audience.",
        step3_title: "Production",
        step3_desc: "Executing the creative vision with attention to detail and technical excellence.",
        step4_title: "Delivery",
        step4_desc: "Delivering final assets optimized for your specific platforms and channels.",
        
        // About page - CTA
        about_cta_title: "Ready to bring your idea to life?",
        about_cta_subtitle: "Let's talk about how I can help with your next project",
        
        // Contact page - Meta
        contact_title: "Contact - Alberto Guimarães",
        contact_description: "Get in touch with me to discuss your next video editing or photo editing project. Let's create something amazing together.",
        
        // Contact page - Content
        contact_page_title: "Let's Create Together",
        contact_page_subtitle: "Ready to transform your idea into impactful visual content? Let's talk about your project.",
        
        // Contact page - Form
        contact_form_title: "Tell Me About Your Project",
        form_name: "Name *",
        form_email: "Email *",
        form_company: "Company",
        form_service: "Service *",
        form_select_service: "Select a service",
        service_video_production: "Video Production",
        service_video_editing: "Video Editing",
        service_photo_editing: "Photo Editing",
        service_creative_direction: "Creative Consulting",
        service_other: "Other",
        form_budget: "Estimated Budget (Optional)",
        form_budget_placeholder: "Ex: $100 - $1000 USD",
        form_timeline: "Timeline",
        form_select_timeline: "Select timeline",
        timeline_urgent: "ASAP (Rush job)",
        timeline_1month: "1 Month",
        timeline_2_3months: "2-3 Months",
        timeline_flexible: "Flexible",
        form_message: "Project Details *",
        form_message_placeholder: "Tell me about your project, goals, and any specific details...",
        form_submit: "Send Message",
        form_sending: "Sending...",
        
        // Contact page - Info
        contact_info_title: "Let's Talk",
        contact_email_title: "Email",
        contact_phone_title: "WhatsApp",
        contact_location_title: "Location",
        contact_location: "São Paulo, Brazil",
        contact_hours_title: "Response Time",
        contact_hours: "Within 24 hours",
        
        // Contact page - Availability
        availability_title: "Current Availability",
        availability_status: "Accepting new projects",
        availability_description: "Currently available for new projects. Rush projects can be accommodated with flexible timeline.",
        
        // Contact page - FAQ
        faq_title: "Frequently Asked Questions",
        faq1_question: "What's your typical project timeline?",
        faq1_answer: "Video editing projects usually take 1-3 weeks, depending on complexity. Photo editing typically 1-2 weeks. Rush projects are possible with agreed deadline.",
        faq2_question: "Do you work with international clients?",
        faq2_answer: "Yes! I work with clients in Brazil and abroad. All communication can be in Portuguese, English, or Spanish as needed.",
        faq3_question: "What's included in video editing?",
        faq3_answer: "Complete editing including cuts, color correction, audio mixing, visual effects, and delivery in formats optimized for your platforms.",
        faq4_question: "Do you help with creative strategy?",
        faq4_answer: "Yes! I offer creative consulting including concept development and visual direction to ensure your content has maximum impact.",
        
        // Success messages
        success_title: "Message Sent!",
        success_message: "Thank you for your interest! I'll get back to you soon to discuss your project.",
        success_close: "Close",
        
        // Error messages
        error_name_short: "Name must be at least 2 characters",
        error_email_invalid: "Please enter a valid email address",
        error_message_short: "Message must be at least 10 characters",
        
        // Footer
        footer_copyright: "© 2024 Alberto Guimarães. All rights reserved."
    },
    
    // ==========================================
    // SPANISH (ES) - LATIN AMERICA MARKET
    // ==========================================
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_work: "Portafolio",
        nav_about: "Acerca",
        nav_contact: "Contacto",
        
        // Common elements
        loading: "Cargando",
        scroll_text: "Desplazar",
        view_project: "Ver Proyecto",
        view_all_work: "Ver Todo el Trabajo",
        
        // Home page - Meta
        home_title: "Alberto Guimarães - Editor de Video y Editor de Fotos",
        home_description: "Editor de video creativo y apasionado, especializado en transformar ideas en contenido visual impactante para marcas y creadores.",
        
        // Home page - Hero
        hero_title: "Editor de Video y Editor de Fotos",
        hero_subtitle: "Transformando ideas en narrativas visuales atractivas que conectan marcas con sus audiencias",
        hero_cta_work: "Ver Trabajo",
        hero_cta_contact: "Iniciar Proyecto",
        
        // Home page - Featured Work
        featured_title: "Trabajo Destacado",
        featured_subtitle: "Proyectos seleccionados que muestran mi pasión por el storytelling visual",
        featured_project1_title: "Campaña para Startup Tech",
        featured_project1_desc: "Video de marca para startup en crecimiento",
        featured_project2_title: "Edición de Imágenes Corporativas",
        featured_project2_desc: "Retoque y edición de retratos profesionales",
        featured_project3_title: "Contenido para Influencer",
        featured_project3_desc: "Producción de serie para YouTube",
        
        // Categories
        video_editing: "Edición de Video",
        image_editing: "Edición de Imagen",
        
        // Home page - Services
        services_title: "Servicios",
        services_subtitle: "Soluciones creativas para dar vida a tus ideas",
        service1_title: "Edición de Video",
        service1_desc: "Del concepto a la entrega, creando contenido que cuenta la historia de tu marca auténticamente.",
        service2_title: "Postproducción",
        service2_desc: "Edición cuidadosa, corrección de color y efectos visuales para elevar tu contenido.",
        service3_title: "Edición de Fotos",
        service3_desc: "Retoque y edición de imágenes para comunicar tu mensaje con claridad e impacto.",
        service4_title: "Consultoría Creativa",
        service4_desc: "Ayudándote a definir la dirección visual que mejor representa tu marca.",
        
        // Home page - CTA
        cta_title: "¿Vamos a crear algo increíble juntos?",
        cta_subtitle: "Cuéntame sobre tu proyecto y transformemos tu visión en realidad",
        cta_button: "Iniciar Conversación",
        
        // Work page - Meta
        work_title: "Portafolio - Alberto Guimarães",
        work_description: "Explora mi portafolio: proyectos de edición de video y edición de imágenes que cuentan historias auténticas.",
        
        // Work page - Content
        work_page_title: "Portafolio",
        work_page_subtitle: "Una colección de mis proyectos favoritos de storytelling visual",
        filter_all: "Todo el Trabajo",
        filter_video: "Edición de Video",
        filter_photography: "Edición de Imagen",
        
        // Work page - Projects
        project1_title: "Video de Marca para Startup Tech",
        project1_category: "Edición de Video",
        project2_title: "Edición de Retratos Ejecutivos",
        project2_category: "Edición de Imagen",
        project3_title: "Producción de Serie para YouTube",
        project3_category: "Edición de Video",
        project4_title: "Edición de Fotos de Producto",
        project4_category: "Edición de Imagen",
        project5_title: "Contenido para Redes Sociales",
        project5_category: "Edición de Video",
        project6_title: "Edición de Fotos de Lifestyle",
        project6_category: "Edición de Imagen",
        
        // Modal - Case Study
        challenge_title: "Desafío",
        solution_title: "Solución",
        result_title: "Resultado",
        
        // About page - Meta
        about_title: "Acerca - Alberto Guimarães",
        about_description: "Conoce mi viaje como editor de video y editor de fotos, mi pasión por los detalles y cómo trabajo para crear contenido que realmente importa.",
        
        // About page - Content
        about_page_title: "Acerca de Alberto",
        about_intro: "Editor de video y editor de fotos apasionado por transformar ideas en historias visuales que conectan e inspiran.",
        about_description_full: "Especializado en crear contenido visual auténtico que resuena con diferentes audiencias, siempre enfocándome en el mensaje que tu marca quiere transmitir.",
        
        // About page - Values (replacing experience numbers)
        values_title: "Mis Valores",
        value_passion_title: "Pasión por los Detalles",
        value_passion_desc: "Una dedicación total a cada frame, corte y color para garantizar un resultado final impactante.",
        value_collab_title: "Proceso Colaborativo",
        value_collab_desc: "Comunicación clara y ágil para garantizar que tu visión sea perfectamente ejecutada.",
        value_focus_title: "Enfoque en tu Objetivo",
        value_focus_desc: "Más que visuales hermosos, el objetivo es crear una pieza que funcione para tu marca y logre tus metas.",
        
        // About page - Philosophy
        philosophy_title: "Filosofía Creativa",
        philosophy_quote: "Para mí, editar no es solo unir clips. Es encontrar el ritmo, la emoción y la historia que vive dentro del material crudo.",
        philosophy_description: "Mi enfoque combina técnica con sensibilidad creativa, asegurando que cada elemento visual sirva a la historia que queremos contar. Creo que el contenido auténtico crea conexiones genuinas.",
        
        // About page - Skills
        skills_title: "Habilidades y Expertise",
        video_skills_title: "Edición de Video",
        video_skill_social_media: "Edición de Videos para Redes Sociales (Reels, TikTok, Shorts)",
        video_skill_youtube: "Edición para YouTube (Vlogs, Tutoriales, Reviews)",
        video_skill_corporate: "Edición de Videos Corporativos (Institucionales, Promocionales)",
        video_skill_color_grading: "Color Grading y Corrección de Color",
        video_skill_motion_graphics: "Animaciones y Motion Graphics (Básicos)",
        
        photo_skills_title: "Edición de Imagen y Retoque",
        photo_skill_retouching: "Retoque de Fotos (Personas, Productos)",
        photo_skill_color_correction: "Corrección de Color y Balance de Blancos en Fotos",
        photo_skill_background_removal: "Remoción y Reemplazo de Fondos",
        photo_skill_manipulation: "Manipulación y Composición de Imágenes",
        photo_skill_optimization: "Optimización de Imágenes para Web y Redes Sociales",
        
        creative_skills_title: "Consultoría Creativa",
        skill_strategy: "Estrategia Creativa",
        skill_brand: "Desarrollo de Marca",
        skill_campaign: "Concepto de Campaña",
        skill_direction: "Dirección de Arte",
        
        tech_skills_title: "Tecnología",
        skill_premiere: "Adobe Premiere Pro",
        skill_after: "After Effects",
        skill_photoshop: "Photoshop",
        skill_davinci: "DaVinci Resolve",
        
        // About page - Process
        process_title: "Cómo Trabajo",
        step1_title: "Descubrimiento",
        step1_desc: "Entendiendo tu marca, objetivos y audiencia para crear una base sólida para el proyecto.",
        step2_title: "Concepto",
        step2_desc: "Desarrollando ideas creativas que se alineen con tu visión y hablen a tu audiencia.",
        step3_title: "Producción",
        step3_desc: "Ejecutando la visión creativa con atención al detalle y excelencia técnica.",
        step4_title: "Entrega",
        step4_desc: "Entregando assets finales optimizados para tus plataformas y canales específicos.",
        
        // About page - CTA
        about_cta_title: "¿Listo para dar vida a tu idea?",
        about_cta_subtitle: "Hablemos sobre cómo puedo ayudar con tu próximo proyecto",
        
        // Contact page - Meta
        contact_title: "Contacto - Alberto Guimarães",
        contact_description: "Contáctame para discutir tu próximo proyecto de edición de video o edición de fotos. Vamos a crear algo increíble juntos.",
        
        // Contact page - Content
        contact_page_title: "Creemos Juntos",
        contact_page_subtitle: "¿Listo para transformar tu idea en contenido visual impactante? Hablemos sobre tu proyecto.",
        
        // Contact page - Form
        contact_form_title: "Cuéntame Sobre Tu Proyecto",
        form_name: "Nombre *",
        form_email: "Email *",
        form_company: "Empresa",
        form_service: "Servicio *",
        form_select_service: "Selecciona un servicio",
        service_video_production: "Producción de Video",
        service_video_editing: "Edición de Video",
        service_photo_editing: "Edición de Fotos",
        service_creative_direction: "Consultoría Creativa",
        service_other: "Otro",
        form_budget: "Presupuesto Estimado (Opcional)",
        form_budget_placeholder: "Ej: $100 - $1000 USD",
        form_timeline: "Cronograma",
        form_select_timeline: "Selecciona cronograma",
        timeline_urgent: "Urgente (Trabajo rush)",
        timeline_1month: "1 Mes",
        timeline_2_3months: "2-3 Meses",
        timeline_flexible: "Flexible",
        form_message: "Detalles del Proyecto *",
        form_message_placeholder: "Cuéntame sobre tu proyecto, objetivos y cualquier detalle específico...",
        form_submit: "Enviar Mensaje",
        form_sending: "Enviando...",
        
        // Contact page - Info
        contact_info_title: "Hablemos",
        contact_email_title: "Email",
        contact_phone_title: "WhatsApp",
        contact_location_title: "Ubicación",
        contact_location: "São Paulo, Brasil",
        contact_hours_title: "Tiempo de Respuesta",
        contact_hours: "Dentro de 24 horas",
        
        // Contact page - Availability
        availability_title: "Disponibilidad Actual",
        availability_status: "Aceptando nuevos proyectos",
        availability_description: "Actualmente disponible para nuevos proyectos. Proyectos urgentes pueden acomodarse con cronograma flexible.",
        
        // Contact page - FAQ
        faq_title: "Preguntas Frecuentes",
        faq1_question: "¿Cuál es tu tiempo típico de proyecto?",
        faq1_answer: "Proyectos de edición de video usualmente toman 1-3 semanas, dependiendo de la complejidad. Edición de fotos típicamente 1-2 semanas. Proyectos urgentes son posibles con fecha límite acordada.",
        faq2_question: "¿Trabajas con clientes internacionales?",
        faq2_answer: "¡Sí! Trabajo con clientes en Brasil y el extranjero. Toda comunicación puede ser en portugués, inglés o español según sea necesario.",
        faq3_question: "¿Qué está incluido en la edición de video?",
        faq3_answer: "Edición completa incluyendo cortes, corrección de color, mezcla de audio, efectos visuales y entrega en formatos optimizados para tus plataformas.",
        faq4_question: "¿Ayudas con estrategia creativa?",
        faq4_answer: "¡Sí! Ofrezco consultoría creativa incluyendo desarrollo de concepto y dirección visual para asegurar que tu contenido tenga máximo impacto.",
        
        // Success messages
        success_title: "¡Mensaje Enviado!",
        success_message: "¡Gracias por tu interés! Te contactaré pronto para discutir tu proyecto.",
        success_close: "Cerrar",
        
        // Error messages
        error_name_short: "El nombre debe tener al menos 2 caracteres",
        error_email_invalid: "Por favor ingresa una dirección de email válida",
        error_message_short: "El mensaje debe tener al menos 10 caracteres",
        
        // Footer
        footer_copyright: "© 2024 Alberto Guimarães. Todos los derechos reservados."
    }
};

// Export translations for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
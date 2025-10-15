/*
 * Internationalization (i18n) system for Portfolio Website
 * Handles language switching and text translation
 */

// Translation data
const translations = {
    en: {
        nav: {
            logo: "Brandon D. Vernon",
            home: "Home",
            about: "About",
            work: "Work",
            skills: "Skills",
            contact: "Contact"
        },
        home: {
            heading: "Code Dreams to Reality!",
            subtitle: "Web Developer | UX/UI Developer | Software Developer",
            cta: "View My Work"
        },
        about: {
            title: "About Me",
            heading: "The Art Behind the Code",
            description: "I’m Brandon, a full-stack web developer who lives by the mantra “Code Dreams to Reality.” My journey began at The Art Institute of California – North Hollywood, where I earned my Bachelor’s in Web Design & Interactive Media. What started as an interest in art and technology evolved into a passion for crafting digital experiences that blend creativity with function. Guided by the Most High, I approach every project with understanding, adaptability, and a drive to go the extra mile. To me, code isn’t just logic, it’s a canvas where imagination meets purpose."
        },
        work: {
            title: "My Work",
            subtitle: "A showcase of my recent projects",
            project1: {
                title: "Home Garden 101",
                description: "Landscaping and Outdoors Service"
            },
            project2: {
                title: "Spektrum Magazine",
                description: "Lifestyle and Culture Magazine"
            },
            project3: {
                title: "Butter Bakery",
                description: "Home Made Bakery"
            },
            project4: {
                title: "Advantage Video System",
                description: "Product and Information"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "Marketing Agency"
            },
            project6: {
                title: "Happy Dot Box",
                description: "Luxury Beauty Products"
            },
            detail: {
                role: "Role",
                responsibilities: "Responsibilities",
                technologies: "Technologies",
                visit: "Visit Website"
            }
        },
        skills: {
            title: "Skills & Technologies",
            subtitle: "Tools and technologies I work with",
            frontend: {
                title: "Front-end Languages",
                html: "Semantic markup and accessibility",
                "html.tooltip": "5+ years experience with semantic HTML5",
                css: "Advanced styling and animations",
                "css.tooltip": "Expert in CSS Grid, Flexbox, and animations",
                js: "ES6+ and modern frameworks",
                "js.tooltip": "Advanced JavaScript with React, and Node.js"
            },
            backend: {
                title: "Back-end Languages",
                node: "Server-side JavaScript",
                "node.tooltip": "Express.js, REST APIs, and real-time applications",
                php: "Web development and CMS",
                "php.tooltip": "Laravel, WordPress, and custom applications"
            },
            build: {
                title: "Build Technologies",
                webpack: "Module bundling and optimization",
                "webpack.tooltip": "Advanced configuration and performance optimization",
                vite: "Fast build tool and dev server",
                "vite.tooltip": "Modern development experience with hot reload",
                docker: "Containerization and deployment",
                "docker.tooltip": "Container orchestration and CI/CD pipelines"
            },
            cms: {
                title: "CMS Platforms",
                wordpress: "Custom themes and plugins",
                "wordpress.tooltip": "Advanced customization and performance optimization",
                Shopify: "Commerce platform to sale",
                "shopify.tooltip": "All-in-one platform for building online stores",
                squarespace: "Offers stylish templates and design",
                "squarespace.tooltip": "All-in-one website builder"
            },
            learning: {
                title: "Learning / In Progress",
                python: "Data science and automation",
                "python.tooltip": "Django, Flask, and machine learning libraries",
                ai: "Machine learning applications",
                "ai.tooltip": "TensorFlow, PyTorch, and practical AI solutions"
            }
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Let's work together on your next project",
            heading: "Ready to Start a Project?",
            description: "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            form: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                inquiry: "Type of Inquiry",
                project: "Hiring",
                collaboration: "Freelance",
                message: "Message",
                submit: "Send Message",
                success: "Thank you! Your message has been sent successfully.",
                error: "Sorry, there was an error sending your message. Please try again."
            }
        },
        footer: {
            heading: "Let's Connect",
            subtitle: "Building the future, one project at a time",
            copyright: "© Brandon D. Vernon. 2025. All Rights Reserved."
        }
    },
    es: {
        nav: {
            logo: "Brandon D. Vernon",
            home: "Inicio",
            about: "Acerca de",
            work: "Trabajo",
            skills: "Habilidades",
            contact: "Contacto"
        },
        home: {
            heading: "¡Convierte Sueños en Realidad con Código!",
            subtitle: "Desarrollador Web | Desarrollador UX/UI | Desarrollador de Software",
            cta: "Ver Mi Trabajo"
        },
        about: {
            title: "Acerca de Mí",
            heading: "El Arte Detrás del Código",
            description: "Soy Brandon, un desarrollador web full-stack que vive bajo el lema “Convierte Sueños en Realidad con Código”. Mi viaje comenzó en The Art Institute of California – North Hollywood, donde obtuve mi Licenciatura en Diseño Web y Medios Interactivos. Lo que comenzó como un interés en el arte y la tecnología evolucionó en una pasión por crear experiencias digitales que combinan creatividad con funcionalidad. Guiado por lo Más Alto, abordo cada proyecto con comprensión, adaptabilidad y un impulso por ir más allá. Para mí, el código no es solo lógica, es un lienzo donde la imaginación se encuentra con el propósito."
        },
        work: {
            title: "Mi Trabajo",
            subtitle: "Una muestra de mis proyectos recientes",
            project1: {
                title: "Jardín en Casa 101",
                description: "Servicio de Paisajismo y Exteriores"
            },
            project2: {
                title: "Revista Spektrum",
                description: "Revista de Estilo de Vida y Cultura"
            },
            project3: {
                title: "Panadería Butter",
                description: "Panadería Casera"
            },
            project4: {
                title: "Sistema de Video Advantage",
                description: "Producto e Información"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "Agencia de Marketing"
            },
            project6: {
                title: "Caja de Puntos Felices",
                description: "Productos de Belleza de Lujo"
            },
            detail: {
                role: "Rol",
                responsibilities: "Responsabilidades",
                technologies: "Tecnologías",
                visit: "Visitar Sitio Web"
            }
        },
        skills: {
            title: "Habilidades y Tecnologías",
            subtitle: "Herramientas y tecnologías con las que trabajo",
            frontend: {
                title: "Lenguajes Front-end",
                html: "Marcado semántico y accesibilidad",
                "html.tooltip": "Más de 5 años de experiencia con HTML5 semántico",
                css: "Estilizado avanzado y animaciones",
                "css.tooltip": "Experto en CSS Grid, Flexbox y animaciones",
                js: "ES6+ y frameworks modernos",
                "js.tooltip": "JavaScript avanzado con React y Node.js"
            },
            backend: {
                title: "Lenguajes Back-end",
                node: "JavaScript del lado del servidor",
                "node.tooltip": "Express.js, APIs REST y aplicaciones en tiempo real",
                php: "Desarrollo web y CMS",
                "php.tooltip": "Laravel, WordPress y aplicaciones personalizadas"
            },
            build: {
                title: "Tecnologías de Construcción",
                webpack: "Agrupación de módulos y optimización",
                "webpack.tooltip": "Configuración avanzada y optimización de rendimiento",
                vite: "Herramienta de construcción rápida y servidor de desarrollo",
                "vite.tooltip": "Experiencia de desarrollo moderna con recarga en caliente",
                docker: "Contenerización y despliegue",
                "docker.tooltip": "Orquestación de contenedores y pipelines CI/CD"
            },
            cms: {
                title: "Plataformas CMS",
                wordpress: "Temas y plugins personalizados",
                "wordpress.tooltip": "Personalización avanzada y optimización de rendimiento",
                Shopify: "Plataforma de comercio para ventas",
                "shopify.tooltip": "Plataforma todo en uno para crear tiendas en línea",
                squarespace: "Ofrece plantillas y diseño elegantes",
                "squarespace.tooltip": "Creador de sitios web todo en uno"
            },
            learning: {
                title: "Aprendiendo / En Progreso",
                python: "Ciencia de datos y automatización",
                "python.tooltip": "Django, Flask y bibliotecas de aprendizaje automático",
                ai: "Aplicaciones de aprendizaje automático",
                "ai.tooltip": "TensorFlow, PyTorch y soluciones prácticas de IA"
            }
        },
        contact: {
            title: "Ponte en Contacto",
            subtitle: "Trabajemos juntos en tu próximo proyecto",
            heading: "¿Listo para Iniciar un Proyecto?",
            description: "Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré lo mejor para responderte!",
            form: {
                firstName: "Nombre",
                lastName: "Apellido",
                email: "Correo Electrónico",
                inquiry: "Tipo de Consulta",
                project: "Contratación",
                collaboration: "Freelance",
                message: "Mensaje",
                submit: "Enviar Mensaje",
                success: "¡Gracias! Tu mensaje ha sido enviado con éxito.",
                error: "Lo siento, hubo un error al enviar tu mensaje. Por favor, intenta de nuevo."
            }
        },
        footer: {
            heading: "Conectemos",
            subtitle: "Construyendo el futuro, un proyecto a la vez",
            copyright: "© Brandon D. Vernon. 2025. Todos los derechos reservados."
        }
    },
    fr: {
        nav: {
            logo: "Brandon D. Vernon",
            home: "Accueil",
            about: "À propos",
            work: "Travail",
            skills: "Compétences",
            contact: "Contact"
        },
        home: {
            heading: "Transformez vos rêves en réalité avec le code !",
            subtitle: "Développeur Web | Développeur UX/UI | Développeur Logiciel",
            cta: "Voir mon travail"
        },
        about: {
            title: "À propos de moi",
            heading: "L'art derrière le code",
            description: "Je m'appelle Brandon, un développeur web full-stack qui vit selon la devise « Transformez vos rêves en réalité avec le code ». Mon parcours a commencé à The Art Institute of California – North Hollywood, où j'ai obtenu mon diplôme en design web et médias interactifs. Ce qui a débuté comme un intérêt pour l'art et la technologie s'est transformé en une passion pour créer des expériences numériques qui allient créativité et fonctionnalité. Guidé par une inspiration supérieure, j'aborde chaque projet avec compréhension, adaptabilité et une volonté d'aller au-delà. Pour moi, le code n'est pas seulement logique, c'est une toile où l'imagination rencontre l'objectif."
        },
        work: {
            title: "Mon travail",
            subtitle: "Une vitrine de mes projets récents",
            project1: {
                title: "Jardin à la maison 101",
                description: "Service d'aménagement paysager et d'extérieur"
            },
            project2: {
                title: "Magazine Spektrum",
                description: "Magazine de style de vie et de culture"
            },
            project3: {
                title: "Boulangerie Butter",
                description: "Boulangerie artisanale"
            },
            project4: {
                title: "Système Vidéo Advantage",
                description: "Produit et information"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "Agence de marketing"
            },
            project6: {
                title: "Boîte à Points Heureux",
                description: "Produits de beauté de luxe"
            },
            detail: {
                role: "Rôle",
                responsibilities: "Responsabilités",
                technologies: "Technologies",
                visit: "Visiter le site web"
            }
        },
        skills: {
            title: "Compétences et technologies",
            subtitle: "Outils et technologies avec lesquels je travaille",
            frontend: {
                title: "Langages Front-end",
                html: "Balisage sémantique et accessibilité",
                "html.tooltip": "Plus de 5 ans d'expérience avec HTML5 sémantique",
                css: "Style avancé et animations",
                "css.tooltip": "Expert en CSS Grid, Flexbox et animations",
                js: "ES6+ et frameworks modernes",
                "js.tooltip": "JavaScript avancé avec React et Node.js"
            },
            backend: {
                title: "Langages Back-end",
                node: "JavaScript côté serveur",
                "node.tooltip": "Express.js, APIs REST et applications en temps réel",
                php: "Développement web et CMS",
                "php.tooltip": "Laravel, WordPress et applications personnalisées"
            },
            build: {
                title: "Technologies de construction",
                webpack: "Regroupement de modules et optimisation",
                "webpack.tooltip": "Configuration avancée et optimisation des performances",
                vite: "Outil de construction rapide et serveur de développement",
                "vite.tooltip": "Expérience de développement moderne avec rechargement à chaud",
                docker: "Conteneurisation et déploiement",
                "docker.tooltip": "Orchestration de conteneurs et pipelines CI/CD"
            },
            cms: {
                title: "Plateformes CMS",
                wordpress: "Thèmes et plugins personnalisés",
                "wordpress.tooltip": "Personnalisation avancée et optimisation des performances",
                Shopify: "Plateforme de commerce pour la vente",
                "shopify.tooltip": "Plateforme tout-en-un pour créer des boutiques en ligne",
                squarespace: "Offre des modèles élégants et un design",
                "squarespace.tooltip": "Constructeur de sites web tout-en-un"
            },
            learning: {
                title: "En apprentissage / En cours",
                python: "Science des données et automatisation",
                "python.tooltip": "Django, Flask et bibliothèques d'apprentissage automatique",
                ai: "Applications d'apprentissage automatique",
                "ai.tooltip": "TensorFlow, PyTorch et solutions pratiques d'IA"
            }
        },
        contact: {
            title: "Prenez contact",
            subtitle: "Travaillons ensemble sur votre prochain projet",
            heading: "Prêt à démarrer un projet ?",
            description: "Je suis toujours intéressé par de nouvelles opportunités et des projets excitants. Que vous ayez une question ou que vous souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",
            form: {
                firstName: "Prénom",
                lastName: "Nom de famille",
                email: "Email",
                inquiry: "Type de demande",
                project: "Embauche",
                collaboration: "Freelance",
                message: "Message",
                submit: "Envoyer le message",
                success: "Merci ! Votre message a été envoyé avec succès.",
                error: "Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer."
            }
        },
        footer: {
            heading: "Connectons-nous",
            subtitle: "Construire l'avenir, un projet à la fois",
            copyright: "© Brandon D. Vernon. 2025. Tous droits réservés."
        }
    },
    de: {
        nav: {
            logo: "Brandon D. Vernon",
            home: "Startseite",
            about: "Über mich",
            work: "Arbeiten",
            skills: "Fähigkeiten",
            contact: "Kontakt"
        },
        home: {
            heading: "Träume in Code verwandeln!",
            subtitle: "Webentwickler | UX/UI-Entwickler | Softwareentwickler",
            cta: "Meine Arbeiten ansehen"
        },
        about: {
            title: "Über mich",
            heading: "Die Kunst hinter dem Code",
            description: "Ich bin Brandon, ein Full-Stack-Webentwickler, der nach dem Motto lebt: „Träume in Code verwandeln.“ Meine Reise begann am Art Institute of California – North Hollywood, wo ich meinen Bachelor-Abschluss in Webdesign und interaktiven Medien erwarb. Was als Interesse an Kunst und Technologie begann, entwickelte sich zu einer Leidenschaft für die Schaffung digitaler Erlebnisse, die Kreativität mit Funktionalität verbinden. Geleitet von einer höheren Eingebung, gehe ich jedes Projekt mit Verständnis, Anpassungsfähigkeit und dem Drang an, das Extra zu leisten. Für mich ist Code nicht nur Logik, sondern eine Leinwand, auf der Vorstellungskraft und Zweck aufeinandertreffen."
        },
        work: {
            title: "Meine Arbeiten",
            subtitle: "Eine Auswahl meiner aktuellen Projekte",
            project1: {
                title: "Heimgarten 101",
                description: "Landschaftsgestaltung und Außendienst"
            },
            project2: {
                title: "Spektrum Magazin",
                description: "Lifestyle- und Kulturmagazin"
            },
            project3: {
                title: "Butter Bäckerei",
                description: "Hausgemachte Bäckerei"
            },
            project4: {
                title: "Advantage Videosystem",
                description: "Produkt und Information"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "Marketingagentur"
            },
            project6: {
                title: "Happy Dot Box",
                description: "Luxus-Schönheitsprodukte"
            },
            detail: {
                role: "Rolle",
                responsibilities: "Verantwortlichkeiten",
                technologies: "Technologien",
                visit: "Website besuchen"
            }
        },
        skills: {
            title: "Fähigkeiten & Technologien",
            subtitle: "Tools und Technologien, mit denen ich arbeite",
            frontend: {
                title: "Frontend-Sprachen",
                html: "Semantisches Markup und Barrierefreiheit",
                "html.tooltip": "Über 5 Jahre Erfahrung mit semantischem HTML5",
                css: "Fortgeschrittenes Styling und Animationen",
                "css.tooltip": "Experte für CSS Grid, Flexbox und Animationen",
                js: "ES6+ und moderne Frameworks",
                "js.tooltip": "Fortgeschrittenes JavaScript mit React und Node.js"
            },
            backend: {
                title: "Backend-Sprachen",
                node: "Serverseitiges JavaScript",
                "node.tooltip": "Express.js, REST-APIs und Echtzeitanwendungen",
                php: "Webentwicklung und CMS",
                "php.tooltip": "Laravel, WordPress und benutzerdefinierte Anwendungen"
            },
            build: {
                title: "Build-Technologien",
                webpack: "Modulbündelung und Optimierung",
                "webpack.tooltip": "Fortgeschrittene Konfiguration und Leistungsoptimierung",
                vite: "Schnelles Build-Tool und Entwicklungsserver",
                "vite.tooltip": "Moderne Entwicklungserfahrung mit Hot-Reloading",
                docker: "Containerisierung und Bereitstellung",
                "docker.tooltip": "Container-Orchestrierung und CI/CD-Pipelines"
            },
            cms: {
                title: "CMS-Plattformen",
                wordpress: "Benutzerdefinierte Themes und Plugins",
                "wordpress.tooltip": "Fortgeschrittene Anpassung und Leistungsoptimierung",
                Shopify: "Commerce-Plattform für den Verkauf",
                "shopify.tooltip": "All-in-One-Plattform für den Aufbau von Online-Shops",
                squarespace: "Bietet stilvolle Vorlagen und Design",
                "squarespace.tooltip": "All-in-One-Website-Builder"
            },
            learning: {
                title: "Lernen / In Arbeit",
                python: "Datenwissenschaft und Automatisierung",
                "python.tooltip": "Django, Flask und Machine-Learning-Bibliotheken",
                ai: "Anwendungen für maschinelles Lernen",
                "ai.tooltip": "TensorFlow, PyTorch und praktische KI-Lösungen"
            }
        },
        contact: {
            title: "Kontakt aufnehmen",
            subtitle: "Lass uns gemeinsam an deinem nächsten Projekt arbeiten",
            heading: "Bereit, ein Projekt zu starten?",
            description: "Ich bin immer an neuen Möglichkeiten und spannenden Projekten interessiert. Egal, ob du eine Frage hast oder einfach nur hallo sagen möchtest, ich werde mein Bestes tun, um dir zu antworten!",
            form: {
                firstName: "Vorname",
                lastName: "Nachname",
                email: "E-Mail",
                inquiry: "Art der Anfrage",
                project: "Einstellung",
                collaboration: "Freelance",
                message: "Nachricht",
                submit: "Nachricht senden",
                success: "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.",
                error: "Entschuldigung, es gab einen Fehler beim Senden deiner Nachricht. Bitte versuche es erneut."
            }
        },
        footer: {
            heading: "Lass uns verbinden",
            subtitle: "Die Zukunft bauen, ein Projekt nach dem anderen",
            copyright: "© Brandon D. Vernon. 2025. Alle Rechte vorbehalten."
        }
    },
    it: {
        nav: {
            logo: "Brandon D. Vernon",
            home: "Home",
            about: "Chi sono",
            work: "Lavori",
            skills: "Competenze",
            contact: "Contatti"
        },
        home: {
            heading: "Trasforma i sogni in realtà con il codice!",
            subtitle: "Sviluppatore Web | Sviluppatore UX/UI | Sviluppatore Software",
            cta: "Guarda i miei lavori"
        },
        about: {
            title: "Chi sono",
            heading: "L'arte dietro il codice",
            description: "Sono Brandon, uno sviluppatore web full-stack che vive secondo il motto “Trasforma i sogni in realtà con il codice”. Il mio percorso è iniziato presso The Art Institute of California – North Hollywood, dove ho conseguito una laurea in Web Design e Media Interattivi. Quello che è iniziato come un interesse per l'arte e la tecnologia si è evoluto in una passione per la creazione di esperienze digitali che combinano creatività e funzionalità. Guidato da un'ispirazione superiore, affronto ogni progetto con comprensione, adattabilità e la volontà di fare un passo in più. Per me, il codice non è solo logica, è una tela dove l'immaginazione incontra lo scopo."
        },
        work: {
            title: "I miei lavori",
            subtitle: "Una vetrina dei miei progetti recenti",
            project1: {
                title: "Giardino in casa 101",
                description: "Servizio di paesaggistica ed esterni"
            },
            project2: {
                title: "Rivista Spektrum",
                description: "Rivista di stile di vita e cultura"
            },
            project3: {
                title: "Pasticceria Butter",
                description: "Panetteria fatta in casa"
            },
            project4: {
                title: "Sistema Video Advantage",
                description: "Prodotto e informazioni"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "Agenzia di marketing"
            },
            project6: {
                title: "Happy Dot Box",
                description: "Prodotti di bellezza di lusso"
            },
            detail: {
                role: "Ruolo",
                responsibilities: "Responsabilità",
                technologies: "Tecnologie",
                visit: "Visita il sito web"
            }
        },
        skills: {
            title: "Competenze e tecnologie",
            subtitle: "Strumenti e tecnologie con cui lavoro",
            frontend: {
                title: "Linguaggi Front-end",
                html: "Markup semantico e accessibilità",
                "html.tooltip": "Oltre 5 anni di esperienza con HTML5 semantico",
                css: "Stilizzazione avanzata e animazioni",
                "css.tooltip": "Esperto in CSS Grid, Flexbox e animazioni",
                js: "ES6+ e framework moderni",
                "js.tooltip": "JavaScript avanzato con React e Node.js"
            },
            backend: {
                title: "Linguaggi Back-end",
                node: "JavaScript lato server",
                "node.tooltip": "Express.js, API REST e applicazioni in tempo reale",
                php: "Sviluppo web e CMS",
                "php.tooltip": "Laravel, WordPress e applicazioni personalizzate"
            },
            build: {
                title: "Tecnologie di costruzione",
                webpack: "Raggruppamento di moduli e ottimizzazione",
                "webpack.tooltip": "Configurazione avanzata e ottimizzazione delle prestazioni",
                vite: "Strumento di costruzione rapido e server di sviluppo",
                "vite.tooltip": "Esperienza di sviluppo moderna con ricarica a caldo",
                docker: "Containerizzazione e distribuzione",
                "docker.tooltip": "Orchestrazione di container e pipeline CI/CD"
            },
            cms: {
                title: "Piattaforme CMS",
                wordpress: "Temi e plugin personalizzati",
                "wordpress.tooltip": "Personalizzazione avanzata e ottimizzazione delle prestazioni",
                Shopify: "Piattaforma di commercio per la vendita",
                "shopify.tooltip": "Piattaforma all-in-one per la creazione di negozi online",
                squarespace: "Offre modelli eleganti e design",
                "squarespace.tooltip": "Costruttore di siti web all-in-one"
            },
            learning: {
                title: "In apprendimento / In corso",
                python: "Scienza dei dati e automazione",
                "python.tooltip": "Django, Flask e librerie di apprendimento automatico",
                ai: "Applicazioni di apprendimento automatico",
                "ai.tooltip": "TensorFlow, PyTorch e soluzioni pratiche di IA"
            }
        },
        contact: {
            title: "Contattami",
            subtitle: "Lavoriamo insieme al tuo prossimo progetto",
            heading: "Pronto a iniziare un progetto?",
            description: "Sono sempre interessato a nuove opportunità e progetti entusiasmanti. Che tu abbia una domanda o voglia semplicemente salutare, farò del mio meglio per risponderti!",
            form: {
                firstName: "Nome",
                lastName: "Cognome",
                email: "Email",
                inquiry: "Tipo di richiesta",
                project: "Assunzione",
                collaboration: "Freelance",
                message: "Messaggio",
                submit: "Invia messaggio",
                success: "Grazie! Il tuo messaggio è stato inviato con successo.",
                error: "Spiacenti, si è verificato un errore durante l'invio del messaggio. Riprova."
            }
        },
        footer: {
            heading: "Connettiamoci",
            subtitle: "Costruire il futuro, un progetto alla volta",
            copyright: "© Brandon D. Vernon. 2025. Tutti i diritti riservati."
        }
    },
    pt: {
        nav: {
            logo: "Brandon D. Vernon",
            home: "Início",
            about: "Sobre",
            work: "Trabalho",
            skills: "Habilidades",
            contact: "Contato"
        },
        home: {
            heading: "Transforme Sonhos em Realidade com Código!",
            subtitle: "Desenvolvedor Web | Desenvolvedor UX/UI | Desenvolvedor de Software",
            cta: "Ver Meu Trabalho"
        },
        about: {
            title: "Sobre Mim",
            heading: "A Arte por Trás do Código",
            description: "Eu sou Brandon, um desenvolvedor web full-stack que vive pelo lema “Transforme Sonhos em Realidade com Código”. Minha jornada começou no The Art Institute of California – North Hollywood, onde obtive meu Bacharelado em Design Web e Mídia Interativa. O que começou como um interesse em arte e tecnologia evoluiu para uma paixão por criar experiências digitais que combinam criatividade com funcionalidade. Guiado pelo Altíssimo, abordo cada projeto com compreensão, adaptabilidade e um impulso para ir além. Para mim, o código não é apenas lógica, é uma tela onde a imaginação encontra o propósito."
        },
        work: {
            title: "Meu Trabalho",
            subtitle: "Uma vitrine dos meus projetos recentes",
            project1: {
                title: "Jardim em Casa 101",
                description: "Serviço de Paisagismo e Exteriores"
            },
            project2: {
                title: "Revista Spektrum",
                description: "Revista de Estilo de Vida e Cultura"
            },
            project3: {
                title: "Padaria Butter",
                description: "Padaria Caseira"
            },
            project4: {
                title: "Sistema de Vídeo Advantage",
                description: "Produto e Informação"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "Agência de Marketing"
            },
            project6: {
                title: "Caixa de Pontos Felizes",
                description: "Produtos de Beleza de Luxo"
            },
            detail: {
                role: "Função",
                responsibilities: "Responsabilidades",
                technologies: "Tecnologias",
                visit: "Visitar o Site"
            }
        },
        skills: {
            title: "Habilidades e Tecnologias",
            subtitle: "Ferramentas e tecnologias com as quais trabalho",
            frontend: {
                title: "Linguagens Front-end",
                html: "Marcação semântica e acessibilidade",
                "html.tooltip": "Mais de 5 anos de experiência com HTML5 semântico",
                css: "Estilização avançada e animações",
                "css.tooltip": "Especialista em CSS Grid, Flexbox e animações",
                js: "ES6+ e frameworks modernos",
                "js.tooltip": "JavaScript avançado com React e Node.js"
            },
            backend: {
                title: "Linguagens Back-end",
                node: "JavaScript do lado do servidor",
                "node.tooltip": "Express.js, APIs REST e aplicações em tempo real",
                php: "Desenvolvimento web e CMS",
                "php.tooltip": "Laravel, WordPress e aplicações personalizadas"
            },
            build: {
                title: "Tecnologias de Construção",
                webpack: "Agrupamento de módulos e otimização",
                "webpack.tooltip": "Configuração avançada e otimização de desempenho",
                vite: "Ferramenta de construção rápida e servidor de desenvolvimento",
                "vite.tooltip": "Experiência de desenvolvimento moderna com recarga a quente",
                docker: "Contêinerização e implantação",
                "docker.tooltip": "Orquestração de contêineres e pipelines CI/CD"
            },
            cms: {
                title: "Plataformas CMS",
                wordpress: "Temas e plugins personalizados",
                "wordpress.tooltip": "Personalização avançada e otimização de desempenho",
                Shopify: "Plataforma de comércio para vendas",
                "shopify.tooltip": "Plataforma tudo-em-um para criar lojas online",
                squarespace: "Oferece modelos elegantes e design",
                "squarespace.tooltip": "Construtor de sites tudo-em-um"
            },
            learning: {
                title: "Aprendendo / Em Progresso",
                python: "Ciência de dados e automação",
                "python.tooltip": "Django, Flask e bibliotecas de aprendizado de máquina",
                ai: "Aplicações de aprendizado de máquina",
                "ai.tooltip": "TensorFlow, PyTorch e soluções práticas de IA"
            }
        },
        contact: {
            title: "Entre em Contato",
            subtitle: "Vamos trabalhar juntos no seu próximo projeto",
            heading: "Pronto para Iniciar um Projeto?",
            description: "Estou sempre interessado em novas oportunidades e projetos empolgantes. Seja para uma pergunta ou apenas para dizer oi, farei o meu melhor para responder!",
            form: {
                firstName: "Nome",
                lastName: "Sobrenome",
                email: "E-mail",
                inquiry: "Tipo de Consulta",
                project: "Contratação",
                collaboration: "Freelance",
                message: "Mensagem",
                submit: "Enviar Mensagem",
                success: "Obrigado! Sua mensagem foi enviada com sucesso.",
                error: "Desculpe-me, houve um erro ao enviar sua mensagem. Tente novamente."
            }
        },
        footer: {
            heading: "Vamos nos Conectar",
            subtitle: "Construindo o futuro, um projeto de cada vez",
            copyright: "© Brandon D. Vernon. 2025. Todos os direitos reservados."
        }
    },
    ru: {
        nav: {
            logo: "Брэндон Д. Вернон",
            home: "Главная",
            about: "Обо мне",
            work: "Работы",
            skills: "Навыки",
            contact: "Контакты"
        },
        home: {
            heading: "Превращайте мечты в реальность с кодом!",
            subtitle: "Веб-разработчик | Разработчик UX/UI | Разработчик программного обеспечения",
            cta: "Посмотреть мои работы"
        },
        about: {
            title: "Обо мне",
            heading: "Искусство за кодом",
            description: "Я Брэндон, веб-разработчик полного цикла, живущий по девизу «Превращайте мечты в реальность с кодом». Мое путешествие началось в Институте искусств Калифорнии – Северный Голливуд, где я получил степень бакалавра в области веб-дизайна и интерактивных медиа. То, что началось как интерес к искусству и технологиям, переросло в страсть к созданию цифровых впечатлений, сочетающих креативность и функциональность. Вдохновляемый высшими силами, я подхожу к каждому проекту с пониманием, адаптивностью и стремлением сделать больше. Для меня код – это не просто логика, это холст, где воображение встречается с целью."
        },
        work: {
            title: "Мои работы",
            subtitle: "Витрина моих последних проектов",
            project1: {
                title: "Домашний сад 101",
                description: "Услуги по ландшафтному дизайну и благоустройству"
            },
            project2: {
                title: "Журнал Спектрум",
                description: "Журнал о стиле жизни и культуре"
            },
            project3: {
                title: "Пекарня Butter",
                description: "Домашняя пекарня"
            },
            project4: {
                title: "Видеосистема Advantage",
                description: "Продукт и информация"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "Маркетинговое агентство"
            },
            project6: {
                title: "Happy Dot Box",
                description: "Роскошные косметические продукты"
            },
            detail: {
                role: "Роль",
                responsibilities: "Обязанности",
                technologies: "Технологии",
                visit: "Посетить сайт"
            }
        },
        skills: {
            title: "Навыки и технологии",
            subtitle: "Инструменты и технологии, с которыми я работаю",
            frontend: {
                title: "Языки фронтенда",
                html: "Семантическая разметка и доступность",
                "html.tooltip": "Более 5 лет опыта с семантическим HTML5",
                css: "Продвинутая стилизация и анимации",
                "css.tooltip": "Эксперт в CSS Grid, Flexbox и анимациях",
                js: "ES6+ и современные фреймворки",
                "js.tooltip": "Продвинутый JavaScript с React и Node.js"
            },
            backend: {
                title: "Языки бэкенда",
                node: "Серверный JavaScript",
                "node.tooltip": "Express.js, REST API и приложения реального времени",
                php: "Веб-разработка и CMS",
                "php.tooltip": "Laravel, WordPress и кастомные приложения"
            },
            build: {
                title: "Технологии сборки",
                webpack: "Сборка модулей и оптимизация",
                "webpack.tooltip": "Продвинутая настройка и оптимизация производительности",
                vite: "Быстрый инструмент сборки и сервер разработки",
                "vite.tooltip": "Современный опыт разработки с горячей перезагрузкой",
                docker: "Контейнеризация и развертывание",
                "docker.tooltip": "Оркестрация контейнеров и CI/CD пайплайны"
            },
            cms: {
                title: "Платформы CMS",
                wordpress: "Кастомные темы и плагины",
                "wordpress.tooltip": "Продвинутая настройка и оптимизация производительности",
                Shopify: "Платформа для коммерции и продаж",
                "shopify.tooltip": "Универсальная платформа для создания интернет-магазинов",
                squarespace: "Предлагает стильные шаблоны и дизайн",
                "squarespace.tooltip": "Универсальный конструктор сайтов"
            },
            learning: {
                title: "Изучаю / В процессе",
                python: "Наука о данных и автоматизация",
                "python.tooltip": "Django, Flask и библиотеки машинного обучения",
                ai: "Приложения машинного обучения",
                "ai.tooltip": "TensorFlow, PyTorch и практические решения ИИ"
            }
        },
        contact: {
            title: "Свяжитесь со мной",
            subtitle: "Давай работать вместе над твоим следующим проектом",
            heading: "Готов начать проект?",
            description: "Я всегда открыт для новых возможностей и захватывающих проектов. Будь то вопрос или просто желание поздороваться, я сделаю все возможное, чтобы ответить!",
            form: {
                firstName: "Имя",
                lastName: "Фамилия",
                email: "Электронная почта",
                inquiry: "Тип запроса",
                project: "Найм",
                collaboration: "Фриланс",
                message: "Сообщение",
                submit: "Отправить сообщение",
                success: "Спасибо! Ваше сообщение успешно отправлено.",
                error: "Извините, произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова."
            }
        },
        footer: {
            heading: "Давай свяжемся",
            subtitle: "Строим будущее, один проект за раз",
            copyright: "© Брэндон Д. Вернон. 2025. Все права защищены."
        }
    },
    ja: {
        nav: {
            logo: "ブランドン・D・バーノン",
            home: "ホーム",
            about: "私について",
            work: "作品",
            skills: "スキル",
            contact: "連絡先"
        },
        home: {
            heading: "コードで夢を現実に！",
            subtitle: "ウェブ開発者 | UX/UI開発者 | ソフトウェア開発者",
            cta: "私の作品を見る"
        },
        about: {
            title: "私について",
            heading: "コードの背後にある芸術",
            description: "私はブランドン、フルスタックウェブ開発者で、「コードで夢を現実に」というモットーを掲げています。私の旅はカリフォルニア州ノースハリウッドのアート・インスティテュートで始まり、ウェブデザインとインタラクティブメディアの学士号を取得しました。芸術とテクノロジーへの興味から始まったものが、創造性と機能性を融合させたデジタル体験を創り出す情熱へと進化しました。最高の導きのもと、理解力、適応力、そして一歩先を行く意欲を持って各プロジェクトに取り組んでいます。私にとって、コードは単なる論理ではなく、想像力と目的が出会うキャンバスです。"
        },
        work: {
            title: "私の作品",
            subtitle: "最近のプロジェクトのショーケース",
            project1: {
                title: "ホームガーデン101",
                description: "造園および屋外サービス"
            },
            project2: {
                title: "スペクトラムマガジン",
                description: "ライフスタイルと文化の雑誌"
            },
            project3: {
                title: "バターベーカリー",
                description: "自家製ベーカリー"
            },
            project4: {
                title: "アドバンテージビデオシステム",
                description: "製品と情報"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "マーケティングエージェンシー"
            },
            project6: {
                title: "ハッピードットボックス",
                description: "高級美容製品"
            },
            detail: {
                role: "役割",
                responsibilities: "責任",
                technologies: "技術",
                visit: "ウェブサイトを訪問"
            }
        },
        skills: {
            title: "スキルと技術",
            subtitle: "私が扱うツールと技術",
            frontend: {
                title: "フロントエンド言語",
                html: "セマンティックなマークアップとアクセシビリティ",
                "html.tooltip": "セマンティックHTML5で5年以上の経験",
                css: "高度なスタイリングとアニメーション",
                "css.tooltip": "CSS Grid、Flexbox、アニメーションの専門家",
                js: "ES6+とモダンフレームワーク",
                "js.tooltip": "ReactとNode.jsを使用した高度なJavaScript"
            },
            backend: {
                title: "バックエンド言語",
                node: "サーバーサイドJavaScript",
                "node.tooltip": "Express.js、REST API、リアルタイムアプリケーション",
                php: "ウェブ開発とCMS",
                "php.tooltip": "Laravel、WordPress、カスタムアプリケーション"
            },
            build: {
                title: "ビルド技術",
                webpack: "モジュールバンドリングと最適化",
                "webpack.tooltip": "高度な設定とパフォーマンス最適化",
                vite: "高速ビルドツールと開発サーバー",
                "vite.tooltip": "ホットリロード付きのモダンな開発体験",
                docker: "コンテナ化とデプロイメント",
                "docker.tooltip": "コンテナオーケストレーションとCI/CDパイプライン"
            },
            cms: {
                title: "CMSプラットフォーム",
                wordpress: "カスタムテーマとプラグイン",
                "wordpress.tooltip": "高度なカスタマイズとパフォーマンス最適化",
                Shopify: "販売のためのコマースプラットフォーム",
                "shopify.tooltip": "オンラインストア構築のためのオールインワンプラットフォーム",
                squarespace: "スタイリッシュなテンプレートとデザインを提供",
                "squarespace.tooltip": "オールインワンのウェブサイトビルダー"
            },
            learning: {
                title: "学習中 / 進行中",
                python: "データサイエンスと自動化",
                "python.tooltip": "Django、Flask、機械学習ライブラリ",
                ai: "機械学習アプリケーション",
                "ai.tooltip": "TensorFlow、PyTorch、実践的なAIソリューション"
            }
        },
        contact: {
            title: "連絡を取る",
            subtitle: "次のプロジェクトで一緒に働きましょう",
            heading: "プロジェクトを始める準備はできていますか？",
            description: "私は常に新しい機会やエキサイティングなプロジェクトに興味があります。質問がある場合やただ挨拶したい場合でも、できる限り返信します！",
            form: {
                firstName: "名",
                lastName: "姓",
                email: "メール",
                inquiry: "問い合わせの種類",
                project: "採用",
                collaboration: "フリーランス",
                message: "メッセージ",
                submit: "メッセージを送信",
                success: "ありがとう！メッセージが正常に送信されました。",
                error: "申し訳ありません、メッセージの送信中にエラーが発生しました。もう一度お試しください。"
            }
        },
        footer: {
            heading: "つながりましょう",
            subtitle: "一つのプロジェクトで未来を築く",
            copyright: "© ブランドン・D・バーノン。2025。すべての権利を保有。"
        }
    },
    ko: {
        nav: {
            logo: "브랜든 D. 버논",
            home: "홈",
            about: "소개",
            work: "작업",
            skills: "기술",
            contact: "연락처"
        },
        home: {
            heading: "코드를 통해 꿈을 현실로!",
            subtitle: "웹 개발자 | UX/UI 개발자 | 소프트웨어 개발자",
            cta: "내 작업 보기"
        },
        about: {
            title: "소개",
            heading: "코드 뒤의 예술",
            description: "저는 '코드를 통해 꿈을 현실로'라는 모토를 따라 살아가는 풀스택 웹 개발자 브랜든입니다. 제 여정은 캘리포니아 노스 할리우드의 아트 인스티튜트에서 시작되었으며, 그곳에서 웹 디자인 및 인터랙티브 미디어 학사 학위를 취득했습니다. 예술과 기술에 대한 관심에서 시작된 것이 창의성과 기능성을 결합한 디지털 경험을 만드는 열정으로 발전했습니다. 최고의 인도에 따라, 저는 이해심, 적응력, 그리고 한 걸음 더 나아가려는 추진력으로 모든 프로젝트에 접근합니다. 저에게 코드는 단순한 논리가 아니라 상상력과 목적이 만나는 캔버스입니다."
        },
        work: {
            title: "내 작업",
            subtitle: "최근 프로젝트 쇼케이스",
            project1: {
                title: "홈 가든 101",
                description: "조경 및 야외 서비스"
            },
            project2: {
                title: "스펙트럼 매거진",
                description: "라이프스타일과 문화 잡지"
            },
            project3: {
                title: "버터 베이커리",
                description: "수제 베이커리"
            },
            project4: {
                title: "어드밴티지 비디오 시스템",
                description: "제품 및 정보"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "마케팅 에이전시"
            },
            project6: {
                title: "해피 닷 박스",
                description: "고급 뷰티 제품"
            },
            detail: {
                role: "역할",
                responsibilities: "책임",
                technologies: "기술",
                visit: "웹사이트 방문"
            }
        },
        skills: {
            title: "기술 및 테크놀로지",
            subtitle: "내가 사용하는 도구와 기술",
            frontend: {
                title: "프론트엔드 언어",
                html: "시맨틱 마크업 및 접근성",
                "html.tooltip": "시맨틱 HTML5로 5년 이상의 경험",
                css: "고급 스타일링 및 애니메이션",
                "css.tooltip": "CSS Grid, Flexbox 및 애니메이션 전문가",
                js: "ES6+ 및 현대 프레임워크",
                "js.tooltip": "React와 Node.js를 사용한 고급 JavaScript"
            },
            backend: {
                title: "백엔드 언어",
                node: "서버 사이드 JavaScript",
                "node.tooltip": "Express.js, REST API 및 실시간 애플리케이션",
                php: "웹 개발 및 CMS",
                "php.tooltip": "Laravel, WordPress 및 커스텀 애플리케이션"
            },
            build: {
                title: "빌드 기술",
                webpack: "모듈 번들링 및 최적화",
                "webpack.tooltip": "고급 설정 및 성능 최적화",
                vite: "빠른 빌드 도구 및 개발 서버",
                "vite.tooltip": "핫 리로드를 포함한 현대적인 개발 경험",
                docker: "컨테이너화 및 배포",
                "docker.tooltip": "컨테이너 오케스트레이션 및 CI/CD 파이프라인"
            },
            cms: {
                title: "CMS 플랫폼",
                wordpress: "커스텀 테마 및 플러그인",
                "wordpress.tooltip": "고급 사용자 정의 및 성능 최적화",
                Shopify: "판매를 위한 커머스 플랫폼",
                "shopify.tooltip": "온라인 스토어 구축을 위한 올인원 플랫폼",
                squarespace: "세련된 템플릿과 디자인 제공",
                "squarespace.tooltip": "올인원 웹사이트 빌더"
            },
            learning: {
                title: "학습 중 / 진행 중",
                python: "데이터 과학 및 자동화",
                "python.tooltip": "Django, Flask 및 머신 러닝 라이브러리",
                ai: "머신 러닝 애플리케이션",
                "ai.tooltip": "TensorFlow, PyTorch 및 실용적인 AI 솔루션"
            }
        },
        contact: {
            title: "연락하기",
            subtitle: "다음 프로젝트를 함께 시작합시다",
            heading: "프로젝트를 시작할 준비가 되셨나요?",
            description: "저는 항상 새로운 기회와 흥미로운 프로젝트에 관심이 있습니다. 질문이 있거나 단순히 인사하고 싶으시다면, 최대한 답변드리겠습니다!",
            form: {
                firstName: "이름",
                lastName: "성",
                email: "이메일",
                inquiry: "문의 유형",
                project: "채용",
                collaboration: "프리랜스",
                message: "메시지",
                submit: "메시지 보내기",
                success: "감사합니다! 메시지가 성공적으로 전송되었습니다.",
                error: "죄송합니다, 메시지 전송 중 오류가 발생했습니다. 다시 시도해 주세요."
            }
        },
        footer: {
            heading: "연결합시다",
            subtitle: "한 번에 하나의 프로젝트로 미래를 구축",
            copyright: "© 브랜든 D. 버논. 2025. 모든 권리 보유."
        }
    },
    zh: {
        nav: {
            logo: "布兰登·D·弗农",
            home: "首页",
            about: "关于我",
            work: "作品",
            skills: "技能",
            contact: "联系方式"
        },
        home: {
            heading: "用代码将梦想变为现实！",
            subtitle: "网页开发者 | UX/UI开发者 | 软件开发者",
            cta: "查看我的作品"
        },
        about: {
            title: "关于我",
            heading: "代码背后的艺术",
            description: "我是布兰登，一名全栈网页开发者，秉持“用代码将梦想变为现实”的座右铭。我的旅程始于加州北好莱坞艺术学院，在那里我获得了网页设计与互动媒体的学士学位。最初对艺术和技术的兴趣，逐渐演变为打造融合创意与功能的数字体验的热情。在至高的指引下，我以理解力、适应性和超越自我的动力对待每个项目。对我来说，代码不仅是逻辑，更是想象力与目标相遇的画布。"
        },
        work: {
            title: "我的作品",
            subtitle: "近期项目的展示",
            project1: {
                title: "家庭花园101",
                description: "园林绿化与户外服务"
            },
            project2: {
                title: "光谱杂志",
                description: "生活方式与文化杂志"
            },
            project3: {
                title: "黄油面包店",
                description: "家庭烘焙"
            },
            project4: {
                title: "优势视频系统",
                description: "产品与信息"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "营销机构"
            },
            project6: {
                title: "快乐点盒",
                description: "奢华美容产品"
            },
            detail: {
                role: "角色",
                responsibilities: "职责",
                technologies: "技术",
                visit: "访问网站"
            }
        },
        skills: {
            title: "技能与技术",
            subtitle: "我使用的工具和技术",
            frontend: {
                title: "前端语言",
                html: "语义化标记和可访问性",
                "html.tooltip": "超过5年使用语义化HTML5的经验",
                css: "高级样式和动画",
                "css.tooltip": "CSS Grid、Flexbox和动画专家",
                js: "ES6+和现代框架",
                "js.tooltip": "使用React和Node.js的高级JavaScript"
            },
            backend: {
                title: "后端语言",
                node: "服务器端JavaScript",
                "node.tooltip": "Express.js、REST API和实时应用",
                php: "网页开发和CMS",
                "php.tooltip": "Laravel、WordPress和自定义应用"
            },
            build: {
                title: "构建技术",
                webpack: "模块打包和优化",
                "webpack.tooltip": "高级配置和性能优化",
                vite: "快速构建工具和开发服务器",
                "vite.tooltip": "支持热重载的现代化开发体验",
                docker: "容器化和部署",
                "docker.tooltip": "容器编排和CI/CD流水线"
            },
            cms: {
                title: "CMS平台",
                wordpress: "自定义主题和插件",
                "wordpress.tooltip": "高级定制和性能优化",
                Shopify: "用于销售的电子商务平台",
                "shopify.tooltip": "构建在线商店的综合平台",
                squarespace: "提供时尚模板和设计",
                "squarespace.tooltip": "综合网站构建器"
            },
            learning: {
                title: "学习中 / 进行中",
                python: "数据科学和自动化",
                "python.tooltip": "Django、Flask和机器学习库",
                ai: "机器学习应用",
                "ai.tooltip": "TensorFlow、PyTorch和实用AI解决方案"
            }
        },
        contact: {
            title: "联系我",
            subtitle: "让我们一起合作你的下一个项目",
            heading: "准备好启动一个项目了吗？",
            description: "我始终对新的机会和激动人心的项目感兴趣。无论你有问题还是只是想打个招呼，我都会尽力回复你！",
            form: {
                firstName: "名",
                lastName: "姓",
                email: "电子邮件",
                inquiry: "咨询类型",
                project: "招聘",
                collaboration: "自由职业",
                message: "消息",
                submit: "发送消息",
                success: "谢谢！你的消息已成功发送。",
                error: "抱歉，发送消息时出错。请重试。"
            }
        },
        footer: {
            heading: "让我们联系",
            subtitle: "一次一个项目，构建未来",
            copyright: "© 布兰登·D·弗农。2025。保留所有权利。"
        }
    },
    af: {
        nav: {
            logo: "Brandon D. Vernon",
            home: "Tuis",
            about: "Oor My",
            work: "Werk",
            skills: "Vaardighede",
            contact: "Kontak"
        },
        home: {
            heading: "Kodeer Drome tot Werklikheid!",
            subtitle: "Webontwikkelaar | UX/UI Ontwikkelaar | Sagteware Ontwikkelaar",
            cta: "Sien My Werk"
        },
        about: {
            title: "Oor My",
            heading: "Die Kuns Agter die Kode",
            description: "Ek is Brandon, 'n volstapel-webontwikkelaar wat leef volgens die leuse 'Kodeer Drome tot Werklikheid.' My reis het begin by The Art Institute of California – Noord-Hollywood, waar ek my Baccalaureusgraad in Webontwerp en Interaktiewe Media behaal het. Wat begin het as 'n belangstelling in kuns en tegnologie, het ontwikkel tot 'n passie om digitale ervarings te skep wat kreatiwiteit met funksie meng. Gelei deur die Allerhoogste, benader ek elke projek met begrip, aanpasbaarheid en 'n drang om die ekstra myl te gaan. Vir my is kode nie net logika nie, dis 'n doek waar verbeelding en doel bymekaarkom."
        },
        work: {
            title: "My Werk",
            subtitle: "’n Vertoonvenster van my onlangse projekte",
            project1: {
                title: "Tuis Tuin 101",
                description: "Landskap en Buitelugdiens"
            },
            project2: {
                title: "Spektrum Tydskrif",
                description: "Leefstyl- en Kultuurtydskrif"
            },
            project3: {
                title: "Botter Bakkery",
                description: "Tuisgemaakte Bakkery"
            },
            project4: {
                title: "Advantage Video Stelsel",
                description: "Produk en Inligting"
            },
            project5: {
                title: "iLead-Wêreldwyd",
                description: "Bemarkingsagentskap"
            },
            project6: {
                title: "Gelukkige Puntboks",
                description: "Luukse Skoonheidsprodukte"
            },
            detail: {
                role: "Rol",
                responsibilities: "Verantwoordelikhede",
                technologies: "Tegnologieë",
                visit: "Besoek Webwerf"
            }
        },
        skills: {
            title: "Vaardighede en Tegnologieë",
            subtitle: "Gereedskap en tegnologieë waarmee ek werk",
            frontend: {
                title: "Vooraf-taal",
                html: "Semantiese opmaak en toeganklikheid",
                "html.tooltip": "Meer as 5 jaar ondervinding met semantiese HTML5",
                css: "Gevorderde stilering en animasies",
                "css.tooltip": "Kundige in CSS Grid, Flexbox en animasies",
                js: "ES6+ en moderne raamwerke",
                "js.tooltip": "Gevorderde JavaScript met React en Node.js"
            },
            backend: {
                title: "Agteraf-taal",
                node: "Bedienerskant JavaScript",
                "node.tooltip": "Express.js, REST API’s en intydse toepassings",
                php: "Webontwikkeling en CMS",
                "php.tooltip": "Laravel, WordPress en pasgemaakte toepassings"
            },
            build: {
                title: "Bou-tegnologieë",
                webpack: "Module-bundeling en optimalisering",
                "webpack.tooltip": "Gevorderde konfigurasie en prestasie-optimalisering",
                vite: "Vinnige bou-instrument en ontwikkelingbediener",
                "vite.tooltip": "Moderne ontwikkelingservaring met warm herlaai",
                docker: "Kontenerisering en ontplooiing",
                "docker.tooltip": "Kontenerorkestrasie en CI/CD-pyplyne"
            },
            cms: {
                title: "CMS-platforms",
                wordpress: "Pasgemaakte temas en inproppe",
                "wordpress.tooltip": "Gevorderde aanpassing en prestasie-optimalisering",
                Shopify: "Handelsplatform vir verkope",
                "shopify.tooltip": "Alles-in-een platform vir die bou van aanlynwinkels",
                squarespace: "Bied stylvolle sjablone en ontwerp",
                "squarespace.tooltip": "Alles-in-een webwerfbouer"
            },
            learning: {
                title: "Leer / In Vooruitgang",
                python: "Datawetenskap en outomatisering",
                "python.tooltip": "Django, Flask en masjienleerbiblioteke",
                ai: "Masjienleer-toepassings",
                "ai.tooltip": "TensorFlow, PyTorch en praktiese KI-oplossings"
            }
        },
        contact: {
            title: "Kontak My",
            subtitle: "Kom ons werk saam aan jou volgende projek",
            heading: "Gereed om 'n Projek te Begin?",
            description: "Ek is altyd geïnteresseerd in nuwe geleenthede en opwindende projekte. Of jy nou 'n vraag het of net hallo wil sê, ek sal my bes doen om terug te kom na jou toe!",
            form: {
                firstName: "Voornaam",
                lastName: "Van",
                email: "E-pos",
                inquiry: "Tipe Navraag",
                project: "Aanstelling",
                collaboration: "Vryskut",
                message: "Boodskap",
                submit: "Stuur Boodskap",
                success: "Dankie! Jou boodskap is suksesvol gestuur.",
                error: "Jammer, daar was 'n fout met die stuur van jou boodskap. Probeer asseblief weer."
            }
        },
        footer: {
            heading: "Kom Ons Verbind",
            subtitle: "Die bou van die toekoms, een projek op 'n slag",
            copyright: "© Brandon D. Vernon. 2025. Alle regte voorbehou."
        }
    },
    he: {
        nav: {
            logo: "ברנדון ד. ורנון",
            home: "בית",
            about: "אודות",
            work: "עבודות",
            skills: "מיומנויות",
            contact: "צור קשר"
        },
        home: {
            heading: "הפוך חלומות למציאות עם קוד!",
            subtitle: "מפתח אתרים | מפתח UX/UI | מפתח תוכנה",
            cta: "צפה בעבודות שלי"
        },
        about: {
            title: "אודותיי",
            heading: "האמנות שמאחורי הקוד",
            description: "אני ברנדון, מפתח אתרים מלא מחזור שחי לפי המוטו 'הפוך חלומות למציאות עם קוד.' המסע שלי התחיל במכון האמנויות של קליפורניה – צפון הוליווד, שם השגתי תואר ראשון בעיצוב אתרים ומדיה אינטראקטיבית. מה שהתחיל כעניין באמנות וטכנולוגיה התפתח לתשוקה ליצור חוויות דיגיטליות המשלבות יצירתיות עם פונקציונליות. בהדרכת הכוח העליון, אני ניגש לכל פרויקט עם הבנה, הסתגלות ודחף לעשות את המייל הנוסף. עבורי, קוד הוא לא רק לוגיקה, הוא בד שבו הדמיון פוגש את המטרה."
        },
        work: {
            title: "העבודות שלי",
            subtitle: "תצוגה של הפרויקטים האחרונים שלי",
            project1: {
                title: "גינה ביתית 101",
                description: "שירותי גינון וחוץ"
            },
            project2: {
                title: "מגזין ספקטרום",
                description: "מגזין סגנון חיים ותרבות"
            },
            project3: {
                title: "מאפיית חמאה",
                description: "מאפייה ביתית"
            },
            project4: {
                title: "מערכת וידאו יתרון",
                description: "מוצר ומידע"
            },
            project5: {
                title: "iLead-Worldwide",
                description: "סוכנות שיווק"
            },
            project6: {
                title: "תיבת נקודות שמחה",
                description: "מוצרי יופי יוקרתיים"
            },
            detail: {
                role: "תפקיד",
                responsibilities: "אחריות",
                technologies: "טכנולוגיות",
                visit: "בקר באתר"
            }
        },
        skills: {
            title: "מיומנויות וטכנולוגיות",
            subtitle: "כלים וטכנולוגיות שאני עובד איתם",
            frontend: {
                title: "שפות קדמיות",
                html: "סימון סמנטי ונגישות",
                "html.tooltip": "יותר מ-5 שנות ניסיון עם HTML5 סמנטי",
                css: "סגנון מתקדם ואנימציות",
                "css.tooltip": "מומחה ב-CSS Grid, Flexbox ואנימציות",
                js: "ES6+ ומסגרות מודרניות",
                "js.tooltip": "JavaScript מתקדם עם React ו-Node.js"
            },
            backend: {
                title: "שפות אחוריות",
                node: "JavaScript בצד השרת",
                "node.tooltip": "Express.js, REST APIs ויישומים בזמן אמת",
                php: "פיתוח אתרים ו-CMS",
                "php.tooltip": "Laravel, WordPress ויישומים מותאמים אישית"
            },
            build: {
                title: "טכנולוגיות בנייה",
                webpack: "צרור מודולים ואופטימיזציה",
                "webpack.tooltip": "תצורה מתקדמת ואופטימיזציה של ביצועים",
                vite: "כלי בנייה מהיר ושרת פיתוח",
                "vite.tooltip": "חוויית פיתוח מודרנית עם טעינה מחדש חמה",
                docker: "הכלה ופריסה",
                "docker.tooltip": "תזמור קונטיינרים וצינורות CI/CD"
            },
            cms: {
                title: "פלטפורמות CMS",
                wordpress: "ערכות נושא ותוספים מותאמים אישית",
                "wordpress.tooltip": "התאמה אישית מתקדמת ואופטימיזציה של ביצועים",
                Shopify: "פלטפורמת מסחר למכירות",
                "shopify.tooltip": "פלטפורמה הכל-באחד לבניית חנויות מקוונות",
                squarespace: "מציע תבניות מסוגננות ועיצוב",
                "squarespace.tooltip": "בונה אתרים הכל-באחד"
            },
            learning: {
                title: "בלמידה / בתהליך",
                python: "מדעי נתונים ואוטומציה",
                "python.tooltip": "Django, Flask וספריות למידת מכונה",
                ai: "יישומי למידת מכונה",
                "ai.tooltip": "TensorFlow, PyTorch ופתרונות AI מעשיים"
            }
        },
        contact: {
            title: "צור קשר",
            subtitle: "בוא נעבוד יחד על הפרויקט הבא שלך",
            heading: "מוכן להתחיל פרויקט?",
            description: "אני תמיד מעוניין בהזדמנויות חדשות ופרויקטים מרגשים. בין אם יש לך שאלה או סתם רוצה להגיד שלום, אעשה כמיטב יכולתי לענות לך!",
            form: {
                firstName: "שם פרטי",
                lastName: "שם משפחה",
                email: "דוא\"ל",
                inquiry: "סוג פנייה",
                project: "גיוס",
                collaboration: "פרילנס",
                message: "הודעה",
                submit: "שלח הודעה",
                success: "תודה! ההודעה שלך נשלחה בהצלחה.",
                error: "מצטער, אירעה שגיאה בשליחת ההודעה שלך. אנא נסה שוב."
            }
        },
        footer: {
            heading: "בוא נתחבר",
            subtitle: "בניית העתיד, פרויקט אחד בכל פעם",
            copyright: "© ברנדון ד. ורנון. 2025. כל הזכויות שמורות."
        }
    }

};

// Current language
let currentLanguage = 'en';

/**
 * Initialize i18n system
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeI18n();
});

/**
 * Initialize internationalization
 */
function initializeI18n() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language') || 'en';
    currentLanguage = savedLanguage;
    
    // Apply translations
    applyTranslations(currentLanguage);
    
    // Set up language selector
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        // Set the selector to show the current/saved language
        languageSelector.value = currentLanguage;
        
        // Listen for language selection changes
        languageSelector.addEventListener('change', function(e) {
            setLanguage(e.target.value);
        });
    }
    
    // Listen for language changes
    window.addEventListener('languageChange', (e) => {
        currentLanguage = e.detail.language;
        applyTranslations(currentLanguage);
    });
    
    console.log('i18n system initialized with language:', currentLanguage);
}

/**
 * Apply translations to the page
 * @param {string} language - Language code
 */
function applyTranslations(language) {
    const translation = translations[language];
    if (!translation) {
        console.warn(`Translation not found for language: ${language}`);
        return;
    }
    
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getNestedValue(translation, key);
        
        if (value !== undefined) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = value;
            } else if (element.tagName === 'INPUT' && element.type === 'email') {
                element.placeholder = value;
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
    console.log(`Translations applied for language: ${language}`);
}

/**
 * Get nested value from object using dot notation
 * @param {Object} obj - Object to search in
 * @param {string} path - Dot-separated path
 * @returns {*} Value at the path or undefined
 */
function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
}

/**
 * Get translation for a specific key
 * @param {string} key - Translation key
 * @param {string} language - Language code (optional, uses current language)
 * @returns {string} Translated text
 */
function getTranslation(key, language = currentLanguage) {
    const translation = translations[language];
    if (!translation) {
        return key; // Return key as fallback
    }
    
    const value = getNestedValue(translation, key);
    return value !== undefined ? value : key;
}

/**
 * Add new translation data
 * @param {string} language - Language code
 * @param {Object} data - Translation data
 */
function addTranslations(language, data) {
    translations[language] = { ...translations[language], ...data };
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
    return currentLanguage;
}

/**
 * Set language and apply translations
 * @param {string} language - Language code
 */
function setLanguage(language) {
    if (translations[language]) {
        currentLanguage = language;
        localStorage.setItem('language', language);
        applyTranslations(language);
        
        // Trigger language change event
        window.dispatchEvent(new CustomEvent('languageChange', { 
            detail: { language: language } 
        }));
    } else {
        console.warn(`Language not supported: ${language}`);
    }
}

// Export functions for use in other modules
window.i18n = {
    getTranslation,
    addTranslations,
    getCurrentLanguage,
    setLanguage,
    applyTranslations
};

export type Language = "en" | "es";

export const translations = {
  en: {
    // Navigation / Header
    about: "About",
    certifications: "Certifications",
    skills: "Skills",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
    hireMe: "Hire Me",

    // Status tags
    statusActive: "SYSTEM_STATUS: ACTIVE // REGION: AWS-EAST-1",
    statusFullStack: "FRONTEND: HYDRATED // BACKEND: SCALING",
    statusBackend: "BACKEND_CORE: RUNNING // MULTI_LANGUAGE_RUNTIME",
    statusDevops: "INFRASTRUCTURE: AUTOMATED // SERVERS: PROVISIONED",
    statusFlutter: "MOBILE: COMPILED // STATE: REACTIVE",

    // Hero titles
    javaTitle: "Java Backend Developer",
    fullStackTitle: "Full Stack Developer",
    backendTitle: "Backend Developer",
    devopsTitle: "DevOps & SysAdmin",
    flutterTitle: "Flutter Developer",

    // Hero descriptions
    javaDesc: "Architecting robust and scalable systems. I build the digital backbone of modern web applications, focusing on performance, security, and reliability.",
    fullStackDesc: "Building end-to-end web architectures, from fluid, high-performance interfaces to scalable, resilient backend APIs and databases.",
    backendDesc: "Architecting concurrent microservices, highly optimized APIs, and transaction-safe enterprise infrastructures using Go, Java, and Node.js.",
    devopsDesc: "Automating infrastructure, streamlining CI/CD pipelines, and maintaining highly available, secure Linux server environments.",
    flutterDesc: "Building beautiful, natively compiled, multi-platform applications from a single codebase with Flutter and Dart.",

    // General section titles & descriptions
    aboutTitle: "About Me",
    certificationsTitle: "Certifications",
    coreTechTitle: "Core Technologies",
    featuredProjects: "Featured Projects",
    featuredArticles: "Featured Articles",
    getInTouch: "Get in Touch",
    connectLinkedin: "Connect on LinkedIn",
    seeAllArticles: "See all articles",
    readArticle: "Read article",
    backToHome: "back_to_home",
    backToBlog: "back_to_blog",
    noArticles: "no_articles_found",
    techBlog: "Tech Blog",

    // About me content (Java)
    aboutJavaP1: "I'm a backend developer with a solid background in infrastructure (DevOps), Node.js, and Go, currently focused on the Java and Spring Boot ecosystem. I'm looking to join a team as a Java Backend Developer where I can contribute my architectural background and my ability to implement robust and efficient systems.",
    aboutJavaP2: "I hold an AWS certification and am actively pursuing additional certifications to enhance my proficiency in cloud service providers.",

    // About me content (Full-Stack)
    aboutFsP1: "I'm a full-stack developer with a strong foundation in backend architectures (Java, Spring Boot, Go, Node.js) combined with frontend expertise in React, Next.js, and TypeScript. I specialize in delivering end-to-end digital systems, translating complex, distributed backend services into responsive, highly interactive user experiences.",
    aboutFsP2: "I hold an AWS certification and bridge infrastructure (DevOps) with robust application development to guarantee seamless application lifecycle delivery.",

    // About me content (Backend)
    aboutBeP1: "I'm a backend developer with extensive experience building the digital backbone of modern web applications. I specialize in designing robust, scalable, and transaction-safe architectures using Go (for concurrent, high-throughput microservices), Java/Spring Boot (for transactional enterprise platforms), and Node.js (for fast, asynchronous API gateway routing).",
    aboutBeP2: "I hold an AWS certification and possess a strong background in containerized orchestration (Docker, Kubernetes) and serverless edge technologies (Cloudflare Workers).",

    // About me content (DevOps)
    aboutDevopsP1: "I am a DevOps and former SysAdmin with a passion for automation, infrastructure as code, and creating reliable deployment pipelines. I bridge the gap between development and operations to ensure seamless, scalable application delivery.",
    aboutDevopsP2: "With a strong foundation in Linux system administration, networking, and security, I combine traditional ops experience with modern cloud orchestration tools like Kubernetes, Docker, and Terraform.",

    // About me content (Flutter)
    aboutFlutterP1: "I am a Flutter Developer specialized in building high-performance, visually engaging mobile applications. I leverage modern state management solutions like Riverpod and BLoC to create reactive and scalable app architectures.",
    aboutFlutterP2: "With a strong background in native performance optimization, offline-first data synchronization using Hive, and pixel-perfect UI implementation using animations.",

    // Project categories
    interactivePwas: "Interactive Products & PWAs",
    enterpriseBackend: "Enterprise Backend Architecture",
    enterpriseDistributed: "Enterprise Distributed Systems & APIs",
    realWorldBackend: "Real World Backend Applications",
    miniProjectsSeries: "150 Mini-Projects Series",

    // Contact paragraphs
    contactJavaDesc: "Have a project in mind or just want to chat? Feel free to reach out! I'm always open to new opportunities and collaborations in backend architectures and robust systems.",
    contactFsDesc: "Have a project in mind or just want to chat? Feel free to reach out! I'm always open to new opportunities and collaborations in end-to-end full-stack architectures.",
    contactBeDesc: "Have a project in mind or just want to chat? Feel free to reach out! I'm always open to new opportunities and collaborations in backend architectures and cloud APIs.",
    contactDevopsDesc: "Looking to optimize your deployment pipelines or scale your infrastructure? Feel free to reach out!",
    contactFlutterDesc: "Have a mobile app idea or need to build a cross-platform product? Feel free to reach out!",

    // Resume
    resumeTitle: "Resume",
    printResume: "Print",
    educationTitle: "Education",
    experienceTitle: "Selected Experience",

    // Copyright
    copyright: "Fabián Karaben. All rights reserved.",
  },
  es: {
    // Navigation / Header
    about: "Sobre Mí",
    certifications: "Certificaciones",
    skills: "Habilidades",
    projects: "Proyectos",
    blog: "Blog",
    contact: "Contacto",
    hireMe: "Contrátame",

    // Status tags
    statusActive: "ESTADO_DEL_SISTEMA: ACTIVO // REGIÓN: AWS-EAST-1",
    statusFullStack: "FRONTEND: HYDRATED // BACKEND: SCALING",
    statusBackend: "NÚCLEO_BACKEND: EJECUTÁNDOSE // TIEMPO_DE_EJECUCIÓN_MULTILENGUAJE",
    statusDevops: "INFRAESTRUCTURA: AUTOMATIZADA // SERVIDORES: APROVISIONADOS",
    statusFlutter: "MÓVIL: COMPILADO // ESTADO: REACTIVO",

    // Hero titles
    javaTitle: "Desarrollador Backend Java",
    fullStackTitle: "Desarrollador Full Stack",
    backendTitle: "Desarrollador Backend",
    devopsTitle: "DevOps y SysAdmin",
    flutterTitle: "Desarrollador Flutter",

    // Hero descriptions
    javaDesc: "Diseñando arquitecturas robustas y escalables. Construyo la columna vertebral digital de las aplicaciones web modernas, enfocándome en el rendimiento, la seguridad y la confiabilidad.",
    fullStackDesc: "Construyendo arquitecturas web de extremo a extremo, desde interfaces fluidas y de alto rendimiento hasta APIs backend y bases de datos escalables y resilientes.",
    backendDesc: "Diseñando microservicios concurrentes, APIs altamente optimizadas e infraestructuras empresariales con transacciones seguras utilizando Go, Java y Node.js.",
    devopsDesc: "Automatizando infraestructura, optimizando pipelines CI/CD y manteniendo entornos de servidores Linux altamente disponibles y seguros.",
    flutterDesc: "Construyendo hermosas aplicaciones multiplataforma compiladas nativamente desde una única base de código con Flutter y Dart.",

    // General section titles & descriptions
    aboutTitle: "Sobre Mí",
    certificationsTitle: "Certificaciones",
    coreTechTitle: "Tecnologías Principales",
    featuredProjects: "Proyectos Destacados",
    featuredArticles: "Artículos Destacados",
    getInTouch: "Ponte en Contacto",
    connectLinkedin: "Conectar en LinkedIn",
    seeAllArticles: "Ver todos los artículos",
    readArticle: "Leer artículo",
    backToHome: "volver_a_inicio",
    backToBlog: "volver_al_blog",
    noArticles: "no_se_encontraron_artículos",
    techBlog: "Blog Tecnológico",

    // About me content (Java)
    aboutJavaP1: "Soy un desarrollador backend con una sólida base en infraestructura (DevOps), Node.js y Go, actualmente enfocado en el ecosistema de Java y Spring Boot. Busco unirme a un equipo como Desarrollador Backend Java donde pueda aportar mi experiencia en arquitectura y mi habilidad para implementar sistemas robustos y eficientes.",
    aboutJavaP2: "Cuento con una certificación de AWS y estoy buscando activamente certificaciones adicionales para mejorar mi competencia en proveedores de servicios en la nube.",

    // About me content (Full-Stack)
    aboutFsP1: "Soy un desarrollador full-stack con una sólida base en arquitecturas backend (Java, Spring Boot, Go, Node.js) combinada con experiencia en frontend en React, Next.js y TypeScript. Me especializo en entregar sistemas digitales de extremo a extremo, traduciendo servicios backend distribuidos y complejos en experiencias de usuario responsivas y altamente interactivas.",
    aboutFsP2: "Cuento con una certificación de AWS y conecto la infraestructura (DevOps) con el desarrollo robusto de aplicaciones para garantizar una entrega impecable del ciclo de vida del software.",

    // About me content (Backend)
    aboutBeP1: "Soy un desarrollador backend con amplia experiencia construyendo la columna vertebral digital de aplicaciones web modernas. Me especializo en el diseño de arquitecturas robustas, escalables y seguras para transacciones utilizando Go (para microservicios concurrentes de alto rendimiento), Java/Spring Boot (para plataformas empresariales transaccionales) y Node.js (para enrutamiento rápido y asíncrono en API gateways).",
    aboutBeP2: "Cuento con una certificación de AWS y poseo una sólida base en orquestación de contenedores (Docker, Kubernetes) y tecnologías serverless en el edge (Cloudflare Workers).",

    // About me content (DevOps)
    aboutDevopsP1: "Soy DevOps y ex SysAdmin con pasión por la automatización, la infraestructura como código y la creación de pipelines de despliegue confiables. Acorto la brecha entre desarrollo y operaciones para garantizar entregas fluidas y escalables.",
    aboutDevopsP2: "Cuento con una base sólida en administración de sistemas Linux, redes y seguridad, combinando mi experiencia en operaciones tradicionales con herramientas modernas de orquestación en la nube como Kubernetes, Docker y Terraform.",

    // About me content (Flutter)
    aboutFlutterP1: "Soy un Desarrollador Flutter especializado en crear aplicaciones móviles de alto rendimiento y visualmente atractivas. Utilizo soluciones modernas de manejo de estado como Riverpod y BLoC para crear arquitecturas reactivas y escalables.",
    aboutFlutterP2: "Con una sólida experiencia en optimización de rendimiento nativo, sincronización de datos offline-first usando Hive, e implementación de UI con píxeles perfectos mediante animaciones.",

    // Project categories
    interactivePwas: "Productos Interactivos y PWAs",
    enterpriseBackend: "Arquitectura Backend Empresarial",
    enterpriseDistributed: "Sistemas Distribuidos y APIs Empresariales",
    realWorldBackend: "Aplicaciones Backend del Mundo Real",
    miniProjectsSeries: "Serie de 150 Mini-Proyectos",

    // Contact paragraphs
    contactJavaDesc: "¿Tienes un proyecto en mente o simplemente quieres charlar? ¡No dudes en contactarme! Siempre estoy abierto a nuevas oportunidades y colaboraciones en arquitecturas backend y sistemas robustos.",
    contactFsDesc: "¿Tienes un proyecto en mente o simplemente quieres charlar? ¡No dudes en contactarme! Siempre estoy abierto a nuevas oportunidades y colaboraciones en arquitecturas full-stack de extremo a extremo.",
    contactBeDesc: "¿Tienes un proyecto en mente o simplemente quieres charlar? ¡No dudes en contactarme! Siempre estoy abierto a nuevas oportunidades y colaboraciones en arquitecturas backend y APIs en la nube.",
    contactDevopsDesc: "¿Buscas optimizar tus pipelines de despliegue o escalar tu infraestructura? ¡No dudes en contactarme!",
    contactFlutterDesc: "¿Tienes una idea para una app móvil o necesitas construir un producto multiplataforma? ¡No dudes en contactarme!",

    // Resume
    resumeTitle: "Currículum Vitae",
    printResume: "Imprimir",
    educationTitle: "Educación",
    experienceTitle: "Experiencia seleccionada",

    // Copyright
    copyright: "Fabián Karaben. Todos los derechos reservados.",
  }
};

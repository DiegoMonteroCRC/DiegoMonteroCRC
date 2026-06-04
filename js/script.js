const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const languageToggle = document.querySelector('[data-language-toggle]');
const demoModal = document.querySelector('#demo-modal');
const demoModalOpen = document.querySelector('[data-demo-modal-open]');
const demoModalCloseButtons = document.querySelectorAll('[data-demo-modal-close]');
const backToTop = document.querySelector('.back-to-top');
const currentYear = document.querySelector('#current-year');
const revealElements = document.querySelectorAll('.reveal');

const translations = {
  es: {
    pageTitle: 'Luis Diego Montero Vargas | Portafolio Big Data',
    navAria: 'Navegación principal',
    brandAria: 'Ir al inicio',
    menuAria: 'Abrir menú',
    languageAria: 'Cambiar idioma',
    languageButton: 'EN',
    nav: ['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Experiencia', 'Contacto'],
    heroEyebrow: 'Portafolio profesional',
    heroTitle: 'Data Science Student | Data Analyst | SQL & Python',
    heroDescription: 'Estudiante de la carrera Big Data con enfoque en análisis de datos, automatización, visualización de información y soluciones basadas en SQL, Python, Power BI, Machine Learning y Deep Learning',
    viewProjects: 'Ver proyectos',
    downloadEnglishCv: 'Descargar CV en inglés',
    downloadSpanishCv: 'Descargar CV en español',
    socialAria: 'Redes profesionales',
    heroPanelAria: 'Resumen profesional',
    heroPanelTitle: 'Áreas principales',
    heroPanelItems: ['Big Data y analítica', 'SQL Server y Oracle', 'Python para datos', 'Power BI y visualización'],
    aboutEyebrow: 'Sobre mí',
    aboutTitle: 'Perfil orientado a datos, soporte y mejora continua',
    aboutText: [
      'Soy estudiante de Ciencia de Datos. Me enfoco en proyectos relacionados con análisis de datos, SQL, Python, Power BI, procesos ETL, visualización de información y fundamentos de Machine Learning y Deep Learning. Busco crear soluciones útiles, ordenadas y medibles que conviertan datos en información accionable.',
      'Además cuento con más de 5 años de experiencia en soporte técnico y atención al usuario, lo que me ha permitido desarrollar una visión práctica para entender necesidades, resolver problemas y comunicar soluciones de forma clara.'
    ],
    skillsEyebrow: 'Habilidades',
    skillsTitle: 'Tecnologías y áreas de trabajo',
    projectsEyebrow: 'Proyectos',
    projectsTitle: 'Trabajos destacados',
    projects: [
      {
        imageAlt: 'Visualización del proyecto de consumo energético',
        category: 'Data Science',
        title: 'Predicción de Consumo Energético en Costa Rica',
        description: 'Modelo analítico para explorar patrones de consumo energético usando datos reales de ARESEP, variables ambientales reales y visualización geográfica.',
        demoAria: 'Abrir demo de Predicción de Consumo Energético'
      },
      {
        imageAlt: 'Análisis exploratorio de películas',
        category: 'Data Science',
        title: 'Movie Insights',
        description: 'Análisis exploratorio y dashboard interactivo para descubrir patrones en datos de películas usando programación orientada a objetos.',
        demoAria: 'Demo pendiente de Movie Insights'
      }
    ],
    experienceEyebrow: 'Experiencia y formación',
    experienceTitle: 'Ruta académica y profesional',
    timeline: [
      {
        title: 'Estudiante de Big Data',
        description: 'Formación universitaria enfocada en procesamiento, análisis, visualización y gestión de datos.'
      },
      {
        title: 'Experiencia en soporte técnico',
        description: 'Atención a usuarios, diagnóstico de incidentes, documentación de casos y resolución de problemas tecnológicos.'
      },
      {
        title: 'Proyectos universitarios de análisis de datos',
        description: 'Desarrollo de ejercicios aplicados con SQL, Python, Power BI, dashboards, EDA y modelos predictivos.'
      },
      {
        title: 'Aprendizaje continuo en ciencia de datos y BI',
        description: 'Profundización en Machine Learning, visualización, automatización, buenas prácticas y comunicación de resultados.'
      }
    ],
    contactEyebrow: 'Contacto',
    contactTitle: 'Conectemos para colaborar en proyectos de datos',
    contactText: 'Estoy abierto a oportunidades laborales, prácticas profesionales, proyectos de análisis de datos y colaboración en soluciones basadas en información.',
    emailAria: 'Correo electrónico editable',
    footerAria: 'Enlaces rápidos del footer',
    copyright: 'Todos los derechos reservados.',
    backToTopAria: 'Volver arriba',
    modalCloseAria: 'Cerrar aviso',
    demoModalEyebrow: 'Demo en desarrollo',
    demoModalTitle: 'Movie Insights',
    demoModalDescription: 'La visualización de este proyecto aún no está disponible. Actualmente estoy trabajando en los últimos ajustes para publicarla pronto.',
    demoModalButton: 'Entendido'
  },
  en: {
    pageTitle: 'Luis Diego Montero Vargas | Big Data Portfolio',
    navAria: 'Primary navigation',
    brandAria: 'Go to home',
    menuAria: 'Open menu',
    languageAria: 'Switch language',
    languageButton: 'ES',
    nav: ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'],
    heroEyebrow: 'Professional portfolio',
    heroTitle: 'Data Science Student | Data Analyst | SQL & Python',
    heroDescription: 'Big Data student focused on data analysis, automation, information visualization, and solutions built with SQL, Python, Power BI, Machine Learning, and Deep Learning.',
    viewProjects: 'View projects',
    downloadEnglishCv: 'Download English resume',
    downloadSpanishCv: 'Download Spanish resume',
    socialAria: 'Professional profiles',
    heroPanelAria: 'Professional summary',
    heroPanelTitle: 'Main areas',
    heroPanelItems: ['Big Data and analytics', 'SQL Server and Oracle', 'Python for data', 'Power BI and visualization'],
    aboutEyebrow: 'About me',
    aboutTitle: 'Data-focused profile with support experience and continuous improvement',
    aboutText: [
      'I am a Data Science student. I focus on projects related to data analysis, SQL, Python, Power BI, ETL processes, information visualization, and Machine Learning and Deep Learning fundamentals. My goal is to create useful, organized, and measurable solutions that turn data into actionable insight.',
      'I also have more than 5 years of experience in technical support and user assistance, which has helped me develop a practical mindset for understanding needs, solving problems, and communicating solutions clearly.'
    ],
    skillsEyebrow: 'Skills',
    skillsTitle: 'Technologies and work areas',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Featured work',
    projects: [
      {
        imageAlt: 'Energy consumption project visualization',
        category: 'Data Science',
        title: 'Energy Consumption Prediction in Costa Rica',
        description: 'Analytical model to explore energy consumption patterns using real ARESEP data, real environmental variables, and geographic visualization.',
        demoAria: 'Open Energy Consumption Prediction demo'
      },
      {
        imageAlt: 'Exploratory analysis of movie data',
        category: 'Data Science',
        title: 'Movie Insights',
        description: 'Exploratory analysis and interactive dashboard to discover patterns in movie data using object-oriented programming.',
        demoAria: 'Pending demo for Movie Insights'
      }
    ],
    experienceEyebrow: 'Experience and education',
    experienceTitle: 'Academic and professional path',
    timeline: [
      {
        title: 'Big Data Student',
        description: 'University education focused on data processing, analysis, visualization, and data management.'
      },
      {
        title: 'Technical support experience',
        description: 'User support, incident diagnosis, case documentation, and technology problem solving.'
      },
      {
        title: 'University data analysis projects',
        description: 'Applied exercises with SQL, Python, Power BI, dashboards, EDA, and predictive models.'
      },
      {
        title: 'Continuous learning in Data Science and BI',
        description: 'Ongoing growth in Machine Learning, visualization, automation, best practices, and communicating results.'
      }
    ],
    contactEyebrow: 'Contact',
    contactTitle: 'Let’s connect to collaborate on data projects',
    contactText: 'I am open to job opportunities, internships, data analysis projects, and collaboration on information-driven solutions.',
    emailAria: 'Editable email address',
    footerAria: 'Footer quick links',
    copyright: 'All rights reserved.',
    backToTopAria: 'Back to top',
    modalCloseAria: 'Close notice',
    demoModalEyebrow: 'Demo in progress',
    demoModalTitle: 'Movie Insights',
    demoModalDescription: 'The visualization for this project is not available yet. I am currently working on the final adjustments and plan to publish it soon.',
    demoModalButton: 'Got it'
  }
};

const setText = (selector, text) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
};

const setAttribute = (selector, attribute, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

const setListText = (selector, values) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index]) {
      element.textContent = values[index];
    }
  });
};

const applyLanguage = (language) => {
  const text = translations[language] || translations.es;

  document.documentElement.lang = language;
  document.title = text.pageTitle;
  languageToggle.textContent = text.languageButton;
  languageToggle.setAttribute('aria-label', text.languageAria);

  setAttribute('.navbar', 'aria-label', text.navAria);
  setAttribute('.brand', 'aria-label', text.brandAria);
  setAttribute('.nav-toggle', 'aria-label', text.menuAria);
  setAttribute('.social-links', 'aria-label', text.socialAria);
  setAttribute('.hero-panel', 'aria-label', text.heroPanelAria);
  setAttribute('.email-box', 'aria-label', text.emailAria);
  setAttribute('.site-footer nav', 'aria-label', text.footerAria);
  setAttribute('.back-to-top', 'aria-label', text.backToTopAria);
  setAttribute('.modal-close', 'aria-label', text.modalCloseAria);

  setListText('.nav-menu a', text.nav);
  setText('.hero .eyebrow', text.heroEyebrow);
  setText('.hero-title', text.heroTitle);
  setText('.hero-description', text.heroDescription);
  setText('.hero-actions .btn-primary', text.viewProjects);
  setListText('.hero-actions .btn-secondary', [text.downloadEnglishCv, text.downloadSpanishCv]);
  setText('.hero-panel p', text.heroPanelTitle);
  setListText('.hero-panel li', text.heroPanelItems);

  setText('#sobre-mi .eyebrow', text.aboutEyebrow);
  setText('#sobre-mi h2', text.aboutTitle);
  setListText('#sobre-mi .section-copy p', text.aboutText);

  setText('#habilidades .eyebrow', text.skillsEyebrow);
  setText('#habilidades h2', text.skillsTitle);

  setText('#proyectos .eyebrow', text.projectsEyebrow);
  setText('#proyectos h2', text.projectsTitle);

  document.querySelectorAll('.project-card').forEach((card, index) => {
    const project = text.projects[index];
    if (!project) {
      return;
    }

    const image = card.querySelector('img');
    if (image) {
      image.setAttribute('alt', project.imageAlt);
    }

    card.querySelector('.project-category').textContent = project.category;
    card.querySelector('h3').textContent = project.title;
    card.querySelector('.project-body p:not(.tech-list)').textContent = project.description;
    card.querySelector('.btn-outline').setAttribute('aria-label', project.demoAria);
  });

  setText('#experiencia .eyebrow', text.experienceEyebrow);
  setText('#experiencia h2', text.experienceTitle);
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    const timelineItem = text.timeline[index];
    if (!timelineItem) {
      return;
    }

    item.querySelector('h3').textContent = timelineItem.title;
    item.querySelector('p').textContent = timelineItem.description;
  });

  setText('#contacto .eyebrow', text.contactEyebrow);
  setText('#contacto h2', text.contactTitle);
  setText('#contacto p:not(.eyebrow)', text.contactText);
  setListText('.site-footer nav a', [text.nav[0], text.nav[3], text.nav[5]]);
  setText('[data-demo-modal-eyebrow]', text.demoModalEyebrow);
  setText('#demo-modal-title', text.demoModalTitle);
  setText('#demo-modal-description', text.demoModalDescription);
  setText('.modal-dialog .btn-primary', text.demoModalButton);
  setText('.site-footer p:last-child', '');
  document.querySelector('.site-footer p:last-child').innerHTML = `&copy; <span id="current-year">${new Date().getFullYear()}</span> ${text.copyright}`;

  localStorage.setItem('portfolio-language', language);
};

const savedLanguage = localStorage.getItem('portfolio-language') || 'es';

currentYear.textContent = new Date().getFullYear();
applyLanguage(savedLanguage);

languageToggle.addEventListener('click', () => {
  const nextLanguage = document.documentElement.lang === 'es' ? 'en' : 'es';
  applyLanguage(nextLanguage);
});

const openDemoModal = () => {
  demoModal.classList.add('active');
  demoModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  demoModal.querySelector('[data-demo-modal-close]').focus();
};

const closeDemoModal = () => {
  demoModal.classList.remove('active');
  demoModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  demoModalOpen.focus();
};

demoModalOpen.addEventListener('click', openDemoModal);

demoModalCloseButtons.forEach((button) => {
  button.addEventListener('click', closeDemoModal);
});

demoModal.addEventListener('click', (event) => {
  if (event.target === demoModal) {
    closeDemoModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && demoModal.classList.contains('active')) {
    closeDemoModal();
  }
});

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => revealObserver.observe(element));

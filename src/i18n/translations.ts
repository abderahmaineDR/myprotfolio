export type Language = 'en' | 'fr' | 'ar';

export interface Translations {
  nav: {
    home: string;
    work: string;
    about: string;
    contact: string;
    language: string;
  };
  home: {
    greeting: string;
    name: string;
    intro: string;
    getInTouch: string;
    viewMyWork: string;
    aboutTeaser: string;
    learnMore: string;
    skillsTitle: string;
    languagesTitle: string;
    highlightedWorkTitle: string;
    highlightedWorkSubtitle: string;
    viewAllProjects: string;
    buildTogether: string;
    viewProject: string;
    foundation: string;
    skills: {
      react: string;
      html: string;
      css: string;
      python: string;
      javascript: string;
      typescript: string;
      analyticalSkills: string;
      algorithms: string;
      logicalReasoning: string;
      problemSolving: string;
    };
    languages: {
      arabic: string;
      french: string;
      english: string;
      italian: string;
      deutsch: string;
      native: string;
      nativeLike: string;
      advanced: string;
      intermediate: string;
      beginner: string;
    };
    projects: {
      title: string;
      description: string;
      tags: {
        webApp: string;
        frontend: string;
        responsive: string;
      };
    };
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    journeyTitle: string;
    journeyContent: string;
    howIWorkTitle: string;
    howIWorkContent: string;
    focusTitle: string;
    focusContent: string;
    beyondCodeTitle: string;
    beyondCodeContent: string;
    ctaViewWork: string;
    ctaGetInTouch: string;
    ctaTitle: string;
    ctaContent: string;
    downloadCV: string;
    cvMicrocopy: string;
  };
  work: {
    title: string;
    subtitle: string;
    viewProject: string;
    projectTitle: string;
    projectDescription: string;
    tags: {
      webApp: string;
      frontend: string;
      responsive: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    contactInfo: string;
    email: string;
    phone: string;
    location: string;
    connectWithMe: string;
    name: string;
    nameRequired: string;
    emailLabel: string;
    emailRequired: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messageRequired: string;
    sendMessage: string;
    sending: string;
    missingFields: string;
    fillAllFields: string;
    messageSent: string;
    thankYou: string;
    errorTitle: string;
    formReferenceMissing: string;
    sendFailed: string;
  };
  notFound: {
    title: string;
    message: string;
    returnHome: string;
  };
  footer: {
    webDeveloper: string;
    locationText: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      language: 'Language',
    },
    home: {
      greeting: "Hello, I'm",
      name: 'Abderahmaine Dridi',
      intro: 'A passionate high school student and web developer currently studying Computer Science Technology at Hannibal Ariana High School, graduating in 2027.',
      getInTouch: 'Get in Touch',
      viewMyWork: 'View My Work',
      aboutTeaser: 'More than just code — discover my journey, mindset, and goals.',
      learnMore: 'Learn more about me',
      skillsTitle: 'Skills & Technologies',
      languagesTitle: 'Languages',
      highlightedWorkTitle: 'Highlighted Work',
      highlightedWorkSubtitle: 'A glimpse at some of my recent projects — crafted with care and attention to detail.',
      viewAllProjects: 'View All Projects',
      buildTogether: "Let's build this together",
      viewProject: 'View Project',
      foundation: 'Foundation',
      skills: {
        react: 'React',
        html: 'HTML',
        css: 'CSS',
        python: 'Python',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        analyticalSkills: 'Analytical Skills',
        algorithms: 'Algorithms',
        logicalReasoning: 'Logical Reasoning',
        problemSolving: 'Problem Solving',
      },
      languages: {
        arabic: 'Arabic',
        french: 'French',
        english: 'English',
        italian: 'Italian',
        deutsch: 'Deutsch',
        native: 'Native',
        nativeLike: 'Native-like',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        beginner: 'Beginner',
      },
      projects: {
        title: 'Project Title',
        description: 'A modern web project focused on clean design, responsiveness, and user experience. Built to demonstrate practical front-end development skills and structured problem solving.',
        tags: {
          webApp: 'Web App',
          frontend: 'Frontend',
          responsive: 'Responsive',
        },
      },
    },
    about: {
      title: 'Web Developer & Co-Founder of WebifyTN',
      subtitle: 'Architecting high-performance web foundations with a focus on longevity.',
      intro: 'I am Abderahmaine Dridi, a developer and co-founder based in Ariana. I build digital products that prioritize performance, accessibility, and structural integrity. My work is rooted in creating reliable web foundations that stand the test of time.',
      journeyTitle: 'My Journey',
      journeyContent: 'My path in technology began with a deep curiosity for logical systems, leading me to study Computer Science Technology. Completing Harvard’s CS50 further refined my approach to algorithms and problem-solving. Today, I am focused on transitioning from academic exploration to building professional digital solutions with real-world impact.',
      howIWorkTitle: 'How I Work',
      howIWorkContent: 'I prioritize logical structure and maintainable code over fleeting trends. Every project is optimized for speed and accessibility to ensure a premium user experience. I approach development as a strategic partner, ensuring the technical foundation supports long-term growth.',
      focusTitle: "What I'm Focusing On",
      focusContent: 'Currently, I am deepening my technical foundations in core web technologies and Python to build more robust products. I am committed to improving project quality through rigorous performance testing and clean architecture. My goal is to deliver reliable digital products that scale effectively.',
      beyondCodeTitle: 'Beyond Code',
      beyondCodeContent: 'Effective development requires more than syntax; it demands clear communication and collaborative problem-solving. I am fluent in English, Arabic, and French, which allows me to work seamlessly with international partners. I maintain a growth mindset, continuously learning to stay at the forefront of industry standards.',
      ctaViewWork: 'View My Work',
      ctaGetInTouch: 'Get In Touch',
      ctaTitle: "Let's Build the Future",
      ctaContent: 'Ready to discuss a project or collaboration? I am always open to conversations about building high-quality digital experiences.',
      downloadCV: 'Download CV',
      cvMicrocopy: 'A concise overview of my technical expertise and professional experience.',
    },
    work: {
      title: 'My Projects',
      subtitle: 'A selection of projects showcasing my skills, creativity, and problem-solving approach.',
      viewProject: 'View Project',
      projectTitle: 'Project Title',
      projectDescription: 'A modern web project focused on clean design, responsiveness, and user experience. Built to demonstrate practical front-end development skills and structured problem solving.',
      tags: {
        webApp: 'Web App',
        frontend: 'Frontend',
        responsive: 'Responsive',
      },
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.",
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      connectWithMe: 'Connect with me',
      name: 'Name',
      nameRequired: 'Your name',
      emailLabel: 'Email',
      emailRequired: 'your@email.com',
      subject: 'Subject',
      subjectPlaceholder: "What's this about?",
      message: 'Message',
      messageRequired: 'Your message...',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      missingFields: 'Missing fields',
      fillAllFields: 'Please fill in all required fields.',
      messageSent: 'Message sent!',
      thankYou: "Thank you for reaching out. I'll get back to you soon.",
      errorTitle: 'Error',
      formReferenceMissing: 'Form reference not found.',
      sendFailed: 'Failed to send message. Please try again.',
    },
    notFound: {
      title: '404',
      message: 'Oops! Page not found',
      returnHome: 'Return to Home',
    },
    footer: {
      webDeveloper: 'Web Developer',
      locationText: 'Ariana, Tunisia',
      copyright: '© 2025 Abderahmaine Dridi. All rights reserved.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      work: 'Travaux',
      about: 'À propos',
      contact: 'Contact',
      language: 'Langue',
    },
    home: {
      greeting: 'Bonjour, je suis',
      name: 'Abderahmaine Dridi',
      intro: 'Un étudiant passionné du lycée et développeur web étudiant actuellement la Technologie Informatique au Lycée Hannibal Ariana, diplômé en 2027.',
      getInTouch: 'Entrer en contact',
      viewMyWork: 'Voir mon travail',
      aboutTeaser: 'Plus que du code — découvrez mon parcours, mon état d\'esprit et mes objectifs.',
      learnMore: 'En savoir plus sur moi',
      skillsTitle: 'Compétences & Technologies',
      languagesTitle: 'Langues',
      highlightedWorkTitle: 'Travaux en vedette',
      highlightedWorkSubtitle: 'Un aperçu de certains de mes projets récents — conçus avec soin et attention aux détails.',
      viewAllProjects: 'Voir tous les projets',
      buildTogether: 'Construisons cela ensemble',
      viewProject: 'Voir le projet',
      foundation: 'Fondation',
      skills: {
        react: 'React',
        html: 'HTML',
        css: 'CSS',
        python: 'Python',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        analyticalSkills: 'Compétences analytiques',
        algorithms: 'Algorithmes',
        logicalReasoning: 'Raisonnement logique',
        problemSolving: 'Résolution de problèmes',
      },
      languages: {
        arabic: 'Arabe',
        french: 'Français',
        english: 'Anglais',
        italian: 'Italien',
        deutsch: 'Allemand',
        native: 'Langue maternelle',
        nativeLike: 'Quasi-natif',
        advanced: 'Avancé',
        intermediate: 'Intermédiaire',
        beginner: 'Débutant',
      },
      projects: {
        title: 'Titre du projet',
        description: 'Un projet web moderne axé sur un design épuré, la réactivité et l\'expérience utilisateur. Conçu pour démontrer des compétences pratiques en développement front-end et une résolution structurée de problèmes.',
        tags: {
          webApp: 'Application Web',
          frontend: 'Frontend',
          responsive: 'Responsive',
        },
      },
    },
    about: {
      title: 'Co-fondateur et Développeur Web chez WebifyTN',
      subtitle: 'Conception de fondations web haute performance axées sur la longévité.',
      intro: 'Je suis Abderahmaine Dridi, développeur et co-fondateur basé à Ariana. Je conçois des produits numériques privilégiant la performance, l\'accessibilité et l\'intégrité structurelle. Mon travail s\'enracine dans la création de bases web fiables défiant le temps.',
      journeyTitle: 'Mon parcours',
      journeyContent: 'Mon parcours technologique a débuté par une profonde curiosité pour les systèmes logiques, m\'amenant à étudier la technologie informatique. Le CS50 de Harvard a affiné mon approche des algorithmes et de la résolution de problèmes. Aujourd\'hui, je me concentre sur la transition de l\'exploration académique vers des solutions numériques professionnelles.',
      howIWorkTitle: 'Ma méthode',
      howIWorkContent: 'Je privilégie la structure logique et un code maintenable plutôt que les tendances éphémères. Chaque projet est optimisé pour la vitesse et l\'accessibilité afin de garantir une expérience utilisateur premium. J\'aborde le développement en tant que partenaire stratégique.',
      focusTitle: 'Mes priorités',
      focusContent: 'Actuellement, j\'approfondis mes bases techniques en technologies web et Python pour créer des produits plus robustes. Je m\'engage à améliorer la qualité des projets par des tests de performance rigoureux. Mon objectif est de livrer des produits numériques fiables.',
      beyondCodeTitle: 'Au-delà du code',
      beyondCodeContent: 'Un développement efficace exige une communication claire et une résolution collaborative des problèmes. Je parle couramment l\'anglais, l\'arabe et le français, ce qui me permet de collaborer avec des partenaires internationaux. Je cultive un esprit de croissance continue.',
      ctaViewWork: 'Voir mon travail',
      ctaGetInTouch: 'Me contacter',
      ctaTitle: 'Construisons l\'avenir',
      ctaContent: 'Prêt à discuter d\'un projet ou d\'une collaboration ? Je suis toujours ouvert aux conversations sur la création d\'expériences numériques de haute qualité.',
      downloadCV: 'Télécharger le CV',
      cvMicrocopy: 'Un aperçu concis de mon expertise technique et de mon expérience professionnelle.',
    },
    work: {
      title: 'Mes projets',
      subtitle: 'Une sélection de projets présentant mes compétences, ma créativité et mon approche de résolution de problèmes.',
      viewProject: 'Voir le projet',
      projectTitle: 'Titre du projet',
      projectDescription: 'Un projet web moderne axé sur un design épuré, la réactivité et l\'expérience utilisateur. Conçu pour démontrer des compétences pratiques en développement front-end et une résolution structurée de problèmes.',
      tags: {
        webApp: 'Application Web',
        frontend: 'Frontend',
        responsive: 'Responsive',
      },
    },
    contact: {
      title: 'Entrer en contact',
      subtitle: 'Vous avez une question ou souhaitez travailler ensemble ? Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.',
      contactInfo: 'Informations de contact',
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      connectWithMe: 'Connectez-vous avec moi',
      name: 'Nom',
      nameRequired: 'Votre nom',
      emailLabel: 'Email',
      emailRequired: 'votre@email.com',
      subject: 'Sujet',
      subjectPlaceholder: 'Quel est le sujet ?',
      message: 'Message',
      messageRequired: 'Votre message...',
      sendMessage: 'Envoyer le message',
      sending: 'Envoi...',
      missingFields: 'Champs manquants',
      fillAllFields: 'Veuillez remplir tous les champs requis.',
      messageSent: 'Message envoyé !',
      thankYou: 'Merci de m\'avoir contacté. Je vous répondrai bientôt.',
      errorTitle: 'Erreur',
      formReferenceMissing: 'Référence du formulaire introuvable.',
      sendFailed: 'Échec de l\'envoi du message. Veuillez réessayer.',
    },
    notFound: {
      title: '404',
      message: 'Oups ! Page introuvable',
      returnHome: 'Retour à l\'accueil',
    },
    footer: {
      webDeveloper: 'Développeur Web',
      locationText: 'Ariana, Tunisie',
      copyright: '© 2025 Abderahmaine Dridi. Tous droits réservés.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      work: 'الأعمال',
      about: 'نبذة',
      contact: 'اتصل',
      language: 'اللغة',
    },
    home: {
      greeting: 'مرحباً، أنا',
      name: 'عبد الرحمان الدريدي',
      intro: 'طالب ثانوي شغوف ومطور ويب أدرس حالياً تكنولوجيا علوم الحاسوب في ثانوية حنبعل أريانة، بتخرج متوقع في 2027.',
      getInTouch: 'تواصل معي',
      viewMyWork: 'عرض أعمالي',
      aboutTeaser: 'أكثر من مجرد كود - اكتشف رحلتي وطريقة تفكيري وأهدافي.',
      learnMore: 'اعرف المزيد عني',
      skillsTitle: 'المهارات والتقنيات',
      languagesTitle: 'اللغات',
      highlightedWorkTitle: 'أعمال بارزة',
      highlightedWorkSubtitle: 'لمحة عن بعض مشاريعي الأخيرة - مصنوعة بعناية واهتمام بالتفاصيل.',
      viewAllProjects: 'عرض جميع المشاريع',
      buildTogether: 'لنبني هذا معاً',
      viewProject: 'عرض المشروع',
      foundation: 'الأساس',
      skills: {
        react: 'React',
        html: 'HTML',
        css: 'CSS',
        python: 'Python',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        analyticalSkills: 'مهارات تحليلية',
        algorithms: 'خوارزميات',
        logicalReasoning: 'تفكير منطقي',
        problemSolving: 'حل المشكلات',
      },
      languages: {
        arabic: 'العربية',
        french: 'الفرنسية',
        english: 'الإنجليزية',
        italian: 'الإيطالية',
        deutsch: 'الألمانية',
        native: 'لغة أم',
        nativeLike: 'شبه أصلي',
        advanced: 'متقدم',
        intermediate: 'متوسط',
        beginner: 'مبتدئ',
      },
      projects: {
        title: 'عنوان المشروع',
        description: 'مشروع ويب حديث يركز على التصميم النظيف والاستجابة وتجربة المستخدم. تم بناؤه لإظهار مهارات التطوير العملية للواجهة الأمامية وحل المشكلات المنظم.',
        tags: {
          webApp: 'تطبيق ويب',
          frontend: 'واجهة أمامية',
          responsive: 'متجاوب',
        },
      },
    },
    about: {
      title: 'مطور ويب وشريك مؤسس لـ WebifyTN',
      subtitle: 'هندسة أساسات ويب عالية الأداء مع التركيز على الاستدامة.',
      intro: 'أنا عبد الرحمن دريدي، مطور وشريك مؤسس مقيم في أريانة. أبني منتجات رقمية تعطي الأولوية للأداء، وسهولة الوصول، والنزاهة الهيكلية. عملي متجذر في إنشاء أساسات ويب موثوقة تصمد أمام اختبار الزمن.',
      journeyTitle: 'رحلتي',
      journeyContent: 'بدأت رحلتي في التكنولوجيا بفضول عميق للأنظمة المنطقية، مما قادني لدراسة تكنولوجيا علوم الحاسوب. صقلت دورة CS50 من جامعة هارفارد منهجي في الخوارزميات وحل المشكلات. اليوم، أركز على الانتقال من الاستكشاف الأكاديمي إلى بناء حلول رقمية احترافية.',
      howIWorkTitle: 'كيف أعمل',
      howIWorkContent: 'أعطي الأولوية للهيكل المنطقي والكود القابل للصيانة على الصيحات العابرة. يتم تحسين كل مشروع من حيث السرعة وسهولة الوصول لضمان تجربة مستخدم متميزة. أتعامل مع التطوير كشريك استراتيجي.',
      focusTitle: 'ما أركز عليه',
      focusContent: 'حالياً، أتعمق في أساسياتي التقنية في تقنيات الويب الأساسية ولغة بايثون لبناء منتجات أكثر قوة. أنا ملتزم بتحسين جودة المشاريع من خلال اختبارات أداء صارمة. هدفي هو تقديم منتجات رقمية موثوقة.',
      beyondCodeTitle: 'ما وراء الكود',
      beyondCodeContent: 'يتطلب التطوير الفعال أكثر من مجرد كود؛ بل يتطلب تواصلاً واضحاً وحلاً تعاونياً للمشكلات. أتقن اللغات العربية والإنجليزية والفرنسية، مما يتيح لي التعاون بسلاسة مع الشركاء الدوليين.',
      ctaViewWork: 'عرض أعمالي',
      ctaGetInTouch: 'تواصل معي',
      ctaTitle: 'لنصنع المستقبل',
      ctaContent: 'هل أنت جاهز لمناقشة مشروع أو تعاون؟ أنا دائماً منفتح على المحادثات حول بناء تجارب رقمية عالية الجودة.',
      downloadCV: 'تحميل السيرة الذاتية',
      cvMicrocopy: 'ملخص موجز لخبرتي التقنية ومسيرتي المهنية.',
    },
    work: {
      title: 'مشاريعي',
      subtitle: 'مجموعة من المشاريع التي تعرض مهاراتي وإبداعي ومنهجي في حل المشكلات.',
      viewProject: 'عرض المشروع',
      projectTitle: 'عنوان المشروع',
      projectDescription: 'مشروع ويب حديث يركز على التصميم النظيف والاستجابة وتجربة المستخدم. تم بناؤه لإظهار مهارات التطوير العملية للواجهة الأمامية وحل المشكلات المنظم.',
      tags: {
        webApp: 'تطبيق ويب',
        frontend: 'واجهة أمامية',
        responsive: 'متجاوب',
      },
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'لديك سؤال أو تريد العمل معاً؟ املأ النموذج أدناه وسأرد عليك في أقرب وقت ممكن.',
      contactInfo: 'معلومات الاتصال',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع',
      connectWithMe: 'تواصل معي',
      name: 'الاسم',
      nameRequired: 'اسمك',
      emailLabel: 'البريد الإلكتروني',
      emailRequired: 'your@email.com',
      subject: 'الموضوع',
      subjectPlaceholder: 'ما موضوع رسالتك؟',
      message: 'الرسالة',
      messageRequired: 'رسالتك...',
      sendMessage: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      missingFields: 'حقول مفقودة',
      fillAllFields: 'يرجى ملء جميع الحقول المطلوبة.',
      messageSent: 'تم إرسال الرسالة!',
      thankYou: 'شكراً لتواصلك معي. سأرد عليك قريباً.',
      errorTitle: 'خطأ',
      formReferenceMissing: 'مرجع النموذج غير موجود.',
      sendFailed: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    },
    notFound: {
      title: '404',
      message: 'عذراً! الصفحة غير موجودة',
      returnHome: 'العودة إلى الرئيسية',
    },
    footer: {
      webDeveloper: 'مطور ويب',
      locationText: 'أريانة، تونس',
      copyright: '© 2025 عبد الرحمان الدريدي. جميع الحقوق محفوظة.',
    },
  },
};

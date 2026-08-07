// Translation system for bilingual FR/EN portfolio
export type Language = 'fr' | 'en'

export interface Translations {
  header: {
    nav: {
      services: string
      premiumServices: string
      experience: string
      method: string
      skills: string
      contact: string
    }
    cta: string
  }
  hero: {
    greeting: string
    name: string
    title: string
    subtitle: string
    bio: string
    badges: {
      experience: string
      countries: string
      tools: string
    }
    cta: {
      primary: string
      secondary: string
    }
    stats: {
      experience: string
      countries: string
      projects: string
    }
  }
  services: {
    title: string
    subtitle: string
    intro: {
      title: string
      description: string
    }
    list: Array<{
      title: string
      description: string
      deliverables: string
      metrics: string
    }>
  }
  premiumServices: {
    badge: string
    title: string
    subtitle: string
    services: Array<{
      title: string
      description: string
      keyPoints?: string[]
      techStack?: string[]
      deliverables?: string[]
      diagnosticContent?: string[]
      badge: string
    }>
    differentiation: {
      text: string
      tagline: string
    }
  }
  timeline: {
    title: string
    subtitle: string
    jobs: Array<{
      title: string
      company: string
      location: string
      description: string
      achievements: string[]
    }>
  }
  beforeAfter: {
    title: string
    subtitle: string
    before: string
    after: string
    comparisons: Array<{
      before: string
      after: string
    }>
  }
  roi: {
    title: string
    subtitle: string
    metrics: Array<{
      value: string
      label: string
      description: string
    }>
  }
  whyMe: {
    title: string
    subtitle: string
    reasons: Array<{
      title: string
      description: string
    }>
  }
  method: {
    badge: string
    title: string
    subtitle: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  skills: {
    title: string
    subtitle: string
    categories: Array<{
      title: string
      skills: string[]
    }>
  }
  diplomas: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      institution: string
      year: string
      description: string
    }>
  }
  testimonials: {
    title: string
    subtitle: string
    items: Array<{
      name: string
      role: string
      company: string
      text: string
    }>
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  footer: {
    tagline: string
    navigation: {
      title: string
      links: Array<{ label: string; href: string }>
    }
    services: {
      title: string
      links: Array<{ label: string; href: string }>
    }
    contact: {
      title: string
      email: string
      phone: string
      linkedin: string
    }
    legal: {
      title: string
      links: Array<{ label: string; href: string }>
    }
    copyright: string
  }
  floatingCta: {
    text: string
  }
}

export const translations: Record<Language, Translations> = {
  fr: {
    header: {
      nav: {
        services: 'Services',
        premiumServices: 'Offres Premium',
        experience: 'Expérience',
        method: 'Méthode',
        skills: 'Compétences',
        contact: 'Contact',
      },
      cta: 'Me Contacter',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Nicolas Lemoine',
      title: 'Chief Performance & Finance Strategist',
      subtitle: 'Expert Finance • Data • IA • Excellence Opérationnelle',
      bio: '10+ ans d\'expérience en pilotage financier multi-pays (France, Belgique, Allemagne). Spécialiste en contrôle de gestion, budgeting, forecasting, cost control et automatisation Power BI. Je transforme vos données financières en leviers de performance mesurable.',
      badges: {
        experience: '10+ ans d\'expérience',
        countries: 'Multi-pays (FR/BE/DE)',
        tools: 'Power BI • SAP • Excel avancé',
      },
      cta: {
        primary: 'Discutons de votre projet',
        secondary: 'Voir mon parcours',
      },
      stats: {
        experience: 'Années d\'expérience',
        countries: 'Pays',
        projects: 'Projets réalisés',
      },
    },
    services: {
      title: 'Services',
      subtitle: 'Expertise Finance, Data & Opérations',
      intro: {
        title: 'Un accompagnement sur-mesure pour transformer votre performance',
        description: 'Je combine finance, data, IA et excellence opérationnelle pour créer de la valeur mesurable dans votre organisation.',
      },
      list: [
        {
          title: 'Pilotage de la Performance Financière',
          description: 'Mise en place de systèmes de pilotage, KPIs, dashboards stratégiques, suivi de la performance multi-pays',
          deliverables: 'Dashboards Power BI, Reporting mensuel, KPIs personnalisés',
          metrics: 'ROI mesurable, Temps de reporting -50%',
        },
        {
          title: 'Budgeting & Forecasting',
          description: 'Construction de budgets structurés, forecast rolling, modèles prédictifs, simulations de scénarios',
          deliverables: 'Budget annuel, Forecast 12 mois glissant, Modèles Excel/Power BI',
          metrics: 'Précision forecast +30%, Réactivité décisionnelle',
        },
        {
          title: 'Cost Control & Optimisation',
          description: 'Analyse des coûts, identification des gaspillages, réduction du coût de non-qualité, plans d\'action ROI',
          deliverables: 'Cartographie des coûts, Plans d\'économies, Suivi ROI',
          metrics: 'Économies identifiées, ROI tracé',
        },
        {
          title: 'Automatisation & IA Finance',
          description: 'Automatisation du reporting, chatbots IA internes, détection d\'anomalies, génération d\'analyses',
          deliverables: 'Reporting automatisé, Assistants IA, Alertes intelligentes',
          metrics: 'Temps manuel -90%, Fiabilité +100%',
        },
        {
          title: 'Data Quality & Gouvernance',
          description: 'Audit de la qualité des données, standardisation, correction des incohérences, certification KPIs',
          deliverables: 'Diagnostic qualité, Plan de correction, Documentation',
          metrics: 'Erreurs -80%, Confiance données +100%',
        },
        {
          title: 'Excellence Opérationnelle Finance',
          description: 'Optimisation des processus finance, standardisation, formation équipes, amélioration continue',
          deliverables: 'Processus optimisés, Formations, Documentation',
          metrics: 'Efficacité +40%, Satisfaction équipes',
        },
      ],
    },
    premiumServices: {
      badge: 'Offres Premium',
      title: 'Finance Augmentée & IA',
      subtitle: 'Des solutions innovantes combinant finance, data, IA et excellence opérationnelle pour transformer votre organisation',
      services: [
        {
          title: 'Reporting Financier Automatisé & IA',
          description: 'Construction d\'assistants IA internes, automatisation complète du reporting mensuel, détection autonome des écarts et génération automatique d\'analyses financières exploitables.',
          keyPoints: [
            'Chatbot IA interne entraîné sur les données du client',
            'Reporting mensuel produit automatiquement',
            'Détection automatique des anomalies & variances',
            'Réduction du travail manuel (20h → 20 min)',
            'Sécurisation & fiabilisation de la donnée financière',
          ],
          badge: 'Offre exclusive Vyxo — aucune concurrence équivalente sur le marché.',
        },
        {
          title: 'Modélisation Financière Prédictive',
          description: 'Création de modèles prédictifs pour anticiper la marge, le cash burn, les risques, la rentabilité par produit ou l\'impact d\'une décision stratégique.',
          techStack: ['R Studio', 'Python', 'Excel avancé (Power Pivot)', 'Power BI', 'Modèles IA prédictifs'],
          deliverables: [
            'Forecast intelligent à 3/6/12 mois',
            'Simulation d\'impact décisionnel',
            'Modèles financiers dynamiques',
          ],
          badge: 'Produit premium très recherché par les directions financières.',
        },
        {
          title: 'Vyxo Data Quality Scan™',
          description: 'Audit haut-niveau de la qualité de la donnée financière : identification des erreurs, doublons, incohérences Excel, ruptures de flux, anomalies de variances et KPIs de mauvaise qualité.',
          diagnosticContent: [
            'Audit des fichiers Excel / systèmes / reporting',
            'Analyse des sources d\'erreurs',
            'Cartographie des incohérences de données',
            'Scoring qualitatif de la donnée',
            'Plan de correction & standardisation',
          ],
          badge: 'Un service unique sur le marché, combinant finance, data et excellence opérationnelle.',
        },
      ],
      differentiation: {
        text: 'Nicolas combine finance, data, IA et excellence opérationnelle pour transformer les organisations.',
        tagline: 'Un profil rare et puissant.',
      },
    },
    timeline: {
      title: 'Expérience Professionnelle',
      subtitle: '10+ ans d\'expertise en finance et performance',
      jobs: [
        {
          title: 'Consultant Finance & Performance',
          company: 'Vyxo Consulting',
          location: 'France',
          description: 'Conseil en pilotage financier, data et excellence opérationnelle pour PME et ETI',
          achievements: [
            'Accompagnement de 15+ clients en transformation finance',
            'Automatisation de reporting financier (gain 90% de temps)',
            'Mise en place de systèmes de pilotage multi-pays',
          ],
        },
        {
          title: 'Contrôleur de Gestion Groupe',
          company: 'Groupe International',
          location: 'France / Belgique / Allemagne',
          description: 'Pilotage financier multi-pays, budgeting, forecasting et cost control',
          achievements: [
            'Gestion budget annuel 50M€',
            'Forecast rolling mensuel 3 pays',
            'Réduction coûts opérationnels -15%',
          ],
        },
        {
          title: 'Analyste Financier Senior',
          company: 'Cabinet de Conseil',
          location: 'Paris',
          description: 'Analyse financière, modélisation, due diligence et business plans',
          achievements: [
            'Modélisation financière 20+ projets',
            'Due diligence acquisitions',
            'Business plans stratégiques',
          ],
        },
      ],
    },
    beforeAfter: {
      title: 'Avant / Après mon intervention',
      subtitle: 'Transformation concrète de votre performance financière et opérationnelle',
      before: 'Avant',
      after: 'Après',
      comparisons: [
        {
          before: 'Marges floues, coûts non maîtrisés',
          after: 'Drivers de marge identifiés et pilotés',
        },
        {
          before: 'Reporting mensuel en 20h, erreurs fréquentes',
          after: 'Reporting automatisé en 20 min, fiable',
        },
        {
          before: 'Pas de forecast, pilotage à vue',
          after: 'Budget structuré + forecast rolling fiable',
        },
        {
          before: 'Données Excel incohérentes, doublons',
          after: 'Data quality sous contrôle, KPIs certifiés',
        },
        {
          before: 'Coûts cachés, gaspillages invisibles',
          after: 'Coût de non-qualité mesuré + ROI tracé',
        },
      ],
    },
    roi: {
      title: 'Impact Mesurable',
      subtitle: 'Des résultats concrets et quantifiables',
      metrics: [
        {
          value: '-90%',
          label: 'Temps de reporting',
          description: 'Automatisation complète du reporting mensuel',
        },
        {
          value: '+30%',
          label: 'Précision forecast',
          description: 'Modèles prédictifs et simulations',
        },
        {
          value: '-15%',
          label: 'Coûts opérationnels',
          description: 'Optimisation et élimination des gaspillages',
        },
        {
          value: '100%',
          label: 'Fiabilité données',
          description: 'Data quality et gouvernance',
        },
      ],
    },
    whyMe: {
      title: 'Pourquoi me choisir ?',
      subtitle: 'Un profil unique alliant finance, data et excellence opérationnelle',
      reasons: [
        {
          title: 'Expertise Finance Multi-Pays',
          description: '10+ ans d\'expérience en pilotage financier France, Belgique, Allemagne',
        },
        {
          title: 'Maîtrise Data & IA',
          description: 'Power BI, Python, R, Excel avancé, automatisation et IA',
        },
        {
          title: 'Excellence Opérationnelle',
          description: 'Optimisation des processus, qualité, amélioration continue',
        },
        {
          title: 'Résultats Mesurables',
          description: 'ROI tracé, KPIs certifiés, impact quantifiable',
        },
      ],
    },
    method: {
      badge: 'Ma Méthode',
      title: 'Méthode Vyxo — 5 étapes',
      subtitle: 'Une approche structurée et éprouvée pour transformer votre performance financière, votre qualité et vos opérations',
      steps: [
        {
          title: 'Diagnostic financier & qualité opérationnelle',
          description: 'Analyse précise des marges, coûts, variances, fiabilité des données et maturité process.',
        },
        {
          title: 'Cartographie des flux, des données & des risques',
          description: 'Identification des ruptures process, incohérences de données, risques opérationnels et sources de variabilité.',
        },
        {
          title: 'Standardisation & Excellence Opérationnelle',
          description: 'Création de processus, modèles financiers et règles de gestion homogènes pour une performance stable.',
        },
        {
          title: 'KPI, Automatisation & Systèmes de pilotage',
          description: 'Construction de dashboards Power BI / Excel avancé et automatisation du reporting qualité + finances.',
        },
        {
          title: 'Pilotage, Excellence & ROI',
          description: 'Accompagnement DG/Comex, optimisation coûts et réduction du coût de non qualité avec gains mesurables.',
        },
      ],
    },
    skills: {
      title: 'Compétences & Outils',
      subtitle: 'Stack technique et expertise',
      categories: [
        {
          title: 'Finance & Gestion',
          skills: ['Contrôle de Gestion', 'Budgeting & Forecasting', 'Cost Control', 'Analyse Financière', 'Business Planning'],
        },
        {
          title: 'Data & BI',
          skills: ['Power BI', 'Excel Avancé', 'Power Query', 'DAX', 'SQL'],
        },
        {
          title: 'IA & Automatisation',
          skills: ['Python', 'R Studio', 'Modèles Prédictifs', 'Chatbots IA', 'Automatisation'],
        },
        {
          title: 'ERP & Systèmes',
          skills: ['SAP', 'Oracle', 'NetSuite', 'Sage', 'Cegid'],
        },
      ],
    },
    diplomas: {
      title: 'Formation & Certifications',
      subtitle: 'Parcours académique et professionnel',
      items: [
        {
          title: 'Master II Finance d\'Entreprise',
          institution: 'École de Commerce',
          year: '2013',
          description: 'Spécialisation Finance, Contrôle de Gestion, Audit',
        },
        {
          title: 'Certifications Data & BI',
          institution: 'Autodidacte',
          year: '2018-2024',
          description: 'Power BI, Python, R, Excel avancé, IA',
        },
        {
          title: 'Certification Contrôle de Gestion',
          institution: 'DFCG',
          year: '2015',
          description: 'Diplôme de la Fédération des Contrôleurs de Gestion',
        },
      ],
    },
    testimonials: {
      title: 'Témoignages',
      subtitle: 'Ce que disent mes clients',
      items: [
        {
          name: 'Marie Dubois',
          role: 'Directrice Financière',
          company: 'Groupe Industrial',
          text: 'Nicolas a transformé notre reporting financier. Nous avons gagné 90% de temps et la fiabilité est parfaite.',
        },
        {
          name: 'Jean Martin',
          role: 'CEO',
          company: 'Tech Startup',
          text: 'Un vrai expert qui combine finance et data. Ses modèles prédictifs nous ont permis d\'anticiper nos besoins de trésorerie.',
        },
        {
          name: 'Sophie Laurent',
          role: 'Contrôleur de Gestion',
          company: 'PME Export',
          text: 'Accompagnement de qualité, résultats mesurables. Nicolas a structuré notre pilotage multi-pays.',
        },
      ],
    },
    cta: {
      title: 'Prêt à transformer votre performance financière ?',
      subtitle: 'Discutons de votre projet et de vos objectifs',
      button: 'Prendre rendez-vous',
    },
    footer: {
      tagline: 'Expert Finance • Data • IA • Excellence Opérationnelle',
      navigation: {
        title: 'Navigation',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Offres Premium', href: '#premium-services' },
          { label: 'Expérience', href: '#experience' },
          { label: 'Méthode', href: '#method' },
          { label: 'Compétences', href: '#skills' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      services: {
        title: 'Services',
        links: [
          { label: 'Pilotage Financier', href: '#services' },
          { label: 'Budgeting & Forecasting', href: '#services' },
          { label: 'Cost Control', href: '#services' },
          { label: 'Automatisation & IA', href: '#services' },
          { label: 'Data Quality', href: '#services' },
          { label: 'Excellence Opérationnelle', href: '#services' },
        ],
      },
      contact: {
        title: 'Contact',
        email: 'nicolas.lemoine@vyxoconsult.com',
        phone: '06.00.00.00.00',
        linkedin: 'LinkedIn',
      },
      legal: {
        title: 'Légal',
        links: [
          { label: 'Mentions Légales', href: '/legal' },
          { label: 'Politique de Confidentialité', href: '/privacy' },
          { label: 'CGV', href: '/terms' },
        ],
      },
      copyright: '© 2024 Nicolas Lemoine - Vyxo Consulting. Tous droits réservés.',
    },
    floatingCta: {
      text: 'Discutons de votre projet',
    },
  },
  en: {
    header: {
      nav: {
        services: 'Services',
        premiumServices: 'Premium Offers',
        experience: 'Experience',
        method: 'Method',
        skills: 'Skills',
        contact: 'Contact',
      },
      cta: 'Contact Me',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Nicolas Lemoine',
      title: 'Chief Performance & Finance Strategist',
      subtitle: 'Finance Expert • Data • AI • Operational Excellence',
      bio: '10+ years of experience in multi-country financial management (France, Belgium, Germany). Specialist in management control, budgeting, forecasting, cost control and Power BI automation. I transform your financial data into measurable performance levers.',
      badges: {
        experience: '10+ years of experience',
        countries: 'Multi-country (FR/BE/DE)',
        tools: 'Power BI • SAP • Advanced Excel',
      },
      cta: {
        primary: 'Let\'s discuss your project',
        secondary: 'View my background',
      },
      stats: {
        experience: 'Years of experience',
        countries: 'Countries',
        projects: 'Completed projects',
      },
    },
    services: {
      title: 'Services',
      subtitle: 'Finance, Data & Operations Expertise',
      intro: {
        title: 'Tailored support to transform your performance',
        description: 'I combine finance, data, AI and operational excellence to create measurable value in your organization.',
      },
      list: [
        {
          title: 'Financial Performance Management',
          description: 'Implementation of management systems, KPIs, strategic dashboards, multi-country performance tracking',
          deliverables: 'Power BI Dashboards, Monthly Reporting, Custom KPIs',
          metrics: 'Measurable ROI, Reporting Time -50%',
        },
        {
          title: 'Budgeting & Forecasting',
          description: 'Building structured budgets, rolling forecasts, predictive models, scenario simulations',
          deliverables: 'Annual Budget, 12-month Rolling Forecast, Excel/Power BI Models',
          metrics: 'Forecast Accuracy +30%, Decision Reactivity',
        },
        {
          title: 'Cost Control & Optimization',
          description: 'Cost analysis, waste identification, cost of non-quality reduction, ROI action plans',
          deliverables: 'Cost Mapping, Savings Plans, ROI Tracking',
          metrics: 'Identified Savings, Tracked ROI',
        },
        {
          title: 'Finance Automation & AI',
          description: 'Reporting automation, internal AI chatbots, anomaly detection, analysis generation',
          deliverables: 'Automated Reporting, AI Assistants, Smart Alerts',
          metrics: 'Manual Time -90%, Reliability +100%',
        },
        {
          title: 'Data Quality & Governance',
          description: 'Data quality audit, standardization, inconsistency correction, KPI certification',
          deliverables: 'Quality Diagnostic, Correction Plan, Documentation',
          metrics: 'Errors -80%, Data Trust +100%',
        },
        {
          title: 'Finance Operational Excellence',
          description: 'Finance process optimization, standardization, team training, continuous improvement',
          deliverables: 'Optimized Processes, Training, Documentation',
          metrics: 'Efficiency +40%, Team Satisfaction',
        },
      ],
    },
    premiumServices: {
      badge: 'Premium Offers',
      title: 'AI-Powered Finance',
      subtitle: 'Innovative solutions combining finance, data, AI and operational excellence to transform your organization',
      services: [
        {
          title: 'Automated Financial Reporting & AI',
          description: 'Building internal AI assistants, complete automation of monthly reporting, autonomous variance detection and automatic generation of actionable financial analyses.',
          keyPoints: [
            'Internal AI chatbot trained on client data',
            'Monthly reporting produced automatically',
            'Automatic anomaly & variance detection',
            'Manual work reduction (20h → 20 min)',
            'Financial data security & reliability',
          ],
          badge: 'Exclusive Vyxo offer — no equivalent competition in the market.',
        },
        {
          title: 'Predictive Financial Modeling',
          description: 'Creating predictive models to anticipate margin, cash burn, risks, product profitability or the impact of a strategic decision.',
          techStack: ['R Studio', 'Python', 'Advanced Excel (Power Pivot)', 'Power BI', 'Predictive AI Models'],
          deliverables: [
            'Intelligent 3/6/12-month forecast',
            'Decision impact simulation',
            'Dynamic financial models',
          ],
          badge: 'Premium product highly sought after by finance departments.',
        },
        {
          title: 'Vyxo Data Quality Scan™',
          description: 'High-level audit of financial data quality: identification of errors, duplicates, Excel inconsistencies, flow breaks, variance anomalies and poor quality KPIs.',
          diagnosticContent: [
            'Audit of Excel files / systems / reporting',
            'Error source analysis',
            'Data inconsistency mapping',
            'Data quality scoring',
            'Correction & standardization plan',
          ],
          badge: 'A unique service in the market, combining finance, data and operational excellence.',
        },
      ],
      differentiation: {
        text: 'Nicolas combines finance, data, AI and operational excellence to transform organizations.',
        tagline: 'A rare and powerful profile.',
      },
    },
    timeline: {
      title: 'Professional Experience',
      subtitle: '10+ years of finance and performance expertise',
      jobs: [
        {
          title: 'Finance & Performance Consultant',
          company: 'Vyxo Consulting',
          location: 'France',
          description: 'Financial management, data and operational excellence consulting for SMEs and mid-caps',
          achievements: [
            'Supported 15+ clients in finance transformation',
            'Financial reporting automation (90% time savings)',
            'Implementation of multi-country management systems',
          ],
        },
        {
          title: 'Group Management Controller',
          company: 'International Group',
          location: 'France / Belgium / Germany',
          description: 'Multi-country financial management, budgeting, forecasting and cost control',
          achievements: [
            'Annual budget management €50M',
            'Monthly rolling forecast 3 countries',
            'Operating cost reduction -15%',
          ],
        },
        {
          title: 'Senior Financial Analyst',
          company: 'Consulting Firm',
          location: 'Paris',
          description: 'Financial analysis, modeling, due diligence and business plans',
          achievements: [
            'Financial modeling 20+ projects',
            'Acquisition due diligence',
            'Strategic business plans',
          ],
        },
      ],
    },
    beforeAfter: {
      title: 'Before / After my intervention',
      subtitle: 'Concrete transformation of your financial and operational performance',
      before: 'Before',
      after: 'After',
      comparisons: [
        {
          before: 'Unclear margins, uncontrolled costs',
          after: 'Margin drivers identified and managed',
        },
        {
          before: 'Monthly reporting in 20h, frequent errors',
          after: 'Automated reporting in 20 min, reliable',
        },
        {
          before: 'No forecast, flying blind',
          after: 'Structured budget + reliable rolling forecast',
        },
        {
          before: 'Inconsistent Excel data, duplicates',
          after: 'Data quality under control, certified KPIs',
        },
        {
          before: 'Hidden costs, invisible waste',
          after: 'Cost of non-quality measured + tracked ROI',
        },
      ],
    },
    roi: {
      title: 'Measurable Impact',
      subtitle: 'Concrete and quantifiable results',
      metrics: [
        {
          value: '-90%',
          label: 'Reporting time',
          description: 'Complete automation of monthly reporting',
        },
        {
          value: '+30%',
          label: 'Forecast accuracy',
          description: 'Predictive models and simulations',
        },
        {
          value: '-15%',
          label: 'Operating costs',
          description: 'Optimization and waste elimination',
        },
        {
          value: '100%',
          label: 'Data reliability',
          description: 'Data quality and governance',
        },
      ],
    },
    whyMe: {
      title: 'Why choose me?',
      subtitle: 'A unique profile combining finance, data and operational excellence',
      reasons: [
        {
          title: 'Multi-Country Finance Expertise',
          description: '10+ years of experience in financial management France, Belgium, Germany',
        },
        {
          title: 'Data & AI Mastery',
          description: 'Power BI, Python, R, Advanced Excel, automation and AI',
        },
        {
          title: 'Operational Excellence',
          description: 'Process optimization, quality, continuous improvement',
        },
        {
          title: 'Measurable Results',
          description: 'Tracked ROI, certified KPIs, quantifiable impact',
        },
      ],
    },
    method: {
      badge: 'My Method',
      title: 'Vyxo Method — 5 steps',
      subtitle: 'A structured and proven approach to transform your financial performance, quality and operations',
      steps: [
        {
          title: 'Financial & operational quality diagnostic',
          description: 'Precise analysis of margins, costs, variances, data reliability and process maturity.',
        },
        {
          title: 'Flow, data & risk mapping',
          description: 'Identification of process breaks, data inconsistencies, operational risks and variability sources.',
        },
        {
          title: 'Standardization & Operational Excellence',
          description: 'Creation of processes, financial models and homogeneous management rules for stable performance.',
        },
        {
          title: 'KPI, Automation & Management Systems',
          description: 'Building Power BI / Advanced Excel dashboards and automation of quality + finance reporting.',
        },
        {
          title: 'Management, Excellence & ROI',
          description: 'CEO/Executive support, cost optimization and cost of non-quality reduction with measurable gains.',
        },
      ],
    },
    skills: {
      title: 'Skills & Tools',
      subtitle: 'Technical stack and expertise',
      categories: [
        {
          title: 'Finance & Management',
          skills: ['Management Control', 'Budgeting & Forecasting', 'Cost Control', 'Financial Analysis', 'Business Planning'],
        },
        {
          title: 'Data & BI',
          skills: ['Power BI', 'Advanced Excel', 'Power Query', 'DAX', 'SQL'],
        },
        {
          title: 'AI & Automation',
          skills: ['Python', 'R Studio', 'Predictive Models', 'AI Chatbots', 'Automation'],
        },
        {
          title: 'ERP & Systems',
          skills: ['SAP', 'Oracle', 'NetSuite', 'Sage', 'Cegid'],
        },
      ],
    },
    diplomas: {
      title: 'Education & Certifications',
      subtitle: 'Academic and professional background',
      items: [
        {
          title: 'Master II Corporate Finance',
          institution: 'Business School',
          year: '2013',
          description: 'Specialization in Finance, Management Control, Audit',
        },
        {
          title: 'Data & BI Certifications',
          institution: 'Self-taught',
          year: '2018-2024',
          description: 'Power BI, Python, R, Advanced Excel, AI',
        },
        {
          title: 'Management Control Certification',
          institution: 'DFCG',
          year: '2015',
          description: 'Diploma from the Federation of Management Controllers',
        },
      ],
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What my clients say',
      items: [
        {
          name: 'Marie Dubois',
          role: 'Chief Financial Officer',
          company: 'Industrial Group',
          text: 'Nicolas transformed our financial reporting. We saved 90% of time and reliability is perfect.',
        },
        {
          name: 'Jean Martin',
          role: 'CEO',
          company: 'Tech Startup',
          text: 'A true expert who combines finance and data. His predictive models allowed us to anticipate our cash needs.',
        },
        {
          name: 'Sophie Laurent',
          role: 'Management Controller',
          company: 'Export SME',
          text: 'Quality support, measurable results. Nicolas structured our multi-country management.',
        },
      ],
    },
    cta: {
      title: 'Ready to transform your financial performance?',
      subtitle: 'Let\'s discuss your project and objectives',
      button: 'Schedule a meeting',
    },
    footer: {
      tagline: 'Finance Expert • Data • AI • Operational Excellence',
      navigation: {
        title: 'Navigation',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Premium Offers', href: '#premium-services' },
          { label: 'Experience', href: '#experience' },
          { label: 'Method', href: '#method' },
          { label: 'Skills', href: '#skills' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      services: {
        title: 'Services',
        links: [
          { label: 'Financial Management', href: '#services' },
          { label: 'Budgeting & Forecasting', href: '#services' },
          { label: 'Cost Control', href: '#services' },
          { label: 'Automation & AI', href: '#services' },
          { label: 'Data Quality', href: '#services' },
          { label: 'Operational Excellence', href: '#services' },
        ],
      },
      contact: {
        title: 'Contact',
        email: 'nicolas.lemoine@vyxoconsult.com',
        phone: '06.00.00.00.00',
        linkedin: 'LinkedIn',
      },
      legal: {
        title: 'Legal',
        links: [
          { label: 'Legal Notice', href: '/legal' },
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms & Conditions', href: '/terms' },
        ],
      },
      copyright: '© 2024 Nicolas Lemoine - Vyxo Consulting. All rights reserved.',
    },
    floatingCta: {
      text: 'Let\'s discuss your project',
    },
  },
}

// Translation system for bilingual FR/EN portfolio — Le Bureau de Laury
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
      companies: string
      sectors: string
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
  transport: {
    badge: string
    title: string
    subtitle: string
    cards: Array<{
      title: string
      description: string
    }>
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
  dna: {
    title: string
    subtitle: string
    traits: Array<{
      title: string
      description: string
    }>
  }
}

export const translations: Record<Language, Translations> = {
  fr: {
    header: {
      nav: {
        services: 'Services',
        premiumServices: 'Offres Premium',
        experience: 'Parcours',
        method: 'Méthode',
        skills: 'Compétences',
        contact: 'Contact',
      },
      cta: 'Me Contacter',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Laury Martin',
      title: 'Relation Client & Développement Commercial',
      subtitle: 'Partenaire administrative & commerciale des pros',
      bio: '17 ans d\'expérience en relation client, gestion administrative et développement commercial. Spécialiste de la fidélisation, de la prospection terrain et du suivi opérationnel. J\'accompagne les artisans, TPE et entrepreneurs pour qu\'ils se concentrent sur leur cœur de métier.',
      badges: {
        experience: '17 ans d\'expérience',
        countries: 'Basée à Toulouse',
        tools: 'CRM • Prospection • Fidélisation',
      },
      cta: {
        primary: 'Réserver un appel découverte',
        secondary: 'Découvrir mes services',
      },
      stats: {
        experience: 'Années d\'expérience',
        companies: 'Entreprises',
        sectors: 'Secteurs couverts',
      },
    },
    services: {
      title: 'Compétences Clés',
      subtitle: 'Relation client, gestion administrative et développement commercial',
      intro: {
        title: 'Un accompagnement complet pour libérer votre temps',
        description: 'Je combine relation client, gestion administrative, IA et rigueur opérationnelle pour créer de la valeur concrète dans votre entreprise.',
      },
      list: [
        {
          title: 'Relation client & fidélisation',
          description: 'Accueil, suivi, satisfaction et fidélisation clientèle variée (particuliers, professionnels, collectivités)',
          deliverables: 'Accueil téléphonique, suivi satisfaction, programme fidélisation',
          metrics: 'Taux fidélisation +40%, Satisfaction client +35%',
        },
        {
          title: 'Gestion administrative & CRM',
          description: 'Tenue fichiers clients, mise à jour CRM, organisation documentaire, suivi de dossiers',
          deliverables: 'CRM structuré, Classement 5S documentaire, Suivi dossiers',
          metrics: 'Temps admin -60%, Zéro dossier perdu',
        },
        {
          title: 'Devis, facturation & relances',
          description: 'Établissement devis/factures, relances paiement, suivi règlements',
          deliverables: 'Devis J+0, Factures automatisées, Relances 1/2/3',
          metrics: 'Délai paiement -45%, CA récupéré +25%',
        },
        {
          title: 'Litiges & SAV',
          description: 'Prise en charge réclamations, résolution litiges, gestion urgences client',
          deliverables: 'Process résolution, Suivi réclamations, Reporting SAV',
          metrics: 'Résolution <24h, Fidélisation post-litige +60%',
        },
        {
          title: 'Planning & coordination',
          description: 'Gestion agenda, prise de RDV, coordination plannings d\'intervention',
          deliverables: 'Agenda optimisé, Rappels automatiques, Coordination terrain',
          metrics: 'Zéro RDV manqué, Taux occupation +30%',
        },
        {
          title: 'Prospection & vente directe',
          description: 'Développement portefeuille client, prospection terrain et téléphonique, qualification leads',
          deliverables: 'Fichier prospects qualifiés, Scripts d\'appel, Reporting prospection',
          metrics: 'Pipeline +50%, Taux conversion +20%',
        },
      ],
    },
    premiumServices: {
      badge: 'Offres Premium',
      title: 'L\'humain d\'abord, l\'IA en renfort',
      subtitle: 'Des packs structurés qui combinent expertise terrain, process éprouvés et intelligence artificielle pour des résultats mesurables',
      services: [
        {
          title: 'Bureau Zéro Chaos',
          description: 'Le pack démarrage pour les entrepreneurs qui partent de zéro ou qui croulent sous la paperasse. Diagnostic admin complet, mise en place CRM, création des process devis/factures/relances, organisation documentaire 5S.',
          keyPoints: [
            'Diagnostic express de votre maturité administrative',
            'Mise en place CRM adapté à votre activité',
            'Process standardisés devis → facture → relance',
            'Organisation 5S de vos documents et dossiers',
            'Formation pour garder le système en autonomie',
          ],
          badge: 'Idéal pour les créateurs et les artisans débordés.',
        },
        {
          title: 'Machine Commerciale',
          description: 'Le pack croissance pour ceux qui veulent scaler. CRM intelligent avec scoring leads par IA, relances automatisées et personnalisées, prospection ciblée, reporting mensuel auto-généré.',
          keyPoints: [
            'CRM enrichi par IA : scoring leads chaud/tiède/froid',
            'Relances intelligentes : l\'IA prépare, Laury personnalise',
            'Prospection ciblée : fichier qualifié + scripts',
            'Reporting mensuel auto-généré + analyse terrain',
            'Dashboard TPE : devis, conversions, CA, impayés',
          ],
          badge: 'Pour les pros qui veulent faire rentrer du chiffre, pas juste classer des papiers.',
        },
        {
          title: 'Bureau Externalisé Complet',
          description: 'Le pack sérénité : admin + commercial + relation client + dashboard + IA. Le patron ne touche plus à rien sauf son métier. Un vrai bureau externalisé clé en main.',
          keyPoints: [
            'Gestion administrative complète externalisée',
            'Suivi commercial de A à Z avec IA',
            'Relation client : accueil, SAV, fidélisation',
            'Dashboard de pilotage co-conçu avec nos experts data',
            'Accueil hybride : chatbot IA + rappel humain garanti',
          ],
          badge: 'Le partenariat long terme pour ne plus jamais penser à l\'administratif.',
        },
      ],
      differentiation: {
        text: 'Laury combine 17 ans de terrain, rigueur opérationnelle et outils IA pour une prestation que personne d\'autre ne propose dans l\'assistanat freelance.',
        tagline: 'L\'IA fait le travail répétitif. Laury fait le travail relationnel.',
      },
    },
    transport: {
      badge: 'Expertise Sectorielle',
      title: 'Expérience Transport & Logistique',
      subtitle: 'Une connaissance concrète du monde des transporteurs routiers',
      cards: [
        {
          title: 'Sourcing & mise en concurrence',
          description: 'Consultation d\'une dizaine de transporteurs par demande de fret, comparaison des offres',
        },
        {
          title: 'Évaluation & notation',
          description: 'Co-conception d\'un tableau de suivi et système de notation (délai de réponse, sérieux, flexibilité, respect horaires, qualité échanges)',
        },
        {
          title: 'Gestion messagerie transporteurs',
          description: 'Interface quotidienne entre équipes internes et panel transporteurs',
        },
        {
          title: 'Benchmark tarifaire',
          description: 'Tableaux comparatifs des tarifs par secteur géographique et tranche de poids',
        },
        {
          title: 'Développement panel',
          description: 'RDV avec nouveaux transporteurs pour intégrer les plus pertinents',
        },
      ],
    },
    timeline: {
      title: 'Mon Parcours',
      subtitle: '17 ans d\'expérience en relation client et développement commercial',
      jobs: [
        {
          title: 'Chargée de clientèle',
          company: 'Selfcity',
          location: 'Toulouse',
          description: 'Relation client particuliers/professionnels, fidélisation, gestion fournisseurs, litiges et SAV',
          achievements: [
            'Gestion portefeuille clients B2C et B2B',
            'Fidélisation et suivi satisfaction',
            'Résolution litiges et réclamations SAV',
          ],
        },
        {
          title: 'Assistante commerciale',
          company: 'Soval SA',
          location: 'Toulouse',
          description: 'Relation clients B2B (bâtiment/collectivités), commandes, facturation, relances, gestion transporteurs',
          achievements: [
            'Gestion relation clients B2B bâtiment & collectivités',
            'Facturation, relances et suivi règlements',
            'Sourcing et évaluation panel transporteurs',
          ],
        },
        {
          title: 'Conseillère commerciale',
          company: 'Proxigaz (Butagaz)',
          location: 'Toulouse',
          description: 'Service résiliation, réclamations, CRM, devis, fidélisation et vente directe',
          achievements: [
            'Fidélisation clients et réduction du churn',
            'Gestion CRM et suivi pipeline',
            'Vente directe et upselling',
          ],
        },
        {
          title: 'Appui administratif',
          company: 'GRDF Occitanie',
          location: 'Toulouse',
          description: 'Planification tournées, gestion appels entrants/sortants',
          achievements: [
            'Coordination planning tournées techniciens',
            'Gestion flux appels entrants/sortants',
            'Organisation logistique terrain',
          ],
        },
        {
          title: 'Conseillère clientèle',
          company: 'Engie Home Services',
          location: 'Toulouse',
          description: 'Prise de rendez-vous, création dossiers clients',
          achievements: [
            'Accueil et qualification demandes',
            'Création et suivi dossiers clients',
            'Prise de RDV et coordination',
          ],
        },
        {
          title: 'Conseillère commerciale',
          company: 'Solocal',
          location: 'Toulouse',
          description: 'Prospection terrain et téléphonique, vente directe',
          achievements: [
            'Prospection terrain et téléphonique',
            'Vente directe de solutions digitales',
            'Développement portefeuille client',
          ],
        },
        {
          title: 'Responsable adjointe',
          company: 'Jeff de Bruges',
          location: 'Toulouse',
          description: 'Commerce, management d\'équipe, fidélisation clients, gestion litiges',
          achievements: [
            'Management d\'équipe commerciale',
            'Fidélisation et programme clients',
            'Gestion litiges et satisfaction',
          ],
        },
        {
          title: 'Responsable équipe de caisse',
          company: 'Total',
          location: 'Toulouse',
          description: 'Relation clientèle, gestion des stocks, management équipe',
          achievements: [
            'Management équipe de caisse',
            'Relation clientèle directe',
            'Gestion stocks et approvisionnement',
          ],
        },
      ],
    },
    whyMe: {
      title: 'Pourquoi me choisir ?',
      subtitle: 'Pas une assistante virtuelle. Une partenaire terrain.',
      reasons: [
        {
          title: 'Terrain avant tout',
          description: '17 ans de pratique directe face-à-face clients exigeants. Butagaz, GRDF, Engie, Soval. Mon expérience n\'est pas théorique — elle est construite appel après appel.',
        },
        {
          title: 'Double casquette commerciale & admin',
          description: 'Prospection + suivi admin complet (devis, factures, relances, CRM). Je ne classe pas des papiers, je fais rentrer du chiffre.',
        },
        {
          title: 'Connaissance du transport',
          description: 'Sélection, évaluation et gestion de transporteurs routiers. Je parle le même langage que les pros du terrain et de la route.',
        },
        {
          title: 'Résolution sous pression',
          description: 'Litiges, SAV, urgences, transformation problème en fidélisation. 17 ans à désamorcer les tensions et à transformer un problème en opportunité.',
        },
      ],
    },
    method: {
      badge: 'Ma Méthode',
      title: 'On démarre en trois étapes',
      subtitle: 'Simple, concret et sans engagement. Vous savez exactement ce que vous obtenez.',
      steps: [
        {
          title: 'On échange',
          description: 'Un appel de 20 minutes pour comprendre votre activité, identifier ce qui vous prend le plus de temps et définir ce que je peux prendre en charge immédiatement.',
        },
        {
          title: 'Je vous propose une formule',
          description: 'Un forfait mensuel adapté à votre volume réel. Pas de package surdimensionné, pas de surprise en fin de mois. Vous savez exactement ce que ça coûte.',
        },
        {
          title: 'Je prends la main',
          description: 'Vous vous concentrez sur votre métier. Je gère l\'administratif, le commercial et la relation client. Vous récupérez du temps, de la trésorerie et des clients.',
        },
      ],
    },
    skills: {
      title: 'Compétences & Outils',
      subtitle: 'Expertise terrain augmentée par l\'IA',
      categories: [
        {
          title: 'Relation Client',
          skills: ['Accueil téléphonique', 'Fidélisation', 'SAV & Litiges', 'Satisfaction client', 'Gestion réclamations'],
        },
        {
          title: 'Commercial',
          skills: ['Prospection terrain', 'Prospection téléphonique', 'Vente directe', 'Qualification leads', 'Négociation'],
        },
        {
          title: 'Administration',
          skills: ['Devis & Facturation', 'CRM', 'Organisation 5S', 'Classement', 'Suivi dossiers'],
        },
        {
          title: 'IA & Outils',
          skills: ['Relances IA', 'Scoring leads', 'Reporting auto', 'Chatbot accueil', 'Dashboard TPE'],
        },
      ],
    },
    cta: {
      title: 'Parlons de votre projet',
      subtitle: 'Développement commercial, gestion de la relation client, onboarding — discutons de comment je peux contribuer à votre croissance.',
      button: 'Réserver mon appel découverte',
    },
    footer: {
      tagline: 'Partenaire administrative & commerciale des artisans, TPE et entrepreneurs',
      navigation: {
        title: 'Navigation',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Offres Premium', href: '#premium-services' },
          { label: 'Parcours', href: '#timeline' },
          { label: 'Méthode', href: '#method' },
          { label: 'Compétences', href: '#skills' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      services: {
        title: 'Services',
        links: [
          { label: 'Relation client', href: '#services' },
          { label: 'Gestion administrative', href: '#services' },
          { label: 'Suivi commercial', href: '#services' },
          { label: 'Prospection', href: '#services' },
          { label: 'Transport & Logistique', href: '#transport' },
          { label: 'Offres Premium IA', href: '#premium-services' },
        ],
      },
      contact: {
        title: 'Contact',
        email: 'contact@lebureaudelaury.fr',
        phone: 'À renseigner',
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
      copyright: '© 2026 Le Bureau de Laury. Tous droits réservés.',
    },
    floatingCta: {
      text: 'Réserver un appel découverte',
    },
    dna: {
      title: 'Mon ADN',
      subtitle: "L'IA fait le travail répétitif. Laury fait le travail relationnel.",
      traits: [
        {
          title: "L'humain d'abord",
          description:
            '17 ans de terrain, face-à-face clients. La confiance se construit par le contact, pas par un algorithme.',
        },
        {
          title: 'Rigueur opérationnelle',
          description:
            'Process structurés, 5S documentaire, zéro dossier perdu. La méthode au service de l\'efficacité.',
        },
        {
          title: "L'IA en renfort",
          description:
            "Relances intelligentes, scoring leads, reporting auto-généré. L'IA fait le répétitif, Laury fait le relationnel.",
        },
      ],
    },
  },
  en: {
    header: {
      nav: {
        services: 'Services',
        premiumServices: 'Premium Offers',
        experience: 'Background',
        method: 'Method',
        skills: 'Skills',
        contact: 'Contact',
      },
      cta: 'Contact Me',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Laury Martin',
      title: 'Client Relations & Business Development',
      subtitle: 'Administrative & commercial partner for professionals',
      bio: '17 years of experience in client relations, administrative management and business development. Specialist in customer retention, field prospecting and operational follow-up. I support craftsmen, small businesses and entrepreneurs so they can focus on their core business.',
      badges: {
        experience: '17 years of experience',
        countries: 'Based in Toulouse',
        tools: 'CRM • Prospecting • Retention',
      },
      cta: {
        primary: 'Book a discovery call',
        secondary: 'Discover my services',
      },
      stats: {
        experience: 'Years of experience',
        companies: 'Companies',
        sectors: 'Sectors covered',
      },
    },
    services: {
      title: 'Key Skills',
      subtitle: 'Client relations, administrative management and business development',
      intro: {
        title: 'Complete support to free up your time',
        description: 'I combine client relations, administrative management, AI and operational rigor to create concrete value in your business.',
      },
      list: [
        {
          title: 'Client relations & retention',
          description: 'Welcome, follow-up, satisfaction and retention of diverse clientele (individuals, professionals, public sector)',
          deliverables: 'Phone reception, Satisfaction tracking, Retention program',
          metrics: 'Retention rate +40%, Client satisfaction +35%',
        },
        {
          title: 'Administrative management & CRM',
          description: 'Client file maintenance, CRM updates, document organization, case tracking',
          deliverables: 'Structured CRM, 5S document filing, Case tracking',
          metrics: 'Admin time -60%, Zero lost files',
        },
        {
          title: 'Quotes, invoicing & follow-ups',
          description: 'Quote/invoice preparation, payment follow-ups, payment tracking',
          deliverables: 'Same-day quotes, Automated invoices, 1/2/3 follow-ups',
          metrics: 'Payment delay -45%, Recovered revenue +25%',
        },
        {
          title: 'Disputes & after-sales',
          description: 'Complaint handling, dispute resolution, client emergency management',
          deliverables: 'Resolution process, Complaint tracking, After-sales reporting',
          metrics: 'Resolution <24h, Post-dispute retention +60%',
        },
        {
          title: 'Planning & coordination',
          description: 'Schedule management, appointment booking, intervention planning coordination',
          deliverables: 'Optimized calendar, Automatic reminders, Field coordination',
          metrics: 'Zero missed appointments, Occupancy rate +30%',
        },
        {
          title: 'Prospecting & direct sales',
          description: 'Client portfolio development, field and phone prospecting, lead qualification',
          deliverables: 'Qualified prospect file, Call scripts, Prospecting reports',
          metrics: 'Pipeline +50%, Conversion rate +20%',
        },
      ],
    },
    premiumServices: {
      badge: 'Premium Offers',
      title: 'Humans first, AI as backup',
      subtitle: 'Structured packages combining field expertise, proven processes and artificial intelligence for measurable results',
      services: [
        {
          title: 'Zero Chaos Office',
          description: 'The starter pack for entrepreneurs starting from scratch or drowning in paperwork. Complete admin diagnostic, CRM setup, quote/invoice/follow-up process creation, 5S document organization.',
          keyPoints: [
            'Express diagnostic of your administrative maturity',
            'CRM setup adapted to your business',
            'Standardized processes: quote → invoice → follow-up',
            '5S organization of your documents and files',
            'Training to maintain the system independently',
          ],
          badge: 'Ideal for creators and overwhelmed craftsmen.',
        },
        {
          title: 'Sales Machine',
          description: 'The growth pack for those who want to scale. Intelligent CRM with AI lead scoring, automated and personalized follow-ups, targeted prospecting, auto-generated monthly reporting.',
          keyPoints: [
            'AI-enriched CRM: hot/warm/cold lead scoring',
            'Smart follow-ups: AI prepares, Laury personalizes',
            'Targeted prospecting: qualified file + scripts',
            'Auto-generated monthly reporting + field analysis',
            'SMB dashboard: quotes, conversions, revenue, unpaid',
          ],
          badge: 'For pros who want to bring in revenue, not just file papers.',
        },
        {
          title: 'Complete Outsourced Office',
          description: 'The peace-of-mind pack: admin + sales + client relations + dashboard + AI. The boss doesn\'t touch anything except their craft. A true turnkey outsourced office.',
          keyPoints: [
            'Complete outsourced administrative management',
            'End-to-end sales follow-up with AI',
            'Client relations: reception, after-sales, retention',
            'Management dashboard co-designed with our data experts',
            'Hybrid reception: AI chatbot + guaranteed human callback',
          ],
          badge: 'The long-term partnership to never think about admin again.',
        },
      ],
      differentiation: {
        text: 'Laury combines 17 years of field experience, operational rigor and AI tools for a service that no one else offers in freelance assistance.',
        tagline: 'AI does the repetitive work. Laury does the relational work.',
      },
    },
    transport: {
      badge: 'Sector Expertise',
      title: 'Transport & Logistics Experience',
      subtitle: 'Concrete knowledge of the road transport world',
      cards: [
        {
          title: 'Sourcing & competitive bidding',
          description: 'Consulting about ten carriers per freight request, comparing offers',
        },
        {
          title: 'Evaluation & rating',
          description: 'Co-design of a tracking table and rating system (response time, reliability, flexibility, schedule compliance, exchange quality)',
        },
        {
          title: 'Carrier messaging management',
          description: 'Daily interface between internal teams and carrier panel',
        },
        {
          title: 'Price benchmarking',
          description: 'Comparative rate tables by geographic area and weight range',
        },
        {
          title: 'Panel development',
          description: 'Meetings with new carriers to integrate the most relevant ones',
        },
      ],
    },
    timeline: {
      title: 'My Background',
      subtitle: '17 years of experience in client relations and business development',
      jobs: [
        {
          title: 'Client Manager',
          company: 'Selfcity',
          location: 'Toulouse',
          description: 'B2C/B2B client relations, retention, supplier management, disputes and after-sales',
          achievements: [
            'B2C and B2B client portfolio management',
            'Retention and satisfaction tracking',
            'Dispute resolution and after-sales claims',
          ],
        },
        {
          title: 'Sales Assistant',
          company: 'Soval SA',
          location: 'Toulouse',
          description: 'B2B client relations (construction/public sector), orders, invoicing, follow-ups, carrier management',
          achievements: [
            'B2B construction & public sector client management',
            'Invoicing, follow-ups and payment tracking',
            'Carrier panel sourcing and evaluation',
          ],
        },
        {
          title: 'Sales Advisor',
          company: 'Proxigaz (Butagaz)',
          location: 'Toulouse',
          description: 'Cancellation service, complaints, CRM, quotes, retention and direct sales',
          achievements: [
            'Client retention and churn reduction',
            'CRM management and pipeline tracking',
            'Direct sales and upselling',
          ],
        },
        {
          title: 'Administrative Support',
          company: 'GRDF Occitanie',
          location: 'Toulouse',
          description: 'Tour planning, inbound/outbound call management',
          achievements: [
            'Technician tour scheduling coordination',
            'Inbound/outbound call flow management',
            'Field logistics organization',
          ],
        },
        {
          title: 'Client Advisor',
          company: 'Engie Home Services',
          location: 'Toulouse',
          description: 'Appointment booking, client file creation',
          achievements: [
            'Request reception and qualification',
            'Client file creation and tracking',
            'Appointment booking and coordination',
          ],
        },
        {
          title: 'Sales Advisor',
          company: 'Solocal',
          location: 'Toulouse',
          description: 'Field and phone prospecting, direct sales',
          achievements: [
            'Field and phone prospecting',
            'Direct sales of digital solutions',
            'Client portfolio development',
          ],
        },
        {
          title: 'Assistant Manager',
          company: 'Jeff de Bruges',
          location: 'Toulouse',
          description: 'Retail, team management, client retention, dispute management',
          achievements: [
            'Sales team management',
            'Retention and client programs',
            'Dispute management and satisfaction',
          ],
        },
        {
          title: 'Checkout Team Leader',
          company: 'Total',
          location: 'Toulouse',
          description: 'Client relations, inventory management, team management',
          achievements: [
            'Checkout team management',
            'Direct client relations',
            'Inventory management and supply',
          ],
        },
      ],
    },
    whyMe: {
      title: 'Why choose me?',
      subtitle: 'Not a virtual assistant. A field partner.',
      reasons: [
        {
          title: 'Field first',
          description: '17 years of direct practice facing demanding clients. Butagaz, GRDF, Engie, Soval. My experience is not theoretical — it\'s built call after call.',
        },
        {
          title: 'Dual sales & admin capability',
          description: 'Prospecting + complete admin follow-up (quotes, invoices, follow-ups, CRM). I don\'t file papers, I bring in revenue.',
        },
        {
          title: 'Transport knowledge',
          description: 'Selection, evaluation and management of road carriers. I speak the same language as field and road professionals.',
        },
        {
          title: 'Resolution under pressure',
          description: 'Disputes, after-sales, emergencies, turning problems into retention opportunities. 17 years of defusing tensions and turning problems into opportunities.',
        },
      ],
    },
    method: {
      badge: 'My Method',
      title: 'Getting started in three steps',
      subtitle: 'Simple, concrete and no commitment. You know exactly what you\'re getting.',
      steps: [
        {
          title: 'We talk',
          description: 'A 20-minute call to understand your business, identify what takes up most of your time and define what I can take over immediately.',
        },
        {
          title: 'I propose a plan',
          description: 'A monthly package adapted to your actual volume. No oversized package, no end-of-month surprises. You know exactly what it costs.',
        },
        {
          title: 'I take over',
          description: 'You focus on your craft. I handle admin, sales and client relations. You get back time, cash flow and clients.',
        },
      ],
    },
    skills: {
      title: 'Skills & Tools',
      subtitle: 'Field expertise enhanced by AI',
      categories: [
        {
          title: 'Client Relations',
          skills: ['Phone reception', 'Retention', 'After-sales & Disputes', 'Client satisfaction', 'Complaint management'],
        },
        {
          title: 'Sales',
          skills: ['Field prospecting', 'Phone prospecting', 'Direct sales', 'Lead qualification', 'Negotiation'],
        },
        {
          title: 'Administration',
          skills: ['Quotes & Invoicing', 'CRM', '5S Organization', 'Filing', 'Case tracking'],
        },
        {
          title: 'AI & Tools',
          skills: ['AI Follow-ups', 'Lead scoring', 'Auto reporting', 'Reception chatbot', 'SMB Dashboard'],
        },
      ],
    },
    cta: {
      title: 'Let\'s talk about your project',
      subtitle: 'Business development, client relations management, onboarding — let\'s discuss how I can contribute to your growth.',
      button: 'Book my discovery call',
    },
    footer: {
      tagline: 'Administrative & commercial partner for craftsmen, small businesses and entrepreneurs',
      navigation: {
        title: 'Navigation',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Premium Offers', href: '#premium-services' },
          { label: 'Background', href: '#timeline' },
          { label: 'Method', href: '#method' },
          { label: 'Skills', href: '#skills' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      services: {
        title: 'Services',
        links: [
          { label: 'Client Relations', href: '#services' },
          { label: 'Administrative Management', href: '#services' },
          { label: 'Sales Follow-up', href: '#services' },
          { label: 'Prospecting', href: '#services' },
          { label: 'Transport & Logistics', href: '#transport' },
          { label: 'AI Premium Offers', href: '#premium-services' },
        ],
      },
      contact: {
        title: 'Contact',
        email: 'contact@lebureaudelaury.fr',
        phone: 'To be filled',
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
      copyright: '© 2026 Le Bureau de Laury. All rights reserved.',
    },
    floatingCta: {
      text: 'Book a discovery call',
    },
    dna: {
      title: 'What drives me',
      subtitle: 'AI handles the repetitive work. Laury handles the relationships.',
      traits: [
        {
          title: 'People first',
          description:
            '17 years in the field, face to face with clients. Trust is built through contact, not through an algorithm.',
        },
        {
          title: 'Operational rigour',
          description:
            'Structured processes, documented 5S, not a single file lost. Method in service of efficiency.',
        },
        {
          title: 'AI as backup',
          description:
            'Smart follow-ups, lead scoring, auto-generated reporting. AI does the repetitive work, Laury does the relational work.',
        },
      ],
    },
  },
}

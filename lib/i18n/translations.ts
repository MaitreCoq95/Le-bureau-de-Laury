// Textes du site — source unique, en français.
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
      commitment: string
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

export const translations: Translations = {
  header: {
    nav: {
      services: 'Services',
      premiumServices: 'Mes formules',
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
    bio: '17 ans d\'expérience en relation client, en gestion administrative et en suivi commercial. Je travaille avec les artisans, les petites entreprises et les indépendants pour qu\'ils puissent rester sur leur métier plutôt que sur leurs papiers.',
    badges: {
      experience: '17 ans d\'expérience',
      countries: 'Basée à Toulouse',
      tools: 'Administratif • Relation client • Suivi commercial',
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
    title: 'Ce que je fais pour vous',
    subtitle: 'Relation client, gestion administrative et suivi commercial',
    intro: {
      title: 'Un accompagnement complet pour libérer votre temps',
      description: 'Je prends en charge la relation client, l\'administratif et le suivi commercial, avec de la méthode et de la rigueur, pour que vous puissiez rester sur votre métier.',
    },
    list: [
      {
        title: 'Relation client & fidélisation',
        description: 'Accueil, suivi et satisfaction de votre clientèle : particuliers, professionnels, collectivités.',
        deliverables: 'Accueil téléphonique, suivi de la satisfaction, rappel des clients',
        commitment: 'Vos clients ont quelqu\'un au bout du fil, et on ne les oublie plus.',
      },
      {
        title: 'Gestion administrative & fichier clients',
        description: 'Tenue et mise à jour de votre fichier clients, rangement de vos documents, suivi de vos dossiers.',
        deliverables: 'Fichier clients à jour, classement clair, suivi des dossiers',
        commitment: 'Vous retrouvez n\'importe quel document sans le chercher.',
      },
      {
        title: 'Devis, factures & relances',
        description: 'Rédaction de vos devis et de vos factures, relances des paiements en retard, suivi des règlements.',
        deliverables: 'Devis et factures rédigés, relances de paiement, suivi des règlements',
        commitment: 'Vos devis partent vite et vos impayés sont relancés, pas oubliés.',
      },
      {
        title: 'Réclamations & litiges',
        description: 'Prise en charge des réclamations de vos clients et suivi du dossier jusqu\'à la résolution.',
        deliverables: 'Réception des réclamations, suivi écrit, point régulier avec vous',
        commitment: 'Vous n\'encaissez plus les appels tendus, et rien ne reste sans réponse.',
      },
      {
        title: 'Planning & coordination',
        description: 'Gestion de votre agenda, prise de rendez-vous, coordination de vos interventions.',
        deliverables: 'Agenda tenu à jour, rendez-vous confirmés, coordination avec vos équipes',
        commitment: 'Vos journées sont organisées à l\'avance, sans trou ni double réservation.',
      },
      {
        title: 'Suivi commercial',
        description: 'Suivi de vos clients existants, relance de vos devis en attente, préparation de vos rendez-vous.',
        deliverables: 'Relance des devis, suivi des clients, préparation des rendez-vous',
        commitment: 'Les devis envoyés ne restent plus sans réponse.',
      },
    ],
  },
  premiumServices: {
    badge: 'Mes formules',
    title: 'L\'humain d\'abord',
    subtitle: 'Trois formules claires, selon là où vous en êtes. Pas de jargon, pas d\'engagement : vous savez ce que vous prenez.',
    services: [
      {
        title: 'Bureau Zéro Chaos',
        description: 'Pour les entrepreneurs qui croulent sous la paperasse. On remet de l\'ordre : on fait le point sur ce qui coince, on range vos dossiers, et on met en place une façon de faire simple pour vos devis, vos factures et vos relances.',
        keyPoints: [
          'Point de départ : ce qui vous prend du temps aujourd\'hui',
          'Tenue de votre fichier clients, ou de votre logiciel si vous en avez un',
          'Une marche à suivre simple : devis, puis facture, puis relance',
          'Rangement de vos documents et de vos dossiers',
          'On vous montre comment tenir le système si vous voulez reprendre la main',
        ],
        badge: 'Pour les artisans débordés et ceux qui démarrent.',
      },
      {
        title: 'Suivi Commercial',
        description: 'Pour ceux qui veulent développer leur activité sans y passer leurs soirées. Je relance vos devis en attente, je garde le contact avec vos clients et je vous fais un point écrit chaque mois sur ce qui rentre.',
        keyPoints: [
          'Relance de tous vos devis en attente de réponse',
          'Suivi régulier de vos clients existants',
          'Préparation de vos rendez-vous',
          'Un point mensuel écrit : devis envoyés, signés, factures en attente',
          'Vos chiffres du mois réunis sur une page, pas dans dix carnets',
        ],
        badge: 'Pour les pros qui veulent faire rentrer du chiffre, pas juste classer des papiers.',
      },
      {
        title: 'Bureau Externalisé Complet',
        description: 'La formule tranquillité : l\'administratif, le suivi commercial et la relation client. Vous ne touchez plus à rien en dehors de votre métier.',
        keyPoints: [
          'Toute la gestion administrative prise en charge',
          'Suivi commercial du premier contact à la facture',
          'Relation client : accueil, réclamations, fidélisation',
          'Un point mensuel sur vos chiffres et sur ce qui bloque',
          'Un seul interlocuteur qui connaît vos dossiers : moi',
        ],
        badge: 'Pour ne plus jamais penser à l\'administratif.',
      },
    ],
    differentiation: {
      text: 'Dix-sept ans de terrain en relation client et en gestion : je connais le métier par la pratique, pas par les manuels. Vous avez quelqu\'un qui répond, qui suit, et qui ne vous lâche pas un dossier en route.',
      tagline: 'Une vraie personne qui connaît vos dossiers, pas un standard.',
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
          'Tenue du fichier clients et suivi du portefeuille',
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
        description: 'Devis, factures, relances, fichier clients, mais aussi le suivi de vos clients et la relance de vos devis. Je ne me contente pas de classer des papiers.',
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
    title: 'Ce que je sais faire',
    subtitle: 'Des compétences construites sur le terrain, pas dans les livres',
    categories: [
      {
        title: 'Relation Client',
        skills: ['Accueil téléphonique', 'Fidélisation', 'SAV & Litiges', 'Satisfaction client', 'Gestion réclamations'],
      },
      {
        title: 'Commercial',
        skills: ['Relance de devis', 'Suivi des clients', 'Appels commerciaux', 'Préparation de rendez-vous', 'Négociation'],
      },
      {
        title: 'Administration',
        skills: ['Devis & factures', 'Fichier clients', 'Organisation', 'Classement', 'Suivi de dossiers'],
      },
      {
        title: 'Outils du quotidien',
        skills: ['Word & Excel', 'Messagerie & agenda', 'Logiciels de devis', 'Fichier clients', 'Tableaux de suivi'],
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
        { label: 'Mes formules', href: '#premium-services' },
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
    title: 'Ma façon de travailler',
    subtitle: 'Vos clients parlent à quelqu\'un qui connaît leur dossier.',
    traits: [
      {
        title: 'L\'humain d\'abord',
        description:
          '17 ans en relation directe avec des clients exigeants. La confiance se construit au téléphone et dans le suivi, pas dans un logiciel.',
      },
      {
        title: 'De la rigueur',
        description:
          'Des façons de faire claires, des dossiers rangés, rien qui se perd. Vous savez toujours où en est un dossier.',
      },
      {
        title: 'Des outils, quand ils servent',
        description:
          'J\'utilise les outils qui font gagner du temps sur les tâches répétitives. Mais c\'est moi qui vous réponds, et c\'est moi qui suis vos dossiers.',
      },
    ],
  },
}

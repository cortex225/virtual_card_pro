import { AppData, Language, Translations } from './types';

export const DATA: AppData = {
    name: "Déto Jean-Luc Gouaho",
    company: "JL Digital Services",
    neq: "2279991246",
    title: { 
        fr: "Expert en Solutions Numériques", 
        en: "Digital Solutions Expert" 
    },
    location: "Granby, Québec",
    email: "contact@jldigitalservices.com",
    website: "https://www.jldigitalservices.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    phone: "+15140000000",
    calendly: "https://calendly.com",
    stack: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Shopify", "Automation", "Mobile Apps"],
    about: {
        fr: "Je transforme vos idées en solutions numériques performantes. Spécialisé dans le développement web moderne et l'automatisation, j'aide les entreprises à accroître leur visibilité, optimiser leurs processus et augmenter leurs revenus. Mon approche est simple : qualité, rapidité et résultats mesurables.",
        en: "I turn your ideas into high-performance digital solutions. Specializing in modern web development and automation, I help businesses increase their visibility, optimize processes, and boost revenue. My approach is simple: quality, speed, and measurable results."
    },
    services: {
        fr: [
            {
                name: "Sites Web & Vitrines Haut de Gamme", 
                desc: "Ne vous contentez pas d'un simple site. Obtenez une plateforme qui convertit vos visiteurs en clients. Design moderne, chargement ultra-rapide et optimisation SEO incluse.",
                features: ["Design Responsive", "SEO Optimisé", "Performance Maximale"],
                icon: "Globe"
            },
            {
                name: "E-Commerce & Boutiques en Ligne", 
                desc: "Lancez votre boutique en ligne clé en main. Gestion de catalogue simple, paiements sécurisés et expérience utilisateur fluide pour maximiser vos ventes 24/7.",
                features: ["Paiements Sécurisés", "Gestion de Stock", "Marketing Intégré"],
                icon: "ShoppingBag"
            },
            {
                name: "Applications & Logiciels Sur Mesure", 
                desc: "Des outils puissants adaptés à VOTRE réalité. De l'automatisation de tâches aux applications mobiles, je développe ce dont vous avez besoin pour passer au niveau supérieur.",
                features: ["Automatisation", "Tableaux de Bord", "Apps Mobiles"],
                icon: "Code"
            }
        ],
        en: [
            {
                name: "High-End Websites & Showcases", 
                desc: "Don't settle for a basic site. Get a platform that converts visitors into customers. Modern design, ultra-fast loading, and SEO optimization included.",
                features: ["Responsive Design", "SEO Optimized", "Maximum Performance"],
                icon: "Globe"
            },
            {
                name: "E-Commerce & Online Stores", 
                desc: "Launch your turnkey online store. Simple catalog management, secure payments, and seamless user experience to maximize your sales 24/7.",
                features: ["Secure Payments", "Inventory Management", "Integrated Marketing"],
                icon: "ShoppingBag"
            },
            {
                name: "Custom Apps & Software", 
                desc: "Powerful tools tailored to YOUR reality. From task automation to mobile apps, I develop exactly what you need to scale to the next level.",
                features: ["Automation", "Dashboards", "Mobile Apps"],
                icon: "Code"
            }
        ]
    },
    whyChooseUs: {
        fr: [
            { title: "Approche Orientée Résultats", desc: "Chaque ligne de code a un but : faire croître votre business.", icon: "TrendingUp" },
            { title: "Support Réactif", desc: "Je ne disparais pas après la livraison. Je suis votre partenaire technique.", icon: "Headphones" },
            { title: "Technologies Modernes", desc: "Utilisation des derniers standards pour garantir sécurité et pérennité.", icon: "Cpu" }
        ],
        en: [
            { title: "Results-Oriented Approach", desc: "Every line of code has a goal: to grow your business.", icon: "TrendingUp" },
            { title: "Responsive Support", desc: "I don't disappear after delivery. I am your technical partner.", icon: "Headphones" },
            { title: "Modern Technologies", desc: "Using the latest standards to ensure security and longevity.", icon: "Cpu" }
        ]
    },
    process: {
        fr: [
            { step: "01", title: "Découverte", desc: "Nous analysons vos besoins et définissons ensemble les objectifs du projet." },
            { step: "02", title: "Stratégie & Design", desc: "Je conçois une maquette et une architecture adaptées à votre vision." },
            { step: "03", title: "Développement", desc: "Construction de votre solution avec des points d'étape réguliers." },
            { step: "04", title: "Lancement & Suivi", desc: "Mise en ligne, formation et accompagnement pour assurer votre succès." }
        ],
        en: [
            { step: "01", title: "Discovery", desc: "We analyze your needs and define the project goals together." },
            { step: "02", title: "Strategy & Design", desc: "I design a mockup and architecture tailored to your vision." },
            { step: "03", title: "Development", desc: "Building your solution with regular check-ins." },
            { step: "04", title: "Launch & Support", desc: "Go-live, training, and ongoing support to ensure your success." }
        ]
    },
    testimonials: {
        fr: [
            { name: "Sophie M.", role: "CEO", company: "Fashion Nova QC", text: "Jean-Luc a transformé notre présence en ligne. Nos ventes ont doublé en 3 mois !" },
            { name: "Marc D.", role: "Fondateur", company: "TechStart", text: "Professionnel, rapide et à l'écoute. L'outil sur mesure qu'il a créé nous sauve 10h par semaine." }
        ],
        en: [
            { name: "Sophie M.", role: "CEO", company: "Fashion Nova QC", text: "Jean-Luc transformed our online presence. Our sales doubled in 3 months!" },
            { name: "Marc D.", role: "Founder", company: "TechStart", text: "Professional, fast, and attentive. The custom tool he created saves us 10 hours a week." }
        ]
    }
};

export const T: Record<Language, Translations> = {
    fr: {
        contact: "Démarrer un projet",
        book: "Réserver un audit gratuit",
        save: "Enregistrer le contact",
        portfolio: "Explorer mon portfolio",
        services: "Mes Expertises",
        openToWork: "DISPONIBLE IMMÉDIATEMENT",
        share: "Partager la carte",
        scan: "Scanner pour connecter",
        close: "Fermer",
        about: "À Propos",
        whyUs: "Pourquoi moi ?",
        ourProcess: "Mon Processus",
        testimonials: "Témoignages",
        rights: "Tous droits réservés.",
        wallet: "Google Portefeuille",
        walletSub: "Carte de visite numérique",
        walletAlert: "QR Code téléchargé !\n\nPour l'ajouter à Google Portefeuille :\n1. Ouvrez l'app Google Wallet\n2. Cliquez sur 'Ajouter au portefeuille'\n3. Choisissez 'Photo' et sélectionnez cette image."
    },
    en: {
        contact: "Start a Project",
        book: "Book Free Audit",
        save: "Save Contact",
        portfolio: "Explore Portfolio",
        services: "My Expertise",
        openToWork: "AVAILABLE IMMEDIATELY",
        share: "Share Card",
        scan: "Scan to Connect",
        close: "Close",
        about: "About",
        whyUs: "Why Me?",
        ourProcess: "My Process",
        testimonials: "Testimonials",
        rights: "All rights reserved.",
        wallet: "Google Wallet",
        walletSub: "Digital Business Card",
        walletAlert: "QR Code downloaded!\n\nTo add to Google Wallet:\n1. Open Google Wallet app\n2. Tap 'Add to Wallet'\n3. Choose 'Photo' and select this image."
    }
};
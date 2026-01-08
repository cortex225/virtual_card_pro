
import { AppData, Language, Translations } from './types';

export const DATA: AppData = {
    name: "Déto Jean-Luc Gouaho",
    company: "JL Digital Services",
    neq: "2279991246",
    title: { 
        fr: "Développeur de Solutions Web", 
        en: "Web Solutions Developer" 
    },
    location: "Granby, Québec",
    email: "contact@jldigitalservices.com",
    website: "https://www.jldigitalservices.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    phone: "+15140000000",
    calendly: "https://calendly.com",
    stack: ["Création de Sites Web", "Boutique en Ligne", "Logiciels sur mesure", "Applications Mobiles", "Automatisation"],
    services: {
        fr: [
            { name: "Sites Internet & Vitrines", desc: "Un site web moderne et facile à utiliser pour présenter votre entreprise." },
            { name: "Boutique en Ligne (E-Commerce)", desc: "Vendez vos produits 24h/7j avec une boutique sécurisée et simple à gérer." },
            { name: "Logiciels & Outils sur Mesure", desc: "Des outils numériques créés spécialement pour simplifier votre travail quotidien." }
        ],
        en: [
            { name: "Websites & Showcases", desc: "Modern and easy-to-use websites to present your business." },
            { name: "Online Store (E-Commerce)", desc: "Sell your products 24/7 with a secure and easy-to-manage shop." },
            { name: "Custom Software & Tools", desc: "Digital tools created specifically to simplify your daily work." }
        ]
    }
};

export const T: Record<Language, Translations> = {
    fr: {
        contact: "Me contacter",
        book: "Prendre RDV (Gratuit)",
        save: "Sauvegarder ma fiche",
        portfolio: "Voir mes réalisations",
        services: "Ce que je peux faire pour vous",
        openToWork: "DISPONIBLE POUR VOS PROJETS",
        share: "Partager",
        scan: "Scannez pour garder le contact",
        close: "Fermer"
    },
    en: {
        contact: "Contact Me",
        book: "Book a Free Call",
        save: "Save Contact",
        portfolio: "See my work",
        services: "How I can help you",
        openToWork: "AVAILABLE FOR PROJECTS",
        share: "Share",
        scan: "Scan to keep in touch",
        close: "Close"
    }
};

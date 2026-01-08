
export type Language = 'fr' | 'en';

export interface Service {
  name: string;
  desc: string;
  icon?: string;
  features?: string[];
}

export interface Feature {
    title: string;
    desc: string;
    icon: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    desc: string;
}

export interface Testimonial {
    name: string;
    role: string;
    company?: string;
    text: string;
}

export interface AppData {
  name: string;
  company: string;
  neq: string;
  title: Record<Language, string>;
  location: string;
  email: string;
  website: string;
  linkedin: string;
  github: string;
  phone: string;
  calendly: string;
  stack: string[];
  services: Record<Language, Service[]>;
  about: Record<Language, string>;
  whyChooseUs: Record<Language, Feature[]>;
  process: Record<Language, ProcessStep[]>;
  testimonials: Record<Language, Testimonial[]>;
}

export interface Translations {
  contact: string;
  book: string;
  save: string;
  portfolio: string;
  services: string;
  openToWork: string;
  share: string;
  scan: string;
  close: string;
  about: string;
  whyUs: string;
  ourProcess: string;
  testimonials: string;
  rights: string;
  wallet: string;
  walletSub: string;
  walletAlert: string;
}

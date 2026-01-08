
export type Language = 'fr' | 'en';

export interface Service {
  name: string;
  desc: string;
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
}

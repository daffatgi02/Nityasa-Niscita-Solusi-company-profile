// types/index.ts
/**
 * Main type definitions for Nityasa Niscita Solusi website
 * Centralized type exports
 */

export * from './company';
export * from './article';
export * from './team';

// Common utility types
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Settings {
  logo: string;
  companyName: string;
  tagline: string;
  navigation: NavigationItem[];
  contact: ContactInfo;
  seo: SEOData;
}
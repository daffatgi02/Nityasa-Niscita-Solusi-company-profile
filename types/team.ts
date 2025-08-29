// types/team.ts
/**
 * Team member type definitions
 */
import { BaseEntity } from './index';

export interface TeamMember extends BaseEntity {
  name: string;
  role: string;
  department: string;
  bio: string;
  avatar: string;
  email: string;
  linkedin?: string;
  specializations: string[];
  experience: string;
  education: Education[];
  certifications: Certification[];
  isActive: boolean;
  order: number;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  field?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: 'consulting' | 'training' | 'research';
  duration?: string;
  price?: string;
  isPopular: boolean;
  order: number;
}
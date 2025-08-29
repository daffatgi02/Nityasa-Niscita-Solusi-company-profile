// lib/constants.ts
/**
 * Application constants
 */

export const SITE_CONFIG = {
  name: 'Nityasa Niscita Solusi',
  description: 'Professional actuarial consulting services - Catalyst in insurance industry',
  url: 'https://nityasa-niscita-solusi.com',
  locale: 'en',
  author: 'Nityasa Niscita Solusi',
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Articles', href: '/articles' },
  { label: 'Our Team', href: '/team' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
] as const;

export const COLORS = {
  primary: {
    blue: '#1E40AF', // blue-800
    yellow: '#F59E0B', // yellow-500
  },
  neutral: {
    white: '#FFFFFF',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

export const SCROLL_THRESHOLD = 100;

export const SERVICES_CATEGORIES = {
  consulting: 'Actuarial Consulting',
  training: 'Training & Workshop',
  research: 'Research & Development',
} as const;

export const CONTACT_INFO = {
  email: 'info@nityasa-niscita-solusi.com',
  phone: '+62 812 3456 7890',
  whatsapp: '+62 812 3456 7890',
  address: 'Jakarta, Indonesia',
} as const;
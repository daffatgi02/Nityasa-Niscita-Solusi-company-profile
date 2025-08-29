// app/manifest.ts
import { MetadataRoute } from 'next'
import settingsData from '@/data/settings.json'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: settingsData.companyName,
    short_name: 'Nityasa',
    description: settingsData.seo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
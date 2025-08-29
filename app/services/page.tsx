// app/services/page.tsx
/**
 * Services page
 */
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicesSection } from '@/components/sections/ServicesSection';
import settingsData from '@/data/settings.json';

export const metadata: Metadata = {
  title: `Our Services - ${settingsData.companyName}`,
  description: 'Comprehensive actuarial consulting services including risk assessment, pricing, reserving, training, and digital transformation solutions.',
  openGraph: {
    title: `Our Services - ${settingsData.companyName}`,
    description: 'Comprehensive actuarial consulting services including risk assessment, pricing, reserving, training, and digital transformation solutions.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive actuarial consulting services designed to help insurance companies navigate complex challenges and achieve sustainable growth.
            </p>
          </div>
        </section>
        
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
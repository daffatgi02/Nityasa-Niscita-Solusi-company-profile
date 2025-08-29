// app/portfolio/page.tsx
/**
 * Portfolio page (placeholder)
 */
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import settingsData from '@/data/settings.json';

export const metadata: Metadata = {
  title: `Portfolio - ${settingsData.companyName}`,
  description: 'Explore our portfolio of successful actuarial consulting projects and case studies across various insurance sectors.',
  openGraph: {
    title: `Portfolio - ${settingsData.companyName}`,
    description: 'Explore our portfolio of successful actuarial consulting projects and case studies across various insurance sectors.',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our successful projects and case studies that demonstrate our expertise in actuarial consulting.
            </p>
          </div>
        </section>
        
        {/* Coming Soon Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gray-50 rounded-2xl p-12">
              <div className="text-6xl mb-6">🚧</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Portfolio Coming Soon
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Were currently updating our portfolio with detailed case studies and project showcases. Check back soon or contact us to learn more about our work.
              </p>
              
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us for Details
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
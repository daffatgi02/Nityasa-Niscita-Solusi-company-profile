// app/articles/page.tsx
/**
 * Articles/Blog page
 */
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import settingsData from '@/data/settings.json';

export const metadata: Metadata = {
  title: `Articles & Insights - ${settingsData.companyName}`,
  description: 'Stay updated with the latest trends, insights, and developments in the actuarial and insurance industry from our expert team.',
  openGraph: {
    title: `Articles & Insights - ${settingsData.companyName}`,
    description: 'Stay updated with the latest trends, insights, and developments in the actuarial and insurance industry from our expert team.',
  },
};

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Articles & Insights</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert insights, industry trends, and thought leadership from our team of actuarial professionals.
            </p>
          </div>
        </section>
        
        <ArticlesSection />
        
        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest articles and insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <button className="px-8 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
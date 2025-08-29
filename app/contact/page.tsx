// app/contact/page.tsx
/**
 * Contact page
 */
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';
import settingsData from '@/data/settings.json';

export const metadata: Metadata = {
  title: `Contact Us - ${settingsData.companyName}`,
  description: 'Get in touch with our actuarial consulting experts. We\'re here to help solve your insurance challenges and drive business success.',
  openGraph: {
    title: `Contact Us - ${settingsData.companyName}`,
    description: 'Get in touch with our actuarial consulting experts. We\'re here to help solve your insurance challenges and drive business success.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your actuarial challenges into opportunities? Lets discuss how we can help your organization succeed.
            </p>
          </div>
        </section>
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
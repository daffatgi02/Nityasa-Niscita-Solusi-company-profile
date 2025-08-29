// app/team/page.tsx
/**
 * Team page
 */
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TeamSection } from '@/components/sections/TeamSection';
import settingsData from '@/data/settings.json';

export const metadata: Metadata = {
  title: `Our Team - ${settingsData.companyName}`,
  description: 'Meet our team of experienced actuarial professionals and consultants who are passionate about delivering excellence in every project.',
  openGraph: {
    title: `Our Team - ${settingsData.companyName}`,
    description: 'Meet our team of experienced actuarial professionals and consultants who are passionate about delivering excellence in every project.',
  },
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our mission to be a catalyst in the insurance industry.
            </p>
          </div>
        </section>
        
        <TeamSection />
        
        {/* Join Our Team CTA */}
        <section className="py-20 bg-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Are you passionate about actuarial science and looking to make an impact? Were always looking for talented professionals to join our team.
            </p>
            
            <a
              href={`mailto:${settingsData.contact.email}?subject=Career Opportunities`}
              className="inline-flex items-center px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
            >
              View Opportunities
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
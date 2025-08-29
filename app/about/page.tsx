// app/about/page.tsx
/**
 * About Us page
 */
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutSection } from '@/components/sections/AboutSection';
import companyData from '@/data/company.json';
import settingsData from '@/data/settings.json';

export const metadata: Metadata = {
  title: `About Us - ${settingsData.companyName}`,
  description: `Learn more about ${settingsData.companyName}, our mission, vision, and the team that drives excellence in actuarial consulting.`,
  openGraph: {
    title: `About Us - ${settingsData.companyName}`,
    description: `Learn more about ${settingsData.companyName}, our mission, vision, and the team that drives excellence in actuarial consulting.`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our story, mission, and the values that drive our commitment to excellence in actuarial consulting.
            </p>
          </div>
        </section>
        
        <AboutSection />
        
        {/* Additional Company Stats */}
        <section className="py-20 bg-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {companyData.stats?.yearsExperience}+
                </div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {companyData.stats?.clientsServed}+
                </div>
                <div className="text-blue-200">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {companyData.stats?.projectsCompleted}+
                </div>
                <div className="text-blue-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {companyData.stats?.teamMembers}+
                </div>
                <div className="text-blue-200">Team Members</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
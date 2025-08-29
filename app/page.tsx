// app/page.tsx
/**
 * Homepage - Main landing page
 */
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  const sections = ['home', 'about', 'services', 'articles', 'team', 'contact'];

  return (
    <>
      <Navbar sections={sections} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ArticlesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
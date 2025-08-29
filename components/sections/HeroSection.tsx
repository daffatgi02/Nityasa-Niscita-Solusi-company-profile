// components/sections/HeroSection.tsx
/**
 * Hero section untuk homepage
 * - Background gradient dengan brand colors
 * - CTA buttons untuk contact & services
 * - Animations dengan Framer Motion
 */
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { fadeInUp, fadeInDown, staggerContainer } from '@/lib/animations';
import settingsData from '@/data/settings.json';
import companyData from '@/data/company.json';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/hero/pattern.svg')] bg-repeat opacity-20"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Company Name */}
          <motion.h1 
            variants={fadeInDown}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            {settingsData.companyName}
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-yellow-400 font-medium mb-4"
          >
            {settingsData.tagline}
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            {companyData.profile.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="xl"
              variant="secondary"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-blue-800"
            >
              Our Services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-blue-600"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {companyData.stats?.yearsExperience}+
              </div>
              <div className="text-blue-200 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {companyData.stats?.clientsServed}+
              </div>
              <div className="text-blue-200 text-sm md:text-base">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {companyData.stats?.projectsCompleted}+
              </div>
              <div className="text-blue-200 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {companyData.stats?.teamMembers}+
              </div>
              <div className="text-blue-200 text-sm md:text-base">Team Members</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
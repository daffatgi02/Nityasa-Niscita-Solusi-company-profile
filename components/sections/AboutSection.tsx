// components/sections/AboutSection.tsx
/**
 * About section dengan company profile, vision, mission, dan core values
 */
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import companyData from '@/data/company.json';

export function AboutSection() {
  const [sectionRef, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Icon mapping untuk core values
  const getIconComponent = (iconName: string) => {
    const icons = {
      'award': '🏆',
      'lightbulb': '💡', 
      'users': '👥',
      'shield-check': '🛡️'
    };
    return icons[iconName as keyof typeof icons] || '⭐';
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our company, our mission, and what drives us to excel in the actuarial consulting industry.
            </p>
          </motion.div>

          {/* Company Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                {companyData.profile.name}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {companyData.profile.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Established</h4>
                  <p className="text-gray-600">{companyData.profile.established}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Industry</h4>
                  <p className="text-gray-600">{companyData.profile.industry}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Our Specializations
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {companyData.profile.specializations.map((specialization, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                    <span className="text-gray-700">{specialization}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {companyData.visionMission.vision}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {companyData.visionMission.mission.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyData.coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="text-4xl mb-4">
                        {getIconComponent(value.icon)}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
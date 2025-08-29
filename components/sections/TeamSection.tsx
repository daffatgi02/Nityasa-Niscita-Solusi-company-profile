// components/sections/TeamSection.tsx
/**
 * Team section dengan member cards dan detailed profiles
 */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, Badge, Image } from '@/components/ui';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import teamData from '@/data/team.json';

export function TeamSection() {
  const [sectionRef, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get active team members sorted by order
  const activeTeamMembers = teamData.teamMembers
    .filter(member => member.isActive)
    .sort((a, b) => a.order - b.order)
    .slice(0, 4); // Show first 4 members

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-20 bg-white"
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team consists of experienced actuaries and consultants who are passionate about delivering excellence in every project.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeTeamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    {/* Avatar */}
                    <div className="relative mx-auto mb-4">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="w-30 h-30 rounded-full object-cover mx-auto border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>

                    <CardTitle className="text-xl text-gray-900">
                      {member.name}
                    </CardTitle>
                    
                    <div className="space-y-2">
                      <p className="text-blue-800 font-medium">
                        {member.role}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {member.department}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Experience */}
                    <div className="text-center">
                      <span className="text-lg font-bold text-yellow-600">
                        {member.experience}
                      </span>
                      <p className="text-xs text-gray-500">Experience</p>
                    </div>

                    {/* Specializations */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900">Specializations:</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.specializations.slice(0, 2).map((spec, specIndex) => (
                          <Badge key={specIndex} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                        {member.specializations.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{member.specializations.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Contact Links */}
                    <div className="flex justify-center space-x-3 pt-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-blue-800 transition-colors duration-200"
                        title="Send Email"
                      >
                        <span className="sr-only">Email</span>
                        📧
                      </a>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-800 transition-colors duration-200"
                          title="LinkedIn Profile"
                        >
                          <span className="sr-only">LinkedIn</span>
                          💼
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA to Team Page */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-gray-600 mb-6">
              Want to learn more about our team members and their expertise?
            </p>
            <Link 
              href="/team"
              className="inline-flex items-center px-6 py-3 border border-blue-800 text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              View Full Team
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
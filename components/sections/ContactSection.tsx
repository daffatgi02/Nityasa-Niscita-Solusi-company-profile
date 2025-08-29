// components/sections/ContactSection.tsx
/**
 * Contact section dengan form dan contact info
 */
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import { generateWhatsAppUrl } from '@/lib/utils';
import { ContactForm } from '@/components/forms/ContactForm';
import settingsData from '@/data/settings.json';
import companyData from '@/data/company.json';

export function ContactSection() {
  const [sectionRef, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const whatsappUrl = generateWhatsAppUrl(
    settingsData.contact.whatsapp,
    "Hello! I'm interested in learning more about your actuarial consulting services."
  );

  return (
    <section 
      id="contact" 
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
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your actuarial challenges into opportunities? Contact us today to discuss how we can help your organization succeed.
            </p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInLeft}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and well get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInRight} className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Contact Information
                </h3>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a 
                      href={`mailto:${settingsData.contact.email}`}
                      className="text-blue-800 hover:text-blue-600 transition-colors duration-200"
                    >
                      {settingsData.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a 
                      href={`tel:${settingsData.contact.phone}`}
                      className="text-blue-800 hover:text-blue-600 transition-colors duration-200"
                    >
                      {settingsData.contact.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:text-blue-600 transition-colors duration-200"
                    >
                      {settingsData.contact.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">
                      {settingsData.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Follow Us</h4>
                <div className="flex space-x-4">
                  {settingsData.contact.socialMedia.linkedin && (
                    <a
                      href={settingsData.contact.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                      <span className="sr-only">LinkedIn</span>
                      💼
                    </a>
                  )}
                  {settingsData.contact.socialMedia.twitter && (
                    <a
                      href={settingsData.contact.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full hover:bg-blue-300 transition-colors duration-200"
                    >
                      <span className="sr-only">Twitter</span>
                      🐦
                    </a>
                  )}
                  {settingsData.contact.socialMedia.instagram && (
                    <a
                      href={settingsData.contact.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition-colors duration-200"
                    >
                      <span className="sr-only">Instagram</span>
                      📷
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={fadeInUp}
            className="text-center bg-blue-800 text-white rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Lets discuss how our expertise can help solve your actuarial challenges and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href={`mailto:${settingsData.contact.email}`}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transition-colors duration-200"
              >
                📧 Send Email
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
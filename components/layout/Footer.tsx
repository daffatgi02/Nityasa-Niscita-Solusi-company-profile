// components/layout/Footer.tsx
/**
 * Main Footer component
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import settingsData from '@/data/settings.json';
import companyData from '@/data/company.json';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">
              {settingsData.companyName}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {companyData.profile.description}
            </p>
            <p className="text-gray-400 text-xs">
              Established {companyData.profile.established}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {settingsData.navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2">
              {companyData.profile.specializations.slice(0, 4).map((service) => (
                <p key={service} className="text-gray-300 text-sm">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</p>
                <a 
                  href={`mailto:${settingsData.contact.email}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  {settingsData.contact.email}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Phone</p>
                <a 
                  href={`tel:${settingsData.contact.phone}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  {settingsData.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-gray-300 text-sm">
                  {settingsData.contact.address}
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              {settingsData.contact.socialMedia.linkedin && (
                <a
                  href={settingsData.contact.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-5 h-5 bg-current"></div>
                </a>
              )}
              {settingsData.contact.socialMedia.twitter && (
                <a
                  href={settingsData.contact.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  <span className="sr-only">Twitter</span>
                  <div className="w-5 h-5 bg-current"></div>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} {settingsData.companyName}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 sm:mt-0">
            {settingsData.tagline}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
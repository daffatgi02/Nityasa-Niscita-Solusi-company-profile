// components/layout/MobileMenu.tsx
/**
 * Half-screen sliding menu with Framer Motion animations
 * - Slide in from right (50% screen width)
 * - Active section highlighting with animated dot
 * - Contact info in footer
 */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { slideInFromRight, menuItemVariants, activeDotVariants } from '@/lib/animations';
import { NavigationItem, ContactInfo } from '@/types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  navigation: NavigationItem[];
  contact: ContactInfo;
}

export function MobileMenu({ 
  isOpen, 
  onClose, 
  activeSection, 
  navigation, 
  contact 
}: MobileMenuProps) {

  const handleNavClick = (href: string) => {
    // If it's a hash link (section), smooth scroll
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 w-1/2 h-screen bg-gray-900 text-white z-50 flex flex-col"
          >
            {/* Menu Content */}
            <div className="flex-1 pt-24 px-8">
              {/* Navigation Items */}
              <nav className="space-y-6">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href.replace('/', '') || 
                                 (item.href === '/' && activeSection === '');
                  
                  return (
                    <motion.div
                      key={item.href}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      className="relative"
                    >
                      {/* Active Dot Indicator */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            variants={activeDotVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full"
                          />
                        )}
                      </AnimatePresence>

                      {/* Navigation Link */}
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`block text-lg font-medium transition-colors duration-200 hover:text-yellow-400 ${
                          isActive ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12"
              >
                <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {contact.socialMedia.linkedin && (
                    <a 
                      href={contact.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      LinkedIn
                    </a>
                  )}
                  {contact.socialMedia.twitter && (
                    <a 
                      href={contact.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Twitter
                    </a>
                  )}
                  {contact.socialMedia.instagram && (
                    <a 
                      href={contact.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-8 border-t border-gray-800"
            >
              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <p className="text-sm">
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {contact.email}
                  </a>
                </p>
                <p className="text-sm">
                  <a 
                    href={`tel:${contact.phone}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {contact.phone}
                  </a>
                </p>
              </div>

              {/* Copyright */}
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Nityasa Niscita Solusi. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
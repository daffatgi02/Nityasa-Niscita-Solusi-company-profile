// components/layout/Navbar.tsx
/**
 * Main Navigation component with exact specifications
 * - Fixed header with dynamic styling based on scroll
 * - Logo with hover effects
 * - Burger button with visibility based on scroll
 */
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useNavigation } from '@/hooks/useNavigation';
import { useRafScroll } from '@/hooks/useScrollPosition';
import { MobileMenu } from './MobileMenu';
import settingsData from '@/data/settings.json';

interface NavbarProps {
  sections?: string[];
}

export function Navbar({ sections = [] }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    activeSection,
  } = useNavigation(sections);

  // Scroll detection with RAF for smooth performance
  useRafScroll((currentScrollY) => {
    setScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 100);
  });

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 w-full z-40">
        <div 
          className="flex justify-between items-center transition-all duration-300"
          style={{ padding: '35px' }}
        >
          {/* Logo */}
          <Link 
            href="/"
            className={`text-2xl font-bold transition-all duration-300 hover:scale-105 transform ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={closeMenu}
          >
            {settingsData.logo}
          </Link>
        </div>
      </header>

      {/* Burger Button */}
      <motion.button
        onClick={toggleMenu}
        className="fixed right-5 top-5 z-50 w-20 h-20 rounded-full bg-gray-900 flex flex-col items-center justify-center gap-1 hover:shadow-2xl hover:scale-105 transition-all duration-200"
        style={{
          transform: `scale(${isScrolled ? 1 : 0})`,
        }}
        whileHover={{ scale: isScrolled ? 1.05 : 0 }}
        whileTap={{ scale: isScrolled ? 0.95 : 0 }}
      >
        {/* Burger Lines with Animation */}
        <motion.div
          className="w-2/5 h-0.5 bg-white transition-all duration-300"
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            translateY: isMenuOpen ? 0 : -5,
          }}
        />
        <motion.div
          className="w-2/5 h-0.5 bg-white transition-all duration-300"
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            translateY: isMenuOpen ? 0 : 5,
          }}
        />
      </motion.button>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={closeMenu}
        activeSection={activeSection}
        navigation={settingsData.navigation}
        contact={settingsData.contact}
      />
    </>
  );
}
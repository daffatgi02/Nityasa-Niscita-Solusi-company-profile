// hooks/useNavigation.ts
/**
 * Hook untuk navigation state dan active section detection
 */
import { useState, useEffect, useCallback } from 'react';
import { useScrollPosition } from './useScrollPosition';

interface NavigationState {
  isMenuOpen: boolean;
  activeSection: string;
  isScrolled: boolean;
}

export const useNavigation = (sections: string[] = []) => {
  const [navigationState, setNavigationState] = useState<NavigationState>({
    isMenuOpen: false,
    activeSection: sections[0] || '',
    isScrolled: false,
  });

  const { y: scrollY, isScrolled } = useScrollPosition(100);

  // Toggle menu
  const toggleMenu = useCallback(() => {
    setNavigationState(prev => ({
      ...prev,
      isMenuOpen: !prev.isMenuOpen,
    }));
  }, []);

  // Close menu
  const closeMenu = useCallback(() => {
    setNavigationState(prev => ({
      ...prev,
      isMenuOpen: false,
    }));
  }, []);

  // Update active section based on scroll position
  const updateActiveSection = useCallback(() => {
    const sectionElements = sections
      .map(section => ({
        id: section,
        element: document.getElementById(section),
      }))
      .filter(item => item.element !== null);

    let activeId = sections[0] || '';

    for (const { id, element } of sectionElements) {
      if (element) {
        const rect = element.getBoundingClientRect();
        // Section is considered active if it's in the viewport
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeId = id;
        }
      }
    }

    setNavigationState(prev => ({
      ...prev,
      activeSection: activeId,
    }));
  }, [sections]);

  // Update scroll state
  useEffect(() => {
    setNavigationState(prev => ({
      ...prev,
      isScrolled,
    }));
  }, [isScrolled]);

  // Update active section on scroll
  useEffect(() => {
    if (sections.length === 0) return;

    const throttledUpdate = () => {
      requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledUpdate);
    };
  }, [updateActiveSection, sections]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (navigationState.isMenuOpen) {
      window.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [navigationState.isMenuOpen, closeMenu]);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    closeMenu();
  }, [closeMenu]);

  return {
    ...navigationState,
    toggleMenu,
    closeMenu,
    scrollToSection,
  };
};
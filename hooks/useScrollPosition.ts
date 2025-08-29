// hooks/useScrollPosition.ts
/**
 * Hook untuk mendeteksi posisi scroll dengan RAF (Request Animation Frame)
 */
import { useState, useEffect, useCallback } from 'react';
import { throttle } from '@/lib/utils';

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'none';
  isScrolled: boolean;
}

export const useScrollPosition = (threshold: number = 100) => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: 'none',
    isScrolled: false,
  });

  const updateScrollPosition = useCallback(
    throttle(() => {
      const currentX = window.pageXOffset;
      const currentY = window.pageYOffset;
      
      setScrollPosition(prev => ({
        x: currentX,
        y: currentY,
        direction: currentY > prev.y ? 'down' : currentY < prev.y ? 'up' : 'none',
        isScrolled: currentY > threshold,
      }));
    }, 16), // ~60fps
    [threshold]
  );

  useEffect(() => {
    // Set initial position
    setScrollPosition({
      x: window.pageXOffset,
      y: window.pageYOffset,
      direction: 'none',
      isScrolled: window.pageYOffset > threshold,
    });

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [updateScrollPosition, threshold]);

  return scrollPosition;
};

// Alternative RAF-based scroll hook for smoother performance
export const useRafScroll = (callback: (scrollY: number) => void) => {
  const [rafId, setRafId] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafId) return;

    const id = requestAnimationFrame(() => {
      callback(window.pageYOffset);
      setRafId(null);
    });

    setRafId(id);
  }, [callback, rafId]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [handleScroll, rafId]);
};
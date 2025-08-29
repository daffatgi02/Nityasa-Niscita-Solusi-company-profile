// hooks/useIntersectionObserver.ts
/**
 * Hook untuk Intersection Observer API
 */
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverProps = {}
): [RefObject<T>, boolean] => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;
  
  const elementRef = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        if (triggerOnce) {
          if (isElementIntersecting && !hasTriggered) {
            setIsIntersecting(true);
            setHasTriggered(true);
          }
        } else {
          setIsIntersecting(isElementIntersecting);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return [elementRef, isIntersecting];
};

// Hook untuk multiple elements
export const useIntersectionObservers = <T extends HTMLElement = HTMLDivElement>(
  count: number,
  options: UseIntersectionObserverProps = {}
) => {
  const refs = useRef<RefObject<T>[]>([]);
  const [intersections, setIntersections] = useState<boolean[]>([]);

  // Initialize refs array
  if (refs.current.length !== count) {
    refs.current = Array(count).fill(null).map(() => ({ current: null }));
  }

  useEffect(() => {
    setIntersections(new Array(count).fill(false));
  }, [count]);

  useEffect(() => {
    const { threshold = 0.1, rootMargin = '0px' } = options;
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersections(prev => {
            const newIntersections = [...prev];
            newIntersections[index] = entry.isIntersecting;
            return newIntersections;
          });
        },
        { threshold, rootMargin }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [count, options]);

  return [refs.current, intersections] as const;
};
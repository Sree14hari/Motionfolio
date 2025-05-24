"use client";

import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[], rootMargin = "-50% 0px -50% 0px"): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const observedElementsRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
      observedElementsRef.current.clear();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin,
        threshold: 0.5 // Consider active when 50% of the section is visible
      }
    );

    const currentObserver = observerRef.current;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && !observedElementsRef.current.has(element)) {
        currentObserver.observe(element);
        observedElementsRef.current.add(element);
      }
    });
    
    // Set initial active section (useful for page load when hero is visible)
    // This is a simplified approach; a more robust one might check visibility on mount.
    if (sectionIds.length > 0 && !activeSection) {
        const firstElement = document.getElementById(sectionIds[0]);
        if (firstElement && window.scrollY < firstElement.offsetHeight / 2) {
             setActiveSection(sectionIds[0]);
        }
    }


    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
      observedElementsRef.current.clear();
    };
  }, [sectionIds, rootMargin, activeSection]); // Add activeSection to dependencies to potentially re-evaluate if needed

  return activeSection;
}

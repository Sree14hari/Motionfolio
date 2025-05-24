
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SECTIONS, SectionConfig } from '@/lib/constants';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

export function BottomNavbar() {
  const sectionIds = SECTIONS.map(s => s.id);
  const activeSection = useActiveSection(sectionIds, "-20% 0px -20% 0px"); // Adjust rootMargin for bottom nav

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-lg shadow-top rounded-t-2xl" // lg:hidden ensures it's for smaller screens
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-around h-16">
          {SECTIONS.map((section: SectionConfig) => {
            const IconComponent = getIcon(section.Icon);
            if (!IconComponent) return null;

            return (
              <Link href={`#${section.id}`} key={section.id} passHref legacyBehavior>
                <motion.a
                  className={cn(
                    "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 ease-in-out group",
                    activeSection === section.id
                      ? "text-primary scale-110"
                      : "text-muted-foreground hover:text-primary hover:scale-105",
                    "focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1 focus:ring-offset-card"
                  )}
                  whileHover={{ scale: activeSection === section.id ? 1.15 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={section.name}
                >
                  <IconComponent 
                    size={activeSection === section.id ? 26 : 24} 
                    strokeWidth={activeSection === section.id ? 2.5 : 2} 
                  />
                  <span className={cn(
                    "text-xs mt-0.5",
                    activeSection === section.id ? "font-semibold" : "font-normal group-hover:font-medium"
                  )}>
                    {section.name}
                  </span>
                </motion.a>
              </Link>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        .shadow-top {
          box-shadow: 0 -4px 15px -3px rgba(0, 0, 0, 0.07), 0 -2px 6px -4px rgba(0, 0, 0, 0.05);
        }
        .dark .shadow-top {
          box-shadow: 0 -4px 15px -3px rgba(255, 255, 255, 0.03), 0 -2px 6px -4px rgba(255, 255, 255, 0.02);
        }
      `}</style>
    </motion.nav>
  );
}

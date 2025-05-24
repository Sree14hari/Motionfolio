
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SECTIONS, SECTION_IDS, NAVBAR_SOCIAL_LINKS } from '@/lib/constants';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Logo } from '@/components/icons/logo'; // Import the Logo component

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

export function Navbar() {
  const sectionIds = SECTIONS.map(s => s.id);
  const activeSection = useActiveSection(sectionIds);

  const NavLinkContent = ({ href, sectionId, children }: { href: string; sectionId: string; children: React.ReactNode }) => (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        className={cn(
          "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out",
          activeSection === sectionId
            ? "bg-background text-primary font-semibold shadow-sm" 
            : "text-muted-foreground hover:text-primary",
          "focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1 focus:ring-offset-card"
        )}
      >
        {children}
      </motion.a>
    </Link>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "hidden md:flex md:fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-card/25 shadow-lg backdrop-blur-lg" 
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`#${SECTION_IDS.HERO}`} passHref legacyBehavior>
            <motion.a
              className="flex items-center text-foreground hover:text-primary transition-colors" // Added flex and items-center
              whileHover={{ scale: 1.05 }}
            >
              <Logo className="h-8 w-auto" /> {/* Use Logo component, adjust size as needed */}
            </motion.a>
          </Link>

          {/* Centered Nav Links (Desktop) */}
          <div className="flex flex-grow justify-center min-w-0">
            <div className={cn(
                "flex items-center border border-transparent shadow-sm rounded-full p-1 space-x-1",
                "bg-muted/60 dark:bg-muted/50" 
            )}>
              {SECTIONS.map((section) => (
                <NavLinkContent key={section.id} href={`#${section.id}`} sectionId={section.id}>
                  {section.name}
                </NavLinkContent>
              ))}
            </div>
          </div>
          
          {/* Right Aligned Social Icons & Theme Toggle (Desktop) */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-foreground/15 text-foreground px-3 py-1.5 rounded-full shadow-sm">
              {NAVBAR_SOCIAL_LINKS.map((link) => {
                const IconComponent = getIcon(link.Icon);
                return IconComponent ? (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, opacity: 0.85 }}
                    className="p-1"
                    aria-label={`My ${link.name} profile`}
                  >
                    <IconComponent size={18} strokeWidth={2} />
                  </motion.a>
                ) : null;
              })}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

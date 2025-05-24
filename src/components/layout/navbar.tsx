
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { APP_NAME, SECTIONS, SECTION_IDS, NAVBAR_SOCIAL_LINKS } from '@/lib/constants';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Helper to get Lucide icon component by name (can be moved to utils if used elsewhere)
const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = SECTIONS.map(s => s.id);
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinkContent = ({ href, sectionId, children }: { href: string; sectionId: string; children: React.ReactNode }) => (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        onClick={() => setIsOpen(false)}
        className={cn(
          "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out",
          activeSection === sectionId
            ? "bg-card text-primary font-semibold shadow-sm"
            : "text-muted-foreground hover:text-primary",
          "focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1 focus:ring-offset-muted"
        )}
      >
        {children}
      </motion.a>
    </Link>
  );
  
  // For mobile menu, we might want slightly different styling or keep it consistent
  const MobileNavLink = ({ href, sectionId, children }: { href: string; sectionId: string; children: React.ReactNode }) => (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        onClick={() => setIsOpen(false)}
        className={cn(
          "block w-full text-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300", // Adjusted for mobile view
          activeSection === sectionId 
            ? "bg-primary/10 text-primary" 
            : "text-foreground hover:text-primary hover:bg-primary/5",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen ? "bg-card/90 shadow-lg backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`#${SECTION_IDS.HERO}`} passHref legacyBehavior>
            <motion.a
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {APP_NAME}
            </motion.a>
          </Link>

          {/* Centered Nav Links (Desktop) */}
          <div className="hidden lg:flex flex-grow justify-center min-w-0"> {/* Changed md:flex to lg:flex */}
            <div className="flex items-center bg-muted/60 dark:bg-muted/30 border border-border/30 shadow-sm rounded-full p-1 space-x-1">
              {SECTIONS.map((section) => (
                <NavLinkContent key={section.id} href={`#${section.id}`} sectionId={section.id}>
                  {section.name}
                </NavLinkContent>
              ))}
            </div>
          </div>
          
          {/* Right Aligned Social Icons (Desktop) & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-1 bg-foreground text-background px-3 py-1.5 rounded-full shadow-sm"> {/* Changed md:flex to lg:flex */}
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
            <div className="lg:hidden"> {/* Changed md:hidden to lg:hidden */}
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-card/90 backdrop-blur-lg pb-3" // Changed md:hidden to lg:hidden
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {SECTIONS.map((section) => (
              <MobileNavLink key={section.id} href={`#${section.id}`} sectionId={section.id}>
                {section.name}
              </MobileNavLink>
            ))}
            {/* Social Links for Mobile Menu */}
            <div className="mt-6 pt-4 border-t border-border/50 w-full flex justify-center space-x-4">
              {NAVBAR_SOCIAL_LINKS.map((link) => {
                const IconComponent = getIcon(link.Icon);
                return IconComponent ? (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary p-2"
                    aria-label={`My ${link.name} profile`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconComponent size={24} strokeWidth={1.5} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

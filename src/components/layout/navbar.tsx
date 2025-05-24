"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { APP_NAME, SECTIONS, SECTION_IDS } from '@/lib/constants';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';

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

  const NavLink = ({ href, sectionId, children }: { href: string; sectionId: string; children: React.ReactNode }) => (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        onClick={() => setIsOpen(false)}
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
          activeSection === sectionId 
            ? "bg-primary/10 text-primary" 
            : "text-foreground hover:text-primary hover:bg-primary/5",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        )}
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 300 }}
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
          <Link href={`#${SECTION_IDS.HERO}`} passHref legacyBehavior>
            <motion.a 
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {APP_NAME}
            </motion.a>
          </Link>
          <div className="hidden md:flex space-x-4">
            {SECTIONS.map((section) => (
              <NavLink key={section.id} href={`#${section.id}`} sectionId={section.id}>
                {section.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card/90 backdrop-blur-lg pb-3"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {SECTIONS.map((section) => (
              <NavLink key={section.id} href={`#${section.id}`} sectionId={section.id}>
                {section.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}


"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { SECTIONS, NAVBAR_SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { Logo } from '@/components/icons/logo'; 

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "hidden md:flex md:fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-card/25 backdrop-blur-lg border-b border-border/70 shadow-sm" // Re-added blur and semi-transparent background
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" passHref legacyBehavior>
            <motion.a
              className="flex items-center text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Logo className="h-8 w-auto" /> 
            </motion.a>
          </Link>

          {/* Centered Nav Links (Desktop) */}
          <div className="flex flex-grow justify-center min-w-0">
            <div 
              className="flex items-center border border-border/50 shadow-sm rounded-full p-1 space-x-1 bg-card"
            >
              {SECTIONS.map((section) => {
                const isActive = pathname === section.href;
                return (
                  <Link href={section.href} key={section.id} passHref legacyBehavior>
                    <motion.a
                      className={cn(
                        "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out",
                        isActive
                          ? "bg-background text-primary font-semibold shadow-sm" // Active link style
                          : "text-muted-foreground hover:text-primary",
                        "focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1 focus:ring-offset-card"
                      )}
                    >
                      {section.name}
                    </motion.a>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Aligned Social Icons (Desktop) */}
          <div className="flex items-center space-x-3">
            <div 
              className="flex items-center space-x-1 border border-border/50 shadow-sm text-muted-foreground px-3 py-1.5 rounded-full bg-card"
            >
              {NAVBAR_SOCIAL_LINKS.map((link) => {
                const IconComponent = getIcon(link.Icon);
                return IconComponent ? (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }} 
                    className="p-1"
                    aria-label={`My ${link.name} profile`}
                  >
                    <IconComponent size={18} strokeWidth={2} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

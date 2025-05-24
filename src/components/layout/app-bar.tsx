
"use client";

import { motion } from 'framer-motion';
import { Logo } from '@/components/icons/logo'; // Import the Logo component
import { NAVBAR_SOCIAL_LINKS } from '@/lib/constants';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

export function AppBar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="md:hidden fixed top-0 left-0 right-0 z-40 bg-card/25 backdrop-blur-lg shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16"> {/* Changed justify-start to justify-between */}
          <Logo className="h-9 w-auto text-primary" />

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
        </div>
      </div>
    </motion.header>
  );
}

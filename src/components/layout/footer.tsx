
"use client";

import { CONTACT_SECTION_SOCIAL_LINKS } from '@/lib/constants'; 
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

const FOOTER_SOCIAL_LINKS = CONTACT_SECTION_SOCIAL_LINKS.filter(
  link => ['GitHub', 'LinkedIn', 'Email'].includes(link.name)
).map(link => link.name === 'Email' ? { ...link, Icon: 'Mail' } : link);

interface BuiltWithItem {
  text: string;
  Icon?: React.ComponentType<LucideProps>;
}

const builtWithData: BuiltWithItem[] = [
  { text: 'Next.js', Icon: getIcon('Baseline') }, // Placeholder icon
  { text: 'Tailwind CSS', Icon: getIcon('Wind') },
  { text: 'Framer Motion', Icon: getIcon('Move') },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.footer 
      className="py-12 md:py-16 bg-background text-foreground border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-10">
          {/* Column 1: Social Icons */}
          <motion.div variants={sectionVariants} className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex space-x-4">
              {FOOTER_SOCIAL_LINKS.map((link) => {
                const IconComponent = getIcon(link.Icon);
                return IconComponent ? (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                    className="text-muted-foreground hover:text-primary p-1"
                    aria-label={`My ${link.name} profile`}
                  >
                    <IconComponent size={28} strokeWidth={1.5} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </motion.div>

          {/* Column 2: Built With */}
          <motion.div variants={sectionVariants} className="flex flex-col items-center md:items-start space-y-2 text-sm">
            {builtWithData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                {item.Icon && <item.Icon size={18} strokeWidth={1.5} />}
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Column 3: Spotify Embed */}
          <motion.div 
            variants={sectionVariants} 
            className="w-full max-w-[320px] mx-auto lg:w-[320px] lg:ml-auto lg:mr-0"
          >
            <div style={{ left: 0, width: '100%', height: '152px', position: 'relative' }}>
              <iframe 
                src="https://open.spotify.com/embed/track/2plbrEY59IikOBgBGLjaoe?utm_source=oembed" 
                style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: '0' }} 
                allowFullScreen 
                allow="clipboard-write *; encrypted-media *; fullscreen *; picture-in-picture *;"
                title="Spotify Embed"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div variants={sectionVariants} className="text-center border-t border-border pt-8 mt-8">
          {currentYear !== null ? (
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Sreehari. All rights reserved.
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">&nbsp;</p>
          )}
        </motion.div>
      </div>
    </motion.footer>
  );
}

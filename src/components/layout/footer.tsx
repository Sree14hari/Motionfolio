
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

// Updated to match the image: LinkedIn, GitHub, Instagram
const FOOTER_SOCIAL_LINKS = CONTACT_SECTION_SOCIAL_LINKS.filter(
  link => ['LinkedIn', 'GitHub', 'Instagram'].includes(link.name) 
);


interface BuiltWithItem {
  text: string;
  Icon?: React.ComponentType<LucideProps>;
}

// Updated to match the image: Next.js (no icon), Tailwind (Wind icon), Framer Motion (Move icon)
const builtWithData: BuiltWithItem[] = [
  { text: 'Next.js' }, 
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
      className="py-12 md:py-16 bg-foreground text-background border-t border-background/20" // Dark background, light text
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
          {/* Column 1: Social Icons */}
          <motion.div 
            variants={sectionVariants} 
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <div className="flex space-x-4">
              {FOOTER_SOCIAL_LINKS.map((link) => {
                const IconComponent = getIcon(link.Icon);
                return IconComponent ? (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: "hsl(var(--background))" }} // Hover to full light color
                    className="text-background/80 hover:text-background p-1" // Light icons
                    aria-label={`My ${link.name} profile`}
                  >
                    <IconComponent size={28} strokeWidth={1.5} />
                  </motion.a>
                ) : null;
              })}
            </div>
            {/* ThemeToggle removed from here, now a FAB */}
          </motion.div>

          {/* Column 2: Built With */}
          <motion.div 
            variants={sectionVariants} 
            className={cn(
              "flex flex-col items-center md:items-start space-y-2 text-sm" // Left-aligned on md+
            )}
          >
            {builtWithData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-background/80"> {/* Light text */}
                {item.Icon && <item.Icon size={18} strokeWidth={1.5} />}
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Column 3: Spotify Embed */}
          <motion.div 
            variants={sectionVariants} 
            className={cn(
              "w-full max-w-[320px] mx-auto", 
              "md:w-[320px] md:ml-auto md:mr-0", // Right align in its column for md+
              "block" 
            )}
          >
            <div style={{ left: 0, width: '100%', height: '152px', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
              <iframe 
                src="https://open.spotify.com/embed/track/0c39x5nS3S0k7Jk1NUI2A7?utm_source=generator&theme=1"  // Die With A Smile, dark theme
                style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Spotify Embed - Die With A Smile"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div variants={sectionVariants} className="text-center border-t border-background/20 pt-8 mt-8"> {/* Adjusted border */}
          {currentYear !== null ? (
            <p className="text-xs text-background/60"> {/* Light muted text */}
              &copy; {currentYear} Sreehari. All rights reserved.
            </p>
          ) : (
            <p className="text-xs text-background/60">&nbsp;</p> 
          )}
        </motion.div>
      </div>
    </motion.footer>
  );
}

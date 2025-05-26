
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
  { text: 'Next.js', Icon: getIcon('Baseline') }, 
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
      className="py-12 md:py-16 bg-background text-foreground border-t border-border" // Updated background, text, and border colors
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start mb-10">
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
                    className="text-muted-foreground hover:text-primary p-1" // Updated text color
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
              <div key={index} className="flex items-center space-x-2 text-muted-foreground"> {/* Updated text color */}
                {item.Icon && <item.Icon size={18} strokeWidth={1.5} />}
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Column 3: Spotify Embed */}
          <motion.div variants={sectionVariants} className="w-full max-w-sm mx-auto md:mx-0 md:justify-self-end">
            <iframe
              title="Spotify Embed: Die With A Smile - Lady Gaga, Bruno Mars"
              style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} // Adjusted shadow for light bg
              src="https://open.spotify.com/embed/track/0c39x5nS3S0k7Jk1NUI2A7?utm_source=generator" // Removed &theme=1 for default light theme
              width="100%"
              height="152" 
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div variants={sectionVariants} className="text-center border-t border-border pt-8 mt-8"> {/* Updated border color */}
          {currentYear !== null ? (
            <p className="text-xs text-muted-foreground"> {/* Updated text color */}
              &copy; {currentYear} Sreehari. All rights reserved.
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">&nbsp;</p> // Updated text color
          )}
        </motion.div>
      </div>
    </motion.footer>
  );
}

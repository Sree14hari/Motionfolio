
"use client";

import { CONTACT_SECTION_SOCIAL_LINKS } from '@/lib/constants'; // Using CONTACT_SECTION_SOCIAL_LINKS as it contains Mail
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

// Filtered social links for the footer
const FOOTER_SOCIAL_LINKS = CONTACT_SECTION_SOCIAL_LINKS.filter(
  link => ['GitHub', 'LinkedIn', 'Email'].includes(link.name)
).map(link => link.name === 'Email' ? { ...link, Icon: 'Mail' } : link); // Ensure Email uses Mail icon

interface BuiltWithItem {
  text: string;
  Icon?: React.ComponentType<LucideProps>;
}

const builtWithData: BuiltWithItem[] = [
  { text: 'Next.js', Icon: getIcon('Baseline') }, // Using Baseline as a placeholder for Next.js logo
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
      className="py-12 md:py-16 bg-foreground text-background border-t border-background/10"
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
                    className="text-background/80 hover:text-background p-1"
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
              <div key={index} className="flex items-center space-x-2 text-background/80">
                {item.Icon && <item.Icon size={18} strokeWidth={1.5} />}
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Column 3: Spotify Embed */}
          <motion.div variants={sectionVariants} className="w-full max-w-sm mx-auto md:mx-0 md:justify-self-end">
            <iframe
              title="Spotify Embed: Die With A Smile - Lady Gaga, Bruno Mars"
              style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
              src="https://open.spotify.com/embed/track/0c39x5nS3S0k7Jk1NUI2A7?utm_source=generator&theme=1" // theme=1 for dark theme
              width="100%"
              height="152" // Standard compact player height
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div variants={sectionVariants} className="text-center border-t border-background/10 pt-8 mt-8">
          {currentYear !== null ? (
            <p className="text-xs text-background/60">
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

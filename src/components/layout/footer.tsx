
"use client";

import { APP_NAME, NAVBAR_SOCIAL_LINKS } from '@/lib/constants';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-8">
        
        {/* Social Icons Pill */}
        <div 
          className="flex items-center space-x-1 border border-border/50 shadow-sm text-muted-foreground px-4 py-2 rounded-full bg-card"
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
                className="p-1.5" // Increased padding for better touch area
                aria-label={`My ${link.name} profile`}
              >
                <IconComponent size={20} strokeWidth={2} />
              </motion.a>
            ) : null;
          })}
        </div>

        {/* Spotify Embed */}
        <div className="w-full max-w-md">
          <iframe
            title="Spotify Embed: Dandelions - Ruth B."
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2eAvDnpXP5W0cVtiI0GU2V?utm_source=generator&theme=0" // theme=0 for light theme
            width="100%"
            height="152" // Standard compact player height
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        {/* Made with section */}
        <p className="text-sm text-muted-foreground text-center">
          Made with ❤️ using Next.js, Tailwind CSS & Framer Motion.
        </p>

        {/* Copyright */}
        {currentYear !== null ? (
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Sreehari. All rights reserved.
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">&nbsp;</p> 
        )}
      </div>
    </footer>
  );
}

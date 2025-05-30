
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import Link from 'next/link';
import {
  CONTACT_SECTION_SOCIAL_LINKS,
  FooterLinkItem,
} from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/icons/logo';

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

interface BuiltWithItem {
  name: string;
  Icon?: string;
  href?: string;
}

const builtWithData: BuiltWithItem[] = [
  { name: 'Next.js', Icon: 'Layers', href: 'https://nextjs.org' },
  { name: 'Tailwind CSS', Icon: 'Wind', href: 'https://tailwindcss.com' },
  { name: 'Framer Motion', Icon: 'Move', href: 'https://www.framer.com/motion/' },
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

  const bioText = "I'm Sreehari - a 3rd-year CSE (AI-ML) undergrad. Thanks for checking out my site!";
  const spotifyTrackId = "2plbrEY59IikOBgBGLjaoe"; 

  const relevantSocialLinks = CONTACT_SECTION_SOCIAL_LINKS.filter(link =>
    ['GitHub', 'LinkedIn', 'Instagram', 'Dribbble'].includes(link.name)
  );

  return (
    <motion.footer
      className="py-12 md:py-16 bg-background text-foreground border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="space-y-4 md:text-left text-center">
             <Link href="/" className="inline-block mb-2">
                <Logo width={40} height={40} className="text-foreground dark:text-white mx-auto md:mx-0" />
            </Link>
            <p className="text-sm text-muted-foreground">{bioText}</p>
            {currentYear !== null && (
              <p className="text-xs text-muted-foreground/80">
                &copy; {currentYear} Sreehari
              </p>
            )}
            <div className="flex items-center space-x-1 bg-foreground text-background px-3 py-1.5 rounded-full shadow-sm w-fit mx-auto md:mx-0">
              {relevantSocialLinks.map((link) => {
                const IconComponent = getIcon(link.Icon);
                return IconComponent ? (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, opacity: 0.85 }}
                    className="p-1.5"
                    aria-label={`My ${link.name} profile`}
                  >
                    <IconComponent size={18} strokeWidth={2} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-center space-y-6"> 
            <motion.div
              className="w-full max-w-[320px] mx-auto" 
              variants={sectionVariants}
            >
              <div style={{ left: 0, width: '100%', height: '152px', position: 'relative' }}>
                <iframe
                  title="Spotify Embed Player"
                  src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=oembed`}
                  style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: '0' }}
                  allowFullScreen
                  allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              className="hidden md:flex md:flex-col md:items-center md:space-y-3" 
              variants={sectionVariants}
            >
              <h5 className="text-sm font-semibold text-foreground">Built with</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {builtWithData.map((item) => {
                  const IconComponent = item.Icon ? getIcon(item.Icon) : null;
                  return (
                    <li key={item.name} className="flex items-center justify-center md:justify-start"> 
                      {IconComponent && <IconComponent className="mr-2 h-4 w-4 text-muted-foreground" />}
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          {item.name}
                        </a>
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="relative h-12 mt-8 mb-4">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                hsl(var(--border)),
                hsl(var(--border)) 2px, 
                transparent 2px, 
                transparent 5px 
              )`,
              opacity: 0.6, 
            }}
          />
        </div>
      </div>
    </motion.footer>
  );
}

// src/components/icons/logo.tsx
"use client";

import type { SVGProps } from 'react';
import LogoComponent from '@/assets/logo.svg'; // Direct import for SVGR
// import LogoDarkComponent from '@/assets/logow.svg'; // No longer used

interface LogoProps extends Omit<SVGProps<SVGSVGElement>, 'alt'> {
  alt?: string;
}

export function Logo({ className, alt = "Logo", ...rest }: LogoProps) {
  // The className prop should include Tailwind sizing and text color utilities
  // e.g., "h-8 w-auto text-foreground dark:text-white"
  return (
    <LogoComponent 
      className={className} // Apply className directly to the SVG component
      aria-label={alt}
      {...rest} 
    />
  );
}

// @ts-ignore next-line
import LogoLight from '@/assets/logo.svg';
// @ts-ignore next-line
import LogoDark from '@/assets/logow.svg';
import type { SVGProps } from 'react';

interface LogoProps extends Omit<SVGProps<SVGSVGElement>, 'alt'> {
  alt?: string;
  // Removed width and height from props as sizing is typically handled by className
  // If explicit width/height props are needed, they can be re-added.
}

export function Logo({ className, alt = "Logo", ...rest }: LogoProps) {
  // The className prop will typically include Tailwind sizing utilities like h-8 w-auto
  // Both SVGs will be rendered, and CSS will control visibility.
  return (
    <div className={className} aria-label={alt}>
      <LogoLight 
        className="block dark:hidden h-full w-full" // Ensure SVG fills the container
        aria-hidden="true" // Hide from screen readers as only one is effectively visible
        {...rest} 
      />
      <LogoDark 
        className="hidden dark:block h-full w-full" // Ensure SVG fills the container
        aria-hidden="true"
        {...rest} 
      />
    </div>
  );
}


"use client";

import Image from 'next/image';
import type { ImageProps } from 'next/image';

interface LogoProps extends Omit<ImageProps, 'src' | 'alt'> {
  alt?: string;
  width?: number;
  height?: number;
}

export function Logo({ 
  alt = "MotionFolio Logo", 
  width = 36, // Default height
  height = 36, // Default height
  className, 
  ...rest 
}: LogoProps) {
  return (
    <Image
      src="https://i.postimg.cc/8zYvNrs2/logo0.png"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority // Logos in navbars are usually high priority
      {...rest}
    />
  );
}

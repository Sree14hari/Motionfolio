// @ts-ignore next-line
import LogoSvg from '@/assets/logo.svg?url'; // Use ?url for Next.js to handle SVG as a URL for Image component
import Image from 'next/image';
import type { ImageProps } from 'next/image';

interface LogoProps extends Omit<ImageProps, 'src' | 'alt'> {
  // You can add any custom props for your Logo component here
  alt?: string;
}

export function Logo(props: LogoProps) {
  // If you need to style the SVG directly (e.g., fill, stroke),
  // you might need to import it as a ReactComponent using @svgr/webpack
  // For now, we'll use next/image which is good for optimization.
  // The SVG's internal 'currentColor' will try to inherit color.
  const { alt = "Logo", ...rest } = props;
  return <Image src={LogoSvg as string} alt={alt} {...rest} unoptimized />;
}

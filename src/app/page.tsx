
"use client"; // Keep as client component if HeroSection or FeaturedProjectsSection use client features like Framer Motion

import { HeroSection } from '@/components/sections/hero-section';
import { ToolboxSection } from '@/components/sections/toolbox-section'; 
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section';
// import dynamic from 'next/dynamic'; // No longer needed for ToolboxSection directly

// ToolboxSection dynamic import removed
// const ToolboxSection = dynamic(
//   () => import('@/components/sections/toolbox-section').then(mod => mod.ToolboxSection),
//   { 
//     ssr: false,
//     loading: () => (
//       <section className="py-16 sm:py-24 bg-card">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-lg text-muted-foreground">Loading interactive toolbox...</p>
//         </div>
//       </section>
//     )
//   }
// );

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="w-full h-px bg-border my-8"></div> {/* Separator Line */}
      <ToolboxSection />
      <div className="w-full h-px bg-border my-8"></div> {/* Separator Line */}
      <FeaturedProjectsSection />
    </>
  );
}

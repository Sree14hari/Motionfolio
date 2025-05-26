
"use client"; 

import { HeroSection } from '@/components/sections/hero-section';
import dynamic from 'next/dynamic';

// Dynamically import sections that are below the fold
const ToolboxSection = dynamic(
  () => import('@/components/sections/toolbox-section').then(mod => mod.ToolboxSection),
  { 
    ssr: false,
    loading: () => (
      <section className="py-16 sm:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground">Loading toolbox...</p>
        </div>
      </section>
    )
  }
);

const FeaturedProjectsSection = dynamic(
  () => import('@/components/sections/featured-projects-section').then(mod => mod.FeaturedProjectsSection),
  { 
    ssr: false,
    loading: () => (
      <section className="py-16 sm:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground">Loading projects...</p>
        </div>
      </section>
    )
  }
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="w-full h-px bg-border my-8"></div> {/* Separator Line */}
      <ToolboxSection />
      <div className="w-full h-px bg-border my-8"></div> {/* Separator Line */}
      <FeaturedProjectsSection />
      <div className="w-full h-px bg-border my-8"></div> {/* Separator Line added here */}
    </>
  );
}

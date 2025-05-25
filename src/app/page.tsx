
import { HeroSection } from '@/components/sections/hero-section';
import { ToolboxSection } from '@/components/sections/toolbox-section';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="w-full h-px bg-border my-8 sm:my-12 md:my-16"></div> {/* Separator Line */}
      <ToolboxSection />
      <div className="w-full h-px bg-border my-8 sm:my-12 md:my-16"></div> {/* Separator Line */}
      <FeaturedProjectsSection />
    </>
  );
}

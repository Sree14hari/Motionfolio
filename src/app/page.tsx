
import { HeroSection } from '@/components/sections/hero-section';
import { ToolboxSection } from '@/components/sections/toolbox-section';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ToolboxSection />
      <FeaturedProjectsSection />
    </>
  );
}

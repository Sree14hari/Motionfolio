
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CertificatesSection } from '@/components/sections/certificates-section';
import { JourneySection } from '@/components/sections/journey-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <CertificatesSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}

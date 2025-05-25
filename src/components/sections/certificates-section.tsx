
"use client";

// import { motion } from 'framer-motion';
import { SECTION_IDS } from '@/lib/constants';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { Award, Download } from 'lucide-react'; 
// import { Button } from '@/components/ui/button';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string; 
  imageHint?: string;
  verifyUrl?: string; 
  downloadUrl?: string; 
}

const certificatesData: Certificate[] = [
  {
    id: 'cert1',
    title: 'Advanced Web Development Bootcamp',
    issuer: 'Tech Learning Institute',
    date: 'May 2023',
    imageUrl: 'https://placehold.co/100x100.png',
    imageHint: 'tech logo',
    verifyUrl: '#',
  },
  {
    id: 'cert2',
    title: 'Cloud Practitioner Essentials',
    issuer: 'Cloud Services Provider',
    date: 'January 2024',
    imageUrl: 'https://placehold.co/100x100.png',
    imageHint: 'cloud logo',
    downloadUrl: '#',
  },
  {
    id: 'cert3',
    title: 'UI/UX Design Fundamentals',
    issuer: 'Design Academy',
    date: 'September 2022',
    imageUrl: 'https://placehold.co/100x100.png',
    imageHint: 'design logo',
    verifyUrl: '#',
  },
];

export function CertificatesSection() {
  // const sectionVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { staggerChildren: 0.1, delayChildren: 0.1 }, 
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.4, ease: "easeOut" }, 
  //   },
  // };

  return (
    <section
      id={SECTION_IDS.CERTIFICATES}
      className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-24 bg-card"
      // variants={sectionVariants}
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div /* variants={itemVariants} */ className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my certified skills and professional development milestones.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          // variants={sectionVariants}
        >
          {certificatesData.map((cert) => (
            <div key={cert.id} /* variants={itemVariants} */ className="p-4 border rounded-lg shadow">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">Issued by: {cert.issuer}</p>
              <p className="text-xs text-muted-foreground/80">Date: {cert.date}</p>
              {/* Simplified content, removed full Card structure and image */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

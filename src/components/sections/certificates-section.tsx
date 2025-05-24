
"use client";

import { motion } from 'framer-motion';
import { SECTION_IDS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Download } from 'lucide-react'; // Example icons
import { Button } from '@/components/ui/button';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string; // Optional: URL to an image/logo of the certificate or issuer
  verifyUrl?: string; // Optional: URL to verify the certificate
  downloadUrl?: string; // Optional: URL to download a PDF of the certificate
}

// Placeholder data - replace with your actual certificates
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
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id={SECTION_IDS.CERTIFICATES}
      className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-24 bg-card"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Certificates & Achievements
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my certified skills and professional development milestones.
          </CardDescription>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants} // Stagger children
        >
          {certificatesData.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
                {cert.imageUrl && (
                  <div className="p-6 flex justify-center items-center bg-muted/30">
                    <img 
                      src={cert.imageUrl} 
                      alt={`${cert.issuer} logo`} 
                      className="h-20 w-20 object-contain rounded-md"
                      data-ai-hint={cert.imageHint || 'logo'}
                    />
                  </div>
                )}
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-semibold text-foreground mb-1">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">Issued by: {cert.issuer}</p>
                  <p className="text-xs text-muted-foreground/80">Date: {cert.date}</p>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col justify-end">
                  <div className="flex space-x-2 mt-4">
                    {cert.verifyUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <Award className="mr-2 h-4 w-4" /> Verify
                        </a>
                      </Button>
                    )}
                    {cert.downloadUrl && (
                      <Button variant="secondary" size="sm" asChild>
                        <a href={cert.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" /> Download
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

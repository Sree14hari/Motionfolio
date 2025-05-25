
"use client";

// import { motion } from 'framer-motion'; // Removed Framer Motion
import { SECTION_IDS, CONTACT_SECTION_SOCIAL_LINKS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};


export function ContactSection() {
  // Animation variants removed

  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="min-h-screen flex items-center justify-center py-16 sm:py-24 bg-background"
      // Animation props removed
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="bg-card p-6 sm:p-8 text-center">
            <div> {/* Replaced motion.div */}
              <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                Get In Touch
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Have a project in mind or just want to say hi? Feel free to reach out.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 bg-card">
            <form
              // Animation props removed
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="text" placeholder="Your Name" aria-label="Your Name" className="text-base" />
                <Input type="email" placeholder="Your Email" aria-label="Your Email" className="text-base" />
              </div>
              <Textarea placeholder="Your Message" rows={5} aria-label="Your Message" className="text-base" />
              <Button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                Send Message
              </Button>
            </form>

            <div className="mt-10 sm:mt-12 text-center"> {/* Replaced motion.div */}
              <p className="text-sm text-muted-foreground mb-4">Or connect with me on social media:</p>
              <div className="flex justify-center space-x-6">
                {CONTACT_SECTION_SOCIAL_LINKS.map((link) => {
                  const IconComponent = getIcon(link.Icon);
                  return IconComponent ? (
                    <a // Replaced motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      // Animation props removed
                      className="text-muted-foreground p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" // Added hover:text-primary and transition-colors for a basic hover effect
                      aria-label={`My ${link.name} profile`}
                    >
                      <IconComponent size={28} strokeWidth={1.5} />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

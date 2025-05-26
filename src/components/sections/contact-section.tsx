
"use client";

import { motion } from 'framer-motion';
import { SECTION_IDS, CONTACT_SECTION_SOCIAL_LINKS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { Mail } from 'lucide-react'; // Explicit import for title icon

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

export function ContactSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }, // Reduced duration
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id={SECTION_IDS.CONTACT}
      className="min-h-screen flex items-center justify-center py-16 sm:py-24 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants}>
          <Card className="max-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden border">
            <CardHeader className="bg-card p-6 sm:p-8 text-center">
              <motion.div variants={itemVariants}>
                <div className="flex justify-center items-center mb-4">
                  <Mail className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground max-w-md mx-auto">
                  Have a project in mind or just want to say hi? Feel free to reach out.
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 bg-card">
              <motion.form
                variants={itemVariants}
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()} // Prevent default form submission
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <Input type="text" placeholder="Your Name" aria-label="Your Name" className="text-base" />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Input type="email" placeholder="Your Email" aria-label="Your Email" className="text-base" />
                  </motion.div>
                </div>
                <motion.div variants={itemVariants}>
                  <Textarea placeholder="Your Message" rows={5} aria-label="Your Message" className="text-base" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group" size="lg">
                    Send Message
                    <LucideIcons.Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.form>

              <motion.div variants={itemVariants} className="mt-10 sm:mt-12 text-center">
                <p className="text-sm text-muted-foreground mb-4">Or connect with me on social media:</p>
                <div className="flex justify-center space-x-4 sm:space-x-6">
                  {CONTACT_SECTION_SOCIAL_LINKS.map((link, index) => {
                    const IconComponent = getIcon(link.Icon);
                    return IconComponent ? (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={socialIconVariants}
                        initial="hidden" // These will be controlled by the parent's stagger
                        animate="visible"
                        whileHover={{ scale: 1.2, y: -2, color: "hsl(var(--primary))" }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="text-muted-foreground p-2 rounded-full hover:text-primary"
                        aria-label={`My ${link.name} profile`}
                      >
                        <IconComponent size={28} strokeWidth={1.5} />
                      </motion.a>
                    ) : null;
                  })}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}

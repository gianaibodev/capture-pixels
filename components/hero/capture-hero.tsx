'use client';

import { siteContent } from '@/data/site-content';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function CaptureHero({ content }: { content: SiteContent }) {
  const { hero } = content;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ScrollExpandMedia
        mediaType={hero.mediaType}
        mediaSrc={hero.mediaSrc}
        posterSrc={hero.posterSrc}
        bgImageSrc={hero.bgImageSrc}
        title={hero.title}
        date={hero.subtitle}
        scrollToExpand="SCROLL TO EXPLORE"
        textBlend={true}
      >
        <div className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto py-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
             <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground drop-shadow-2xl">
               CAPTURE PIXELS
             </h3>

             <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto mt-4">
               {hero.subtitle}
             </p>
             
             <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-widest text-muted-foreground pt-4">
               {hero.locations.map((loc, i) => (
                 <span key={i} className="px-4 py-2 bg-muted/50 border border-border rounded-full hover:bg-muted transition-colors backdrop-blur-sm">
                   {loc}
                 </span>
               ))}
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-6 mt-4"
          >
             <Button 
               size="lg" 
               className="rounded-full px-8 h-12 font-medium text-lg"
               onClick={() => scrollToSection('services')}
             >
               {hero.ctaText}
             </Button>
             <Button 
               variant="outline" 
               size="lg"
               className="rounded-full px-8 h-12 font-medium text-lg"
               onClick={() => scrollToSection('testimonials')}
             >
               Testimonials
             </Button>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             id="contact"
             className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12 w-full px-4"
          >
              <div className="bg-card/80 border border-border p-6 md:p-8 rounded-3xl backdrop-blur-md hover:bg-card transition-all duration-500 group overflow-hidden">
                  <h4 className="text-foreground font-medium text-sm uppercase tracking-widest mb-6 opacity-70">Contact</h4>
                  <div className="space-y-4">
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a href={`tel:${hero.phone}`} className="text-lg md:text-2xl text-foreground hover:text-primary transition-colors font-light block">{hero.phone}</a>
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href={`mailto:${hero.email}`} className="text-lg md:text-2xl text-foreground hover:text-primary transition-colors font-light break-all block">{hero.email}</a>
                    </div>
                  </div>
              </div>
               <div className="bg-card/80 border border-border p-6 md:p-8 rounded-3xl backdrop-blur-md hover:bg-card transition-all duration-500 group">
                  <h4 className="text-foreground font-medium text-sm uppercase tracking-widest mb-6 opacity-70">Our Expertise</h4>
                   <ul className="space-y-4">
                      {content.services.map(s => (
                        <li key={s.title} className="flex items-center gap-4 text-lg md:text-xl text-foreground font-light group-hover:translate-x-2 transition-transform duration-300">
                          <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)] shrink-0" />
                          {s.title}
                        </li>
                      ))}
                   </ul>
              </div>
          </motion.div>
        </div>
      </ScrollExpandMedia>

      {/* Scroll Instruction */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-white/50 z-20 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-[0.3em] mb-2">Scroll to Discover</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </div>
  );
}

'use client';

import { siteContent } from '@/data/site-content';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function CaptureHero() {
  const { hero } = siteContent;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
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
             <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
               CAPTURE PIXELS
             </h3>
             
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-sm uppercase tracking-[0.2em] text-white/70"
             >
               Scroll down to discover
             </motion.p>

             <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto mt-4">
               {hero.subtitle}
             </p>
             
             <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-widest text-white/60 pt-4">
               {hero.locations.map((loc, i) => (
                 <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
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
               className="rounded-full px-8 h-12 bg-white text-black hover:bg-gray-200 font-medium text-lg"
               onClick={() => scrollToSection('services')}
             >
               {hero.ctaText}
             </Button>
             <Button 
               variant="outline" 
               size="lg"
               className="rounded-full px-8 h-12 border-white/30 text-white hover:bg-white/10 font-medium text-lg backdrop-blur-sm"
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
              <div className="bg-zinc-900/40 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md hover:bg-zinc-900/60 transition-all duration-500 group overflow-hidden">
                  <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6 opacity-50">Contact</h4>
                  <div className="space-y-4">
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <p className="text-sm text-white/50 mb-1">Phone</p>
                      <a href={`tel:${hero.phone}`} className="text-lg md:text-2xl text-white hover:text-blue-300 transition-colors font-light block">{hero.phone}</a>
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <p className="text-sm text-white/50 mb-1">Email</p>
                      <a href={`mailto:${hero.email}`} className="text-lg md:text-2xl text-white hover:text-blue-300 transition-colors font-light break-all block">{hero.email}</a>
                    </div>
                  </div>
              </div>
               <div className="bg-zinc-900/40 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md hover:bg-zinc-900/60 transition-all duration-500 group">
                  <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6 opacity-50">Our Expertise</h4>
                   <ul className="space-y-4">
                      {siteContent.services.map(s => (
                        <li key={s.title} className="flex items-center gap-4 text-lg md:text-xl text-white/90 font-light group-hover:translate-x-2 transition-transform duration-300">
                          <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)] shrink-0" />
                          {s.title}
                        </li>
                      ))}
                   </ul>
              </div>
          </motion.div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}

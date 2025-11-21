'use client';

import { SiteContent } from '@/data/site-content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Camera, Video, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = {
  Camera,
  Video
};

export default function ServicesSection({ content }: { content: SiteContent }) {
  const { services, hero } = content;

  return (
    <section id="services" className="py-32 bg-background relative">
       {/* Ambient Background */}
       <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-foreground">Our Expertise</h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-32 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Camera;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="h-full p-8 rounded-3xl bg-card/50 border border-border hover:border-primary/20 hover:bg-card transition-all duration-500 group cursor-pointer backdrop-blur-sm relative overflow-hidden">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 p-4 bg-muted/50 w-fit rounded-2xl border border-border group-hover:bg-muted transition-colors">
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors text-foreground">{service.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8 group-hover:text-foreground transition-colors">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      LEARN MORE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl -z-10 rounded-full" />
           <div className="bg-card/80 border border-border p-10 rounded-3xl backdrop-blur-xl">
             <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3 text-foreground">
               <MapPin className="w-6 h-6 text-primary" />
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">Available Locations</span>
             </h3>
             <div className="flex flex-wrap justify-center gap-3">
               {hero.locations.map((loc) => (
                 <span key={loc} className="px-5 py-2 bg-muted/50 border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted hover:border-primary/30 transition-all cursor-default">
                   {loc}
                 </span>
               ))}
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { siteContent } from '@/data/site-content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Camera, Video, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = {
  Camera,
  Video
};

export default function ServicesSection() {
  const { services, hero } = siteContent;

  return (
    <section id="services" className="py-32 bg-zinc-950 text-white relative">
       {/* Ambient Background */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">Our Expertise</h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
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
                <div className="h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 hover:bg-zinc-900/80 transition-all duration-500 group cursor-pointer backdrop-blur-sm relative overflow-hidden">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-200 transition-colors">{service.title}</h3>
                    <p className="text-lg text-zinc-400 leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
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
           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10 rounded-full" />
           <div className="bg-zinc-900/80 border border-white/10 p-10 rounded-3xl backdrop-blur-xl">
             <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
               <MapPin className="w-6 h-6 text-blue-400" />
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">Available Locations</span>
             </h3>
             <div className="flex flex-wrap justify-center gap-3">
               {hero.locations.map((loc) => (
                 <span key={loc} className="px-5 py-2 bg-black/50 border border-white/10 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:border-white/30 transition-all cursor-default">
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

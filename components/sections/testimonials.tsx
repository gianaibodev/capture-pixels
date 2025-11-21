'use client';

import { SiteContent } from '@/data/site-content';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TestimonialsSection({ content }: { content: SiteContent }) {
  const { testimonials } = content;

  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-primary/5 via-primary/5 to-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-foreground">
            Client Stories
          </h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/20 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group">
                <CardHeader className="flex flex-row items-center gap-4 pb-6 border-b border-border/50">
                   <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary/50 transition-all">
                      <Image 
                        src={t.avatarUrl} 
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                   </div>
                   <div>
                     <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{t.name}</p>
                     <div className="flex gap-0.5 text-yellow-500 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" className="drop-shadow-sm" />
                        ))}
                     </div>
                   </div>
                </CardHeader>
                <CardContent className="pt-8 pb-8 px-6">
                  <p className="text-muted-foreground text-lg leading-relaxed font-light">
                    {t.quote}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

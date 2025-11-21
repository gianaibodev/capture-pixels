'use client';

import { siteContent } from '@/data/site-content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const { projects } = siteContent;

  return (
    <section id="projects" className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Featured Work</h2>
            <p className="text-zinc-400 text-lg max-w-md">Selected projects showcasing our passion for storytelling.</p>
          </div>
          <div className="text-zinc-500 text-sm font-mono">
            // PORTFOLIO 2024
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors duration-500">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                   <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500" />
                   <Image 
                     src={p.imageUrl} 
                     alt={p.title} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   />
                   <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                      {p.date}
                   </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-blue-200 transition-colors">{p.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/5 text-zinc-300 px-3 py-1 rounded-full border border-white/5">
                              {tag}
                          </span>
                      ))}
                  </div>
                  <p className="text-zinc-400 line-clamp-3 font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

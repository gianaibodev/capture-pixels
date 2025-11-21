'use client';

import { SiteContent } from '@/data/site-content';
import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel';
import { motion } from 'framer-motion';

export default function CarouselSection({ content }: { content: SiteContent }) {
  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-foreground">Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of stunning moments captured through our lens
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative h-[500px] md:h-[600px] w-full overflow-visible">
            <ThreeDPhotoCarousel images={content.carouselImages} />
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Facebook, ArrowUpRight } from 'lucide-react';

export default function FacebookSection() {
  return (
    <section className="py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-card/50 backdrop-blur-sm border border-border p-8 md:p-12 rounded-3xl shadow-xl">
          
          <div className="space-y-6 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-primary font-medium mb-2">
                <Facebook className="w-5 h-5" />
                <span>STAY CONNECTED</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                Follow Our Latest Work
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We post our freshest shots, behind-the-scenes content, and special announcements on Facebook first. Join our community and never miss a moment.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a 
              href="https://www.facebook.com/captureyourpixels" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <Button 
                size="lg" 
                className="h-16 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
              >
                Visit Facebook Page
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

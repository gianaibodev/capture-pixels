'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past 100vh (hero section)
      if (window.scrollY > window.innerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        >
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div 
              className="font-bold text-xl tracking-tighter cursor-pointer text-foreground"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              CAPTURE PIXELS
            </div>
            
            <nav className="hidden md:flex gap-8 items-center">
              {['Services', 'Projects', 'Clients', 'Testimonials'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button 
                size="sm" 
                onClick={() => scrollToSection('contact')}
                className="rounded-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

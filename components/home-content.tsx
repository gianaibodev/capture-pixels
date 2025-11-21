'use client';

import { useState, useEffect } from 'react';
import { SiteContent } from '@/data/site-content';
import { LoadingScreen } from '@/components/loading-screen';
import CaptureHero from '@/components/hero/capture-hero';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import ServicesSection from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import ClientsSection from '@/components/sections/clients';
import TestimonialsSection from '@/components/sections/testimonials';
import FacebookSection from '@/components/sections/facebook-cta';
import { CustomCursor } from '@/components/custom-cursor';

interface HomeContentProps {
  content: SiteContent;
}

export function HomeContent({ content }: HomeContentProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Collect all image URLs to preload
  const imageUrls: string[] = [
    content.hero.bgImageSrc,
    content.hero.posterSrc || '',
    ...content.projects.map(p => p.imageUrl),
    ...content.clients.map(c => c.src),
    ...content.testimonials.map(t => t.avatarUrl),
  ].filter(Boolean) as string[];

  return (
    <>
      {isLoading && (
        <LoadingScreen 
          images={imageUrls} 
          onComplete={() => setIsLoading(false)} 
        />
      )}
      
      {!isLoading && (
        <main className="flex min-h-screen flex-col bg-background text-foreground cursor-none">
          <CustomCursor />
          <SiteHeader hero={content.hero} />
          <CaptureHero content={content} />
          <ServicesSection content={content} />
          <ProjectsSection content={content} />
          <ClientsSection content={content} />
          <TestimonialsSection content={content} />
          <FacebookSection />
          <SiteFooter />
        </main>
      )}
    </>
  );
}


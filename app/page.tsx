import CaptureHero from '@/components/hero/capture-hero';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import ServicesSection from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import ClientsSection from '@/components/sections/clients';
import TestimonialsSection from '@/components/sections/testimonials';
import FacebookSection from '@/components/sections/facebook-cta';
import { CustomCursor } from '@/components/custom-cursor';
import { getSiteContent } from '@/actions/content';

// Force dynamic rendering so we always get the latest content from Supabase
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Always fetch fresh data

export default async function Home() {
  const content = await getSiteContent();
  
  return (
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
  );
}

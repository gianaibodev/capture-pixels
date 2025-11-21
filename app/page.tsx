import CaptureHero from '@/components/hero/capture-hero';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import ServicesSection from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import ClientsSection from '@/components/sections/clients';
import TestimonialsSection from '@/components/sections/testimonials';
import CarouselSection from '@/components/sections/carousel';
import FacebookSection from '@/components/sections/facebook-cta';
import { CustomCursor } from '@/components/custom-cursor';
import { getSiteContent } from '@/actions/content';
import { HomeContent } from '@/components/home-content';

// Force dynamic rendering so we always get the latest content from Supabase
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Always fetch fresh data

export default async function Home() {
  const content = await getSiteContent();
  
  return <HomeContent content={content} />;
}

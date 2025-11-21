import { getSiteContent } from '@/actions/content';
import { HomeContent } from '@/components/home-content';

// Force dynamic rendering so we always get the latest content from Supabase
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Always fetch fresh data

export default async function Home() {
  const content = await getSiteContent();
  
  return <HomeContent content={content} />;
}

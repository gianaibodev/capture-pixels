'use server';

import { supabase } from '@/lib/supabase';
import { SiteContent, siteContent as defaultContent } from '@/data/site-content';
import { revalidatePath } from 'next/cache';

// We'll assume row ID 1 is our single source of truth
const CONTENT_ID = 1;

export async function getSiteContent(): Promise<SiteContent> {
  const { data, error } = await supabase
    .from('site_content')
    .select('content')
    .eq('id', CONTENT_ID)
    .single();

  if (error || !data) {
    // Fallback to local default content if DB is empty/error
    console.warn('Supabase fetch error or empty, using default:', error);
    return defaultContent;
  }

  return data.content as SiteContent;
}

export async function updateSiteContent(newContent: SiteContent) {
  // Check if row exists
  const { data: existing } = await supabase
    .from('site_content')
    .select('id')
    .eq('id', CONTENT_ID)
    .single();

  let error;
  if (!existing) {
    // Insert first row
    const { error: insertError } = await supabase
      .from('site_content')
      .insert([{ id: CONTENT_ID, content: newContent }]);
    error = insertError;
  } else {
    // Update existing
    const { error: updateError } = await supabase
      .from('site_content')
      .update({ content: newContent, updated_at: new Date().toISOString() })
      .eq('id', CONTENT_ID);
    error = updateError;
  }

  if (error) {
    throw new Error(`Failed to update content: ${error.message}`);
  }

  revalidatePath('/'); // Revalidate home page
}


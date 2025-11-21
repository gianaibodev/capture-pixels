'use client';

import { useState, useEffect } from 'react';
import { SiteContent } from '@/data/site-content';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HeroEditor from './hero-editor';
import TestimonialsEditor from './testimonials-editor';
import ProjectsEditor from './projects-editor';
import ClientsEditor from './clients-editor';
import CarouselEditor from './carousel-editor';
import { Button } from '@/components/ui/button';
import { Loader2, Save, CheckCircle2, AlertCircle } from 'lucide-react';
import { updateSiteContent } from '@/actions/content';

export default function AdminDashboard({ initialContent }: { initialContent: SiteContent }) {
  const [content, setContent] = useState(initialContent);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleUpdate = (key: keyof SiteContent, data: any) => {
    const newContent = { ...content, [key]: data };
    setContent(newContent);
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    setMessageType('');
    try {
      await updateSiteContent(content);
      setMessage('Changes saved successfully! The site will update shortly.');
      setMessageType('success');
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
    } catch (error: any) {
      console.error('Save error:', error);
      setMessage(error?.message || 'Failed to save changes. Please check your Supabase connection and ensure the table exists.');
      setMessageType('error');
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 8000);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Sticky Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card p-6 rounded-lg border shadow-sm sticky top-16 z-40 backdrop-blur-sm">
        <div>
          <h2 className="text-xl font-bold text-foreground">Content Editor</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Make changes below and click Save to update the live site. Changes are saved to Supabase.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {message && (
            <div className={`flex items-center gap-2 text-sm font-medium ${
              messageType === 'error' ? 'text-destructive' : 'text-green-600 dark:text-green-400'
            }`}>
              {messageType === 'error' ? (
                <AlertCircle className="w-4 h-4" />
              ) : (
                <CheckCircle2 className="w-4 h-4" />
              )}
              <span>{message}</span>
            </div>
          )}
          <Button onClick={handleSave} disabled={saving} className="min-w-[140px]">
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto p-1 bg-muted/50 rounded-lg h-auto flex-wrap">
          <TabsTrigger value="hero" className="px-4 py-2">Hero & Info</TabsTrigger>
          <TabsTrigger value="testimonials" className="px-4 py-2">Testimonials</TabsTrigger>
          <TabsTrigger value="projects" className="px-4 py-2">Projects</TabsTrigger>
          <TabsTrigger value="clients" className="px-4 py-2">Clients Sphere</TabsTrigger>
          <TabsTrigger value="carousel" className="px-4 py-2">3D Carousel</TabsTrigger>
        </TabsList>
        
        <div className="mt-6">
          <TabsContent value="hero" className="mt-0">
            <HeroEditor data={content.hero} onChange={(d) => handleUpdate('hero', d)} />
          </TabsContent>
          <TabsContent value="testimonials" className="mt-0">
            <TestimonialsEditor data={content.testimonials} onChange={(d) => handleUpdate('testimonials', d)} />
          </TabsContent>
          <TabsContent value="projects" className="mt-0">
            <ProjectsEditor data={content.projects} onChange={(d) => handleUpdate('projects', d)} />
          </TabsContent>
          <TabsContent value="clients" className="mt-0">
            <ClientsEditor data={content.clients} onChange={(d) => handleUpdate('clients', d)} />
          </TabsContent>
          <TabsContent value="carousel" className="mt-0">
            <CarouselEditor data={content.carouselImages} onChange={(d) => handleUpdate('carouselImages', d)} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

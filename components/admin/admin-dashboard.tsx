'use client';

import { useState, useEffect } from 'react';
import { SiteContent } from '@/data/site-content';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HeroEditor from './hero-editor';
import TestimonialsEditor from './testimonials-editor';
import ProjectsEditor from './projects-editor';
import ClientsEditor from './clients-editor';
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
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card p-6 rounded-lg border shadow-sm sticky top-20 z-40">
        <div>
          <h2 className="text-lg font-bold text-foreground">Content Editor</h2>
          <p className="text-sm text-muted-foreground">
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
          <Button onClick={handleSave} disabled={saving} className="min-w-[120px]">
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

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto p-1 bg-muted/50 rounded-lg">
          <TabsTrigger value="hero">Hero & Info</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="clients">Clients Sphere</TabsTrigger>
        </TabsList>
        <TabsContent value="hero" className="mt-6">
          <HeroEditor data={content.hero} onChange={(d) => handleUpdate('hero', d)} />
        </TabsContent>
        <TabsContent value="testimonials" className="mt-6">
          <TestimonialsEditor data={content.testimonials} onChange={(d) => handleUpdate('testimonials', d)} />
        </TabsContent>
         <TabsContent value="projects" className="mt-6">
          <ProjectsEditor data={content.projects} onChange={(d) => handleUpdate('projects', d)} />
        </TabsContent>
        <TabsContent value="clients" className="mt-6">
          <ClientsEditor data={content.clients} onChange={(d) => handleUpdate('clients', d)} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

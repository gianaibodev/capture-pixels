'use client';

import { useState, useEffect } from 'react';
import { SiteContent } from '@/data/site-content';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HeroEditor from './hero-editor';
import TestimonialsEditor from './testimonials-editor';
import ProjectsEditor from './projects-editor';
import ClientsEditor from './clients-editor';
import { Button } from '@/components/ui/button';
import { Loader2, Save } from 'lucide-react';
import { updateSiteContent } from '@/actions/content';

export default function AdminDashboard({ initialContent }: { initialContent: SiteContent }) {
  const [content, setContent] = useState(initialContent);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdate = (key: keyof SiteContent, data: any) => {
    const newContent = { ...content, [key]: data };
    setContent(newContent);
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      await updateSiteContent(content);
      setMessage('Changes saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error(error);
      setMessage('Failed to save changes.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card p-6 rounded-lg border shadow-sm sticky top-20 z-40">
        <div>
          <h2 className="text-lg font-bold">Content Editor</h2>
          <p className="text-sm text-muted-foreground">
            Make changes below and click Save to update the live site.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {message && (
            <span className={`text-sm font-medium ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </span>
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

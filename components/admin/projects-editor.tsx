import { Project } from '@/data/site-content';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, Plus, GripVertical, X } from 'lucide-react';

export default function ProjectsEditor({ data, onChange }: { data: Project[], onChange: (d: Project[]) => void }) {
  
  const addProject = () => {
    const newP: Project = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Description...',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      date: '2024',
      tags: ['Wedding']
    };
    onChange([...data, newP]);
  };

  const removeProject = (id: string) => {
    onChange(data.filter(p => p.id !== id));
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    onChange(data.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const addGalleryImage = (id: string) => {
    const project = data.find(p => p.id === id);
    if (project) {
      const currentImages = project.galleryImages || [];
      updateProject(id, 'galleryImages', [...currentImages, '']);
    }
  };

  const removeGalleryImage = (projectId: string, imageIndex: number) => {
    const project = data.find(p => p.id === projectId);
    if (project && project.galleryImages) {
      const updatedImages = project.galleryImages.filter((_, idx) => idx !== imageIndex);
      updateProject(projectId, 'galleryImages', updatedImages.length > 0 ? updatedImages : undefined);
    }
  };

  const updateGalleryImage = (projectId: string, imageIndex: number, value: string) => {
    const project = data.find(p => p.id === projectId);
    if (project) {
      const currentImages = project.galleryImages || [];
      const updatedImages = [...currentImages];
      updatedImages[imageIndex] = value;
      updateProject(projectId, 'galleryImages', updatedImages);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Projects List</h3>
        <Button onClick={addProject} size="sm"><Plus className="w-4 h-4 mr-2" /> Add Project</Button>
      </div>

      <div className="grid gap-4">
        {data.map((p) => (
          <Card key={p.id}>
            <CardContent className="p-4 flex gap-4 items-start">
              <div className="mt-2 text-muted-foreground cursor-grab">
                <GripVertical className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Project Title</Label>
                      <Input value={p.title} onChange={(e) => updateProject(p.id, 'title', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Input value={p.date} onChange={(e) => updateProject(p.id, 'date', e.target.value)} placeholder="Dec 2023" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <Label>Location (optional)</Label>
                    <Input 
                      value={p.location || ''} 
                      onChange={(e) => updateProject(p.id, 'location', e.target.value || undefined)} 
                      placeholder="Boracay, Philippines"
                    />
                 </div>
                 <div className="space-y-2">
                    <Label>Main Image URL</Label>
                    <Input value={p.imageUrl} onChange={(e) => updateProject(p.id, 'imageUrl', e.target.value)} />
                 </div>
                 <div className="space-y-2">
                    <Label>Short Description</Label>
                    <Textarea 
                      value={p.description} 
                      onChange={(e) => updateProject(p.id, 'description', e.target.value)} 
                      rows={3}
                      placeholder="Brief description shown on card..."
                    />
                 </div>
                 <div className="space-y-2">
                    <Label>Full Description (optional - shown in detail modal)</Label>
                    <Textarea 
                      value={p.fullDescription || ''} 
                      onChange={(e) => updateProject(p.id, 'fullDescription', e.target.value || undefined)} 
                      rows={5}
                      placeholder="Extended description with more details..."
                    />
                 </div>
                 <div className="space-y-2">
                    <Label>Tags (comma separated)</Label>
                    <Input 
                      value={p.tags.join(', ')} 
                      onChange={(e) => updateProject(p.id, 'tags', e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean))} 
                      placeholder="Wedding, Photography, Videography"
                    />
                 </div>
                 <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label>Gallery Images (optional - additional images for detail view)</Label>
                      <Button 
                        type="button" 
                        size="sm" 
                        variant="outline"
                        onClick={() => addGalleryImage(p.id)}
                      >
                        <Plus className="w-4 h-4 mr-2" /> Add Image
                      </Button>
                    </div>
                    {p.galleryImages && p.galleryImages.length > 0 && (
                      <div className="space-y-2 mt-2">
                        {p.galleryImages.map((img, idx) => (
                          <div key={idx} className="flex gap-2 items-center">
                            <Input 
                              value={img} 
                              onChange={(e) => updateGalleryImage(p.id, idx, e.target.value)} 
                              placeholder={`Gallery image ${idx + 1} URL`}
                              className="flex-1"
                            />
                            <Button 
                              type="button"
                              variant="ghost" 
                              size="icon"
                              onClick={() => removeGalleryImage(p.id, idx)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                 </div>
              </div>
              <Button variant="destructive" size="icon" onClick={() => removeProject(p.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


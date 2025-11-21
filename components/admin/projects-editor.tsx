import { Project } from '@/data/site-content';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, Plus, GripVertical } from 'lucide-react';

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
                      <Label>Date / Location</Label>
                      <Input value={p.date} onChange={(e) => updateProject(p.id, 'date', e.target.value)} />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <Label>Image URL</Label>
                    <Input value={p.imageUrl} onChange={(e) => updateProject(p.id, 'imageUrl', e.target.value)} />
                 </div>
                 <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea value={p.description} onChange={(e) => updateProject(p.id, 'description', e.target.value)} />
                 </div>
                 <div className="space-y-2">
                    <Label>Tags (comma separated)</Label>
                    <Input 
                      value={p.tags.join(', ')} 
                      onChange={(e) => updateProject(p.id, 'tags', e.target.value.split(',').map((s: string) => s.trim()))} 
                    />
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


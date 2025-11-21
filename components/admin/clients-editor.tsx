import { ClientImage } from '@/data/site-content';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, Plus, GripVertical } from 'lucide-react';
import Image from 'next/image';

export default function ClientsEditor({ data, onChange }: { data: ClientImage[], onChange: (d: ClientImage[]) => void }) {
  
  const addImage = () => {
    const newImg: ClientImage = {
      id: `img-${Date.now()}`,
      src: 'https://images.unsplash.com/photo-1758178309498-036c3d7d73b3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987',
      alt: 'New Client Image',
      title: 'Client Photo',
      description: 'Description'
    };
    // Add to beginning so it's easier to see
    onChange([newImg, ...data]);
  };

  const removeImage = (id: string) => {
    onChange(data.filter(img => img.id !== id));
  };

  const updateImage = (id: string, field: keyof ClientImage, value: string) => {
    onChange(data.map(img => img.id === id ? { ...img, [field]: value } : img));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Clients Sphere Images</h3>
          <p className="text-sm text-muted-foreground">Manage images shown in the 3D sphere. Add direct image URLs.</p>
        </div>
        <Button onClick={addImage} size="sm"><Plus className="w-4 h-4 mr-2" /> Add Image</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((img) => (
          <Card key={img.id} className="overflow-hidden">
            <div className="relative h-32 w-full bg-muted">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover"
              />
              <Button 
                variant="destructive" 
                size="icon" 
                className="absolute top-2 right-2 h-6 w-6" 
                onClick={() => removeImage(img.id)}
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
            <CardContent className="p-3 space-y-2">
               <div className="space-y-1">
                  <Label className="text-xs">Image URL</Label>
                  <Input 
                    value={img.src} 
                    onChange={(e) => updateImage(img.id, 'src', e.target.value)} 
                    className="h-8 text-xs"
                  />
               </div>
               <div className="space-y-1">
                  <Label className="text-xs">Title</Label>
                  <Input 
                    value={img.title || ''} 
                    onChange={(e) => updateImage(img.id, 'title', e.target.value)} 
                    className="h-8 text-xs"
                  />
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


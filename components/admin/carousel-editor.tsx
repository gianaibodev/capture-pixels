'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, Plus } from 'lucide-react';
import Image from 'next/image';

export default function CarouselEditor({ data, onChange }: { data: string[], onChange: (d: string[]) => void }) {
  
  const addImage = () => {
    onChange([...data, 'https://images.unsplash.com/photo-1758178309498-036c3d7d73b3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987']);
  };

  const removeImage = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateImage = (index: number, url: string) => {
    const newData = [...data];
    newData[index] = url;
    onChange(newData);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">3D Carousel Images</h3>
          <p className="text-sm text-muted-foreground">Add image URLs for the 3D carousel gallery section.</p>
        </div>
        <Button onClick={addImage} size="sm"><Plus className="w-4 h-4 mr-2" /> Add Image</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((url, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-32 w-full bg-muted">
              <Image 
                src={url} 
                alt={`Carousel ${index + 1}`} 
                fill 
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Invalid+URL';
                }}
              />
              <Button 
                variant="destructive" 
                size="icon" 
                className="absolute top-2 right-2 h-6 w-6" 
                onClick={() => removeImage(index)}
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
            <CardContent className="p-3">
               <div className="space-y-1">
                  <Label className="text-xs">Image URL</Label>
                  <Input 
                    value={url} 
                    onChange={(e) => updateImage(index, e.target.value)} 
                    className="h-8 text-xs"
                    placeholder="https://..."
                  />
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


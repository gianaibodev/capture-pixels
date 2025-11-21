import { Testimonial } from '@/data/site-content';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, Plus, GripVertical } from 'lucide-react';

export default function TestimonialsEditor({ data, onChange }: { data: Testimonial[], onChange: (d: Testimonial[]) => void }) {
  
  const addTestimonial = () => {
    const newT: Testimonial = {
      id: Date.now().toString(),
      name: 'New Client',
      quote: 'Testimonial text here',
      avatarUrl: 'https://github.com/shadcn.png'
    };
    onChange([...data, newT]);
  };

  const removeTestimonial = (id: string) => {
    onChange(data.filter(t => t.id !== id));
  };

  const updateTestimonial = (id: string, field: keyof Testimonial, value: string) => {
    onChange(data.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Testimonials List</h3>
        <Button onClick={addTestimonial} size="sm"><Plus className="w-4 h-4 mr-2" /> Add Testimonial</Button>
      </div>

      <div className="grid gap-4">
        {data.map((t) => (
          <Card key={t.id}>
            <CardContent className="p-4 flex gap-4 items-start">
              <div className="mt-2 text-muted-foreground cursor-grab">
                <GripVertical className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Client Name</Label>
                      <Input value={t.name} onChange={(e) => updateTestimonial(t.id, 'name', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Avatar URL</Label>
                      <Input value={t.avatarUrl} onChange={(e) => updateTestimonial(t.id, 'avatarUrl', e.target.value)} />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <Label>Quote</Label>
                    <Textarea value={t.quote} onChange={(e) => updateTestimonial(t.id, 'quote', e.target.value)} />
                 </div>
              </div>
              <Button variant="destructive" size="icon" onClick={() => removeTestimonial(t.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


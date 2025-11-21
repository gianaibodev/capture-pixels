import { HeroContent } from '@/data/site-content';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function HeroEditor({ data, onChange }: { data: HeroContent, onChange: (d: HeroContent) => void }) {
  const update = (key: keyof HeroContent, value: any) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Media Configuration</CardTitle>
          <CardDescription>Configure the main hero background and media.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Media Type</Label>
              <Select value={data.mediaType} onValueChange={(v) => update('mediaType', v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="image">Image</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="space-y-2">
              <Label>Background Image URL</Label>
              <Input value={data.bgImageSrc} onChange={(e) => update('bgImageSrc', e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Media Source URL</Label>
            <Input value={data.mediaSrc} onChange={(e) => update('mediaSrc', e.target.value)} />
            <p className="text-xs text-muted-foreground">Paste YouTube URL (e.g. https://youtube.com/watch?v=...) or direct image/video link.</p>
          </div>
          
          {data.mediaType === 'video' && (
             <div className="space-y-2">
              <Label>Poster Image URL (Optional)</Label>
              <Input value={data.posterSrc || ''} onChange={(e) => update('posterSrc', e.target.value)} />
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Text & Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-2">
              <Label>Title</Label>
              <Input value={data.title} onChange={(e) => update('title', e.target.value)} />
            </div>
             <div className="space-y-2">
              <Label>Subtitle / Motto</Label>
              <Input value={data.subtitle} onChange={(e) => update('subtitle', e.target.value)} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label>Phone</Label>
               <Input value={data.phone} onChange={(e) => update('phone', e.target.value)} />
             </div>
             <div className="space-y-2">
               <Label>Email</Label>
               <Input value={data.email} onChange={(e) => update('email', e.target.value)} />
             </div>
          </div>

          <div className="space-y-2">
               <Label>Locations (comma separated)</Label>
               <Input 
                 value={data.locations.join(', ')} 
                 onChange={(e) => update('locations', e.target.value.split(',').map(s => s.trim()))} 
               />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label>CTA Text</Label>
               <Input value={data.ctaText} onChange={(e) => update('ctaText', e.target.value)} />
             </div>
             <div className="space-y-2">
               <Label>CTA Link</Label>
               <Input value={data.ctaLink} onChange={(e) => update('ctaLink', e.target.value)} />
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


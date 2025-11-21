'use client';

import { HeroContent } from '@/data/site-content';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hero?: HeroContent;
}

export function ContactModal({ open, onOpenChange, hero }: ContactModalProps) {
  // Fallback to static content if hero not provided
  const contactInfo = hero || require('@/data/site-content').siteContent.hero;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Your Session</DialogTitle>
          <DialogDescription>
            Get in touch with us to capture your special moments. We're here to help!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          {/* Contact Methods */}
          <div className="space-y-4">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {contactInfo.phone}
                </p>
              </div>
            </a>

            <a 
              href={`mailto:${contactInfo.email}?subject=Booking Inquiry`}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                  {contactInfo.email}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-muted/50">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Service Areas</p>
                <div className="flex flex-wrap gap-2">
                  {contactInfo.locations.slice(0, 4).map((loc) => (
                    <span key={loc} className="text-xs px-2 py-1 bg-background rounded border border-border">
                      {loc}
                    </span>
                  ))}
                  {contactInfo.locations.length > 4 && (
                    <span className="text-xs px-2 py-1 text-muted-foreground">
                      +{contactInfo.locations.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button 
              asChild
              className="flex-1"
            >
              <a href={`tel:${contactInfo.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button 
              variant="outline"
              asChild
              className="flex-1"
            >
              <a href={`mailto:${contactInfo.email}?subject=Booking Inquiry`}>
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

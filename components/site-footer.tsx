'use client';

import Link from 'next/link';

export function SiteFooter() {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full py-8 px-4 border-t bg-background">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          <p>© {new Date().getFullYear()} Capture Pixels. Memories that lasts a lifetime.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium">
             <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:underline">Services</a>
             <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:underline">Projects</a>
             <a href="#clients" onClick={(e) => scrollToSection(e, 'clients')} className="hover:underline">Clients</a>
             <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="hover:underline">Testimonials</a>
        </div>
        <div>
            <Link href="/admin" className="text-xs text-muted-foreground hover:text-foreground">
                Admin Login
            </Link>
        </div>
      </div>
    </footer>
  );
}

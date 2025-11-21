'use client';

import ClientsSphere from '@/components/clients/clients-sphere';

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-4">All My Clients</h2>
        <p className="text-center text-muted-foreground mb-8 text-lg">Explore our gallery of happy moments</p>

        <div className="w-full max-w-6xl mx-auto min-h-[600px] relative flex items-center justify-center">
            <ClientsSphere />
            <div className="absolute bottom-4 w-full text-center text-sm text-muted-foreground pointer-events-none">
                <p>Drag to rotate • Click to view details</p>
            </div>
        </div>
      </div>
    </section>
  );
}


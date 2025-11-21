'use client';

import { ClientImage } from '@/data/site-content';
import SphereImageGrid from '@/components/ui/img-sphere';
import { useEffect, useState } from 'react';

export default function ClientsSphere({ images }: { images: ClientImage[] }) {
  const [size, setSize] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize(400);
      } else {
        setSize(800);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-12 overflow-hidden">
       <SphereImageGrid
         images={images}
         containerSize={size}
         sphereRadius={size / 2.2}
         autoRotate={true}
         dragSensitivity={0.8}
         className="mx-auto"
       />
    </div>
  );
}

'use client';

import { siteContent } from '@/data/site-content';
import SphereImageGrid from '@/components/ui/img-sphere';
import { useEffect, useState } from 'react';

export default function ClientsSphere() {
  const { clients } = siteContent;
  const [size, setSize] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize(340);
      } else {
        setSize(600);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-12 overflow-hidden">
       <SphereImageGrid
         images={clients}
         containerSize={size}
         sphereRadius={size / 2.5}
         autoRotate={true}
         dragSensitivity={0.8}
         className="mx-auto"
       />
    </div>
  );
}


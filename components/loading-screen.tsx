'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';
import Image from 'next/image';

interface LoadingScreenProps {
  images: string[];
  onComplete: () => void;
}

export function LoadingScreen({ images, onComplete }: LoadingScreenProps) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload all images
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => {
            setLoadedCount((prev) => {
              const newCount = prev + 1;
              setProgress((newCount / images.length) * 100);
              resolve();
              return newCount;
            });
          };
          img.onerror = () => {
            setLoadedCount((prev) => {
              const newCount = prev + 1;
              setProgress((newCount / images.length) * 100);
              resolve();
              return newCount;
            });
          };
          img.src = src;
        });
      });

      await Promise.all(promises);
      
      // Small delay for smooth transition
      setTimeout(() => {
        onComplete();
      }, 300);
    };

    preloadImages();
  }, [images, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
      >
        {/* Animated Camera Icon */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <div className="relative">
            <Camera className="w-20 h-20 text-primary" />
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold tracking-tighter mb-2 text-foreground"
        >
          CAPTURE PIXELS
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground mb-8 text-sm uppercase tracking-widest"
        >
          Memories that lasts a lifetime
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full bg-primary rounded-full"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          Loading gallery... {Math.round(progress)}%
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}


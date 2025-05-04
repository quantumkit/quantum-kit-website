'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Loader } from '@/components/ui/loader';

// Dynamically import the HeroScene component to prevent SSR issues with Three.js
const HeroScene = dynamic(() => import('./hero-scene'), {
  ssr: false,
  loading: () => <Loader />,
});

export default function HeroSceneWrapper() {
  return (
    <div className="h-[400px] lg:h-[500px] relative">
      <Suspense fallback={<Loader />}>
        <HeroScene />
      </Suspense>
    </div>
  );
}

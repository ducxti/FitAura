'use client';

import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';
import { useEffect, ReactNode } from 'react';

// Ініціалізація GrowthBook instance
const gb = new GrowthBook({
  apiHost: 'https://cdn.growthbook.io',
  clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY || '',
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    console.log('Viewed Experiment', {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

interface GrowthBookClientProviderProps {
  children: ReactNode;
}

export function GrowthBookClientProvider({ 
  children 
}: GrowthBookClientProviderProps) {
  useEffect(() => {
    // Завантажити features при mount
    gb.loadFeatures();
  }, []);

  return <GrowthBookProvider growthbook={gb}>{children}</GrowthBookProvider>;
}
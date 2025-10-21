'use client';

import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';
import { useEffect } from 'react';

// Створюємо GrowthBook instance
const gb = new GrowthBook({
  apiHost: 'https://cdn.growthbook.io',
  clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY || '',
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    // Відправляємо події в analytics (Google Analytics, Mixpanel, etc.)
    console.log('Experiment viewed:', {
      experimentId: experiment.key,
      variationId: result.value
    });
    
    // Приклад для Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'experiment_viewed', {
        experiment_id: experiment.key,
        variation_id: result.value
      });
    }
  }
});

export function GrowthBookClientProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  useEffect(() => {
    // Завантажуємо features при mount
    const loadFeatures = async () => {
      try {
        await gb.loadFeatures({ autoRefresh: true });
        console.log('GrowthBook features loaded successfully');
      } catch (error) {
        console.warn('Failed to load GrowthBook features:', error);
      }
    };
    
    loadFeatures();
    
    // Cleanup
    return () => {
      gb.destroy();
    };
  }, []);

  return (
    <GrowthBookProvider growthbook={gb}>
      {children}
    </GrowthBookProvider>
  );
}

// Export для використання в Client Components
export { gb };
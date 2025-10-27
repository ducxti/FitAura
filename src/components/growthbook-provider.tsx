'use client';

import { GrowthBook } from '@growthbook/growthbook';
import { GrowthBookProvider } from '@growthbook/growthbook-react';
import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  features: unknown;
}

export default function ClientGrowthBookProvider({ children, features }: Props) {
  const [gb] = useState(() => {
    const growthbook = new GrowthBook({
      apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST || 'https://cdn.growthbook.io',
      clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
      
      trackingCallback: (experiment, result) => {
        const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
        const agentUrl = process.env.NEXT_PUBLIC_AI_AGENT_URL;
        
        if (clientId && agentUrl) {
          const userId = getUserId();
          
          fetch(`${agentUrl}/api/track/experiment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              client_id: clientId,
              user_id: userId,
              experiment_key: experiment.key,
              variant: result.value,
              timestamp: new Date().toISOString()
            })
          }).catch(err => console.error('❌ Tracking error:', err));
          
          console.log('📊 Experiment tracked:', { experiment: experiment.key, variant: result.value, userId });
        }
      }
    });
    
    growthbook.setFeatures(features);
    return growthbook;
  });

  useEffect(() => {
    gb.setAttributes({
      id: getUserId(),
      url: typeof window !== 'undefined' ? window.location.href : '',
    });
  }, [gb]);

  return (
    <GrowthBookProvider growthbook={gb}>
      {children}
    </GrowthBookProvider>
  );
}

function getUserId(): string {
  const COOKIE_NAME = 'gb_user_id';
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split('; ');
    const userCookie = cookies.find(row => row.startsWith(`${COOKIE_NAME}=`));
    if (userCookie) return userCookie.split('=')[1];
    
    const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    document.cookie = `${COOKIE_NAME}=${newUserId}; max-age=${365 * 24 * 60 * 60}; path=/; SameSite=Lax`;
    return newUserId;
  }
  return `user_${Date.now()}`;
}
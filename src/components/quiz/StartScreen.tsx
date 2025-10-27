'use client';

import { useFeatureValue } from '@growthbook/growthbook-react';

export default function StartScreen({ onStart }: { onStart: () => void }) {
  // Просто useFeatureValue - БЕЗ useGrowthBook()!
  const buttonColor = useFeatureValue('button-color-test', 'blue');
  
  const buttonStyles = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    red: 'bg-red-600 hover:bg-red-700',
    green: 'bg-green-600 hover:bg-green-700'
  };

  const handleClick = () => {
    // 📊 TRACK CONVERSION
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const agentUrl = process.env.NEXT_PUBLIC_AI_AGENT_URL;
    
    if (clientId && agentUrl) {
      const userId = getUserId();
      
      fetch(`${agentUrl}/api/track/conversion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          user_id: userId,
          experiment_key: 'button-color-test',
          timestamp: new Date().toISOString()
        })
      }).catch(err => console.error('❌ Tracking error:', err));
      
      console.log('✅ Conversion tracked:', { userId, buttonColor });
    }

    onStart();
  };

  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to FitAura</h1>
      <p className="text-lg text-gray-600">
        Discover your personalized fitness journey
      </p>
      
      <button
        onClick={handleClick}
        className={`${buttonStyles[buttonColor as keyof typeof buttonStyles] || buttonStyles.blue} text-white px-8 py-4 text-lg rounded-lg transition-colors`}
      >
        Begin My Assessment
      </button>
      
      {/* DEBUG */}
      {process.env.NODE_ENV === 'development' && (
        <p className="text-xs text-gray-400 mt-2">
          Current variant: {buttonColor}
        </p>
      )}
    </div>
  );
}

// Helper: User ID з cookies
function getUserId(): string {
  const COOKIE_NAME = 'gb_user_id';
  
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split('; ');
    const userCookie = cookies.find(row => row.startsWith(`${COOKIE_NAME}=`));
    
    if (userCookie) {
      return userCookie.split('=')[1];
    }
    
    const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    document.cookie = `${COOKIE_NAME}=${newUserId}; max-age=${365 * 24 * 60 * 60}; path=/; SameSite=Lax`;
    return newUserId;
  }
  
  return `user_${Date.now()}`;
}
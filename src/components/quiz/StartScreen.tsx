'use client';

export default function StartScreen({ onContinue }: { onContinue: () => void }) {
  const handleClick = () => {
    onContinue();
  };

  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to FitAura</h1>
      <p className="text-lg text-gray-600">
        Discover your personalized fitness journey
      </p>

      <button
        onClick={handleClick}
        data-gb-id="start-assessment-cta"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg transition-colors"
      >
        Begin My Assessment
      </button>
    </div>
  );
}

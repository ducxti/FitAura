'use client'

import React from 'react'

interface GenderScreenProps {
  onGenderSelect: (gender: string) => void;
  setGender: (gender: string) => void;
}

export default function GenderScreen({ onGenderSelect, setGender }: GenderScreenProps) {
  const handleSelectGender = (gender: string) => {
    setGender(gender)
    onGenderSelect(gender)
  }

  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-4xl">👤</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
        What is Your Gender?
      </h1>

      <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
        This helps us personalize your <span className="text-green-500 font-medium">weight loss journey</span>
      </p>

      <div className="w-full max-w-md mx-auto mt-8">
        <div className="grid grid-cols-2 gap-4">
          {['Male', 'Female'].map((gender) => (
            <div
              key={gender}
              className="p-6 cursor-pointer border-2 hover:border-green-500 hover:bg-green-50 transition-colors flex flex-col items-center rounded-lg"
              onClick={() => handleSelectGender(gender)}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <span className="text-2xl">{gender === 'Male' ? '👨' : '👩'}</span>
              </div>
              <h3 className="font-medium text-lg">{gender}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
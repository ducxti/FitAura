'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface HeightScreenProps {
  onSubmit: (feet: number, inches: number) => void;
  setHeight: (heightData: { feet: number; inches: number }) => void;
}

export default function HeightScreen({ onSubmit, setHeight }: HeightScreenProps) {
  const [feet, setFeet] = useState<number>(5)
  const [inches, setInches] = useState<number>(0)

  const handleContinue = () => {
    setHeight({ feet, inches })
    onSubmit(feet, inches)
  }

  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-4xl">📏</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
        What is Your Height?
      </h1>

      <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
        This helps us calculate your <span className="text-green-500 font-medium">BMI</span>
      </p>

      <div className="w-full max-w-md mx-auto mt-8">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6 grid grid-cols-2 gap-4">
          <div>
            <label className="text-lg mb-2 block text-center">Feet</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md text-center"
              value={feet}
              onChange={(e) => setFeet(Number(e.target.value))}
            >
              {[3, 4, 5, 6, 7, 8].map(ft => (
                <option key={ft} value={ft}>{ft} ft</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-lg mb-2 block text-center">Inches</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md text-center"
              value={inches}
              onChange={(e) => setInches(Number(e.target.value))}
            >
              {Array.from({length: 12}, (_, i) => i).map(inch => (
                <option key={inch} value={inch}>{inch} in</option>
              ))}
            </select>
          </div>
        </div>

        <Button
          onClick={handleContinue}
          className="mt-8 w-full max-w-sm mx-auto py-3 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 bg-green-500 hover:bg-green-600 text-white"
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 
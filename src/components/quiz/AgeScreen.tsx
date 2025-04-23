'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useQuiz } from '@/contexts/QuizContext'

export default function AgeScreen() {
  const { goToNextStep, setAge } = useQuiz()
  const [ageValue, setAgeValue] = useState<string>('')

  const handleContinue = () => {
    if (ageValue && !isNaN(Number(ageValue))) {
      setAge(Number(ageValue))
      goToNextStep()
    }
  }

  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-4xl">🗓️</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
        How Old Are You?
      </h1>

      <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
        Your age helps us tailor our <span className="text-green-500 font-medium">recommendations</span>
      </p>

      <div className="w-full max-w-md mx-auto mt-8">
        <div className="mb-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <label htmlFor="age" className="text-lg mb-3 block text-center">
            Age (years)
          </label>
          <input
            id="age"
            type="number"
            className="w-full p-4 border border-gray-300 rounded-md text-center text-lg"
            placeholder="Enter your age"
            value={ageValue}
            onChange={(e) => setAgeValue(e.target.value)}
          />
        </div>

        <Button
          onClick={handleContinue}
          className="mt-8 w-full max-w-sm mx-auto py-3 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 bg-green-500 hover:bg-green-600 text-white"
          disabled={!ageValue || isNaN(Number(ageValue))}
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 
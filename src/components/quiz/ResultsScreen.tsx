'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

interface ResultsScreenProps {
  gender: string | null;
  weight: number | null;
  height: { feet: number; inches: number } | null;
  age: number | null;
  goal: string | null;
}

export default function ResultsScreen({ gender, weight, height, age, goal }: ResultsScreenProps) {
  // Calculate BMI (basic formula for demonstration)
  const calculateBMI = () => {
    if (!weight || !height) return 'N/A'
    
    // Convert height to meters: (feet * 12 + inches) * 0.0254
    const heightInMeters = (height.feet * 12 + height.inches) * 0.0254
    // BMI formula: weight (kg) / height^2 (m)
    const weightInKg = weight * 0.453592 // Convert lbs to kg
    const bmi = weightInKg / (heightInMeters * heightInMeters)
    
    return bmi.toFixed(1)
  }

  // Calculate target weight (simplified for demonstration)
  const calculateTargetWeight = () => {
    if (!weight) return 'N/A'
    
    // Simple target weight calculation based on goal
    switch (goal) {
      case 'lose_10':
        return Math.round(weight - 15) + ' lbs'
      case 'lose_20_plus':
        return Math.round(weight - 25) + ' lbs'
      case 'maintain':
        return weight + ' lbs'
      default:
        return Math.round(weight - 10) + ' lbs'
    }
  }

  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-4xl">✅</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
        You're Eligible!
      </h1>

      <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
        FitAura can help you <span className="text-green-500 font-medium">reach your weight goals</span>
      </p>

      <div className="mt-8 mb-10 max-w-md mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-medium mb-4">Your Assessment Results</h3>

          <div className="grid grid-cols-2 gap-4 text-left mb-4">
            <div>
              <p className="text-sm text-gray-500">Current Weight</p>
              <p className="font-medium">{weight ? `${weight} lbs` : 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Height</p>
              <p className="font-medium">{height ? `${height.feet}'${height.inches}"` : 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">BMI</p>
              <p className="font-medium">{calculateBMI()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Target Weight</p>
              <p className="font-medium">{calculateTargetWeight()}</p>
            </div>
          </div>

          <p className="text-sm text-center text-gray-500">
            Based on your profile, you could reach your target within 3-6 months
            with our personalized program.
          </p>
        </div>
      </div>

      <div className="mt-4 mb-8">
        <h3 className="text-lg font-medium mb-2">Watch How FitAura Works</h3>
        <div className="relative aspect-video max-w-md mx-auto bg-gray-200 flex items-center justify-center rounded-md overflow-hidden border border-gray-300">
          <p className="text-gray-500">Program overview video</p>
        </div>
      </div>

      <Button
        className="mt-8 w-full max-w-sm mx-auto py-3 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 bg-green-500 hover:bg-green-600 text-white"
      >
        Start My FitAura Journey
      </Button>

      <p className="text-xs text-center text-gray-500 mt-4">
        By clicking above, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  )
} 
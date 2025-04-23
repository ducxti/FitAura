'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface StartScreenProps {
  onContinue: () => void;
}

export default function StartScreen({ onContinue }: StartScreenProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-4xl">🚀</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
        Begin Your Weight Loss Journey
      </h1>

      <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
        Find out if you qualify for our <span className="text-green-500 font-medium">personalized program</span>
      </p>

      <div className="mt-6 mb-10 max-w-md mx-auto">
        <p className="text-gray-500 mb-6">
          Answer a few quick questions to see if you're eligible for FitAura's
          scientifically proven weight loss approach.
        </p>
      </div>

      <div className="transform transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">
        <Button
          onClick={onContinue}
          className="mt-8 w-full max-w-sm mx-auto py-3 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 bg-green-500 hover:bg-green-600 text-white"
        >
          Begin My Assessment <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 
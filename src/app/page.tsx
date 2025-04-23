'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { FadeInAnimation } from '@/components/FadeInAnimation'
import { AnimatedStepTransition } from '@/components/AnimatedStepTransition'
import Header from '@/components/Header'
import ProgressTracker from '@/components/ProgressTracker'
import StartScreen from '@/components/quiz/StartScreen'
import GenderScreen from '@/components/quiz/GenderScreen'
import WeightScreen from '@/components/quiz/WeightScreen'
import HeightScreen from '@/components/quiz/HeightScreen'
import AgeScreen from '@/components/quiz/AgeScreen'
import GoalScreen from '@/components/quiz/GoalScreen'
import ResultsScreen from '@/components/quiz/ResultsScreen'

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [gender, setGender] = useState<string | null>(null)
  const [weight, setWeight] = useState<number | null>(null)
  const [height, setHeight] = useState<{ feet: number; inches: number } | null>(null)
  const [age, setAge] = useState<number | null>(null)
  const [goal, setGoal] = useState<string | null>(null)

  // Function to go to next step
  const goToNextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  // Function to go to previous step
  const goToPreviousStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1))
  }

  // Function to set gender and move to next step
  const handleGenderSelect = (selected: string) => {
    setGender(selected)
    goToNextStep()
  }

  // Function to set weight and move to next step
  const handleWeightSubmit = (value: number) => {
    setWeight(value)
    goToNextStep()
  }

  // Function to set height and move to next step
  const handleHeightSubmit = (feet: number, inches: number) => {
    setHeight({ feet, inches })
    goToNextStep()
  }

  // Function to set age and move to next step
  const handleAgeSubmit = (value: number) => {
    setAge(value)
    goToNextStep()
  }

  // Function to set goal and move to next step
  const handleGoalSelect = (selected: string) => {
    setGoal(selected)
    goToNextStep()
  }

  // Render content for current step
  const renderContent = () => {
    switch(currentStep) {
      case 1:
        return <StartScreen onContinue={goToNextStep} />;
      case 2:
        return <GenderScreen onSelect={handleGenderSelect} />;
      case 3:
        return <WeightScreen onSubmit={handleWeightSubmit} />;
      case 4:
        return <HeightScreen onSubmit={handleHeightSubmit} />;
      case 5:
        return <AgeScreen onSubmit={handleAgeSubmit} />;
      case 6:
        return <GoalScreen onSelect={handleGoalSelect} />;
      case 7:
        return <ResultsScreen gender={gender} weight={weight} height={height} age={age} goal={goal} />;
      default:
        return <StartScreen onContinue={goToNextStep} />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentStep={currentStep} goBack={goToPreviousStep} />
      <ProgressTracker currentStep={currentStep} />

      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center py-8 max-w-xl mx-auto w-full px-4">
          <AnimatedStepTransition step={currentStep}>
            {renderContent()}
          </AnimatedStepTransition>
        </div>
      </main>
    </div>
  )
}

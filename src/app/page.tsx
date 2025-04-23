'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { FadeInAnimation } from '@/components/FadeInAnimation'
import { AnimatedStepTransition } from '@/components/AnimatedStepTransition'
import { AnimatedProgressBar } from '@/components/AnimatedProgressBar'
import { AnimatedProgressStep } from '@/components/AnimatedProgressStep'
import { AnimatedStepIndicator } from '@/components/AnimatedStepIndicator'

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(1)

  // Function to go to next step
  const goToNextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  // Function to go to previous step
  const goToPreviousStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1))
  }

  // Simple progress tracker
  const ProgressTracker = () => {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {[1, 2, 3].map((step, index) => {
            const isActive = step === 1 && currentStep <= 2 ||
                            step === 2 && currentStep > 2 && currentStep <= 6 ||
                            step === 3 && currentStep === 7;
            const isCompleted = step === 1 && currentStep > 2 ||
                              step === 2 && currentStep === 7;

            const stepLabel = step === 1 ? 'Start' : step === 2 ? 'Details' : 'Eligibility';

            return (
              <React.Fragment key={step}>
                {index > 0 && (
                  <AnimatedProgressBar 
                    isActive={isActive} 
                    isCompleted={isCompleted} 
                  />
                )}

                <AnimatedProgressStep
                  step={currentStep}
                  stepNumber={step}
                  isActive={isActive}
                  isCompleted={isCompleted}
                  label={stepLabel}
                  delay={index * 0.2}
                />
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  }

  // Render based on current step
  const renderContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="text-center">
            <FadeInAnimation delay={0.2}>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
                Begin Your Weight Loss Journey
              </h1>
            </FadeInAnimation>

            <FadeInAnimation delay={0.6}>
              <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
                Find out if you qualify for our <span className="text-green-500 font-medium">personalized program</span>
              </p>
            </FadeInAnimation>

            <FadeInAnimation delay={0.8}>
              <div className="mt-6 mb-10 max-w-md mx-auto">
                <p className="text-gray-500 mb-6">
                  Answer a few quick questions to see if you're eligible for FitAura's
                  scientifically proven weight loss approach.
                </p>
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={1.0}>
              <div className="transform transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">
                <Button
                  onClick={goToNextStep}
                  className="mt-8 w-full max-w-sm mx-auto py-3 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 bg-green-500 hover:bg-green-600 text-white"
                >
                  Begin My Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeInAnimation>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <FadeInAnimation delay={0.2}>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
                What is Your Gender?
              </h1>
            </FadeInAnimation>

            <FadeInAnimation delay={0.6}>
              <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
                This helps us personalize your <span className="text-green-500 font-medium">weight loss journey</span>
              </p>
            </FadeInAnimation>

            <FadeInAnimation delay={0.8}>
              <div className="w-full max-w-md mx-auto mt-8">
                <div className="grid grid-cols-2 gap-4">
                  {['Male', 'Female'].map((gender, index) => (
                    <FadeInAnimation key={gender} delay={0.8 + index * 0.2}>
                      <div
                        className="p-6 cursor-pointer border-2 hover:border-green-500 hover:bg-green-50 transition-colors flex flex-col items-center rounded-lg"
                        onClick={goToNextStep}
                      >
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                          <span className="text-2xl">{gender === 'Male' ? '👨' : '👩'}</span>
                        </div>
                        <h3 className="font-medium text-lg">{gender}</h3>
                      </div>
                    </FadeInAnimation>
                  ))}
                </div>
              </div>
            </FadeInAnimation>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <FadeInAnimation delay={0.2}>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-4xl">⚖️</span>
                </div>
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
                Let's Start With Your Current Weight
              </h1>
            </FadeInAnimation>

            <FadeInAnimation delay={0.6}>
              <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
                This helps us calculate your <span className="text-green-500 font-medium">personalized plan</span>
              </p>
            </FadeInAnimation>

            <FadeInAnimation delay={0.8}>
              <div className="w-full max-w-md mx-auto mt-8">
                <div className="mb-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <label htmlFor="weight" className="text-lg mb-3 block text-center">
                    Current Weight (in lbs)
                  </label>
                  <input
                    id="weight"
                    type="number"
                    className="w-full p-4 border border-gray-300 rounded-md text-center text-lg"
                    placeholder="Enter your weight"
                  />
                </div>

                <Button
                  onClick={goToNextStep}
                  className="mt-8 w-full max-w-sm mx-auto py-3 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 bg-green-500 hover:bg-green-600 text-white"
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeInAnimation>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <FadeInAnimation delay={0.2}>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-4xl">📏</span>
                </div>
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
                What is Your Height?
              </h1>
            </FadeInAnimation>

            <FadeInAnimation delay={0.6}>
              <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
                This helps us calculate your <span className="text-green-500 font-medium">BMI</span>
              </p>
            </FadeInAnimation>

            <FadeInAnimation delay={0.8}>
              <div className="w-full max-w-md mx-auto mt-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-lg mb-2 block text-center">Feet</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-center">
                      {[3, 4, 5, 6, 7, 8].map(feet => (
                        <option key={feet} value={feet}>{feet} ft</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-lg mb-2 block text-center">Inches</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-center">
                      {Array.from({length: 12}, (_, i) => i).map(inch => (
                        <option key={inch} value={inch}>{inch} in</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button
                  onClick={goToNextStep}
                  className="mt-8 w-full max-w-sm mx-auto py-3 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 bg-green-500 hover:bg-green-600 text-white"
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeInAnimation>
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <FadeInAnimation delay={0.2}>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-4xl">🗓️</span>
                </div>
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
                How Old Are You?
              </h1>
            </FadeInAnimation>

            <FadeInAnimation delay={0.6}>
              <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
                Your age helps us tailor our <span className="text-green-500 font-medium">recommendations</span>
              </p>
            </FadeInAnimation>

            <FadeInAnimation delay={0.8}>
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
                  />
                </div>

                <Button
                  onClick={goToNextStep}
                  className="mt-8 w-full max-w-sm mx-auto py-3 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 bg-green-500 hover:bg-green-600 text-white"
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeInAnimation>
          </div>
        );

      case 6:
        return (
          <div className="text-center">
            <FadeInAnimation delay={0.2}>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
                What Are Your Weight Goals?
              </h1>
            </FadeInAnimation>

            <FadeInAnimation delay={0.6}>
              <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
                Select the option that best <span className="text-green-500 font-medium">matches your goals</span>
              </p>
            </FadeInAnimation>

            <FadeInAnimation delay={0.8}>
              <div className="w-full max-w-lg mx-auto mt-8">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'lose_10', label: 'Lose 10-20 pounds', desc: 'I want to shed some weight for better health', icon: '🏃‍♂️' },
                    { id: 'lose_20_plus', label: 'Lose 20+ pounds', desc: 'I have a significant amount of weight to lose', icon: '⚖️' },
                    { id: 'maintain', label: 'Maintain weight', desc: 'I want to maintain my current weight while improving health', icon: '🥗' },
                    { id: 'lifestyle', label: 'Lifestyle change', desc: 'I want to improve my overall health and eating habits', icon: '🌱' }
                  ].map((goal, index) => (
                    <FadeInAnimation key={goal.id} delay={0.8 + index * 0.2}>
                      <div
                        className="p-4 cursor-pointer border-2 hover:border-green-500 hover:bg-green-50 transition-colors rounded-lg"
                        onClick={goToNextStep}
                      >
                        <div className="flex items-center">
                          <div className="mr-4">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center"></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <h3 className="font-medium">{goal.label}</h3>
                              <span className="ml-2 text-xl">{goal.icon}</span>
                            </div>
                            <p className="text-gray-500 text-sm">{goal.desc}</p>
                          </div>
                        </div>
                      </div>
                    </FadeInAnimation>
                  ))}
                </div>
              </div>
            </FadeInAnimation>
          </div>
        );

      case 7:
        return (
          <div className="text-center">
            <FadeInAnimation delay={0.2}>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-4xl">✅</span>
                </div>
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
                You're Eligible!
              </h1>
            </FadeInAnimation>

            <FadeInAnimation delay={0.6}>
              <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
                FitAura can help you <span className="text-green-500 font-medium">reach your weight goals</span>
              </p>
            </FadeInAnimation>

            <FadeInAnimation delay={0.8}>
              <div className="mt-8 mb-10 max-w-md mx-auto">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium mb-4">Your Assessment Results</h3>

                  <div className="grid grid-cols-2 gap-4 text-left mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Current Weight</p>
                      <p className="font-medium">180 lbs</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Height</p>
                      <p className="font-medium">5'10"</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">BMI</p>
                      <p className="font-medium">25.8</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Target Weight</p>
                      <p className="font-medium">165 lbs</p>
                    </div>
                  </div>

                  <p className="text-sm text-center text-gray-500">
                    Based on your profile, you could reach your target within 3-6 months
                    with our personalized program.
                  </p>
                </div>
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={1.0}>
              <div className="mt-4 mb-8">
                <h3 className="text-lg font-medium mb-2">Watch How FitAura Works</h3>
                <div className="relative aspect-video max-w-md mx-auto bg-gray-200 flex items-center justify-center rounded-md overflow-hidden border border-gray-300">
                  <p className="text-gray-500">Program overview video</p>
                </div>
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={1.2}>
              <Button
                className="mt-8 w-full max-w-sm mx-auto py-3 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 bg-green-500 hover:bg-green-600 text-white"
              >
                Start My FitAura Journey
              </Button>

              <p className="text-xs text-center text-gray-500 mt-4">
                By clicking above, you agree to our Terms of Service and Privacy Policy.
              </p>
            </FadeInAnimation>
          </div>
        );

      default:
        return <div>Invalid step</div>;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full border-b border-gray-200 py-4 bg-white">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
          {currentStep > 1 ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPreviousStep}
              className="rounded-full"
            >
              ←
              <span className="sr-only">Back</span>
            </Button>
          ) : (
            <div className="w-8" />
          )}

          <div className="flex items-center">
            <span className="text-green-500 font-bold text-2xl">FitAura</span>
          </div>

          {currentStep > 1 && currentStep < 8 ? (
            <AnimatedStepIndicator currentStep={currentStep} totalSteps={7} />
          ) : (
            <div className="w-8" />
          )}
        </div>
      </header>

      <ProgressTracker />

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

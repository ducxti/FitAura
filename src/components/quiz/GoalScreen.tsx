'use client'

import React from 'react'
import { useQuiz } from '@/contexts/QuizContext'

export default function GoalScreen() {
  const { goToNextStep, setGoal } = useQuiz()

  const handleSelectGoal = (goal: string) => {
    setGoal(goal)
    goToNextStep()
  }

  // Goals data
  const goals = [
    { id: 'lose_10', label: 'Lose 10-20 pounds', desc: 'I want to shed some weight for better health', icon: '🏃‍♂️' },
    { id: 'lose_20_plus', label: 'Lose 20+ pounds', desc: 'I have a significant amount of weight to lose', icon: '⚖️' },
    { id: 'maintain', label: 'Maintain weight', desc: 'I want to maintain my current weight while improving health', icon: '🥗' },
    { id: 'lifestyle', label: 'Lifestyle change', desc: 'I want to improve my overall health and eating habits', icon: '🌱' }
  ]

  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-4xl">🎯</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
        What Are Your Weight Goals?
      </h1>

      <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-600">
        Select the option that best <span className="text-green-500 font-medium">matches your goals</span>
      </p>

      <div className="w-full max-w-lg mx-auto mt-8">
        <div className="grid grid-cols-1 gap-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="p-4 cursor-pointer border-2 hover:border-green-500 hover:bg-green-50 transition-colors rounded-lg"
              onClick={() => handleSelectGoal(goal.id)}
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
          ))}
        </div>
      </div>
    </div>
  )
} 
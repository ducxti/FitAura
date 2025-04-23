'use client'

import React from 'react'
import { useQuiz } from '@/contexts/QuizContext'
import StartScreen from '@/components/quiz/StartScreen'
import GenderScreen from '@/components/quiz/GenderScreen'
import WeightScreen from '@/components/quiz/WeightScreen'
import HeightScreen from '@/components/quiz/HeightScreen'
import AgeScreen from '@/components/quiz/AgeScreen'
import GoalScreen from '@/components/quiz/GoalScreen'
import ResultsScreen from '@/components/quiz/ResultsScreen'

export default function PageContent() {
  const { currentStep } = useQuiz()

  // Спрощений рендеринг без анімацій для вирішення проблеми
  switch (currentStep) {
    case 1:
      return <StartScreen />
    case 2:
      return <GenderScreen />
    case 3:
      return <WeightScreen />
    case 4:
      return <HeightScreen />
    case 5:
      return <AgeScreen />
    case 6:
      return <GoalScreen />
    case 7:
      return <ResultsScreen />
    default:
      return <StartScreen />
  }
}

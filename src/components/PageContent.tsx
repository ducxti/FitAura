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
  const { 
    currentStep, 
    goToNextStep, 
    setGender, 
    setWeight, 
    setHeight, 
    setAge, 
    setGoal,
    gender,
    weight,
    height,
    age,
    goal 
  } = useQuiz()

  // Функція для обробки вибору статі
  const handleGenderSelect = (selected: string) => {
    setGender(selected);
    goToNextStep();
  };

  // Функція для обробки відправки ваги
  const handleWeightSubmit = (value: number) => {
    setWeight(value);
    goToNextStep();
  };

  // Функція для обробки відправки зросту
  const handleHeightSubmit = (feet: number, inches: number) => {
    setHeight({ feet, inches });
    goToNextStep();
  };

  // Функція для обробки відправки віку
  const handleAgeSubmit = (value: number) => {
    setAge(value);
    goToNextStep();
  };

  // Функція для обробки вибору цілі
  const handleGoalSelect = (selected: string) => {
    setGoal(selected);
    goToNextStep();
  };

  // Спрощений рендеринг без анімацій для вирішення проблеми
  switch (currentStep) {
    case 1:
      return <StartScreen onContinue={goToNextStep} />
    case 2:
      return <GenderScreen onGenderSelect={handleGenderSelect} setGender={setGender} />
    case 3:
      return <WeightScreen onSubmit={handleWeightSubmit} setWeight={setWeight} />
    case 4:
      return <HeightScreen onSubmit={handleHeightSubmit} setHeight={setHeight} />
    case 5:
      return <AgeScreen onSubmit={handleAgeSubmit} setAge={setAge} />
    case 6:
      return <GoalScreen onSelect={handleGoalSelect} setGoal={setGoal} />
    case 7:
      return <ResultsScreen gender={gender} weight={weight} height={height} age={age} goal={goal} />
    default:
      return <StartScreen onContinue={goToNextStep} />
  }
}

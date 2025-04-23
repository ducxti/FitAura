'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'

// Define the shape of our quiz state
interface QuizState {
  currentStep: number
  gender: string | null
  weight: number | null
  height: { feet: number; inches: number } | null
  age: number | null
  goal: string | null
  setCurrentStep: (step: number) => void
  goToNextStep: () => void
  goToPreviousStep: () => void
  setGender: (gender: string) => void
  setWeight: (weight: number) => void
  setHeight: (feet: number, inches: number) => void
  setAge: (age: number) => void
  setGoal: (goal: string) => void
}

// Default state for the context
const defaultState: QuizState = {
  currentStep: 1,
  gender: null,
  weight: null,
  height: null,
  age: null,
  goal: null,
  setCurrentStep: () => {},
  goToNextStep: () => {},
  goToPreviousStep: () => {},
  setGender: () => {},
  setWeight: () => {},
  setHeight: () => {},
  setAge: () => {},
  setGoal: () => {},
}

// Create the context with default state
const QuizContext = createContext<QuizState>(defaultState)

// Hook to use the quiz context
export const useQuiz = () => useContext(QuizContext)

// Provider component to wrap around components that need access to the quiz state
interface QuizProviderProps {
  children: ReactNode
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [gender, setGender] = useState<string | null>(null)
  const [weight, setWeight] = useState<number | null>(null)
  const [height, setHeight] = useState<{ feet: number; inches: number } | null>(null)
  const [age, setAge] = useState<number | null>(null)
  const [goal, setGoal] = useState<string | null>(null)

  // Helper function to go to the next step
  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  // Helper function to go to the previous step
  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }

  // Setup height in one call
  const setHeightValues = (feet: number, inches: number) => {
    setHeight({ feet, inches })
  }

  const value = {
    currentStep,
    gender,
    weight,
    height,
    age,
    goal,
    setCurrentStep,
    goToNextStep,
    goToPreviousStep,
    setGender,
    setWeight,
    setHeight: setHeightValues,
    setAge,
    setGoal,
  }

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
} 
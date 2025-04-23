'use client'

import React, { type ReactNode } from 'react'
import Header from '@/components/Header'
import ProgressTracker from '@/components/ProgressTracker'

interface QuizLayoutProps {
  children: ReactNode;
  currentStep: number;
  goToPreviousStep: () => void;
}

export default function QuizLayout({ 
  children, 
  currentStep, 
  goToPreviousStep 
}: QuizLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentStep={currentStep} goBack={goToPreviousStep} />
      <ProgressTracker currentStep={currentStep} />
      <main className="quiz-container">
        <div className="quiz-content">
          {children}
        </div>
      </main>
    </div>
  )
}

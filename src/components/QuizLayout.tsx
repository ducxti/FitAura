'use client'

import React, { type ReactNode } from 'react'
import Header from '@/components/Header'
import ProgressTracker from '@/components/ProgressTracker'
import { QuizProvider } from '@/contexts/QuizContext'

interface QuizLayoutProps {
  children: ReactNode
}

export default function QuizLayout({ children }: QuizLayoutProps) {
  return (
    <QuizProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <ProgressTracker />
        <main className="quiz-container">
          <div className="quiz-content">
            {children}
          </div>
        </main>
      </div>
    </QuizProvider>
  )
}

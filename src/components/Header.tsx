'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  currentStep?: number;
  goBack?: () => void;
}

export default function Header({ currentStep = 1, goBack = () => {} }: HeaderProps) {
  return (
    <header className="w-full border-b border-border py-4">
      <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
        {/* Back button - only show after first step */}
        {currentStep > 1 ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={goBack}
            className="rounded-full -ml-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Button>
        ) : (
          // Empty space for alignment
          <div className="w-8" />
        )}

        {/* Logo */}
        <div className="flex items-center">
          <span className="text-primary font-bold text-2xl">FitAura</span>
        </div>

        {/* Empty space for alignment */}
        <div className="w-8" />
      </div>
    </header>
  )
}

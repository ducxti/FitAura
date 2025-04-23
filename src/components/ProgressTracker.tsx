'use client'

import React from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

// Mapping of step numbers to progress bar steps
const STEP_MAPPING: Record<number, number> = {
  1: 1, // Start screen -> Start step
  2: 1, // Gender screen -> Start step (still in initial phase)
  3: 2, // Weight screen -> Details step
  4: 2, // Height screen -> Details step
  5: 2, // Age screen -> Details step
  6: 2, // Goal screen -> Details step
  7: 3, // Results screen -> Eligibility step
}

// Define the steps for our progress bar
const PROGRESS_STEPS = [
  { id: 1, label: 'Start' },
  { id: 2, label: 'Details' },
  { id: 3, label: 'Eligibility' },
]

interface ProgressTrackerProps {
  currentStep: number;
}

export default function ProgressTracker({ currentStep }: ProgressTrackerProps) {
  // Convert the current step to the appropriate progress step
  const currentProgressStep = STEP_MAPPING[currentStep] || 1

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4">
      <div className="flex items-center justify-center">
        {PROGRESS_STEPS.map((step, index) => {
          // Determine if this step is active, completed, or incomplete
          const isActive = step.id === currentProgressStep
          const isCompleted = step.id < currentProgressStep

          // Determine the class for the circle based on status
          let stepClassName = 'progress-step '
          if (isActive) stepClassName += 'progress-step-active'
          else if (isCompleted) stepClassName += 'progress-step-completed'
          else stepClassName += 'progress-step-incomplete'

          // Determine connector class (only for steps after the first)
          let connectorClassName = 'progress-connector '
          if (index > 0) {
            if (isCompleted || isActive) connectorClassName += 'progress-connector-active'
          }

          return (
            <React.Fragment key={step.id}>
              {/* Add connector before steps (except first step) */}
              {index > 0 && (
                <motion.div
                  className={connectorClassName}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.4 }}
                />
              )}

              {/* The step circle */}
              <div className={stepClassName}>
                <motion.div
                  className="progress-step-circle"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.3 }}
                >
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.1, duration: 0.2 }}
                    >
                      <Check className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <span>{step.id}</span>
                  )}
                </motion.div>
                <motion.span
                  className="absolute -bottom-6 text-xs whitespace-nowrap font-medium"
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.3 }}
                >
                  {step.label}
                </motion.span>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

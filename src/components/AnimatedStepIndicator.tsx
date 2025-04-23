'use client'

import { motion, AnimatePresence } from "framer-motion";

interface AnimatedStepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const AnimatedStepIndicator = ({ 
  currentStep, 
  totalSteps 
}: AnimatedStepIndicatorProps) => {
  return (
    <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentStep}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="font-medium text-sm text-green-600"
        >
          Крок {currentStep}/{totalSteps}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}; 
'use client'

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface AnimatedProgressStepProps {
  step: number;
  stepNumber: number;
  isActive: boolean;
  isCompleted: boolean;
  label: string;
  delay: number;
}

export const AnimatedProgressStep = ({ 
  step,
  stepNumber,
  isActive,
  isCompleted,
  label,
  delay
}: AnimatedProgressStepProps) => {
  const variants = {
    inactive: { 
      scale: 1,
      backgroundColor: "#ffffff", 
      borderColor: "#d1d5db",
      color: "#6b7280"
    },
    active: { 
      scale: 1.1,
      backgroundColor: "#22c55e", 
      borderColor: "#22c55e",
      color: "#ffffff" 
    },
    completed: { 
      scale: 1.1,
      backgroundColor: "#22c55e", 
      borderColor: "#22c55e",
      color: "#ffffff" 
    }
  };

  const state = isCompleted ? "completed" : isActive ? "active" : "inactive";

  return (
    <div className="relative flex items-center">
      <motion.div
        className="w-8 h-8 rounded-full flex items-center justify-center text-sm border-2"
        initial="inactive"
        animate={state}
        variants={variants}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {isCompleted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3, 
              delay: delay + 0.2
            }}
          >
            <Check size={16} />
          </motion.div>
        ) : (
          stepNumber
        )}
      </motion.div>
      <motion.span 
        className="absolute -bottom-6 text-xs whitespace-nowrap font-medium"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3, 
          delay: delay + 0.1 
        }}
      >
        {label}
      </motion.span>
    </div>
  );
}; 
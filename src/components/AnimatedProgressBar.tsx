'use client'

import { motion } from "framer-motion";

interface AnimatedProgressBarProps {
  isActive: boolean;
  isCompleted: boolean;
}

export const AnimatedProgressBar = ({ isActive, isCompleted }: AnimatedProgressBarProps) => {
  const fillColor = isCompleted || isActive ? 'bg-green-500' : 'bg-gray-300';
  
  return (
    <div className={`h-[2px] flex-1 bg-gray-300 overflow-hidden`}>
      {(isActive || isCompleted) && (
        <motion.div
          className={`h-full ${fillColor}`}
          initial={isCompleted ? { width: "100%" } : { width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: isCompleted ? 0 : 0.8,
            ease: "easeOut"
          }}
        />
      )}
    </div>
  );
}; 
'use client'

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedStepTransitionProps {
  children: ReactNode;
  step: number;
}

export const AnimatedStepTransition = ({ children, step }: AnimatedStepTransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}; 
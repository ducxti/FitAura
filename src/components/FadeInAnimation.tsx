'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeInAnimation = ({ 
  children, 
  delay = 0, 
  className = "" 
}: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useFeatureValue } from '@growthbook/growthbook-react'
import { motion } from 'framer-motion'

interface StartScreenProps {
  onContinue: () => void;
}

export default function StartScreen({ onContinue }: StartScreenProps) {
  // ✅ ДОДАТИ: Читаємо feature flag з fallback
  const buttonColor = useFeatureValue('assessment-button-color', 'green') || 'green';

  // ✅ ДОДАТИ: Мапінг кольорів
  const colorClasses: Record<string, string> = {
    green: 'bg-green-500 hover:bg-green-600 text-white',
    blue: 'bg-blue-500 hover:bg-blue-600 text-white',
    purple: 'bg-purple-500 hover:bg-purple-600 text-white',
    orange: 'bg-orange-500 hover:bg-orange-600 text-white',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto text-center space-y-8"
    >
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Transform Your Body, Transform Your Life
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Get your personalized fitness plan in just 2 minutes
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
          <p className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
          <h3 className="font-semibold mb-2">Personalized Plans</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tailored to your goals and fitness level
          </p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
          <p className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
          <h3 className="font-semibold mb-2">Science-Based</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Backed by fitness research and expertise
          </p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <p className="w-12 h-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
          <h3 className="font-semibold mb-2">Track Progress</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Monitor your transformation journey
          </p>
        </div>
      </div>

      {/* ✅ ЗМІНИТИ: Використовуємо динамічні класи кольорів */}
      <div className="pt-8">
        <Button
          onClick={onContinue}
          className={`w-full ${colorClasses[buttonColor] || colorClasses.green}`}
          size="lg"
        >
          Begin My Assessment
        </Button>
      </div>
    </motion.div>
  );
}
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full py-12">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-[#df6b86]"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        💝 Special Message
      </motion.h2>
      <p className="text-center text-gray-800 font-semibold mb-8">Tap the card to reveal!</p>

      <div className="flex justify-center">
        <motion.div
          className="relative w-full max-w-md h-64 cursor-pointer"
          style={{ perspective: 1000 }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#FFC0CB] to-[#FFB6C1] rounded-3xl shadow-2xl flex items-center justify-center p-8"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-center">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎁
                </motion.div>
                <p className="text-2xl font-bold text-white">Tap to Open!</p>
              </div>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-8"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <div className="text-center">
                <p className="text-xl text-gray-800 italic mb-4 font-semibold">
                  "One year of giggles, cuddles, and endless love. You've made every moment magical! 💕"
                </p>
                <p className="text-sm text-gray-600 font-medium">Tap again to close</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveBalloons() {
  const [balloons, setBalloons] = useState([
    { id: 1, popped: false, color: '#FFC0CB', message: 'Thank you for celebrating with us! 💕' },
    { id: 2, popped: false, color: '#FFD700', message: 'Your presence means the world! 🌟' },
    { id: 3, popped: false, color: '#FFFDD0', message: 'Let\'s make magical memories together! ✨' },
    { id: 4, popped: false, color: '#FFB6C1', message: 'Can\'t wait to party with you! 🎉' },
    { id: 5, popped: false, color: '#FFC0CB', message: 'You make this day extra special! 🎂' },
  ]);
  const [revealedMessages, setRevealedMessages] = useState<string[]>([]);

  const popBalloon = (id: number, message: string) => {
    setBalloons(balloons.map(b => b.id === id ? { ...b, popped: true } : b));
    setRevealedMessages(prev => [...prev, message]);
  };

  const resetBalloons = () => {
    setBalloons(balloons.map(b => ({ ...b, popped: false })));
    setRevealedMessages([]);
  };

  const allPopped = balloons.every(b => b.popped);

  return (
    <div className="w-full py-12">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#df6b86]"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        🎈 Pop the Balloons!
      </motion.h2>
      <p className="text-center text-gray-800 font-semibold mb-8">Tap each balloon to pop it!</p>

      <div className="flex justify-center items-end gap-4 flex-wrap min-h-[300px]">
        <AnimatePresence>
          {balloons.map((balloon, index) => (
            !balloon.popped && (
              <motion.div
                key={balloon.id}
                className="cursor-pointer relative"
                initial={{ y: 100, opacity: 0 }}
                animate={{ 
                  y: [0, -20, 0],
                  opacity: 1,
                }}
                exit={{ 
                  scale: [1, 1.5, 0],
                  rotate: [0, 180, 360],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  y: {
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  scale: { duration: 0.5 },
                  rotate: { duration: 0.5 },
                  opacity: { duration: 0.5 },
                }}
                onClick={() => popBalloon(balloon.id, balloon.message)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div 
                  className="w-16 h-20 rounded-full relative"
                  style={{ backgroundColor: balloon.color }}
                >
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gray-400"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">
                    ✨
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Revealed Messages */}
      <div className="mt-8 space-y-4">
        <AnimatePresence>
          {revealedMessages.map((message, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-[#FFD700] text-center"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-lg text-gray-800 font-bold">{message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {allPopped && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
            >
              🎉
            </motion.div>
            <p className="text-2xl font-bold text-[#df6b86] mb-4">Yay! All popped!</p>
            <button
              onClick={resetBalloons}
              className="px-6 py-3 bg-gradient-to-r from-[#FFC0CB] to-[#FFB6C1] text-white rounded-full font-semibold"
            >
              Play Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

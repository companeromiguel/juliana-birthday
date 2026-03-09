'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface FloatingElementsProps {
  scrollYProgress: MotionValue<number>;
}

export default function FloatingElements({ scrollYProgress }: FloatingElementsProps) {
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <motion.div className="fixed inset-0 pointer-events-none z-5" style={{ y }}>
      {/* Floating images */}
      {[1, 2, 3, 4, 5, 6].map((num, i) => (
        <motion.div
          key={`image-${num}`}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -50 - i * 10, 0],
            x: [0, Math.sin(i) * 20, 0],
            rotate: [0, i % 2 === 0 ? 15 : -15, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <img 
            src={`/${num}.png`} 
            alt={`Floating element ${num}`}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-60"
          />
        </motion.div>
      ))}

      {/* Floating confetti */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`confetti-${i}`}
          className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 3 === 0 ? '#FFC0CB' : i % 3 === 1 ? '#FFD700' : '#FFFDD0',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Floating paw prints */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`paw-${i}`}
          className="absolute text-2xl sm:text-3xl md:text-4xl opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150, 0],
            rotate: [0, 15, -15, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          🐾
        </motion.div>
      ))}
    </motion.div>
  );
}

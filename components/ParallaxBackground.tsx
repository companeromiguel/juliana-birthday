'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  scrollYProgress: MotionValue<number>;
}

export default function ParallaxBackground({ scrollYProgress }: ParallaxBackgroundProps) {
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.div
      className="fixed inset-0"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Sleeping Kitten Illustration */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-20"
        style={{ scale }}
      >
        <div className="relative w-full h-full">
          {/* Cat ears */}
          <motion.div
            className="absolute top-20 left-20 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[60px] border-b-[#FFC0CB]/40"
            animate={{ rotate: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-20 right-20 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[60px] border-b-[#FFC0CB]/40"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          {/* Cat face */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 text-9xl">
            😺
          </div>
          {/* Party hat */}
          <motion.div
            className="absolute top-10 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-[#FFD700]"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Decorative cat ear silhouettes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 opacity-10"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[60px] border-b-[#FFC0CB]" />
        </motion.div>
      ))}
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';

interface EnvelopeOpenProps {
  onOpen: () => void;
}

export default function EnvelopeOpen({ onOpen }: EnvelopeOpenProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#FFC0CB] to-[#FFB6C1] flex items-center justify-center cursor-pointer z-50 p-4"
      onClick={onOpen}
      initial={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.div
          className="w-72 h-48 sm:w-80 sm:h-56 bg-white rounded-lg shadow-2xl flex items-center justify-center"
          layoutId="envelope"
        >
          <div className="text-center px-4">
            <motion.div
              className="text-5xl sm:text-6xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🐱
            </motion.div>
            <p className="text-xl sm:text-2xl font-bold text-[#FFC0CB]">Tap to Open</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">You're Invited!</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

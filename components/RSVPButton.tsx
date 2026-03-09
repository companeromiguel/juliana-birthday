'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RSVPButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Redirect to Google Form
    setTimeout(() => {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLScHKdMXIue1PzE4d0A_uSS1Q_50pvlE0zvNjCFeAzhYgJX8DA/viewform?usp=dialog', '_blank');
      setClicked(false);
    }, 500);
  };

  return (
    <motion.button
      className="relative px-8 py-4 md:px-12 md:py-6 text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-[#FFC0CB] to-[#FFB6C1] rounded-full shadow-2xl overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: isHovered
          ? '0 0 30px rgba(255, 192, 203, 0.8)'
          : '0 10px 30px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-white rounded-full"
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{
          scale: isHovered ? [1, 1.5, 1] : 1,
          opacity: isHovered ? [0.5, 0, 0.5] : 0,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
        }}
      />

      {/* Cat tail wiggle */}
      {isHovered && (
        <motion.span
          className="absolute -right-2 top-1/2 -translate-y-1/2 text-3xl md:text-4xl"
          animate={{
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
        >
          🐈
        </motion.span>
      )}

      <span className="relative z-10">
        {clicked ? '✓ Opening Form...' : 'RSVP Now'}
      </span>

      {/* Sparkle effect on click */}
      {clicked && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: '50%',
                top: '50%',
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos((i * Math.PI * 2) / 8) * 100,
                y: Math.sin((i * Math.PI * 2) / 8) * 100,
              }}
              transition={{ duration: 0.8 }}
            >
              ✨
            </motion.div>
          ))}
        </>
      )}
    </motion.button>
  );
}

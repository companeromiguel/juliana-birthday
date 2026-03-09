'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer() {
  const targetDate = new Date('2026-04-15T14:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="w-full">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-[#df6b86]"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        ⏰ Countdown to the Party!
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Days', value: timeLeft.days, emoji: '📅' },
          { label: 'Hours', value: timeLeft.hours, emoji: '⏰' },
          { label: 'Minutes', value: timeLeft.minutes, emoji: '⏱️' },
          { label: 'Seconds', value: timeLeft.seconds, emoji: '⚡' },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-[#FFD700] text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <div className="text-4xl mb-2">{item.emoji}</div>
            <motion.div
              className="text-4xl md:text-5xl font-bold text-[#FFC0CB] mb-2"
              key={item.value}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring' }}
            >
              {item.value}
            </motion.div>
            <div className="text-sm text-gray-800 font-semibold">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

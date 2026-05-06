'use client';

import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';

export default function DressCode() {
  const colors = [
    { name: 'Light Taupe', hex: '#C9A99B', description: 'Warm & Earthy' },
    { name: 'Sandal Cream', hex: '#D4C4B0', description: 'Soft & Natural' },
    { name: 'Nude', hex: '#E5D3C8', description: 'Elegant & Subtle' },
    { name: 'Nude 01', hex: '#D9C7BD', description: 'Classic Neutral' },
    { name: 'Pearl Cream', hex: '#E8DDD2', description: 'Luminous & Soft' },
    { name: 'Pearl Cream 01', hex: '#F0E6DB', description: 'Pure & Delicate' },
  ];

  return (
    <div className="w-full">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Shirt className="w-12 h-12 mx-auto mb-4 text-[#FFC0CB]" />
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFC0CB] mb-2"
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          Dress Code
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          We'd love to see you in these beautiful colors!
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {colors.map((color, index) => (
          <motion.div
            key={color.name}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-[#FFD700] text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <motion.div
              className="w-full aspect-square rounded-xl mb-3 shadow-lg"
              style={{ backgroundColor: color.hex }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1">
              {color.name}
            </h3>
            <p className="text-xs text-gray-600">{color.description}</p>
            <p className="text-xs text-gray-400 mt-1 font-mono">{color.hex}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 p-4 bg-[#FFFDD0]/50 rounded-xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-sm md:text-base text-gray-700">
          <span className="font-semibold text-[#FFC0CB]">Note:</span> Feel free to mix and match these colors or wear any shade within this palette!
        </p>
      </motion.div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ContentCardProps {
  children: ReactNode;
  delay?: number;
}

export default function ContentCard({ children, delay = 0 }: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}

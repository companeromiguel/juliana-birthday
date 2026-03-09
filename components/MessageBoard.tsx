'use client';

import { motion } from 'framer-motion';

export default function MessageBoard() {
  const messages = [
    {
      id: 1,
      from: 'Mommy & Daddy',
      message: 'Our precious little one, watching you grow has been the greatest joy of our lives. Happy 1st Birthday! 💕',
      emoji: '👨‍👩‍👧',
    },
    {
      id: 2,
      from: 'Grandma & Grandpa',
      message: 'You bring so much sunshine into our lives! We love you to the moon and back! 🌙',
      emoji: '👵👴',
    },
    {
      id: 3,
      from: 'Auntie Sarah',
      message: 'Happy Birthday to the cutest little munchkin! Can\'t wait to celebrate with you! 🎉',
      emoji: '👩',
    },
    {
      id: 4,
      from: 'Uncle Mike',
      message: 'One year of pure awesomeness! Keep being amazing, little one! 🌟',
      emoji: '👨',
    },
  ];

  return (
    <div className="w-full">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-[#df6b86]"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        💌 Messages of Love
      </motion.h2>

      <div className="space-y-6">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-[#FFD700]"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="text-4xl flex-shrink-0"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {msg.emoji}
              </motion.div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-[#D91A7A] mb-2">{msg.from}</h3>
                <p className="text-gray-800 italic font-medium">"{msg.message}"</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

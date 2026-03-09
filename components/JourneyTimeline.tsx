'use client';

import { motion } from 'framer-motion';

export default function JourneyTimeline() {
  const milestones = [
    {
      id: 1,
      month: 'Month 1',
      title: 'Welcome to the World! 🌍',
      description: 'Our little bundle of joy arrived and changed our lives forever.',
      icon: '👶',
    },
    {
      id: 2,
      month: 'Month 3',
      title: 'First Smile 😊',
      description: 'That magical moment when you smiled at us for the first time!',
      icon: '😊',
    },
    {
      id: 3,
      month: 'Month 6',
      title: 'Sitting Up! 🪑',
      description: 'You discovered the world from a whole new perspective.',
      icon: '🎯',
    },
    {
      id: 4,
      month: 'Month 8',
      title: 'Crawling Adventures 🐾',
      description: 'Nothing in the house was safe anymore! You explored everything.',
      icon: '🚼',
    },
    {
      id: 5,
      month: 'Month 10',
      title: 'First Words 🗣️',
      description: 'Mama? Dada? Either way, our hearts melted!',
      icon: '💬',
    },
    {
      id: 6,
      month: 'Month 12',
      title: 'ONE YEAR OLD! 🎂',
      description: 'A whole year of love, laughter, and unforgettable memories!',
      icon: '🎉',
    },
  ];

  return (
    <div className="w-full">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-[#df6b86]"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        🌟 Our Journey Together
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFC0CB] via-[#FFD700] to-[#FFC0CB]" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 w-16 h-16 -ml-8 bg-gradient-to-br from-[#FFC0CB] to-[#FFD700] rounded-full flex items-center justify-center text-3xl shadow-xl z-10"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {milestone.icon}
              </motion.div>

              {/* Content card */}
              <div className="flex-1 ml-24 md:ml-0">
                <motion.div
                  className={`bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-[#FFD700] ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-[#FFD700] bg-[#FFC0CB]/20 px-3 py-1 rounded-full">
                      {milestone.month}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#D91A7A] mb-2">{milestone.title}</h3>
                  <p className="text-gray-800 font-medium">{milestone.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

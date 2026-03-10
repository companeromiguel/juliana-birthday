'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import ParallaxBackground from './ParallaxBackground';
import FloatingElements from './FloatingElements';
import ContentCard from './ContentCard';
import RSVPButton from './RSVPButton';
import PhotoAlbum from './PhotoAlbum';
import MessageBoard from './MessageBoard';
import JourneyTimeline from './JourneyTimeline';
import MusicPlayer from './MusicPlayer';
import InteractiveBalloons from './InteractiveBalloons';
import CountdownTimer from './CountdownTimer';
import InteractiveCard from './InteractiveCard';

export default function InvitationContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="relative min-h-[500vh]">
      <MusicPlayer />
      <ParallaxBackground scrollYProgress={scrollYProgress} />
      <FloatingElements scrollYProgress={scrollYProgress} />
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto space-y-8 md:space-y-12"
        >
          <ContentCard delay={0.2}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center text-[#df6b86] leading-tight"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              {['J', 'u', 'l', 'i', 'a', 'n', 'a', "'", 's', ' ', '1', 's', 't', ' ', 'B', 'i', 'r', 't', 'h', 'd', 'a', 'y'].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.05,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 mt-4">
              Join us for a purr-fect celebration!
            </p>
          </ContentCard>

          <ContentCard delay={0.4}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border-4 border-[#FFD700]">
              <motion.div
                className="text-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
              >
                <span className="text-6xl md:text-8xl">🎂</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#FFC0CB]">
                I'm Turning ONE!
              </h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-800">
                <InfoRow icon="📅" label="Date" value="Saturday, April 15th, 2026" />
                <InfoRow icon="⏰" label="Time" value="2:00 PM - 5:00 PM" />
                <InfoRow icon="📍" label="Location" value="123 Whisker Lane, Kitty City" />
                <InfoRow icon="🎈" label="Theme" value="Cats, Confetti & Cake!" />
              </div>
            </div>
          </ContentCard>

          <ContentCard delay={0.6}>
            <div className="text-center">
              <RSVPButton />
            </div>
          </ContentCard>

          <ContentCard delay={0.7}>
            <CountdownTimer />
          </ContentCard>

          <ContentCard delay={0.8}>
            <JourneyTimeline />
          </ContentCard>

          <ContentCard delay={0.9}>
            <InteractiveBalloons />
          </ContentCard>

          <ContentCard delay={1.0}>
            <PhotoAlbum />
          </ContentCard>

          <ContentCard delay={1.1}>
            <InteractiveCard />
          </ContentCard>

          <ContentCard delay={1.2}>
            <MessageBoard />
          </ContentCard>

          <ContentCard delay={1.4}>
            <div className="text-center py-12">
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎈
              </motion.div>
              <h3 className="text-2xl font-bold text-[#df6b86] mb-4">
                Can't wait to celebrate with you!
              </h3>
              <p className="text-gray-800 font-medium">See you at the party! 🎉</p>
              
              {/* Subtle creator credit */}
              <p className="text-xs text-gray-400 opacity-30 mt-8">© ninong migs</p>
            </div>
          </ContentCard>
        </motion.div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <motion.div
      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#FFFDD0]/50 rounded-xl"
      whileHover={{ scale: 1.02, x: 10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <span className="text-2xl md:text-3xl flex-shrink-0">{icon}</span>
      <div className="text-left">
        <p className="font-bold text-[#D91A7A] text-sm md:text-base">{label}</p>
        <p className="text-sm md:text-base text-gray-800 font-medium">{value}</p>
      </div>
    </motion.div>
  );
}

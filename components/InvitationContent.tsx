'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, MapPinned, Cake, Balloon, PartyPopper, Heart } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';
import FloatingElements from './FloatingElements';
import ContentCard from './ContentCard';
import RSVPButton from './RSVPButton';
import PhotoAlbum from './PhotoAlbum';
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
                <Cake className="w-20 h-20 md:w-24 md:h-24 mx-auto text-[#FFC0CB]" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#FFC0CB]">
                I'm Turning ONE!
              </h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-800">
                <InfoRow icon={<Calendar className="w-6 h-6 md:w-7 md:h-7" />} label="Date" value="Tuesday, May 19th, 2026" />
                <InfoRow icon={<Clock className="w-6 h-6 md:w-7 md:h-7" />} label="Time" value="11:00 AM" />
                <InfoRow icon={<MapPin className="w-6 h-6 md:w-7 md:h-7" />} label="Location" value="San Gregorio Magno Church" />
                <InfoRow icon={<Sparkles className="w-6 h-6 md:w-7 md:h-7" />} label="Theme" value="Cats, Confetti & Cake!" />
              </div>
              
              <div className="mt-6 pt-6 border-t-2 border-[#FFD700]">
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-[#FFC0CB]">
                  Reception to Follow
                </h3>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-800">
                  <InfoRow icon={<Clock className="w-6 h-6 md:w-7 md:h-7" />} label="Time" value="3:00 PM" />
                  <InfoRow icon={<MapPin className="w-6 h-6 md:w-7 md:h-7" />} label="Location" value="Lapidario" />
                  <InfoRow icon={<MapPinned className="w-6 h-6 md:w-7 md:h-7" />} label="Landmark" value="JRA @ STEEL or Kiddos Milktea" />
                </div>
              </div>
            </div>
          </ContentCard>

          <ContentCard delay={0.6}>
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border-2 border-[#FFD700] mb-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  To help us finalize our arrangements with the Church and the venue, please let us know if you will be joining us for both the <span className="font-semibold text-[#FFC0CB]">Baptismal Ceremony</span> and the <span className="font-semibold text-[#FFC0CB]">Reception</span>, or for the <span className="font-semibold text-[#FFC0CB]">Reception only</span>.
                </p>
                <p className="text-base md:text-lg text-gray-700 mt-4">
                  We kindly request your final confirmation by <span className="font-bold text-[#FFC0CB]">May 17</span>.
                </p>
                <p className="text-base md:text-lg text-[#FFC0CB] font-semibold mt-4 flex items-center justify-center gap-2">
                  Your presence would mean the world to us! <Heart className="w-5 h-5 fill-current" />
                </p>
              </div>
              <RSVPButton />
            </div>
          </ContentCard>

          <ContentCard delay={0.7}>
            <CountdownTimer />
          </ContentCard>

          <ContentCard delay={0.8}>
            <InteractiveBalloons />
          </ContentCard>

          <ContentCard delay={0.9}>
            <PhotoAlbum />
          </ContentCard>

          <ContentCard delay={1.0}>
            <InteractiveCard />
          </ContentCard>

          <ContentCard delay={1.1}>
            <div className="text-center py-12">
              <motion.div
                className="mb-4 flex justify-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Balloon className="w-16 h-16 text-[#FFC0CB]" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#df6b86] mb-4">
                Can't wait to celebrate with you!
              </h3>
              <p className="text-gray-800 font-medium flex items-center justify-center gap-2">
                See you at the party! <PartyPopper className="w-5 h-5 text-[#FFC0CB]" />
              </p>
              
              {/* Subtle creator credit */}
              <p className="text-xs text-gray-400 opacity-30 mt-8">© ninong migs</p>
            </div>
          </ContentCard>
        </motion.div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <motion.div
      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#FFFDD0]/50 rounded-xl"
      whileHover={{ scale: 1.02, x: 10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <span className="text-[#FFC0CB] flex-shrink-0">{icon}</span>
      <div className="text-left">
        <p className="font-bold text-[#D91A7A] text-sm md:text-base">{label}</p>
        <p className="text-sm md:text-base text-gray-800 font-medium">{value}</p>
      </div>
    </motion.div>
  );
}

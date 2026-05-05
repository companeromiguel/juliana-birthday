'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VideoIntroProps {
  onComplete: () => void;
}

export default function VideoIntro({ onComplete }: VideoIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.playbackRate = 0.75; // Slow down to 75% speed
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay was prevented');
        }
      }
    };

    playVideo();
  }, []);

  const handleVideoEnd = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-[#FFC0CB] z-50 flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={handleVideoEnd}
        playsInline
        preload="auto"
        autoPlay
        muted
      >
        <source src="/YOU'RE INVITED.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.button
        className="absolute bottom-8 right-8 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm"
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Skip →
      </motion.button>
    </div>
  );
}

'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface VideoIntroProps {
  onComplete: () => void;
}

export default function VideoIntro({ onComplete }: VideoIntroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.playbackRate = 0.75; // Slow down to 75% speed
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    onComplete();
  };

  return (
    <div 
      className="fixed inset-0 bg-[#FFC0CB] z-50 flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={handleVideoEnd}
        playsInline
        preload="auto"
      >
        <source src="/YOU'RE INVITED.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {isPlaying && (
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
      )}
    </div>
  );
}

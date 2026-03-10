'use client';

import { useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play music when component mounts
    const playMusic = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          // Browsers may block autoplay, but we'll try anyway
          console.log('Autoplay was prevented');
        }
      }
    };

    playMusic();
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay>
      <source src="/music/BDAYMUSIC.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

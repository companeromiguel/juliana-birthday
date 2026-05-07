'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function PhotoAlbum() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [liked, setLiked] = useState<number[]>([]);

  // Actual celebrant photos
  const photos = [
    { id: 1, src: '/photos/1.jpg' },
    { id: 2, src: '/photos/2.jpg' },
    { id: 3, src: '/photos/3.jpg' },
    { id: 4, src: '/photos/4.jpg' },
    { id: 5, src: '/photos/5.jpg' },
    { id: 6, src: '/photos/6.jpg' },
  ];

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-[#df6b86]"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        📸 Memory Lane
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-gradient-to-br from-[#FFFDD0] to-[#FFC0CB]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(index)}
          >
            {/* Photo Image */}
            <Image
              src={photo.src}
              alt={`Memory ${photo.id}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Like button */}
            <motion.button
              className="absolute top-2 right-2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-10"
              onClick={(e) => toggleLike(photo.id, e)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="text-xl"
                animate={liked.includes(photo.id) ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {liked.includes(photo.id) ? '❤️' : '🤍'}
              </motion.span>
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-3xl p-8 text-center">
                <div className="aspect-square bg-gradient-to-br from-[#FFFDD0] to-[#FFC0CB] rounded-2xl overflow-hidden mb-4 relative">
                  <Image
                    src={photos[selectedImage].src}
                    alt={`Memory ${photos[selectedImage].id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 800px"
                  />
                </div>
                <p className="text-gray-600 mt-4">Tap outside to close</p>
              </div>

              {/* Navigation arrows */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage - 1 + photos.length) % photos.length);
                }}
              >
                ←
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage + 1) % photos.length);
                }}
              >
                →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Facebook } from 'lucide-react';

const FacebookReelCard = ({ reel, onClick }) => {
  const { title, description, thumbnail } = reel;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group flex flex-col h-full bg-[#1E1E2A] rounded-xl overflow-hidden shadow-lg border border-white/5 hover:border-blue-500/50 transition-colors duration-300 cursor-pointer"
      onClick={() => onClick(reel)}
    >
      {/* Thumbnail Container - Using 9:16 aspect ratio for Reels feeling, or standard video card?
          Let's stick to a standard card shape for grid consistency with YouTube videos, 
          but handle the image containment gracefully. */}
      <div className="relative aspect-video overflow-hidden bg-black">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Facebook Badge */}
        <div className="absolute top-3 left-3 bg-blue-600/90 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 z-10 backdrop-blur-md">
          <Facebook size={12} fill="white" />
          <span>REEL</span>
        </div>
        
        {/* Overlay with Play Button */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.8 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            className="w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center backdrop-blur-sm shadow-xl"
          >
            <Play fill="white" className="text-white ml-1 w-6 h-6" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow relative">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
          {description}
        </p>
        <div className="text-xs text-blue-400 font-medium uppercase tracking-wider flex items-center gap-1">
          <span>Watch on Facebook</span>
          <Facebook size={12} />
        </div>
      </div>
    </motion.div>
  );
};

export default FacebookReelCard;
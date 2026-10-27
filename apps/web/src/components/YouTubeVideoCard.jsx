import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const YouTubeVideoCard = ({ video, onClick }) => {
  const { snippet } = video;
  
  // Choose the highest quality thumbnail available
  const thumbnailUrl = snippet.thumbnails?.maxres?.url || 
                       snippet.thumbnails?.high?.url || 
                       snippet.thumbnails?.medium?.url;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group flex flex-col h-full bg-[#1E1E2A] rounded-xl overflow-hidden shadow-lg border border-white/5 hover:border-accent-purple/50 transition-colors duration-300 cursor-pointer"
      onClick={() => onClick(video)}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={snippet.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay with Play Button */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.8 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            className="w-16 h-16 rounded-full bg-accent-purple/90 flex items-center justify-center backdrop-blur-sm shadow-xl"
          >
            <Play fill="white" className="text-white ml-1 w-6 h-6" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-accent-purple transition-colors">
          {snippet.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
          {snippet.description}
        </p>
        <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
          Watch Video
        </div>
      </div>
    </motion.div>
  );
};

export default YouTubeVideoCard;
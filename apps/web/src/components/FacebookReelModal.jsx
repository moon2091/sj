import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const FacebookReelModal = ({ reel, onClose }) => {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!reel) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-md md:max-w-lg bg-[#1E1E2A] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1E1E2A] z-10">
            <h3 className="text-lg font-bold text-white truncate pr-4">Facebook Reel</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-blue-600 text-white transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Video Container - Vertical Format for Reels */}
          <div className="relative bg-black flex-grow overflow-hidden flex items-center justify-center min-h-[400px]">
             {/* Note: Facebook Embeds often require the official SDK for full interactive embeds. 
                Using iframe with generic embed URL for simplicity in this frontend-only env. 
                If direct embed fails due to FB restrictions, we provide a fallback link. */}
            <iframe 
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(reel.url)}&show_text=false&width=auto`}
              width="100%" 
              height="100%" 
              style={{ border: 'none', overflow: 'hidden', minHeight: '500px' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title={reel.title}
            ></iframe>
          </div>

          {/* Footer Info */}
          <div className="p-6 bg-[#1E1E2A]">
            <h4 className="text-xl font-bold text-white mb-2">{reel.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-h-24 overflow-y-auto custom-scrollbar">
              {reel.description}
            </p>
            <a 
              href={reel.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <span>View Original on Facebook</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FacebookReelModal;
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const YouTubePortfolio = () => {
  return (
    <section id="showreel" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 bg-white/5 rounded-full text-sm mb-6 text-gray-300 font-medium">
              <Play size={14} className="text-accent-purple" />
              <span>DIGITAL PORTFOLIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-purple-400">Works</span>
            </h2>
          </div>
        </div>

        {/* Placeholder for content - now empty as per request */}
        <div className="flex flex-col items-center justify-center py-20 border border-white/10 rounded-2xl bg-[#1E1E2A] text-center">
            <p className="text-white text-lg font-medium mb-2">Our full portfolio is available for viewing.</p>
            <p className="text-gray-500 max-w-lg">Click the button below to dive into a comprehensive collection of our projects, including YouTube videos and Facebook reels, hosted securely on Google Drive.</p>
        </div>


        {/* Explore Full Portfolio CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="group relative px-8 py-7 text-base font-bold bg-white text-black hover:bg-gray-100 hover:text-black border-none rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300"
          >
            <a
              href="https://drive.google.com/drive/u/3/folders/1fXgi6NjoEJPzdjWypZ8JC3pQMgLjTgTT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <span>Explore Full Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubePortfolio;
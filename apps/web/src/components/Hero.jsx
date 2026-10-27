import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';

const Hero = () => {
  const navigate = useNavigate();
  const handleCTAClick = () => {
    navigate('/contact');
  };
  
  // The "View Our Work" button is being changed to "See our portfolio"
  // and will now link to an external Google Drive folder.
  const portfolioLink = "https://drive.google.com/drive/u/3/folders/1ElVDt9jfF1j3SPDwIhCEMQFsXS75opkX";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedHeroBackground />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/10 border border-accent-purple/20 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent-purple" />
            <span className="text-sm text-[#c5b8ff] uppercase">Entertainment Reimagined</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white uppercase"
          >
            Create Your
            <span className="block text-accent-purple">Next Experience</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Studio Junction brings creative visions to life through cutting-edge production, innovative storytelling, and immersive entertainment experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center"
          >
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent-purple hover:bg-accent-purple/90 text-white font-bold px-8 py-6 text-lg rounded-full group"
            >
              Let's Talk
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* Updated button text, link, and target/rel attributes */}
            <Button
              asChild // This prop ensures that the Button styles are applied to its child element
              size="lg"
              variant="outline"
              className="border-2 border-accent-purple/40 hover:bg-accent-purple/10 text-white px-8 py-6 text-lg rounded-full"
            >
              <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
                See our portfolio
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-purple/40 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent-purple rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
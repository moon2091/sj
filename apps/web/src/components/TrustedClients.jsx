import React from 'react';
import { motion } from 'framer-motion';

const clientNames = [
  "Ministry of Finance",
  "Ministry of Food",
  "Ministry of ICT",
  "Ministry of Health",
  "Ministry of Education",
  "UNDP",
  "ILO",
  "WHO",
  "Syngenta",
  "Jhpiego",
  "IDA",
  "SAC",
  "Incepta",
  "Servier",
  "BCS",
  "SCAI",
  "SOSB",
  "BES",
  "BOSCON",
  "BICC",
  "BSOM",
  "AIR ASIA",
  "KUWAIT AIRWAYS",
  "PROTHOM ALO",
  "BUET",
  "IUT",
  "Pan Pacific Sonar Gao"
];

// Duplicate for seamless loop
const marqueeList = [...clientNames, ...clientNames];

const TrustedClients = () => {
  // Calculations for seamless loop:
  // Item container width: w-96 (384px)
  // Margin: mx-8 (64px total horizontal margin)
  // Total width per item: 384px + 64px = 448px
  // Total width of unique set (27 items): 27 * 448 = 12096px
  
  const marqueeVariants = {
    animate: {
      x: [0, -12096], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 100, 
          ease: 'linear'
        }
      }
    }
  };

  return (
    <section className="py-20 bg-[#0C0D0D] border-t border-b border-[#1E1E2A] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-gray-400 mb-12 uppercase tracking-widest">Trusted by Industry Leaders</p>
        <div className="relative w-full overflow-hidden">
           {/* Gradient fade edges for smoother appearance */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0C0D0D] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0C0D0D] to-transparent pointer-events-none"></div>

          <motion.div className="flex items-center" variants={marqueeVariants} animate="animate">
            {marqueeList.map((client, index) => (
              <div key={index} className="flex-shrink-0 w-96 mx-8 flex justify-center items-center">
                <span className="text-gray-300 font-bold text-xl md:text-2xl uppercase tracking-wider whitespace-nowrap opacity-70 hover:opacity-100 hover:text-white transition-all duration-300 cursor-default">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
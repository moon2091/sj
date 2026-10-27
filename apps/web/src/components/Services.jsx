import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const services = [
  {
    title: 'Online Hybrid Event',
    description: 'Studio Junction excels in online and hybrid events, offering seamless live streaming, interactive features, and customized solutions to engage audiences and ensure impactful, successful experiences.'
  },
  {
    title: 'Audio Visual Production',
    description: 'With end-to-end visual production services, we specialize in documentaries, corporate videos, event coverage, courses, animations, and more, delivering content that reflects your brand\'s vision.'
  },
  {
    title: 'Film Post Production',
    subServices: [
      {
        title: 'Editing',
        description: 'Studio Junction has been supporting emerging film industries with Feature Length film editing'
      },
      {
        title: 'Color Correction',
        description: 'With the power of Da Vinci Resolve we help your film come to life with color correction and grading services from short films to feature film and documentaries'
      }
    ]
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleServiceClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filterTags = ['Events', 'Live Streaming', 'Production', 'Post-Production', 'Editing', 'Color Grading'];

  return (
    <section id="services" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white uppercase">
            OUR <span className="text-accent-purple">SERVICES</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mt-4">Explore the world through the lens of our visual capabilities, and find what you love.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {filterTags.map(tag => (
              <button key={tag} className="px-5 py-2 border border-gray-600 rounded-full text-gray-400 cursor-default uppercase hover:border-accent-purple hover:text-white transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800">
          {services.map((service, index) => (
            <div key={service.title} className="border-b border-gray-800">
              <div className="flex justify-between items-center cursor-pointer py-8 group" onClick={() => handleServiceClick(index)}>
                <div className="flex items-center gap-4">
                  <h3 className={`text-3xl md:text-5xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                    {service.title}
                  </h3>
                  {activeIndex === index && (
                    <motion.div
                      className="w-4 h-4 bg-accent-purple rounded-full hidden md:block"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </div>
                
                <motion.div 
                  className="text-accent-purple" 
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus size={40} className={`${activeIndex === index ? 'text-accent-purple' : 'text-gray-600 group-hover:text-gray-400'} transition-colors`} />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-4 md:pr-16">
                      {service.description && (
                        <p className="text-lg text-gray-400 max-w-2xl mb-6">{service.description}</p>
                      )}

                      {service.subServices && (
                        <div className="mt-4 space-y-8 pl-0 md:pl-4 md:border-l-2 md:border-accent-purple/30">
                           {service.subServices.map((sub) => (
                             <div key={sub.title}>
                               <h4 className="text-xl font-bold text-white mb-2">{sub.title}</h4>
                               <p className="text-lg text-gray-400 max-w-2xl">{sub.description}</p>
                             </div>
                           ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
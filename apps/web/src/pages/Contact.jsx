import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const ContactInfoBlock = ({
  icon,
  title,
  lines,
  delay,
  href
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5, delay }} 
    className="mb-8"
  >
    <div className="flex items-center gap-2 mb-3">
      <span className="text-accent-purple">{icon}</span>
      <h3 className="uppercase text-sm text-gray-400 tracking-widest">{title}</h3>
    </div>
    <div className="space-y-1">
      {lines.map((line, index) => (
        href && index === 0 ? (
          <a 
            key={index} 
            href={href} 
            className="text-lg text-gray-200 hover:text-accent-purple transition-colors duration-300 block"
          >
            {line}
          </a>
        ) : (
          <p key={index} className="text-lg text-gray-200">{line}</p>
        )
      ))}
    </div>
  </motion.div>
);

const Contact = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/studiojunctionbd/',
      icon: <Facebook size={20} />
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/studiojunctionbd/',
      icon: <Instagram size={20} />
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@studiojunction',
      icon: <Youtube size={20} />
    },
  ];

  return (
    <motion.div 
      initial="initial" 
      animate="in" 
      exit="out" 
      variants={pageVariants} 
      transition={pageTransition}
    >
      <Helmet>
        <title>Contact Studio Junction - Get In Touch</title>
        <meta name="description" content="Contact Studio Junction for creative production, storytelling, and entertainment services. Reach out to discuss your next project." />
      </Helmet>
      <section className="bg-[#0C0D0D] text-white py-32 sm:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white uppercase mb-6 leading-tight">
                Contact <span className="text-accent-purple">Studio Junction</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-sm mb-16">
                Let's create something extraordinary together!
              </p>
              <motion.div 
                className="flex items-center gap-8" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 1 }}
              >
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-300 hover:text-accent-purple transition-colors duration-300 flex items-center gap-2"
                  >
                    {social.icon}
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <div>
              <div className="grid grid-cols-1 gap-8 mb-12">
                <ContactInfoBlock 
                  icon={<Mail size={20} />}
                  title="Email" 
                  lines={["info.studiojunction@gmail.com"]} 
                  href="mailto:info.studiojunction@gmail.com"
                  delay={0.4} 
                />
                <ContactInfoBlock 
                  icon={<Phone size={20} />}
                  title="Phone" 
                  lines={["01717-376309"]} 
                  href="tel:01717376309"
                  delay={0.5} 
                />
                <ContactInfoBlock 
                  icon={<MapPin size={20} />}
                  title="Our Studio" 
                  lines={["152, 9 Green Rd", "Dhaka, Bangladesh, 1205"]} 
                  delay={0.6} 
                />
              </div>

              <motion.div 
                className="overflow-hidden rounded-2xl shadow-2xl shadow-accent-purple/10" 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <img 
                  className="w-full h-auto object-cover" 
                  alt="Modern creative studio workspace with professional production equipment" 
                  src="/images/modern-office-concentration-RCQmi.png" 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
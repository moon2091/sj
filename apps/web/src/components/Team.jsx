import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Arafat Shawon',
    position: 'CEO',
    avatar: '/images/f5b0275e28af4dbd8bac211cc1947f16.jpg',
    email: '#', // Placeholder, replace with actual email
    linkedin: '#', // Placeholder, replace with actual LinkedIn profile
  },
  {
    id: 2,
    name: 'Md. Zubair Asad',
    position: 'Director Business Development',
    avatar: '/images/d148102b7d8e3bbd085307c1fa788a79.jpg',
    email: '#',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Mohiyuddeen Ahmad',
    position: 'Director Production',
    avatar: '/images/6e3c8d780178daea45907aab4ed66cab.jpg',
    email: '#',
    linkedin: '#',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 leading-tight text-white uppercase">
          Meet Our <span className="text-accent-purple">Team</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-[#1E1E2A] rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col items-center group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="relative mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-accent-purple/50 group-hover:border-accent-purple transition-all duration-300"
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent-purple/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href={member.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent-purple"
                      aria-label={`Email ${member.name}`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => { e.preventDefault(); alert("🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"); }}
                    >
                      <Mail size={28} />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent-purple"
                      aria-label={`LinkedIn profile of ${member.name}`}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => { e.preventDefault(); alert("🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"); }}
                    >
                      <Linkedin size={28} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">{member.name}</h3>
              <p className="text-lg text-gray-400">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
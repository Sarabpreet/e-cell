import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 pt-16 bg-gradient-to-b from-[#0a0f1c] to-[#1a1f2e]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mb-6">
          MES 2025
        </h1>
        <h2 className="text-2xl md:text-4xl text-[#22d3ee] mb-8">
          Manipal Entrepreneurship Summit
        </h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          The flagship event of MAHE organized by E-Cell, MIT Manipal
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6 text-gray-300"
        >
          <p>
            Driven by our dedication to entrepreneurial growth, MES aims to transform the campus into a hub of innovation, where students are empowered to become job creators.
          </p>
          <p>
            The summit provides an inspiring platform, connecting ambitious students with successful alumni and industry leaders. It serves as a launchpad for ideas, a hub for networking, and a breeding ground for the next wave of Indian innovators and visionaries.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mt-8"
        >
          ₹5 Lakh Prize Pool
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;


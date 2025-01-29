import React from 'react';
import { motion } from 'framer-motion';
import sp1 from './Screenshot 1.png';
import sp2 from "./Screenshot 2025-01-27 at 11.09.52 PM.png";
import sp3 from "./Screenshot 2025-01-27 at 11.40.24 PM.png";
import sp4 from "./Screenshot 2025-01-28 at 3.12.24 AM.png";
import sp5 from "./Acer-logo-digital-green.png";
 import sp6 from "./ICICI_Bank_Logo.png";
 import sp7 from"./Screenshot 2025-01-29 at 11.29.47 PM.png";
import sp8 from "./Fashion Herald Logo.png";
import sp9 from "./Yourstory logo (2).png";
const sponsors = [sp1,sp2,sp3, sp4, sp9, sp8, sp6, sp5, sp7, sp8, sp9]; // List of all sponsor logos

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 pt-16 bg-gradient-to-b from-[#182954] relative">
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
          The flagship event of MAHE organized by E-Cell MIT Manipal
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
          ₹4 Lakh Prize Pool
        </motion.div>

        {/* Infinite Horizontal Carousel of Sponsor Logos */}
        <div className="w-full py-2 mt-10 relative">
          {/* Glow effect container */}
          <div className="absolute inset-x-0 top-0 flex justify-between">
            <div className="w-16 bg-gradient-to-r from-[#182954] to-[#22d3ee] opacity-50"></div>
            <div className="w-16 bg-gradient-to-l from-[#182954] to-[#22d3ee] opacity-50"></div>
          </div>

          <motion.div
            className="flex"
            animate={{
              x: ['0%', '-100%'],  // Start from 0%, then scroll to -100% (left to right)
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 7000,  // Control the speed here
                ease: 'linear', // Smooth continuous animation
              },
            }}
            style={{
              display: 'flex',
              minWidth: 'max-content',  // Ensure the container is wide enough for all logos
            }}
          >
            {/* Logos */}
            <div className="flex space-x-16">
              {/* Render the logos multiple times to ensure an infinite scroll */}
              {Array(10000).fill().map((_, index) => (
                <img
                  key={index}
                  src={sponsors[index % sponsors.length]} // Repeats logos in cycle
                  alt={`Sponsor ${index + 1}`}
                  className={`h-15 object-contain ${
                    index % sponsors.length === 1 || index % sponsors.length === 3
                      ? 'l:h-24 w-24' // Custom height and width for sp2 and sp3
                      : 'h-12' // Default height for other logos
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;

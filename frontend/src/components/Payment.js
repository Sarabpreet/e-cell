import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const Payment = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1a1f2e] to-[#0a0f1c]">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400">
            Secure Payment
          </h2>
          <p className="text-xl text-[#22d3ee]">
            Complete your registration with our secure payment gateway
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1a1f2e]/80 backdrop-blur-xl rounded-xl p-8 shadow-xl border border-[#22d3ee]/20"
        >
          <div className="flex justify-between mb-6">
            <div>
              <p className="text-gray-400 mb-1">Transaction ID:</p>
              <p className="text-[#22d3ee] text-lg">your_transaction_id_here</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 mb-1">Amount:</p>
              <p className="text-[#22d3ee] text-lg">₹100</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6 text-gray-300">
            <Lock className="w-4 h-4" />
            <p className="text-sm">Your payment is secured with industry-standard encryption</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#22d3ee] to-purple-500 text-white py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2"
          >
            Pay Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Payment;


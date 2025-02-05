import React from 'react';

const ComingSoon = () => {
  return (
    <section className="py-20 px-4" id="speakers">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mb-8">Speakers</h2>
        <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-[#22d3ee] mb-4">Coming Soon</h3>
          <p className="text-xl text-gray-300 mb-8">Our exciting lineup of industry leaders and innovators will be announced shortly. Stay tuned for updates!</p>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-16 bg-gradient-to-br from-[#22d3ee]/20 to-purple-400/20 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;


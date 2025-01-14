import React from 'react';

const speakers = [
  { id: 1, name: "Dr. Aisha Patel", role: "AI Ethics Researcher" },
  { id: 2, name: "Michael Rodriguez", role: "Tech Entrepreneur" },
  { id: 3, name: "Dr. Emily Watson", role: "Healthcare Innovator" },
  { id: 4, name: "James Park", role: "Venture Capitalist" }
];

const Speakers = () => {
  return (
    <section className="py-20 px-4" id="speakers">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mb-12">Speakers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="group">
              <div className="bg-white/10 rounded-lg p-6 hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-[#22d3ee]/20 to-purple-400/20 rounded-lg mb-4 overflow-hidden group-hover:opacity-80 transition-opacity">
                  <div className="w-full h-full flex items-center justify-center text-purple-400 opacity-50 group-hover:opacity-100 transition-opacity">
                    {speaker.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{speaker.name}</h3>
                <p className="text-[#22d3ee]">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-[#22d3ee] mb-4">More Speakers To Be Announced</h3>
          <p className="text-xl text-gray-300">Stay tuned for updates on our exciting lineup of industry leaders and innovators!</p>
          <div className="mt-8 flex justify-center space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-16 bg-gradient-to-br from-[#22d3ee]/20 to-purple-400/20 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;


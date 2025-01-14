import React from 'react';

const investors = [
  {
    id: 1,
    name: "Alex Chen",
    company: "Quantum Capital",
    description: "Specializes in early-stage investments in AI and robotics"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Green Tech Ventures",
    description: "Focuses on sustainable technology and clean energy startups"
  },
  {
    id: 3,
    name: "Raj Patel",
    company: "Innovate Partners",
    description: "Invests in disruptive technologies across various sectors"
  },
  {
    id: 4,
    name: "Emma Liu",
    company: "Future Fund",
    description: "Supports next-generation entrepreneurs in emerging markets"
  }
];

const VentureCapitalists = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0f1c] to-[#1a1f2e]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mb-4">Venture Capitalists</h2>
          <p className="text-xl text-[#22d3ee]">Connect with Top Investors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {investors.map((investor) => (
            <div
              key={investor.id}
              className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-400/20 to-[#22d3ee]/20 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">{investor.name}</h3>
              <p className="text-[#22d3ee] mb-2">{investor.company}</p>
              <p className="text-sm text-gray-300">{investor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VentureCapitalists;


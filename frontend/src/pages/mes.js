import React, { useState } from 'react';
import './vc.css';
import vc_photo from './bg.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const flagshipEvents = [
  {
    name: "PITCH TANK",
    description: "💸! This is a closed door event where you 🫡🫵, students and start-ups can pitch in your ideas to our esteemed judges who happen to be venture capitalists, angel investors and alumni"
  },
  {
    name: "INNOVATION MELA",
    description: "Experience the thrill of exploration as we bring together innovators, thinkers, and visionaries from diverse fields. The Innovation Mela is not just an event; it's a celebration of human creativity, pushing the boundaries of what's possible."
  }
];

const panIndiaEvents = [
  {
    name: "CASEMAZE",
    description: "Have a bit of interest in understanding and creating optimal solutions for companies?🤓🧐Case-Maze is here to get your brain cells running!."
  },
  {
    name: "PROD-A-TRON",
    description: "PROD-A-TRON provides a dynamic challenge, simulating real-world scenarios where participants must make strategic decisions for product success!📈📈"
  },
  {
    name: "PROMOQUEST",
    description: "💪 Immerse yourself in a spirited competition where you'll face off with like-minded individuals, showcase your marketing knowledge, and vie for some seriously cool prizes."
  }
];

const maheEvents = [
  {
    name: "MONEYQUEST",
    description: "An exhilarating event that combines the excitement of a treasure hunt with the strategic thrill of a bidding competition involving a dynamic landscape of strategy, negotiation, and resource management"
  },
  {
    name: "REROUTE AND RESURGE",
    description: "Dive into the fascinating world of innovation as we present you with real problem statements derived from the setbacks of well-known startups"
  },
  {
    name: "ENTREPREUNERIAL JACKPOT",
    description: "A thrilling entrepreneurial game with three rounds. Accumulated tokens are crucial, leading to the grand 'Innovation Showcase Finale' where surviving teams present AI solutions for final token rewards"
  }
];

const vcList = [
  { id: 1, name: "VC Name 1", photo: "https://via.placeholder.com/150" },
  { id: 2, name: "VC Name 2", photo: "https://via.placeholder.com/150" },
  { id: 3, name: "VC Name 3", photo: "https://via.placeholder.com/150" },
  { id: 4, name: "VC Name 4", photo: "https://via.placeholder.com/150" },
  { id: 5, name: "VC Name 5", photo: "https://via.placeholder.com/150" },
  { id: 6, name: "VC Name 6", photo: "https://via.placeholder.com/150" },
];

function EventSection({ title, events, gradient }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active index
  };

  return (
    <div className={`py-6 px-4 mb-8 rounded-lg bg-gradient-to-r ${gradient} text-black`}>
      <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className={`p-6 bg-transparent border border-white rounded-lg shadow-lg h-full cursor-pointer transform transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'scale-105' : ''
            }`}
            onClick={() => handleClick(index)} // Toggle scale animation
          >
            <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Mes() {
 
  return (
    <div>
    <Navbar/>
    <div className="bg-[#106B88] text-white min-h-screen">
      <div className="container mx-auto">
        {/* Events Section */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-white font-serif">EVENTS</h1>
        </div>
        <div>
          <EventSection title="FLAGSHIP" events={flagshipEvents} gradient="from-[#106B88] to-[#64CDC6]" />
          <EventSection title="PAN INDIA" events={panIndiaEvents} gradient="from-[#106B88] to-[#64CDC6]" />
          <EventSection title="MAHE" events={maheEvents} gradient="from-[#64CDC6] to-[#106B88]" />
        </div>

        {/* VC Section */}
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Mes;

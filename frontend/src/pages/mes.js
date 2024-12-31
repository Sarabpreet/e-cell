import React from 'react';
import EventSection from '../components/EventSection';
import "./vc.css";
import vc_photo from './bg.jpeg';


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
  { id: 1, name: "VC Name 1", photo: vc_photo },
  { id: 2, name: "VC Name 2", photo: vc_photo },
  { id: 3, name: "VC Name 3", photo: vc_photo },
  { id: 4, name: "VC Name 4", photo: vc_photo },
  { id: 5, name: "VC Name 5", photo: vc_photo },
  { id: 6, name: "VC Name 6", photo: vc_photo },
];

function Mes() {
  return (
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
   
  );
}

export default Mes;
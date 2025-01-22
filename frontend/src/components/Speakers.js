import React from 'react';
import img1 from './velumani.png';
import ashneer from './ashneer.png';
import d1 from './deep tech 1.png';
import d2 from './deep tech 2.png';
import d3 from './deep tech 3.png';
import d4 from './deep tech 4.png';
import dineshPai from './dinesh pai.png';
import i1 from './info tech 1.png';
import i2 from './info tech 2.png';
import i3 from './info tech 3.png';
import i4 from './info tech 4.png';
import i5 from './info tech 5.png';
import iqlipseNova from './iqlipse nova.png';
import rs from './raj shamani.png';
import a1 from  './aunty.png';
import a2 from  './chashma.png';
import a3 from  './abdul.png';
import a4 from  './ladki.png';
import a5 from  './faculty-24.png';
import a6 from  './a6.png';
const speakers = [
  { id: 9, name: "Dr. Arokiaswamy Velumani", role: "Founder, Thyrocare", description: "Keynote Speaker", imageUrl: img1 },
 {id:100, name:"Ashneer Grover",role:"Shark in 1st Season of Shark Tank India.Previously, MD and Co - Founder at BharatPe",description:"Speaker",imageUrl:ashneer},
  { id: 11, name: "Raj Shamani", role:"Founder: House of X, Host: Figuring Out (India’s #1 Podcast - Spotify) Forbes 30 Under 30", description: "Influencer",imageUrl: rs },
  { id: 13, name: "Iqlipse Nova",role :"Co-founder : BigBrainco , Singer",description: "Influencer", imageUrl: iqlipseNova },
  { id: 12, name: "Dinesh Pai", role: "VP, Zerodha & contributing to climate initiatives and sustainability through Rainmatter Climate Foundation", description: "Investing in Impact (Fireside Chat) ", imageUrl:dineshPai }
];

const Deeptech = [
  { id: 5, name: "Tushar Bhatnagar", role: "Founder, VidBoard AI", description: "AI Powered Futures", imageUrl: d1 },
  { id: 6, name: "Silky Singh", role: "Founder, Finomial", imageUrl: d3 },
  { id: 7, name: "Manoj Sankar", role: "Founder, Nemo.Care", imageUrl: d2 },
  { id: 8, name: "Amit Das", role: "Founder, Think 360 AI", imageUrl: d4 }
];

const Infotech = [
  { id: 1, name: "Ishan Sukul", role: "Co-Founder, Kreo", description: "From Hostel Rooms to Board Rooms", imageUrl: i1 },
  { id: 2, name: "Shroat Mehta", role: "Founder’s Office, Kreo", imageUrl: i5 },
  { id: 3, name: "Dhwanit Shah", role: "Founder, E-Cell MIT", imageUrl: i4 },
  { id: 4, name: "Rima Naware", role: "Co-Founder, ZigMe", imageUrl: i3 },
  {id:20,name:"Ekta Sharma",role:"Founder, E-Value Advisors",imageUrl:i2}
];

const FamilyBusiness = [
  { id: 15, name: "Dr. Sampath Dorairajan", role: "Business Coach", description: "Family-Owned Organisations", imageUrl: a5 },
  {id:21, name:"Mr. S S Gopala Rathnam",role:"Chairperson-SSG",description:"Insurance Broker",imageUrl:a6},
  { id: 16, name: "Ms. Vathika Pai", role: "Proprietor", description: "Vathika International Travels", imageUrl: a1 },
  { id: 17, name: "Mr. Vineeth Vij", role: "Head of Sales", description: "Suvikar Enterprises", imageUrl: a2},
  { id: 18, name: "Ms. Dhara Bhasin", role: "Founder", description: "Baylink", imageUrl: a4 },
  { id: 19, name: "Mr. Ahmed Mudassar", role: "Partner", description: "P.B Abdul Hameed & Sons", imageUrl: a3 }
 
];


const Speakers = () => {
  const getGridClass = (arrLength) => {
    if (arrLength === 2) {
      return "grid-cols-1 md:grid-cols-2 justify-center"; // Center 2 items
    } else if (arrLength === 3) {
      return "grid-cols-1 md:grid-cols-3 justify-center"; // Center 3 items
    } else {
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"; // Default layout
    }
  };

  const renderSpeakers = (category, title) => (
    <div className="container mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mb-12">{title}</h2>
      <div className={`grid gap-8 ${getGridClass(category.length)}`}>
        {category.map((speaker) => (
          <div key={speaker.id} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors flex flex-col">
            <img
              src={speaker.imageUrl}
              alt={speaker.name}
              className="w-full h-65 object-contain rounded-lg mb-4 bg-gray-800" // Maintains aspect ratio, centers smaller images
            />
            <h3 className="text-xl font-semibold text-white mb-2">{speaker.name}</h3>
            <p className="text-[#22d3ee] mb-2">{speaker.role}</p>
            <p className="text-sm text-gray-300 flex-grow">{speaker.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4" id="speakers">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mb-12">Keynote Speakers and Influencers' Conclave</h2>
        <div className={`grid gap-8 ${getGridClass(speakers.length)}`}>
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors flex flex-col">
              <img
                src={speaker.imageUrl}
                alt={speaker.name}
                className="w-full h-65 object-contain rounded-lg mb-4 bg-gray-800" // Keeps image aspect ratio intact
              />
              <h3 className="text-xl font-semibold text-white mb-2">{speaker.name}</h3>
              <p className="text-[#22d3ee] mb-2">{speaker.role}</p>
              <p className="text-sm text-gray-300 flex-grow">{speaker.description}</p>
            </div>
          ))}
        </div>
      </div>
      {renderSpeakers(Deeptech, "Deeptech Speakers")}
      {renderSpeakers(Infotech, "Infotech Speakers")}
      {renderSpeakers(FamilyBusiness, "Family Business Speakers")}
    </section>
  );
};

export default Speakers;

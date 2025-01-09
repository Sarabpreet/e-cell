import React, { useState } from 'react';
import './vc.css';
import vc_photo from './bg.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BlogList } from '../components/blogCard';

import { vcList, panIndiaEvents, maheEvents, flagshipEvents } from '../assets/mesData';
import Meta from '../components/meta';

function EventSection({ title, events, gradient }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active index
  };
  return (
    <div className={`py-6 px-4 mb-8 rounded-lg bg-gradient-to-r ${gradient} text-black`}>
      <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
      <div
        className="grid ga\
        
        p-6 justify-center"
        style={{
          display: "flex", // Use flexbox for centering
          justifyContent: "center", // Horizontally center items
          alignItems: "center", // Vertically center items if needed
        }}
      >
        {events.map((event, index) => (
          <div
          key={index}
          className={`p-6 bg-transparent border border-white rounded-lg shadow-lg h-full cursor-pointer transform transition-all duration-300 ease-in-out ${activeIndex === index ? 'scale-105' : ''}`}
          onClick={() => handleClick(index)}
          style={{
            textAlign: "center", // Center align text
            maxWidth: "400px", // Optional: Restrict the width of the card
          }}
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
      <Meta title='Manipal Entrepreneurship Summit (MES) | E-Cell | MIT Manipal' />
      <Navbar />
      {/* <div className="bg-[#106B88] text-white min-h-screen">
        <div className="container mx-auto"> */}
          {/* Events Section */}
          {/* <div className="text-center py-6">
            <h1 className="text-4xl font-bold text-white font-serif">EVENTS</h1>
          </div>
          <div>
            <EventSection title="FLAGSHIP" events={flagshipEvents} gradient="from-[#106B88] to-[#64CDC6]" />
            <EventSection title="PAN INDIA" events={panIndiaEvents} gradient="from-[#106B88] to-[#64CDC6]" />
            <EventSection title="MAHE" events={maheEvents} gradient="from-[#64CDC6] to-[#106B88]" />
          </div> */}

          {/* VC Section */}
        {/* </div>
      </div> */}
      <main>
        <section className="py-12 bg-gradient-to-br from-blue-dark via-blue-mid to-blue-light">
          <div className="container mx-auto px-4 md:px-10 lg:px-16">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-blue-pale">Flagship Events</h1>
            </header>

            <BlogList posts={flagshipEvents} />

            <header className="my-12">
              <h1 className="text-4xl font-bold text-blue-pale">Pan India</h1>
            </header>

            <BlogList posts={panIndiaEvents} />

            <header className="my-12">
              <h1 className="text-4xl font-bold text-blue-pale">MAHE</h1>
            </header>

            <BlogList posts={maheEvents} />

            {/* VC Section */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Mes;

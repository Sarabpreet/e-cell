import React from 'react';
import { flagshipEvents, panIndiaEvents, maheEvents } from '../assets/mesData';

const EventCard = ({ event }) => (
  <div className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
    <div className="relative h-48 w-full">
      <img 
        src={event.image} 
        alt={event.title} 
        className="h-full w-full object-cover" 
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-[#22d3ee]">{event.title}</h3>
      <p className="text-gray-300 mb-4">{event.description}</p>
      {event.postURL && (
        <a
          href={event.postURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
        >
          Learn More
        </a>
      )}
    </div>
  </div>
);

const Events = () => {
  return (
    <section className="py-20 px-4" id="events">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mb-12">
          Events
        </h2>
        
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#22d3ee] mb-8 text-center">
            Flagship & MAHE Events
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {flagshipEvents.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
            {maheEvents.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-[#22d3ee] mb-8 text-center">
            Pan India Events
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {panIndiaEvents.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

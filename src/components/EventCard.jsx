import React from 'react';

interface EventCardProps {
  name: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ name, description }) => {
  return (
    <div className="h-full bg-gray-600/20 backdrop-blur-sm p-6 rounded-lg flex flex-col">
      <h3 className="text-xl font-bold text-white mb-4">{name}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      <button className="mt-auto pt-4 text-white hover:text-blue-300 text-sm font-medium">
        Know More →
      </button>
    </div>
  );
};

export default EventCard;
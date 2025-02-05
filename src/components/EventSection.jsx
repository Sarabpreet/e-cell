import React from 'react';
import EventCard from './EventCard';

interface EventSectionProps {
  title: string;
  events: Array<{ name: string; description: string }>;
  gradient: string;
}

const EventSection: React.FC<EventSectionProps> = ({ title, events, gradient }) => {
  const renderTitle = () => {
    if (title === "PAN INDIA") {
      return (
        <>
          <div className="text-[120px] font-bold leading-none">PAN</div>
          <div className="text-[120px] font-bold leading-none mt-4">INDIA</div>
        </>
      );
    } else if (title === "FLAGSHIP") {
      return (
        <>
          <div className="text-[120px] font-bold leading-none">FLAG</div>
          <div className="text-[120px] font-bold leading-none mt-4">SHIP</div>
        </>
      );
    } else {
      return (
        <div className="text-[120px] font-bold leading-none">{title}</div>
      );
    }
  };

  return (
    <div className={`h-screen relative bg-gradient-to-br ${gradient} flex items-center`}>
      <div className="flex items-center w-full">
        {/* Title section */}
        <div className="w-1/4 pl-12 text-white/30">
          {renderTitle()}
        </div>
        
        {/* Events section */}
        <div className="w-3/4 flex justify-end pr-12">
          <div className="max-w-[280px] overflow-x-auto scrollbar-hide">
            <div className="flex gap-6" style={{ width: `${events.length * 280 + (events.length - 1) * 24}px` }}>
              {events.map((event, index) => (
                <div key={index} className="w-[280px] flex-none">
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
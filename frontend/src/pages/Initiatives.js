import React from "react";
//import Header from "./Header"; // Import Header component
//import Footer from "./Footer"; // Import Footer component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InitiativeCard = ({ image, title, description }) => {
  return (
    <div
    className="bg-white rounded-lg shadow-lg overflow-hidden w-80 border-4 border-transparent transform transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1 hover:rotate-1 hover:border-blue-mid"
  >
      <img src={image} alt={`Image for ${title}`} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

const Initiatives = () => {
  const initiatives = [
    {
      image: "",
      title: "E-10 Summit",
      description: `The inaugural E10 Entrepreneurship Summit, held on January 16, 2024, brought together the entrepreneurial communities of MAHE colleges. Organized by E-Cell, MIT Manipal, the event tackled challenges like securing sponsorships, boosting student interest, and improving networking. Insightful discussions set the stage for a stronger entrepreneurial ecosystem in Manipal, inspiring future collaborations and innovation.`,
    },
    {
      image: "https://img.ibb.co/Q8BsSs0",
      title: "Startup Scoop",
      description: `Startup Scoop is a bi-monthly newsletter where the latest news and updates from the 
dynamic world of business and entrepreneurship are delivered. Trending topics, and inspiring success stories are highlighted to keep readers 
informed. Startups from MAHE are given a spotlight in each edition, with their journeys and 
achievements showcased.`,
    },
    {
      image: "https://i.ibb.co/Q8BsSs0",
      title: "Business Clinic",
      description: `Business Clinic is a structured approach to helping startups refine ideas, validate 
feasibility, and identify target markets. It emphasizes solving key problems, understanding 
customer needs, and analyzing competition. Startups test core functionality, gather user 
feedback, and launch simplified products, with progress guided by key performance 
metrics to ensure market readiness.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
    

      <main className="flex justify-center items-center gap-8 flex-wrap p-8 bg-gray-100 flex-grow">
        {initiatives.map((initiative, index) => (
          <InitiativeCard
            key={index}
            image={initiative.image}
            title={initiative.title}
            description={initiative.description}
          />
        ))}

      </main>
      <Footer/>
      
    </div>
  );
};

export default Initiatives;

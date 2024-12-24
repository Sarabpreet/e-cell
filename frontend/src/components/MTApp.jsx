import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aubg from "./aubg.jpg";
import { Typewriter } from 'react-simple-typewriter';
// Placeholder Images for the Carousel
const images = [
  "https://i.ibb.co/X8hgmRT/jm.png",
  "https://i.ibb.co/D856dB7/img.png",
  "https://i.ibb.co/grytw84/bn.png",
];

const MTApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Intro and Carousel Section */}
      <section className="py-16 bg-white text-black-800 bg-cover"
      style={{ backgroundImage: `url(${aubg})` }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Carousel on the Left */}
            <div className="w-full lg:w-1/2">
              <Slider {...sliderSettings} className="rounded-lg overflow-hidden shadow-lg">
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Event ${index + 1}`}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                ))}
              </Slider>

              {/* Thumbnails below the Carousel */}
              <div className="flex justify-center gap-4 mt-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-24 h-16 border-2 rounded cursor-pointer ${
                      currentSlide === index ? "border-blue-500" : "border-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Introduction Content on the Right */}
      
<div className="w-full lg:w-1/2 relative opacity-70">
  {/* Overlay to lighten the background */}
  <div className="absolute inset-0 bg-white opacity-170"></div> {/* Semi-transparent black overlay */}
  
  {/* Content goes here */}
  <div className="relative font-style:mon z-10 text-black p-6">
    <h2 className="text-4xl font-bold mb-6">About E-Cell MIT Manipal</h2>
    <p className=" leading-relaxed text-sm mb-4 font-bold whitespace-pre-line">
      E-Cell MIT Manipal is a student-led organization that fosters entrepreneurial
      thinking, encourages innovation, and supports startups. We aim to create an
      ecosystem where ideas can thrive and leaders are born.
    </p>
    <p className=" leading-relaxed text-sm mb-4 font-bold whitespace-pre-line">
      Through a combination of workshops, events, and mentorship programs, we provide
      the tools and resources needed to turn ideas into successful ventures.
    </p>
    <p className=" leading-relaxed text-sm mb-4 font-bold whitespace-pre-line">
      Join us on this journey to innovation and leadership. Together, let's build
      something extraordinary!
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-100 text-black-700 "
      

      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Our Vision & Mission</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Vision */}
            <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
              To empower entrepreneurs by providing them with a vibrant start-up ecosystem and developing ideas into successful ventures through dedicated mentorship.

              </p>
            </div>
            {/* Mission */}
            <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
              To inculcate the spirit of entrepreneurship within the student community through greater awareness and act as a one-stop destination for all students looking to convert their ideas into viable start-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-center">
          </p>
        
        </div>
      </section>
    </div>
  );
};

export default MTApp;

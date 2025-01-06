import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MTApp from '../components/MTApp';
import Meta from '../components/meta';

const AboutUs = () => {
  return (
    <div>
      <Meta />
      <Navbar />
      {/* Here comes the Meet the Team component */}
      <MTApp />
      {/* Here comes the footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;

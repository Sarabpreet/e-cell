import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MTApp from '../components/MTApp';
import Meta from '../components/meta';

const AboutUs = () => {
  return (
    <div>
      <Meta title='About E-Cell | Official Entrepreneurship club of MIT Manipal' />
      <meta name="description" content="Learn about E-Cell MIT Manipal, our mission to foster entrepreneurship, and our efforts to create an innovative startup ecosystem."/>
<meta name="keywords" content="About E-Cell, MIT Manipal, Startup Support, Innovation, Entrepreneurship Culture, Business Growth"/>
<meta name="author" content="E-Cell MIT Manipal"/>

      <Navbar />
      {/* Here comes the Meet the Team component */}
      <MTApp />
      {/* Here comes the footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;

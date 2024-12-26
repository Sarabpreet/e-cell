import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-blue-dark text-blue-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Know More Section */}
          <div>
            <h4 className=" text-lg mb-4">Know More</h4>
            <ul className="space-y-2">
              <li><a href="/Aboutus" className="text-blue-pale hover:text-blue-mid">About Us</a></li>
              <li><a href="/speakers" className="text-blue-pale hover:text-blue-mid">Speakers</a></li>
              <li><a href="/events" className="text-blue-pale hover:text-blue-mid">Events</a></li>
              <li><a href="/contactus" className="text-blue-pale hover:text-blue-mid">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li><p>Ashutosh Swain<br/> <span className="text-blue-pale">+91-89962977444</span></p></li>
              <li><p>Mahima Sharma  <br/><span className="text-blue-pale">+91-8890461763</span></p></li>
              <li><p>Saksham Goel<br/> <span className="text-blue-pale">+91-8240606650</span></p></li>
            </ul>
          </div>

          {/* Location Section with Google Maps Image */}
          <div>
            <h4 className="font-bold text-lg mb-4">Location</h4>
            <div className="mb-4">
            <a
  href="https://www.google.com/maps/search/e+cell+mit+manipal/@13.3515236,74.7904158,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 underline"
>
  E-Cell MIT Location
</a>

            </div>
            <p className="text-blue-pale">E-Cell MIT Manipal, Manipal, India</p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-6 border-blue-mid" />

        {/* Social Media Section */}
        <div className="text-center">
          <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/ecell.mit/" target="_blank" rel="noreferrer" className="text-blue-pale hover:text-blue-mid">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/company/ecellmit" target="_blank" rel="noreferrer" className="text-blue-pale hover:text-blue-mid">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
            <a href="https://www.youtube.com/@e-cellmit" target="_blank" rel="noreferrer" className="text-blue-pale hover:text-blue-mid">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://x.com/ecellmit/" target="_blank" rel="noreferrer" className="text-blue-pale hover:text-blue-mid">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-blue-light mt-8">
          <p>&copy; 2024 E-Cell MIT Manipal. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

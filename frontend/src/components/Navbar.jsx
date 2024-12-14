import React, { useState } from 'react';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className='navbar'>
      <button className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <img src="" alt="Logo" className='logo' />
      
      <ul className={isMenuOpen ? 'active' : ''}>
        <li>Home</li>
        <li>Initiatives</li>
        <li>Blogs</li>
        <li>About Us</li>
        <li>The Team</li>
        <li>MES</li>
        <li>SSP</li>
      </ul>
    </div>
  );
}

export default Navbar;

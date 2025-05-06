import React, { useState } from 'react';
import './Header.css';
import logoImg from '../assets/Bite.png'; // Replace with your logo path
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="firstline">
      <img src={logoImg} alt="Logo" className="logo" />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      <ul className={`nav ${menuOpen ? 'show' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;

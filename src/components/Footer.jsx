import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Know more, watch less</h3>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} Bite Recap. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

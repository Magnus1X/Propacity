import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-bottom">&copy; {new Date().getFullYear()} Bite Recap. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

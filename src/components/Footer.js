// src/components/Footer.js
import React from 'react';
import './style/Footer.css';

const Footer = () => (
  <footer className="footer text-center">
    <p>&copy; {new Date().getFullYear()} NK Laundry Service. All rights reserved.</p>
  </footer>
);

export default Footer;

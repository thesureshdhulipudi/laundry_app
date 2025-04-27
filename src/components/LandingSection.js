// src/components/LandingSection.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './style/LandingSection.css';

const LandingSection = () => {
  return (
    <div className="landing-section">
      <Container className="landing-content">
        <h1>Best Laundry & Dry Clean Service in India</h1>
        <p>Fresh and reliable laundry and dry cleaning service</p>
        <p>Save up to 20% on your first order!</p>
        <Button variant="success" size="lg">Schedule Your Pickup</Button>
      </Container>
    </div>
  );
};

export default LandingSection;

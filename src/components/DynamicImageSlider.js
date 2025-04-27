import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import image1 from '../images/1.webp';
import image2 from '../images/2.webp';

const DynamicImageSlider = ({onBookNow}) => {
  // Array of image URLs
  const images = [image1,image2
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 2 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`slide-${index}`}
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-4">Best Laundry & Dry Clean Service in India</h1>
              <p>Fresh and reliable laundry and dry cleaning service</p>
              <p>Save up to 20% on your first order!</p>
              <Button variant="success" size="lg" onClick={onBookNow}>Schedule Your Pickup</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicImageSlider;

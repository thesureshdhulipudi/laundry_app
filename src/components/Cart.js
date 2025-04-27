// src/components/Cart.js
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Cart = ({ orderDetails }) => {
  if (!orderDetails) {
    return null;
  }

  const { name, phoneNumber, address, googleLocation, services } = orderDetails;

  return (
    <Card className="mt-4">
      <Card.Header as="h5">Order Summary</Card.Header>
      <ListGroup variant="flush">
        <ListGroupItem><strong>Name:</strong> {name}</ListGroupItem>
        <ListGroupItem><strong>Phone:</strong> {phoneNumber}</ListGroupItem>
        <ListGroupItem><strong>Address:</strong> {address}</ListGroupItem>
        <ListGroupItem>
          <strong>Google Location:</strong> <a href={googleLocation} target="_blank" rel="noopener noreferrer">View on Maps</a>
        </ListGroupItem>
        <ListGroupItem>
          <strong>Selected Services:</strong>
          <ul className="mb-0">
            {Object.entries(services)
              .filter(([_, isSelected]) => isSelected)
              .map(([service]) => (
                <li key={service}>{service.replace(/([A-Z])/g, ' $1')}</li>
              ))}
          </ul>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Cart;

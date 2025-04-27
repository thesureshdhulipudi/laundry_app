// src/components/OrdersPage.js
import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

const OrdersPage = () => {
  const [ordersList, setOrdersList] = useState([]);

  // Load orders from localStorage
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('ordersList')) || [];
    setOrdersList(savedOrders);
  }, []);

  return (
    <Container className="my-4">
      <h2>All Orders</h2>
      {ordersList.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Google Location</th>
              <th>Services</th>
            </tr>
          </thead>
          <tbody>
            {ordersList.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.phoneNumber}</td>
                <td>{order.address}</td>
                <td>
                  <a href={order.googleLocation} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </td>
                <td>
                  <ul>
                    {Object.entries(order.services)
                      .filter(([_, isSelected]) => isSelected)
                      .map(([service]) => (
                        <li key={service}>{service.replace(/([A-Z])/g, ' $1')}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No orders found.</p>
      )}
    </Container>
  );
};

export default OrdersPage;

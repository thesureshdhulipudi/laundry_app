// src/components/OrderModal.js
import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style/OrderModal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const OrderModal = ({ orderModalShow, orderModalHandleClose, handleOrderSubmit, messgeModalShow,messageModalHandleClose }) => {
  const [order, setOrder] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    googleLocation: '',
    customerSectorServices: {
      TransportLaundry: false,
      ResidentialLaundry: false,
      PgAndHostelLaundry: false,
      HotelLaundry: false,
      CommercialLaundry: false,
      HospitalLaundry	: false,
      IndustrialLaundry: false,
      GymAndFitnessLaundry: false,
      EventLaundry	: false,
      MilitaryAndDefenseLaundry	: false,
    },
    services: {
      WashAndFold: false,
      WashAndIron: false,
      DryCleaning: false,
      IroningOnly: false,
      CommercialLaundry: false,
      PickupAndDeliveryLaundry: false,
      EcoFriendlyLaundry: false,
      SpecialtyItemCleaning: false,
      OnDemandLaundry: false,
      SelfServiceLaundromat: false,
    },
  });

  const servicesDescriptions = {
    WashAndFold: 'Regular clothes are washed, dried, folded, and returned. No ironing or special treatment.',
    WashAndIron: 'Clothes are washed, dried, and ironed/pressed. Ready to wear.',
    DryCleaning: 'Uses chemical solvents (not water) to clean delicate or expensive clothes (like suits, silk, etc.).',
    IroningOnly: 'Customer gives already washed clothes just for ironing.',
    CommercialLaundry: 'Large-scale services for businesses like hotels, hospitals, gyms, and restaurants.',
    PickupAndDeliveryLaundry: 'Home pickup and drop-off services for customer convenience.',
    EcoFriendlyLaundry: 'Uses biodegradable detergents and energy-efficient machines.',
    SpecialtyItemCleaning: 'Cleaning for specific items like wedding dresses, leather jackets, shoes, curtains, carpets, etc.',
    OnDemandLaundry: 'App-based, same-day, or 24-hour laundry service for urgent needs.',
    SelfServiceLaundromat: 'Customers use machines provided by the business to do their own laundry.',
  };

  const customerSectorServicesDescriptions = {
    TransportLaundry: 'For airlines, buses, trains — cleaning seat covers, staff uniforms, blankets.',
    ResidentialLaundry: 'For individuals, families, apartments, houses — washing personal clothes, bedding, etc.',
    PgAndHostelLaundry: 'For hostels, PGs — washing bed linens, towels, uniforms, curtains.',
    HotelLaundry: 'For hotels, resorts, guest houses — washing towels, bed linens, staff uniforms, curtains.',
    CommercialLaundry:'For offices, schools, malls — uniforms, curtains, carpets, cleaning supplies.',
    HospitalLaundry:'For hospitals, clinics, nursing homes — cleaning scrubs, uniforms, bedsheets, curtains, and sanitizing medical fabrics.',
    IndustrialLaundry:'For factories, manufacturing plants — washing heavy-duty uniforms, coveralls, PPEs.',
    GymAndFitnessLaundry:'For gyms, spas, fitness centers — towels, mats, uniforms.',
    EventLaundry:'For weddings, conferences — cleaning event decorations, tablecloths, chair covers.',
    MilitaryAndDefenseLaundry:'For army bases, police — uniform cleaning, special gear sanitization.'
  };

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setOrder((prevOrder) => ({
        ...prevOrder,
        services: { ...prevOrder.services, [name]: checked },
      }));
    } else {
      setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
    }
  };

  const handleChangeCustomerSectorServices = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setOrder((prevOrder) => ({
        ...prevOrder,
        customerSectorServices: { ...prevOrder.customerSectorServices, [name]: checked },
      }));
    } else {
      setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
    }
  };

  const handleSubmit = () => {
    handleOrderSubmit(order);
    navigate('/orders'); // Redirect to "All Orders" page after order submission
  };

  return (
    <div >
      <Modal show={orderModalShow} onHide={orderModalHandleClose} dialogClassName="custom-modal-width">
        <Modal.Header closeButton>
          <Modal.Title>Book a Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={order.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label className="fw-bold">Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phoneNumber"
                    value={order.phoneNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formAddress">
                  <Form.Label className="fw-bold">Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={order.address}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGoogleLocation">
                  <Form.Label className="fw-bold">Google Location</Form.Label>
                  <Form.Control
                    type="url"
                    name="googleLocation"
                    value={order.googleLocation}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formCustomerSectorServices">
              <Form.Label className="fw-bold">Customer Sector Services</Form.Label>
              <div className="d-flex flex-wrap">
                {Object.keys(order.customerSectorServices).map((service) => (
                  <div key={service} className="d-flex align-items-center mb-2 me-4">
                    <Form.Check
                      type="checkbox"
                      name={service}
                      label={service.replace(/([A-Z])/g, ' $1')}
                      checked={order.customerSectorServices[service]}
                      onChange={handleChangeCustomerSectorServices}
                      className="me-2"
                    />
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip>
                          {customerSectorServicesDescriptions[service] || 'No description available.'}
                        </Tooltip>
                      }
                    >
                      <i className="bi bi-info-circle" style={{ cursor: 'pointer' }}></i>
                    </OverlayTrigger>
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="formServices">
              <Form.Label className="fw-bold">Services</Form.Label>
              <div className="d-flex flex-wrap">
                {Object.keys(order.services).map((service) => (
                  <div key={service} className="d-flex align-items-center mb-2 me-4">
                    <Form.Check
                      type="checkbox"
                      name={service}
                      label={service.replace(/([A-Z])/g, ' $1')}
                      checked={order.services[service]}
                      onChange={handleChange}
                      className="me-2"
                    />
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip>
                          {servicesDescriptions[service] || 'No description available.'}
                        </Tooltip>
                      }
                    >
                      <i className="bi bi-info-circle" style={{ cursor: 'pointer' }}></i>
                    </OverlayTrigger>
                  </div>
                ))}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={orderModalHandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal className="modal-header-centered"  show={messgeModalShow} onHide={messageModalHandleClose}>
        <Modal.Header closeButton >
          <Modal.Title>You have successfully submitted the Order!! Our executive will reachout to you soon...</Modal.Title>
        </Modal.Header>
      </Modal>

    </div>
  );
};

export default OrderModal;

// Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTshirt, FaTruck, FaLeaf, FaSteam, FaCouch, FaHandPaper, FaRecycle, FaCut } from 'react-icons/fa';
import './style/OurServices.css';
const services = [
  {
    title: "Wash & Fold Service",
    icon: <FaTshirt />,
    description: "We handle all your laundry needs with care. Just drop off your dirty laundry, and we'll wash, dry, and fold it neatly for you.",
    turnaround: "24-48 hours",
    perfectFor: "Everyday clothes, linens, towels"
  },
  {
    title: "Dry Cleaning",
    icon: <FaSteam />,
    description: "Delicate and specialty garments receive professional dry cleaning for spotless and wrinkle-free results.",
    turnaround: "48-72 hours",
    perfectFor: "Suits, dresses, coats, and delicate fabrics"
  },
  {
    title: "Pickup & Delivery",
    icon: <FaTruck />,
    description: "We make laundry convenient with our door-to-door service. Schedule a pickup, and we'll take care of the rest, delivering your clean clothes back to your doorstep.",
    availability: "Monday - Saturday",
    perfectFor: "Busy professionals, families, seniors"
  },
  {
    title: "Ironing & Pressing",
    icon: <FaHandPaper />,
    description: "Get wrinkle-free, professionally ironed clothes with our expert pressing service.",
    turnaround: "24 hours",
    perfectFor: "Formal wear, office attire, and other wrinkle-prone garments"
  },
  {
    title: "Bedding & Linen Service",
    icon: <FaCouch />,
    description: "Freshen up your bedding and linens with our specialized washing process designed for bulkier items.",
    turnaround: "24-48 hours",
    perfectFor: "Comforters, bed sheets, pillowcases, and blankets"
  },
  {
    title: "Stain Removal",
    icon: <FaLeaf />,
    description: "Our specialists use industry-grade techniques to remove tough stains from your favorite items.",
    perfectFor: "Stubborn stains on any type of fabric"
  },
  {
    title: "Alterations & Repairs",
    icon: <FaCut />, // Font Awesome "cut" icon for alterations
    description: "Small repairs, hemming, and other adjustments to make sure your clothes fit perfectly and last longer.",
    availability: "By appointment",
    perfectFor: "Torn seams, broken zippers, resizing"
  },
  {
    title: "Eco-Friendly Options",
    icon: <FaRecycle />,
    description: "Choose our eco-friendly service, which uses biodegradable detergents and energy-saving methods to keep both your clothes and the planet clean.",
    perfectFor: "Environmentally-conscious customers"
  },
];

const OurServices = () => {
    return (
        <div className="services-section py-1 border border-info shadow-sm"> {/* Added a new class for services section */}
          <Container className="my-1">
            <h2 className="text-center mb-4 text-warning">Our Services</h2>
            <Row>
              {services.map((service, index) => (
                <Col sm={6} md={3} lg={3} key={index} className="mb-4">
                  <Card className="h-100 border border-info shadow-sm bg-light text-dark hover-card">
                    <Card.Body className="text-center">
                      <div className="mb-3 fs-1 text-primary">
                        {service.icon}
                      </div>
                      <Card.Title className="fw-bold text-info">{service.title}</Card.Title>
                      <Card.Text className="mt-3 text-secondary">
                        <p>{service.description}</p>
                        {service.turnaround && (
                          <p><strong>Turnaround Time:</strong> {service.turnaround}</p>
                        )}
                        {service.availability && (
                          <p><strong>Availability:</strong> {service.availability}</p>
                        )}
                        <p><strong>Perfect For:</strong> {service.perfectFor}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      );
    };
export default OurServices;

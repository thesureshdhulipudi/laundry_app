import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Nav, Image } from 'react-bootstrap';
import './style/HowWeWork.css';

// Import images for each step
import image1 from '../images/howwework1.jpg'; 
import image2 from '../images/howwework1.jpg';
import image3 from '../images/howwework1.jpg';
import image4 from '../images/howwework1.jpg';
import image5 from '../images/howwework1.jpg';
// import image2 from './path-to-your-image2.png';
// import image3 from './path-to-your-image3.png';
// import image4 from './path-to-your-image4.png';

const HowWeWork = () => {
    // Step selection state
    const [activeStep, setActiveStep] = useState(1);

    // Data for each step
    const steps = [
        {
            id: 1,
            title: "Gather Your Laundry",
            description: "Simply gather up all your clothes in one place. We make it easy for you to pack up everything without hassle.",
            points: [
                "Pack everything in a bag for a quick pickup.",
                "No need to sort – we’ll take care of that for you!"
            ],
            image: image1
        },
        {
            id: 2,
            title: "We Pick It Up",
            description: "Schedule a pickup at a time that works best for you. Our team will come to your doorstep, saving you time and effort.",
            points: [
                "Flexible pickup times to fit your schedule.",
                "Contactless pickup options available for convenience."
            ],
            image: image2
        },
        {
            id: 3,
            title: "Fresh & Clean Wash",
            description: "Your clothes are treated with care, washed, and dried using top-notch machines and eco-friendly detergents.",
            points: [
                "Delicate handling for each garment.",
                "Stains and tough spots? We’ve got it covered."
            ],
            image: image3
        },
        {
            id: 4,
            title: "Folded & Delivered",
            description: "Receive your laundry neatly folded and ready to put away. Delivered right to your door, clean and fresh.",
            points: [
                "Clothes folded and organized to perfection.",
                "Timely delivery to suit your schedule."
            ],
            image: image4
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevStep) => (prevStep === steps.length ? 1 : prevStep + 1));
        }, 2000); // 5000ms = 5 seconds

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [steps.length]);

    // Find the data for the active step
    const currentStep = steps.find(step => step.id === activeStep);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Simple Process</h2>
            <Nav variant="tabs" activeKey={activeStep} onSelect={(selectedKey) => setActiveStep(Number(selectedKey))} className="justify-content-center">
                {steps.map(step => (
                    <Nav.Item key={step.id}>
                        <Nav.Link eventKey={step.id}>{`0${step.id}. ${step.title}`}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            {/* Dynamic content for each step */}
            <Row className="mt-4">
                <Col md={6} className="d-flex align-items-center">
                    <Image src={currentStep.image} alt={currentStep.title} fluid />
                </Col>
                <Col md={6}>
                    <h4>{currentStep.title}</h4>
                    <p>{currentStep.description}</p>
                    <ul>
                        {currentStep.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default HowWeWork;

// src/App.js
import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import OrdersPage from './components/OrdersPage';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingSection from './components/LandingSection';
import DynamicImageSlider from './components/DynamicImageSlider';
import OurServices from './components/OurServices';
import HowWeWork from './components/HowWeWork';
import Login from './components/Login';
import logo from './images/Nk_log.png';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function App() {
  const [orderModalShow, setOrderModalShow] = useState(false);
  const [messageModalShow, setMessageModalShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [ordersList, setOrdersList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const contactSectionRef = useRef(null);
  const aboutUsSectionRef = useRef(null);

  const scrollToContactSection = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
  };
  const scrollToAboutUsSection = () => {
    aboutUsSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
  }

  // const navigate = useNavigate(); 

  // Load orders from localStorage on mount
  React.useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('ordersList')) || [];
    setOrdersList(savedOrders);
  }, []);

  const handleOrderSubmit = (details) => {
    const newOrdersList = [...ordersList, details];
    setOrdersList(newOrdersList);
    setOrderDetails(details);
    setOrderModalShow(false);

    const newUsersList = [...usersList, details];
    setUsersList(newUsersList);
    setUserDetails(details);
    setMessageModalShow(true);
    localStorage.setItem('ordersList', JSON.stringify(newOrdersList));
    localStorage.setItem('loggedInUser', JSON.stringify(details));
  };

  const handleOnLoginNow = () => {

  }
  const handleLoginSubmit = (user) => {
    const newUsersList = [...usersList, user];
    setUsersList(newUsersList);
    setUserDetails(user);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setLoginModalShow(false)
    // navigate('/');
  }
  const onBookNow = () => {
    setOrderModalShow(true);
  };

  return (
    <Router>
      <Header onBookNow={onBookNow} onLoginNow={() => setLoginModalShow(true)} userDetails={userDetails} onContactUsClick={scrollToContactSection} onAboutUsClick={scrollToAboutUsSection} />
      <OrderModal
        orderModalShow={orderModalShow}
        orderModalHandleClose={() => setOrderModalShow(false)}
        handleOrderSubmit={handleOrderSubmit}
        messgeModalShow={messageModalShow}
        messageModalHandleClose={() => setMessageModalShow(false)}
      />
      <Login
        loginModalShow={loginModalShow}
        handleLoginSubmit={handleLoginSubmit}
        loginModalHandleClose={() => setLoginModalShow(false)}
      />
      <Routes>
        <Route path="/laundry_app" element={
          <>
            <div className="d-flex align-items-center">
              {/* <img src={logo} style={{ height: '100px', marginRight: '10px' }} alt="Logo" /> */}
              {/* <h1 className="flex-grow-1 text-center mb-0">Welcome to NK Laundry Service</h1> */}
              <div className="flex-grow-1 text-center mb-1">
                <Button variant="success btn-book-now" onClick={onBookNow}>Bus/Transport Laundry</Button>
                <Button variant="success btn-book-now" onClick={onBookNow}>Residential Laundry</Button>
                <Button variant="success btn-book-now" onClick={onBookNow}>Hospital Laundry</Button>

                <Button variant="success btn-book-now" onClick={onBookNow}>Hotel Laundry</Button>
                <Button variant="success btn-book-now" onClick={onBookNow}>PG & Hostel Laundry</Button>
                <Button variant="success btn-book-now" onClick={onBookNow}>Commercial Laundry</Button>
              </div>
            </div>
            <div className="container home-page-image">
              {/* <Cart orderDetails={orderDetails} /> */}

              <DynamicImageSlider onBookNow={onBookNow} />
              <OurServices />
              <HowWeWork />
              <div className="container text-center home-page-image">
                {/* Other content */}
                <div id="contact-section" ref={contactSectionRef} className="contact-section d-flex flex-wrap" >
                  {/* Left Section */}
                  <div className="contact-details col-md-6 text-center text-md-start">
                    <img src={logo} alt="Logo" style={{ height: '100px', marginBottom: '20px' }} />
                    <h2>Contact Us</h2>
                    <p>Feel free to reach out to us at:</p>
                    <p>
                      <strong>Email:</strong> support@nklaundry.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1-234-567-890
                    </p>
                  </div>

                  {/* Right Section */}
                  <div className="google-map col-md-6">
                    <iframe
                      title="NK Laundry Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468132!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0b1c7b1%3A0x4c8b8b8b8b8b8b8b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div id="about-section" className="about-section py-5" ref={aboutUsSectionRef}>
                <h2>About Us</h2>
                <p>
                  At <strong>NK Laundry</strong>, we believe laundry should be
                  easy, fast, and worry-free. Founded just last year, we've quickly grown
                  into a trusted name in the community, proudly serving homes and businesses
                  with exceptional laundry services.
                </p>
                <p>
                  Our team of 15+ dedicated professionals works tirelessly to ensure that
                  every item you entrust to us is handled with care, cleaned to perfection,
                  and returned fresh and ready to use. We specialize in both pickup and
                  delivery services, bringing convenience right to your doorstep — because
                  we know your time is valuable.
                </p>
                <p>
                  At <strong>NK Laundry</strong>, customer satisfaction is at
                  the heart of everything we do. Whether it's your daily wear, delicate
                  fabrics, or bulk cleaning needs, we’re here to make your laundry
                  experience effortless and reliable.
                </p>
                <p>
                  Experience the difference with us — fresh clothes, friendly service, and
                  peace of mind, all just a pickup away!
                </p>
              </div>
            </div>
            <div className="whatsapp-button">
              <a
                href="https://wa.me/1234567890" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp icon URL
                  alt="WhatsApp"
                  style={{ width: '50px', height: '50px' }}
                />
              </a>
            </div>
          </>
        } />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

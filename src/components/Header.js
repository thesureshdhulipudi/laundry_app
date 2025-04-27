// src/components/Header.js
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style/Header.css';
import logo from '../images/Nk_log.png';
import { ScrollLink } from 'react-scroll';
import { EMAIL, PHONE_NUMBER, SHORT_ADDRESS } from '../constant';

const Header = ({ onBookNow, onLoginNow, userDetails, onContactUsClick, onAboutUsClick  }) => {

  // const [phoneNumber, setPhoneNumber] = useState(null);
  // const [userName, setUserName] = useState(null);

  return (
    <Navbar bg="light" expand="lg" className="px-2">
      <Navbar.Brand as={Link} to="/laundry_app" className="brand-container">
        <img src={logo} className="logo-img" alt="Logo" />
        <div className="brand-details">
          <div className="brand-name">NK Laundry</div>
          <div className="contact-info">
            <span>{SHORT_ADDRESS}</span>
            <span>
              <strong>Phone:</strong> {PHONE_NUMBER}
            </span>
            <span>
              <strong>Email:</strong> {EMAIL}
            </span>
          </div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" /> {/* Hamburger menu */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/laundry_app" className='nav-link-custom'>Home</Nav.Link>
          <Nav.Link onClick={onContactUsClick} className='nav-link-custom'>Contact Us</Nav.Link>
          <Nav.Link onClick={onAboutUsClick} className='nav-link-custom'>About Us</Nav.Link>
          <Nav.Link as={Link} to="/orders" className='nav-link-custom'>All Orders</Nav.Link>
          <Button variant="primary btn-book-now" onClick={onBookNow}>Book Now</Button>
          <div>
            {userDetails?.userName
              ? <div className="username">{userDetails.userName}</div>
              : userDetails?.phoneNumber
                ? <div className="username">{userDetails.phoneNumber}</div>
                : <Button variant="success btn-login-now" onClick={onLoginNow}>Login</Button>
            }
          </div>
          <NavDropdown
            title={<FaUserCircle size={30} />}
            id="user-dropdown"
            align="end"
          >
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;

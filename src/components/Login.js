// src/components/OrderModal.js
import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style/OrderModal.css';

const Login = ({ loginModalShow, handleLoginSubmit, loginModalHandleClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState({
        phoneNumber: '',
        password: ''
    });

    const navigate = useNavigate(); // Initialize navigate function

    const handleChange = (e) => {
        const { name, value } = e.target;

        // setUser((prev) => ({ ...prev, [name]: value }));
        if ('phoneNumber' === name)
            setPhoneNumber(e.target.value)
        if ('password' === name)
            setPassword(e.target.value)

    };

    const handleSubmit = (e) => {

        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setErrorMessage('Please fill out both fields.');
        } else {
            setErrorMessage('');
            // Handle login logic here
            console.log('Phonenumber:', phoneNumber, 'Password:', password);
            const _user = {
                phoneNumber: phoneNumber,
                password: password
            }
            handleLoginSubmit(_user);
            setPhoneNumber('');
        setPassword('');
        }
        setValidated(true);
        
    };

    return (
        <div >
            <Modal show={loginModalShow} onHide={loginModalHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login to Applications</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    <Form noValidate validated={validated} onClick={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a Phone Number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" type="submit" className="mt-3">
                                    Login
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
          <Button variant="secondary" onClick={loginModalHandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer> */}
            </Modal>

        </div>
    );
};

export default Login;

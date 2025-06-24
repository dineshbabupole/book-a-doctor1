import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import photo1 from '../../images/hosp1.jpg';

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

import './Login.css'; // Add this CSS file below for animations and styles

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      message.warning('Please fill in both fields');
      return;
    }

    try {
      const res = await axios.post("http://localhost:8001/api/user/login", user);
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data.userData));
        message.success('Login successful');

        const { type } = res.data.userData;
        switch (type) {
          case "admin":
            navigate("/adminHome");
            break;
          case "user":
            navigate("/userhome");
            break;
          default:
            navigate("/login");
        }
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong during login');
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="shadow-sm nav-gradient">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-white fw-bold">MediCareBook</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto gap-3">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
              <Nav.Link as={Link} to="/register" className="text-white">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Card */}
      <MDBContainer className="my-5 login-animation">
        <MDBCard className="shadow-lg">
          <MDBRow className="g-0 align-items-center" style={{ backgroundColor: '#f9f9f9' }}>
            <MDBCol md='6'>
              <MDBCardImage
                src={photo1}
                alt="login form"
                className='img-fluid rounded-start w-100 h-100 object-fit-cover'
              />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='px-5'>

                <h3 className="mb-4 fw-bold text-center text-primary">Sign in to your account</h3>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <MDBInput
                      name="email"
                      type="email"
                      value={user.email}
                      onChange={handleChange}
                      autoComplete="off"
                      placeholder="Enter your email"
                      size="md"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <MDBInput
                      name="password"
                      type="password"
                      value={user.password}
                      onChange={handleChange}
                      autoComplete="off"
                      placeholder="Enter your password"
                      size="md"
                      required
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button type="submit" variant="primary" size="lg">
                      Login
                    </Button>
                  </div>
                </Form>

                <p className="mt-4 text-center">
                  Don't have an account?{' '}
                  <Link to="/register" style={{ color: '#007bff', fontWeight: '500' }}>
                    Register here
                  </Link>
                </p>

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Login;

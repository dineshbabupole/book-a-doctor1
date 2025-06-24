import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import p2 from '../../images/doc1.jpg';
import './Register.css'; 
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from 'mdb-react-ui-kit';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    type: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    const { fullName, email, password, phone, type } = user;
    if (!fullName || !email || !password || !phone || !type) {
      return message.warning('Please fill all fields and select a role.');
    }

    try {
      const res = await axios.post('http://localhost:8001/api/user/register', user);
      if (res.data.success) {
        message.success('Registered successfully!');
        navigate('/login');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong');
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar expand="lg" bg="light" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">MediCareBook</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto gap-3">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Registration Form */}
      <MDBContainer className="my-5 register-animation">
        <MDBCard>
          <MDBRow className="g-0" style={{ backgroundColor: '#dfe6e9' }}>
            <MDBCol md="6">
              <MDBCardBody className="mx-4">
                <h3 className="text-center fw-bold mb-4">Create Your Account</h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <MDBInput
                      id="fullName"
                      name="fullName"
                      value={user.fullName}
                      onChange={handleChange}
                      type="text"
                      size="sm"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <MDBInput
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      type="email"
                      size="sm"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <MDBInput
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      type="password"
                      size="sm"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <MDBInput
                      id="phone"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      type="tel"
                      size="sm"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Select Role</Form.Label>
                    <div>
                      <MDBRadio
                        name="type"
                        id="userRadio"
                        label="User"
                        value="user"
                        checked={user.type === 'user'}
                        onChange={handleChange}
                        defaultChecked
                      />
                    </div>
                  </Form.Group>

                  <Button type="submit" size="lg" className="w-100 bg-dark">
                    Register
                  </Button>
                </Form>

                <p className="mt-3 text-center" style={{ color: '#393f81' }}>
                  Already have an account?{' '}
                  <Link to="/login" style={{ color: '#393f81' }}>
                    Login here
                  </Link>
                </p>
              </MDBCardBody>
            </MDBCol>

            <MDBCol md="6">
              <MDBCardImage
                src={p2}
                alt="Registration"
                className="w-100 h-100 rounded-end"
                style={{ objectFit: 'cover', mixBlendMode: 'darken' }}
              />
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Register;

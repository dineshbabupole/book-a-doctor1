import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import p3 from '../../images/doc.avif';
import './Home.css'; // See CSS updates below

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="shadow-sm nav-gradient">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-white fw-bold fs-4">
            MediCareBook
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto gap-4">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
              <Nav.Link as={Link} to="/doctorRegistartion" className="text-white">Doctor Registration</Nav.Link>
              <Nav.Link as={Link} to="/register" className="text-white">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container fluid className="hero-section d-flex align-items-center py-5">
        <Row className="align-items-center px-4 px-md-5 w-100">
          <Col md={6} className="text-center mb-4 mb-md-0 animate-left">
            <img src={p3} alt="Doctor" className="img-fluid rounded shadow-lg hero-image" />
          </Col>
          <Col md={6} className="animate-right">
            <h2 className="mb-3 text-primary fw-bold display-5">Effortlessly schedule your doctor appointments</h2>
            <p className="lead text-muted">
              Book your appointments with just a few clicks, putting your health in your hands.
            </p>
            <Button variant="primary" size="lg" as={Link} to="/login" className="mt-3 fw-semibold shadow">
              Book Your Doctor
            </Button>
          </Col>
        </Row>
      </Container>

      {/* About Section */}
      <Container className="my-5 animate-fade">
        <h2 className="text-center mb-4 text-primary fw-bold">About Us</h2>
        <p className="text-muted px-md-5" style={{ textAlign: 'justify', lineHeight: '1.9', fontSize: '1.1rem' }}>
          Booking a doctor appointment has never been easier. With our convenient online platform, 
          you can schedule your appointments from the comfort of your home. Browse a wide range of 
          doctors and healthcare providers, view detailed profiles, and choose the perfect match for your needs.<br /><br />

          Whether it's a routine check-up or an urgent consultation, our platform offers same-day and next-day 
          availability. Say goodbye to waiting rooms and hello to seamless healthcare scheduling.<br /><br />

          With features like real-time availability, online payments, stored medical history, and instant 
          confirmation, MediCareBook empowers you to manage your health effortlessly. Our support team is always 
          ready to assist you along the way.
        </p>
      </Container>
    </>
  );
};

export default Home;

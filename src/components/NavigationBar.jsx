import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Red Velvet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Tentang</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Kambing Soon</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Kambing soon
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
  )
}

export default NavigationBar;

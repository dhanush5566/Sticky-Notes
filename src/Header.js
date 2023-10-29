import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";

function Header() {
  return (
      
          
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
          <Nav.Link>Deloite</Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link>
            <Link to="/home">Remainder DashBoard</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/new-remainder">New Reminder</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/past-remainders">Past Remainder</Link>
          </Nav.Link>
          </Nav>
          <Nav.Link>
            <Link to="/">
            <Button variant="secondary" className='logout-btn'>Logout</Button>
            </Link>
          </Nav.Link>
        </Container>
      </Navbar>
      
          
    
  )
}

export default Header;
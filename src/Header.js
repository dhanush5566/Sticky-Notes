import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
      
          
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
          {/* <Link to="/">Deloite</Link> */}
          <Nav.Link to="/">Deloite</Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Remainder DashBoard</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/new-remainder">New Reminder</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/past-remainders">Past Remainder</Link>
          </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
          
    
  )
}

export default Header;
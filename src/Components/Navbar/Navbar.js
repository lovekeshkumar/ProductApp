import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function App() {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container className='container'>
       
        <Navbar.Toggle aria-controls="navbar-nav" style={{display:'none'}} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Shop</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
            <Nav.Link href="#">Portfolio</Nav.Link>
            <Nav.Link href="#">Fashion</Nav.Link>
            <Nav.Link href="#">Advice</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faUser} /></Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faHeart} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;

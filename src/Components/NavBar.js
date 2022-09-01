import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
      <div>
    
    <Navbar bg="dark" expand="xl" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="/general">Today's News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/general">Home</Nav.Link>
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/Entertainment">Entertainment</Nav.Link>
            <Nav.Link href="/general">General</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/science">Science</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>      
      </div>
    )
  }

export default NavBar

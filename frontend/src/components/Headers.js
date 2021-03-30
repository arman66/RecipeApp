import React from 'react'
import {Navbar, Nav,Container,  } from 'react-bootstrap'

const Headers = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg">
<Container>
  <Navbar.Brand href="/">Recipe Randomizer</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/recipe"><i class="fas fa-utensils mr-2"></i>Recipe Search</Nav.Link>
      <Nav.Link href="/about">About us</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Headers

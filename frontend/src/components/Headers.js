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
      
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Headers

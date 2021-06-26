import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavigatorBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/animes">Animes</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigatorBar
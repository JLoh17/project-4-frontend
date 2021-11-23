import React from 'react'

import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import logo from '@/assets/logo.png'

class CompsNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div id="navbar">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand as={NavLink} to="/"><img src={logo} className="navbar-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">
                <span className="fas fa-user-plus me-1" /> Register
              </Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown" alignRight>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default CompsNavbar

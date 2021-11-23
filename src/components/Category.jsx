import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const CompsCategorybar = () => (
  <div id="categorybar">
    <Nav className="container-fluid  flex-column flex-lg-row ">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">Electronics</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">Sports & Lifestyle</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">Household</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">Toys & Games</Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
)

export default CompsCategorybar

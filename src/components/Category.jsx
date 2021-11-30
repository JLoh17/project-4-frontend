import React from 'react'

import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const CompsCategorybar = () => (
  <div id="categorybar">
    <Nav className="container-fluid  flex-column flex-lg-row ">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/products">All Categories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/products?catName=1">Electronics</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/products?catName=2">Sports & Lifestyle</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/products?catName=3">Household</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/products?catName=4">Toys & Games</Nav.Link>
      </Nav.Item>
    </Nav>
  </div>

)

export default CompsCategorybar

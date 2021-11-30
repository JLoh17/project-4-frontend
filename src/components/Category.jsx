import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'

import qs from 'query-string'

import Nav from 'react-bootstrap/Nav'

// TODO - filter by category
const CompsCategorybar = () => {
  const history = useHistory()
  const [cat, setCat] = useState('')

  const handleSubmit = () => {
    const params = qs.stringify({ catName: cat }) // stringify the search params so it becomes an object
    history.push({
      pathname: '/products',
      search: params.toString()
    })
  }

  return (
    <div id="categorybar">
      <Nav className="container-fluid  flex-column flex-lg-row ">
        <Nav.Item>
          <Nav.Link onClick={handleSubmit}>All Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleSubmit}>Electronics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleSubmit}>Sports & Lifestyle</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleSubmit}>Household</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleSubmit}>Toys & Games</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default CompsCategorybar

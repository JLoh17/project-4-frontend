import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import qs from 'query-string'

import Nav from 'react-bootstrap/Nav'

// TODO - filter by category
const CompsCategorybar = () => {
  const history = useHistory()
  const [Id, setId] = useState('')

  const handleClick = () => {
    const params = qs.stringify({ catName: Id }) // stringify the search params so it becomes an object
    history.push({
      pathname: '/products',
      search: params.toString()
    })
  }

  return (
    <div id="categorybar">
      <Nav className="container-fluid  flex-column flex-lg-row ">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/products">All Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick>Electronics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick>Sports & Lifestyle</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick>Household</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick>Toys & Games</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default CompsCategorybar

import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

import Nav from 'react-bootstrap/Nav'

const categories = [
  {
    id: '1',
    name: 'Electronics'
  }, {
    id: '2',
    name: 'Sports & Lifestyle'
  }, {
    id: '3',
    name: 'Household'
  }, {
    id: '4',
    name: 'Toys & Games'
  }
]

// TODO - filter by category
const CompsCategorybar = (props) => {
  const handleClick = (catId) => {
    const { history: { push } } = props
    push(`/products?catName=${catId}`)
  }

  return (
    <div id="categorybar">
      <Nav className="container-fluid  flex-column flex-lg-row ">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/products">All Categories</Nav.Link>
        </Nav.Item>
        {
          categories.map((cat) => (
            <Nav.Item key={cat.id}>
              <Nav.Link onClick={() => handleClick(cat.id)}>{cat.name}</Nav.Link>
            </Nav.Item>
          ))
        }
      </Nav>
    </div>
  )
}

CompsCategorybar.propTypes = {
  history: PropTypes.shape().isRequired // productState is connected to Root
}

export default withRouter(CompsCategorybar)

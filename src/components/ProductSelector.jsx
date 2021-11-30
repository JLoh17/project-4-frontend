import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

const ProductSelector = ({ product }) => {
  const [input, setInput] = useState('1')

  const onChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div id="product-selector">
      <h1 className="my-3">{product.price}</h1>
      <h5 className="my-5">Earn {product.price / 10} points on purchase</h5>
      <h6 className="my-2">Description: {product.description} </h6>
      <div className="my-5 d-flex justify-content-start">
        <div className="mr-2">Quantity:</div>
        <input
          value={input}
          type="number"
          id="quantity-selected"
          name="quantity"
          step="1" // points go up in steps of 5
          min="1" // minimum input is 0 to prevent negative number
          max="99"
          onChange={(onChange)}
        />
      </div>
      <div className="d-flex justify-content-between my-4">
        <Button variant="primary" className="btn flex-grow-1">Add to Cart</Button>
        <Button variant="warning" className="btn ml-1">
          <i className="far fa-heart" />
        </Button>

      </div>
    </div>
  // TODO - fas fa-heart should be enabled for the button

  )
}

ProductSelector.propTypes = {
  product: PropTypes.shape().isRequired

}

export default ProductSelector

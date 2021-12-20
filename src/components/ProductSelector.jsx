import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AddToCart from '@/components/AddtoCart'

import { Button } from 'react-bootstrap'

const ProductSelector = ({ product, currentUser }) => {
  const [quantity, setQuantity] = useState(1)

  const onChange = (e) => {
    setQuantity(e.target.value)
  }

  return (
    <div id="product-selector">
      <h1 className="my-3">${(product.price.toLocaleString(undefined, { minimumFractionDigits: 2 }))}</h1>
      <h5 className="my-5">Earn {(product.price / 10).toFixed(0)} points on purchase</h5>
      <h6 className="my-2">Description: {product.description} </h6>
      <div className="my-5 d-flex justify-content-start">
        <div className="mr-2">Quantity:</div>
        <input
          value={quantity}
          type="number"
          id="quantity-selected"
          name="quantity"
          step="1" // points go up in steps of 5
          min="1" // minimum input is 1 to prevent negative number
          max="99"
          onChange={(onChange)}
        />
      </div>
      {
            (!currentUser) && <div className="text-danger">Please Login to add to Cart</div>
          }
      <div className="d-flex justify-content-between my-4">
        <AddToCart product={product} quantity={quantity} />
        <Button variant="warning" className="btn ml-1">
          <i className="far fa-heart" />
        </Button>

      </div>
    </div>
  // TODO - fas fa-heart should be enabled for the button

  )
}

ProductSelector.propTypes = {
  product: PropTypes.shape().isRequired,
  currentUser: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, null)(ProductSelector)

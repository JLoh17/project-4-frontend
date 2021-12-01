import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createCartItem } from '@/actions/my/cart/new'

import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'

const ProductSelector = ({ product, ...props }) => {
  const [quantity, setQuantity] = useState(1)
  const [buttonDisable, setButtonDisable] = useState(false)

  const onChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleAddToCart = (values) => { // values shows the productId and quantity from handleAddToCart below
    props.createCartItem(values)
  }

  const buttonClick = () => {
    handleAddToCart({ ProductId: product.id, quantity })
    toast.success('Item added to cart', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
    setTimeout(() => {
      setButtonDisable(false)
    }, 2000)
    setButtonDisable(true)
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
      <div className="d-flex justify-content-between my-4">
        <Button
          disabled={buttonDisable}
          variant="primary"
          className="btn flex-grow-1"
          onClick={() => buttonClick()}

        >Add to Cart</Button>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
  createCartItem: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  myCartState: state.myCartState
})

const mapDispatchToProps = {
  createCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelector)

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createCartItem } from '@/actions/my/cart/new'

import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'

const AddToCart = ({ product, quantity, currentUser, ...props }) => {
  const [buttonDisable, setButtonDisable] = useState(false)

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
    <>
      <Button
        disabled={!currentUser || buttonDisable}
        variant="primary"
        className="btn btn-block"
        onClick={() => buttonClick()}
      >Add to Cart</Button>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  )
}

AddToCart.propTypes = {
  product: PropTypes.shape().isRequired,
  quantity: PropTypes.number.isRequired,
  createCartItem: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  myCartState: state.myCartState,
  currentUser: state.currentUser.currentUser

})

const mapDispatchToProps = {
  createCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)

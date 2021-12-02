import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import CartTable from '@/components/CartTable'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCart } from '@/actions/my/cart/index'
import { ToastContainer, toast } from 'react-toastify'

const MyCart = ({ myCartState: { cart }, ...props }) => {
  useEffect(() => {
    props.getCart()
  }, [])

  const [pointInput, setPointInput] = useState('')

  const createOrder = () => {
    props.createOrderitem()
  }

  const orderCreateClick = () => {
    createOrder()
  }

  if (!cart) return null

  const toastifyId = 'randomId' // in order to prevent toastify from showing multiple toasts onclick, set an ID to ensure it only happens once

  const subTotal = cart.reduce((prevSum, item) => (prevSum + (item.Product.price * item.quantity)), 0)
  const subTotalStr = subTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })
  const pointsAsMoney = pointInput / 5
  const total = (subTotal - pointsAsMoney)
  const totalStr = total.toLocaleString(undefined, { minimumFractionDigits: 2 })

  const pointsOnChange = (e) => {
    if (Number(e.target.value) > cart.reduce((prevSum, item) => (prevSum + (item.User.pointsBalance)), 0)) {
      return toast.error('You have no more points', {
        toastId: toastifyId,
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }

    if (Number(e.target.value) > subTotal) {
      return toast.error('Points used cannot exceed subtotal', {
        toastId: toastifyId,
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }

    setPointInput(e.target.value)
  }

  return (
    <div id="MyCart" className="my-3 container text-center">
      <h1 className="my-3">My Cart</h1>
      <h4>{cart.quantity}</h4>
      <CartTable />

      <div className="d-flex justify-content-end my-3">
        <h4>Subtotal:</h4>
        {/* Check whether the info provided back is an object or an array, in this case Cart is an array */}
        <h4>${subTotalStr}</h4>
      </div>
      <div className="d-flex justify-content-end my-3">
        <div>
          <h6>Less points used: &nbsp;</h6>
          <input
            value={pointInput}
            type="number"
            id="points-used"
            name="points"
            step="5" // points go up in steps of 5
            min="0" // minimum input is 0 to prevent negative number
            onChange={pointsOnChange}
          />
        </div>

        <h6 className="align-middle">${pointInput / 5}</h6>
      </div>

      <div className="d-flex justify-content-end my-3">
        <h4>Total:</h4>
        <h4>${totalStr}</h4>
      </div>

      <div className="d-flex justify-content-end mt-1">
        <Button variant="success" onCreateClick={() => orderCreateClick()}>Confirm order</Button>
      </div>

      <div className="d-flex justify-content-end">
        <h6>Complete order to earn {(subTotal / 10).toFixed(0) } points</h6>
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />

    </div>
  // TODO - Total should be a formula of: subtotal - {value}
  // TODO - "Complete order to earn XXXX points" must be linked to subtotal
  )
}

MyCart.propTypes = {
  myCartState: PropTypes.shape().isRequired,
  getCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  myCartState: state.myCartState
})

const mapDispatchToProps = {
  getCart
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)

// export default MyCart

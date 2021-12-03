import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import CartTable from '@/components/CartTable'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCart } from '@/actions/my/cart/index'
import { createMyOrder } from '@/actions/my/order/new'
import { ToastContainer, toast } from 'react-toastify'

// import { createOrder } from '@/actions/my/orders/new'

const MyCart = ({ myCartState: { cart }, currentUserState: { currentUser }, ...props }) => {
  useEffect(() => {
    props.getCart()
  }, [])

  const [pointInput, setPointInput] = useState(0)

  if (!cart) return null

  // Calc Sub and Total
  const subTotal = cart.reduce((prevSum, item) => (prevSum + (item.Product.price * item.quantity)), 0)
  const subTotalStr = subTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })
  const pointsAsMoney = (pointInput / 5)
  const total = (subTotal - pointsAsMoney)
  const totalStr = total.toLocaleString(undefined, { minimumFractionDigits: 2 })

  // Toastify ID for unique toast
  // In order to prevent toastify from showing multiple toasts onclick, set an ID to ensure it only happens once
  const toastifyId = 'randomId'
  const toastifyId2 = 'randomId2'

  const orderCreateSubmit = () => {
    const { history: { push } } = props
    const values = {
      points: ((subTotal / 10) - pointInput).toFixed(0),
      grandTotal: total
    }
    props.createMyOrder(values).then((resp) => {
      push(`/my/orders/${resp.data.myOrder.id}`)
    })
  }

  const pointsOnChange = (e) => {
    const value = Number(e.target.value)

    if (value > subTotal) {
      return toast.error('Points used cannot exceed subtotal', {
        toastId: toastifyId2,
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }

    if (value > currentUser.pointsBalance) {
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

    setPointInput(e.target.value)
  }

  return (
    <div id="MyCart" className="my-3 container text-center">
      <h1 className="my-3">My Cart</h1>

      {
        (cart.length === 0) ? (
          <div className="my-3 text-center">
            <div> Your shopping cart is currently empty.</div>
            <div> <Link to="/products"> View Products </Link></div>
          </div>
        ) : (
          <>
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
                  onChange={(e) => pointsOnChange(e, cart.id)}
                />
              </div>

              <h6 className="align-middle">${pointsAsMoney}</h6>
            </div>

            <div className="d-flex justify-content-end my-3">
              <h4>Total:</h4>
              <h4>${totalStr}</h4>
            </div>

            <div className="d-flex justify-content-end mt-1">
              <Button variant="success" onClick={() => orderCreateSubmit()}>Confirm order</Button>
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
          </>
        )
      }

    </div>
  )
}

MyCart.propTypes = {
  currentUserState: PropTypes.shape().isRequired,
  myCartState: PropTypes.shape().isRequired,
  getCart: PropTypes.func.isRequired,

  createMyOrder: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser,
  myCartState: state.myCartState
})

const mapDispatchToProps = {
  getCart,
  createMyOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)

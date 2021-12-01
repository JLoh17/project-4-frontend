import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import CartTable from '@/components/CartTable'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCart } from '@/actions/my/cart/index'

const MyCart = ({ myCartState: { cart }, ...props }) => {
  useEffect(() => {
    props.getCart()
  }, [])

  const [pointInput, setPointInput] = useState('')

  // TODO - change 100 to point balance
  const pointsOnChange = (e) => {
    if (Number(e.target.value) > 100) return
    setPointInput(e.target.value)
  }

  if (!cart) return null

  return (
    <div id="MyCart" className="my-3 container text-center">
      <h1 className="my-3">My Cart</h1>
      <CartTable />

      <div className="d-flex justify-content-end my-3">
        <h4>Subtotal:</h4>
        {/* Check whether the info provided back is an object or an array */}
        <h4>${cart.reduce((prevSum, item) => (prevSum + (item.Product.price * item.quantity)), 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}</h4>
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

        <h6 className="align-middle">$({pointInput / 5})</h6>
      </div>

      <div className="d-flex justify-content-end my-3">
        <h4>Total:</h4>
        <h4>${(('1000' - { pointsOnChange }).toLocaleString(undefined, { minimumFractionDigits: 2 }))}</h4>
      </div>

      <div className="d-flex justify-content-end mt-1">
        <Button variant="success">Confirm order</Button>
      </div>

      <div className="d-flex justify-content-end">
        <h6>Complete order to earn {(100 / 10).toFixed(0)} points</h6>
      </div>

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

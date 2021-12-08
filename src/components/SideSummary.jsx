import React from 'react'
import PropTypes from 'prop-types'
import { getMyOrder } from '@/actions/my/order/show'
import { connect } from 'react-redux'

const SideOrderSummary = ({ myOrderShowState: { order } }) => {
  // Long way around
  // const quantity = order.OrderProducts.map((item) => (item.quantity * item.Product.price))
  // console.log('====>', quantity)
  // const subTotal1 = quantity.reduce((prevSum, item) => (prevSum + item), 0)
  // console.log(subTotal1)

  // Denis way
  const subTotal = (order.OrderProducts.reduce((prevSum, item) => (prevSum + (item.quantity * item.Product.price)), 0))
  const subTotalStr = subTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })
  const pointsUsed = ((subTotal / 10) - (order.points)).toFixed(0)
  const grandTotal = (order.grandTotal).toLocaleString(undefined, { minimumFractionDigits: 2 })

  if (pointsUsed == 0) {
    return (
      <div id="side-summary">
        <table className="table col-8">
          <thead>
            <tr>
              <th colSpan="2">Summary</th>
            </tr>
          </thead>
          <tbody>

            {
              order.OrderProducts.map((item) => (
                <tr>
                  <td>{(item.Product.productName)} - x{(item.quantity)}</td>
                  <td className="text-right">${(item.quantity * item.Product.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                </tr>
              ))
            }
            <tr className="grand-total">
              <td>Grand Total</td>
              <td className="text-right grand-total-amt">${grandTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div id="side-summary">
      <table className="table col-8">
        <thead>
          <tr>
            <th colSpan="2">Summary</th>
          </tr>
        </thead>
        <tbody>

          {
              order.OrderProducts.map((item) => (
                <tr>
                  <td>{(item.Product.productName)} - x{(item.quantity)}</td>
                  <td className="text-right">${(item.quantity * item.Product.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                </tr>
              ))
            }
          <tr className="sub-total">
            <td>Subtotal</td>
            <td className="text-right">${subTotalStr}</td>
          </tr>
          <tr>
            <td>
              <div>Less points used:</div>
              <div className="points">{pointsUsed}pp</div>
            </td>
            <td className="text-right font-italic">-$({pointsUsed / 5}.00)</td>
          </tr>
          <tr className="grand-total">
            <td>Grand Total</td>
            <td className="text-right grand-total-amt">${grandTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

SideOrderSummary.propTypes = {
  myOrderShowState: PropTypes.shape().isRequired,
  points: PropTypes.string.isRequired,
  grandTotal: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  myOrderShowState: state.myOrderShowState

})

const mapDispatchToProps = {
  getMyOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(SideOrderSummary)

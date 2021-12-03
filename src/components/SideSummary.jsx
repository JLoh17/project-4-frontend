import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SideOrderSummary = ({ subTotal, points, grandTotal }) => {
  useState()

  return (
    <div id="side-summary">
      <table className="table col-8">
        <thead>
          <tr>
            <th colSpan="2">Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${subTotal}</td>
          </tr>
          <tr>
            <td>
              <div>Less points used:</div>
              <div className="points">{points}pp</div>
            </td>
            <td>${points / 5 }</td>
          </tr>
          <tr className="grand-total">
            <td>Grand Total</td>
            <td>${grandTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

SideOrderSummary.propTypes = {
  subTotal: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  grandTotal: PropTypes.number.isRequired
}

export default SideOrderSummary

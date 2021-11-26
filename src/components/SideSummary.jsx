import React, { useState } from 'react'

const SideSummary = () => {
  useState()

  return (
    <div id="side-summary">
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>$1,000</td>
          </tr>
          <tr>
            <td>
              <div>Less points used:</div>
              <div className="points">5pp</div>
            </td>
            <td>( $100)</td>
          </tr>
          <tr className="grand-total">
            <td>Grand Total</td>
            <td>$900</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SideSummary

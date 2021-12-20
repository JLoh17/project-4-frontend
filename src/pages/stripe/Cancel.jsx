import React from 'react'
import { Link } from 'react-router-dom'

const PaymentCancelled = () => (
  <div id="payment-cancelled" className="container p-3">
    <div className="text-center">
      <h1>Your payment has been cancelled</h1>
      <div>
        <Link to="/">Return to Home Page</Link>
      </div>
    </div>
  </div>
)

export default PaymentCancelled

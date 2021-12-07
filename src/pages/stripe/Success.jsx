import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => (
  <div id="payment-success" className="container">
    <div className="text-center p-3">
      {/* <h1>Delivery details</h1> */}
      <h2>Thank you for your order!</h2>
      <h8>An e-mail will momentarily be sent out to confirm the status of your order.</h8>
      <div className="mb-3">
        <Link to="/products">Still missing some items? Click here to return to the product page!</Link>
      </div>
      <img src="https://www.gpstracker.at/wp-content/uploads/2019/03/How-GPS-Tracking-Can-Benefit-Delivery-Services.jpg" />
    </div>
  </div>
)

export default PaymentSuccess

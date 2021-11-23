import React from 'react'

const CompsFooter = () => (
  <div id="footer" className="footer-layout mt-3">
    <div className="container-fluid d-flex justify-content-between">

      <div>
        <ul className="list-group">
          <li className="list-group-item">About</li>
          <li className="list-group-item">About us</li>
          <li className="list-group-item">Contact us</li>
        </ul>
      </div>

      <div>
        <ul className="list-group">
          <li className="list-group-item">Customer Service</li>
          <li className="list-group-item">FAQ</li>
          <li className="list-group-item">T&C</li>
        </ul>
      </div>

      <div>
        <h5>Follow us</h5>
        <div id="logo" className="mb-1 p-0">
          <span className="fab fa-facebook-square " />
          <span className="fab fa-instagram-square" />
        </div>
      </div>

    </div>
  </div>
)

export default CompsFooter

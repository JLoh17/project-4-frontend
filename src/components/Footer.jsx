import React from 'react'
import { Link } from 'react-router-dom'

const CompsFooter = () => (
  <div id="footer">
    <div className="container d-flex flex-column flex-lg-row justify-content-between">

      <div>
        <div className="mb-3 mb-lg-0">
          <div className="list-group-item">About</div>
          <Link to="/" className="list-group-item">About us</Link>
          <Link to="/" className="list-group-item">Contact us</Link>
        </div>
      </div>

      <div>
        <div className="list-group px-0 px-lg-3 mb-3 mb-lg-0">
          <div className="list-group-item">Customer service</div>
          <Link to="/" className="list-group-item">FAQ</Link>
          <Link to="/" className="list-group-item">T&C</Link>
        </div>
      </div>

      <div>
        <div className="mb-1 mb-lg-0">
          <div className="list-group-item">Follow us</div>
          <div id="logo" className="fab fa-facebook-square p-1">
            <span className="fab fa-instagram-square" />
          </div>
        </div>
      </div>

    </div>
  </div>
)

export default CompsFooter

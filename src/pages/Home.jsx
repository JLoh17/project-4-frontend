import React from 'react'
import { Link } from 'react-router-dom'

const PagesHome = () => (
  <div id="pages-home" className="container">
    <header className="text-center my-3">
      <h1>Home Page</h1>
      <div><Link to="/another">Another Page</Link></div>
    </header>

    <div className="my-3 d-flex justify-content-around" />

    <div className="container text-center my-3">
      <div className="row">
        <div className="col delivery">
          <p>Earn 1 PulsePoint for every $10</p>
        </div>
        <div className="col">
          <p>Free delivery over $500</p>
        </div>
      </div>
    </div>

  </div>
)

export default PagesHome

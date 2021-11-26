import React from 'react'
import { Link } from 'react-router-dom'

const PagesNotFound = () => (
  <div id="pages-not-found" className="container py-3">
    <header className="text-center">
      <h1>Page not found!</h1>
      <div><Link to="/">Return to Home Page</Link></div>
    </header>
  </div>
)

export default PagesNotFound

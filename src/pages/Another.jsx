import React from 'react'
import { Link } from 'react-router-dom'

const PagesAnother = () => (
  <div id="pages-another" className="container">
    <header className="text-center my-3">
      <h1>Another Page</h1>
      <div><Link to="/">Home Page</Link></div>
    </header>
  </div>
)

export default PagesAnother

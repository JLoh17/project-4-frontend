import React from 'react'
import { Link } from 'react-router-dom'

const PagesHome = () => (
  <div id="pages-home" className="container">
    <header className="text-center my-3">
      <h1>Home Page</h1>
      <div><Link to="/another">Another Page</Link></div>
    </header>
  </div>
)

export default PagesHome

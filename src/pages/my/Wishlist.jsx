import React from 'react'
import { Link } from 'react-router-dom'

const MyWishlist = () => (
  <div id="wishlist-page" className="container p-3 text-center">
    <h1 className="my-3">My wishlist</h1>
    <h6>This wishlist page is current under construction, please come back later :) </h6>
    <Link to="/products">Click here to view products</Link>
  </div>
)

export default MyWishlist

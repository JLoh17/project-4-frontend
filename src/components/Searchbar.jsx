import React from 'react'

const CompsSearchbar = () => (
  <div id="searchbar" className="mx-auto d-flex my-4 col-md-9">
    <input className="form-control" type="search" placeholder="Search entire store here..." aria-label="Search" />
    <button className="btn btn-outline-success" type="submit">Search</button>
  </div>
)

export default CompsSearchbar

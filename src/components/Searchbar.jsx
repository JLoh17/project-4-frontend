import React from 'react'

const CompsSearchbar = () => (
  <div id="searchbar">
    <div className="d-flex mx-auto p-3 col-md-9  ">
      <input className="form-control" type="search" placeholder="Search entire store here..." aria-label="Search" />
      <button className="btn btn-dark" type="submit">Search</button>
    </div>
  </div>
)

export default CompsSearchbar

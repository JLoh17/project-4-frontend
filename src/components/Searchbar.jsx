import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import qs from 'query-string'

import { getProductList } from '@/actions/product'

const CompsSearchbar = (props) => {
  const history = useHistory()
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const params = qs.stringify({ q: search })
    history.push({
      pathname: '/products',
      search: params.toString()
    })
  }

  return (
    <div id="searchbar">
      <form action="/products" onSubmit={handleSubmit}>
        <div className="d-flex mx-auto p-3 col-md-9 ">
          <input
            className="form-control"
            type="text"
            placeholder="Search entire store here..."
            aria-label="Search"
            name="search"
            onChange={handleChange}
            value={search}
          />
          <button
            className="btn btn-dark"
            type="submit"
          >Search</button>
        </div>
      </form>
    </div>
  )
}

export default CompsSearchbar

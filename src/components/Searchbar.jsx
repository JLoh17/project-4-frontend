import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import qs from 'query-string'

const CompsSearchbar = () => {
  const history = useHistory()
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value) // grabs what was typed in the input
  }

  const handleSubmit = (e) => {
    e.preventDefault() // this needs to be done as removing the function of the submit button

    const params = qs.stringify({ q: search }) // stringify the search params so it becomes an object
    history.push({
      pathname: '/products',
      search: params.toString()
    })
  }

  return (
    <div id="searchbar">
      <form onSubmit={handleSubmit}>
        <div className="d-flex mx-auto p-3 col-md-9 ">
          <input
            className="form-control"
            type="text"
            placeholder="Search entire store here..."
            aria-label="Search"
            name="search"
            onChange={handleChange} // shows the value of the searched query
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

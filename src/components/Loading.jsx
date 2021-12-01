import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => (
  <div id="loading-page" className="text-center">
    <h2 className="my-3">Loading page...</h2>
    <Spinner animation="border" />

  </div>
)

export default Loading

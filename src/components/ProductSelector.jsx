import React, { useState } from 'react'
import { Card, ListGroup, ListGroupItem, Button, Form, OverlayTrigger, Popover } from 'react-bootstrap'

const ProductSelector = () => {
  const [input, setInput] = useState('')

  const onChange = (e) => {
    if (Number(e.target.value) > 99) return
    setInput(e.target.value)
  }

  return (
    <div id="product-selector">
      <h1 className="my-5">Price</h1>
      <h5 className="my-5">Earn xxxx points on purchase</h5>
      <h6 className="my-2">Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed assumenda veritatis qui earum voluptas officiis molestiae blanditiis eligendi ex dolores, libero quidem totam ad aspernatur nemo, optio ipsam necessitatibus fugit! </h6>
      <div className="my-4 d-flex justify-content-start">
        <div className="mr-2">Quantity:</div>
        <input
          value={input}
          type="number"
          id="quantity-selected"
          name="quantity"
          step="1" // points go up in steps of 5
          min="0" // minimum input is 0 to prevent negative number
          onChange={onChange}
        />
      </div>
      <div className="d-flex justify-content-between my-4">
        <Button variant="primary" className="btn flex-grow-1">Add to Cart</Button>
        <Button variant="warning" className="btn far fa-heart ml-1" />
      </div>
    </div>

  )
}

export default ProductSelector

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { getCart, updateCartQuantity, destroyCartItem } from '@/actions/my/cart/index'

import Image from 'react-bootstrap/Image'

const CartTable = ({ myCartState: { cart }, ...props }) => {
  useEffect(() => {
    props.getCart()
  }, [])

  const quantityOnChange = (e, id) => {
    props.updateCartQuantity({ quantity: e.target.value }, id) // id is required as need to find each specific item in the cart
  }

  const deleteOrderClick = (id) => {
    props.destroyCartItem(id)
  }

  return (
    <div id="CartTable" className="my-3 container text-center">
      <Table className="table">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Product name</Th>
            <Th>Price</Th>
            <Th>Qty</Th>
            <Th>Subtotal</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {
            cart.map((list) => (
              <Tr key={list.id}>
                <Td><Image src={list.Product.Images?.[0]?.imageURL} className="pic-resize" /></Td>
                <Td>{list.Product.productName}</Td>
                <Td>${list.Product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Td>
                <Td>
                  <input
                    value={list.quantity}
                    type="number"
                    id="quantity-selected"
                    name="quantity"
                    step="1" // points go up in steps of 5
                    min="1" // minimum input is 1 to prevent negative number
                    max="99"
                    onChange={(e) => quantityOnChange(e, list.id)}
                  />
                </Td>
                <Td>${(list.Product.price * list.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}</Td>
                <Td>
                  <div className="fas fa-trash-alt trashBtn" onClick={() => deleteOrderClick(list.id)}> Remove</div>
                </Td>
              </Tr>
            ))
            }
        </Tbody>
      </Table>
    </div>

  )
}

CartTable.propTypes = {
  myCartState: PropTypes.shape().isRequired,
  getCart: PropTypes.func.isRequired,
  updateCartQuantity: PropTypes.func.isRequired,
  destroyCartItem: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  myCartState: state.myCartState
})

const mapDispatchToProps = {
  getCart,
  updateCartQuantity,
  destroyCartItem

}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)

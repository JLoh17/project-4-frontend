import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const CartTable = () => {
  useState()

  const TestOrders = [
    {
      id: '1',
      imageURL: 'https://images.hktv-img.com/images/HKTV/16493/LOG_MXMASTER3_BLK_main_53009919_20201029171358_01_1200.jpg',
      quantity: '1',
      product:
        { productName: 'some title',
          price: '100' }
    }, {
      id: '2',
      imageURL: 'https://images.hktv-img.com/images/HKTV/12752/339481_main_74712191_20211005152223_01_1200.jpg',
      quantity: '1',
      product:
        { productName: 'some title',
          price: '200' }
    }, {
      id: '3',
      imageURL: 'https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_blue.jpg',
      quantity: '1',
      product:
        { productName: 'some title',
          price: '300' }
    }, {
      id: '4',
      imageURL: 'https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_midnight.jpg',
      quantity: '1',
      product:
        { productName: 'some title',
          price: '400' }
    }
  ]

  return (
    <div id="CartTable" className="my-3 container text-center">
      <Table class="table">
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
            // TODO
            TestOrders.map((order) => (
              <Tr key={order.id}>
                <Td><Image src={order.imageURL} className="pic-resize" />{order.src}</Td>
                <Td>{order.product.productName}</Td>
                <Td>${order.product.price}</Td>
                <Td>
                  <Form.Control as="select" aria-label="status" name="status" onChange>
                    <option
                      defaultChecked
                      value="1"
                    >1</option>
                    <option
                      value="2"
                    >2</option>
                    <option
                      value="3"
                    >3</option>
                  </Form.Control>
                </Td>
                <Td>${order.product.price * order.quantity}</Td>
                <Td>
                  <div className="fas fa-trash-alt trashBtn" onClick> Remove</div>
                </Td>

              </Tr>
            ))
            }
        </Tbody>
      </Table>
    </div>

  )
}

export default CartTable

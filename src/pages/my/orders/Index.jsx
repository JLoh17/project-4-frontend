import React, { useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

const MyOrdersIndex = () => {
  useState()

  const TestOrders = [
    {
      id: '1',
      date: '2021/11/20',
      price: '400',
      status: 'Pending delivery'
    }, {
      id: '2',
      date: '2021/11/20',
      price: '400',
      status: 'Pending delivery'
    }, {
      id: '3',
      date: '2021/11/20',
      price: '400',
      status: 'Pending delivery'
    }, {
      id: '4',
      date: '2021/11/20',
      price: '400',
      status: 'Pending delivery'
    }
  ]

  return (

    <div className="orders-index container text-center my-3">
      <h1 className="my-3">Your orders</h1>

      <Table class="table">
        <Thead>
          <Tr>
            <Th>Order #</Th>
            <Th>Date</Th>
            <Th>Order Total</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            // TODO
            TestOrders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.id}</Td>
                <Td>{order.date}</Td>
                <Td>${order.price}</Td>
                <Td>{order.status}</Td>
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

export default MyOrdersIndex

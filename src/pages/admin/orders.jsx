import React, { useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import Form from 'react-bootstrap/Form'

const TestOrders = [
  {
    id: '1',
    date: '2021-11-21',
    grandTotal: '$100',
    status: 'Pending payment'
  }, {
    id: '2',
    date: '2021-11-22',
    grandTotal: '$200',
    status: 'Pending payment'
  }, {
    id: '3',
    date: '2021-11-23',
    grandTotal: '$300',
    status: 'Pending payment'
  }, {
    id: '4',
    date: '2021-11-24',
    grandTotal: '$400',
    status: 'Pending payment'
  }
]

const AdminOrders = (props) => {
  const [page, setPage] = useState(1)
  const [status, setStatus] = useState('')

  return (
    <div id="admin-orders" className="py-3 container text-center">
      <h1 className="py-3">My Admin Orders</h1>
      <Table class="table">
        <Thead>
          <Tr>
            <Th>Date Ordered</Th>
            <Th>Order Number</Th>
            <Th>Total</Th>
            <Th>Status</Th>
            <Th>Change Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
          // TODO
          TestOrders.map((order) => (
            <Tr>
              <Td>{order.date}</Td>
              <Td>{order.id}</Td>
              <Td>{order.grandTotal}</Td>
              <Td>{order.status}</Td>
              <Td>
                <Form.Control as="select" aria-label="status" name="status" onChange>
                  <option
                    defaultChecked
                    value="none"
                  >-</option>
                  <option
                    value="Pending-Payment"
                  >Pending payment</option>
                  <option
                    value="Pending-Delivery"
                  >Pending delivery</option>
                  <option
                    value="Delivered"
                  >Delivered</option>
                  <option
                    value="Cancelled-Order"
                  >Order Cancelled</option>
                </Form.Control>
              </Td>
            </Tr>
          ))
          }
        </Tbody>
      </Table>
    </div>
  )
}

export default AdminOrders

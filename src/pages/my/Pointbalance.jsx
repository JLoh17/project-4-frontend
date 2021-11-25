import React, { useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

const MyPointBalance = () => {
  useState()

  const TestPoints = [
    {
      id: '1',
      points: '100',
      order:
        { id: '1',
          createdAt: '2021/11/23' }
    }, {
      id: '2',
      points: '-100',
      order:
        { id: '2',
          createdAt: '2021/11/23' }
    }, {
      id: '3',
      points: '2200',
      order:
        { id: '3',
          createdAt: '2021/11/23' }
    }, {
      id: '4',
      points: '-100',
      order:
        { id: '4',
          createdAt: '2021/11/23' }
    }
  ]

  return (
    <div id="point-balance" className="container my-3">
      <h1 className="my-3">Your point balance is: XXXX </h1>
      <h3 className="my-3">Recent history:</h3>
      <Table class="table" className="text-center">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Order Number</Th>
            <Th>Net gain/loss</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
        // TODO
        TestPoints.map((point) => (
          <Tr key={point.id}>
            <Td>{point.order.createdAt}</Td>
            <Td>{point.order.id}</Td>
            <Td>{point.points}</Td>
          </Tr>
        ))
        }
        </Tbody>
      </Table>
    </div>
  )
}

export default MyPointBalance

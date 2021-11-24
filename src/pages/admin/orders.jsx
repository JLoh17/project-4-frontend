import React, { useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const AdminOrders = (props) => {
  const [page, setPage] = useState(1)
  const [status, setStatus] = useState('')

  return (
    <div className="my-3 container text-center">
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
          <Tr>
            <Td>Tablescon</Td>
            <Td>9 April 2019</Td>
            <Td>East Annex</Td>
            <Td>Super Friends</Td>
            <Td>Data Tables</Td>
          </Tr>
          <Tr>
            <Td>Capstone Data</Td>
            <Td>19 May 2019</Td>
            <Td>205 Gorgas</Td>
            <Td>Data Underground</Td>
            <Td>Data Scence</Td>
          </Tr>
          <Tr>
            <Td>Tuscaloosa D3</Td>
            <Td>29 June 2019</Td>
            <Td>Github</Td>
            <Td>The Contributors Consortium</Td>
            <Td>Data Viz</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  )
}

export default AdminOrders

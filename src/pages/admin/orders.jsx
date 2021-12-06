import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import Form from 'react-bootstrap/Form'
import Pagination from '@mui/material/Pagination'

import { getAdminOrders, updateAdminOrderStatus } from '@/actions/admin/order'

const AdminOrders = ({ adminOrderState: { listAdminOrder, meta }, ...props }) => {
  useEffect(() => {
    props.getAdminOrders()
  }, [])

  const handleChange = (e, OrderId) => {
    props.updateAdminOrderStatus({ status: e.target.value }, OrderId)
  }

  const getPage = (e, page) => {
    props.getAdminOrders({ page })
  }

  if (listAdminOrder.length === 0) return null

  const page = meta?.page
  const totalPages = meta?.totalPages

  return (
    <div id="admin-orders" className="py-3 container text-center">
      <h1 className="py-3">My Admin Orders</h1>
      <Table className="table">
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
          listAdminOrder.map((order) => (
            <Tr key={order.id}>
              <Td>{order.createdAt.slice(0, 10)}</Td>
              <Td>{order.id}</Td>
              <Td>${order.grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Td>
              <Td>{order.status}</Td>
              <Td>
                <Form.Control as="select" aria-label="status" name="status" onChange={(e) => handleChange(e, order.id)}>
                  <option
                    defaultChecked
                    value="none"
                  >Status unchanged</option>
                  <option
                    defaultChecked
                    value="Pending Payment"
                  >Pending payment</option>
                  <option
                    value="Pending Delivery"
                  >Pending delivery</option>
                  <option
                    value="Delivered"
                  >Delivered</option>
                  <option
                    value="Cancelled"
                  >Order Cancelled</option>
                </Form.Control>
              </Td>
            </Tr>
          ))
          }
        </Tbody>
      </Table>
      <Pagination
        className="d-flex justify-content-center"
        variant="outlined"
        color="primary"
        count={totalPages}
        page={page}
        showFirstButton="1" // jumps to first page
        showLastButton="1" // jumps to last page
        onChange={getPage}
      />
    </div>
  )
}

AdminOrders.propTypes = {
  adminOrderState: PropTypes.shape().isRequired,
  updateAdminOrderStatus: PropTypes.func.isRequired,
  getAdminOrders: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  adminOrderState: state.adminOrderState
})

const mapDispatchToProps = {
  getAdminOrders,
  updateAdminOrderStatus

}

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders)

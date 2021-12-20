import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getOrdersIndex, destroyMyOrder } from '@/actions/my/order/index'
import { Link } from 'react-router-dom'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import Pagination from '@mui/material/Pagination'

const MyOrdersIndex = ({ myOrdersIndexState: { listOrder, meta }, ...props }) => {
  useEffect(() => {
    props.getOrdersIndex()
  }, [])

  const orderShow = (orderId) => {
    const { history: { push } } = props
    push(`/my/orders/${orderId}`)
  }

  const handleDeleteClick = (id) => {
    props.destroyMyOrder(id)
  }
  const getPage = (e, page) => {
    props.getOrdersIndex({ page })
  }

  if (listOrder.length === 0) {
    return (
      <div id="index-order" className="orders-index container text-center p-3">
        <h1 className="p-3">You currently have no orders!</h1>
        <h6>All purchases will be logged at this page.</h6>
        <Link to="/products">Click here to view products</Link>
      </div>
    )
  }

  const { page } = meta
  const { totalPages } = meta

  // If the remove button shows a blank page and only shows on refresh, it's because there's something missing in the reducer
  return (

    <div id="index-order" className="orders-index container text-center p-3">
      <h1 className="p-3">Your orders</h1>

      <Table className="table">
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
            listOrder.map((order) => (
              <Tr key={order.id} className="order-index">
                <Td onClick={() => orderShow(order.id)}>{order.id}</Td>
                <Td onClick={() => orderShow(order.id)}>{order.createdAt.slice(0, 10)}</Td>
                <Td onClick={() => orderShow(order.id)}>${(order.grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 }))}</Td>
                <Td onClick={() => orderShow(order.id)}>{order.status}</Td>
                <Td>
                  {
                  order.status === 'Pending Payment' ? (
                    <>
                      <div onClick={() => handleDeleteClick(order.id)} className="fas fa-trash-alt trashBtn"> Cancel order</div>
                    </>
                  ) : (
                    <div>Order is confirmed cannot be cancelled</div>
                  )
                }
                </Td>

              </Tr>
            ))
            }
        </Tbody>
      </Table>
      <Pagination
        className="d-flex justify-content-center p-3"
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

MyOrdersIndex.propTypes = {
  getOrdersIndex: PropTypes.func.isRequired,
  myOrdersIndexState: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  destroyMyOrder: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  myOrdersIndexState: state.myOrdersIndexState // connected to Root
})

const mapDispatchToProps = {
  getOrdersIndex, // connected to Actions
  destroyMyOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersIndex)

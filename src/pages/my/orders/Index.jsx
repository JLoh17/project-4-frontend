import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getOrdersIndex, destroyMyOrder } from '@/actions/my/order/index'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

const MyOrdersIndex = ({ myOrdersIndexState: { listOrder }, ...props }) => {
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

  // If the remove button shows a blank page and only shows on refresh, it's because there's something missing in the reducer
  return (

    <div id="index-order" className="orders-index container text-center my-3">
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
            listOrder.map((order) => (
              <Tr key={order.id} className="cursor-icon order-index">
                <Td onClick={() => orderShow(order.id)}>{order.id}</Td>
                <Td onClick={() => orderShow(order.id)}>{order.createdAt.slice(0, 10)}</Td>
                <Td onClick={() => orderShow(order.id)}>${(order.grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 }))}</Td>
                <Td onClick={() => orderShow(order.id)}>{order.status}</Td>
                <Td>
                  {
                  order.status === 'Pending Payment' ? (
                    <>
                      <div onClick={() => handleDeleteClick(order.id)} className="fas fa-trash-alt trashBtn"> Remove</div>
                    </>
                  ) : (
                    <span />
                  )
                }
                </Td>

              </Tr>
            ))
            }
        </Tbody>
      </Table>
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

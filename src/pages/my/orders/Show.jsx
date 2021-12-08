import React, { useEffect } from 'react'
import FormsDeliveryDetails from '@/forms/delivery-details'
import FormsDeliveryShow from '@/forms/delivery-show'
import SideOrderSummary from '@/components/SideSummary'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getMyOrder } from '@/actions/my/order/show'
import { updateOrderDetails } from '@/actions/my/order/new'

const MyOrdersShow = ({
  myOrderShowState: { order },
  currentUserState: { currentUser },
  match: { params: { id } },
  ...props
}) => {
  useEffect(() => {
    props.getMyOrder(id)
  }, [])

  if (!order) return null

  // Long way around
  // const quantity = order.OrderProducts.map((item) => (item.quantity * item.Product.price))
  // console.log('====>', quantity)
  // const subTotal1 = quantity.reduce((prevSum, item) => (prevSum + item), 0)
  // console.log(subTotal1)

  // Denis way
  const subTotal = (order.OrderProducts.reduce((prevSum, item) => (prevSum + (item.quantity * item.Product.price)), 0))
  const subTotalStr = subTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })
  const pointsUsed = ((subTotal / 10) - (order.points)).toFixed(0)
  const grandTotal = (order.grandTotal).toLocaleString(undefined, { minimumFractionDigits: 2 })

  const submitDeliveryDetails = (values) => {
    props.updateOrderDetails({ ...values, pointsUsed }, id).then((data) => {
      window.location.href = data.url
    })
  }

  if (order.status === 'Pending Delivery' || order.status === 'Delivered' || order.status === 'Cancelled') {
    return (
      <div id="pages-orders-new" className="container p-3">
        <h1 className="text-center">Order ID: {order.id}</h1>
        <div className="row mt-4">
          <div className="col-12 col-lg-6 mb-3">
            <SideOrderSummary />
          </div>
          <div className="col-12 col-lg-6">
            <FormsDeliveryShow
              initialValues={{
                firstName: order.firstName || '',
                lastName: order.lastName || '',
                deliveryAddress: order.deliveryAddress || '',
                telephone: order.telephone || ''
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  if (order.status === 'Pending Payment') {
    return (
      <div id="pages-orders-new" className="container p-3">
        <h1 className="text-center">Delivery details | Order ID: {order.id}</h1>
        <div className="row mt-4">
          <div className="col-12 col-lg-6 mb-3">
            <SideOrderSummary
              subTotal={subTotalStr}
              points={pointsUsed}
              grandTotal={grandTotal}
            />
          </div>
          <div className="col-12 col-lg-6">
            <FormsDeliveryDetails
              initialValues={{
                firstName: currentUser.firstName || '',
                lastName: currentUser.lastName || '',
                deliveryAddress: currentUser.address || '',
                telephone: currentUser.telephone || ''
              }}
              onSubmit={submitDeliveryDetails}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="pages-orders-new" className="container my-3">should never see this section</div>
  )
}

MyOrdersShow.propTypes = {
  myOrderShowState: PropTypes.shape().isRequired,
  updateOrderDetails: PropTypes.func.isRequired,
  getMyOrder: PropTypes.func.isRequired,
  currentUserState: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  myOrderShowState: state.myOrderShowState,
  currentUserState: state.currentUser

})

const mapDispatchToProps = {
  getMyOrder,
  updateOrderDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersShow)

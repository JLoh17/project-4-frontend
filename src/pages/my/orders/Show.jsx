import React, { useEffect } from 'react'
import FormsDeliveryDetails from '@/forms/delivery-details'
import SideOrderSummary from '@/components/SideSummary'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getMyOrder } from '@/actions/my/order/show'

const MyOrdersShow = ({ myOrderShowState: { order }, currentUserState: { currentUser }, ...props }) => {
  const { id } = useParams()

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

  return (
    <div id="pages-orders-new" className="container my-3">
      <h1 className="text-center">Delivery details</h1>
      <div className="row mt-4">
        <div className="col-12 col-lg-6 mb-3">
          <SideOrderSummary
            subTotal={subTotalStr}
            points={pointsUsed}
            grandTotal={grandTotal}
          />
        </div>
        <div className="col-12 col-lg-6">
          <FormsDeliveryDetails initialValues={{
            firstName: currentUser.firstName || '',
            lastName: currentUser.lastName || '',
            address: currentUser.address || '',
            telephone: currentUser.telephone || ''
          }}
          // passing in props from User. If field is empty, then shows an empty string
          />
        </div>
      </div>
    </div>
  )
}

MyOrdersShow.propTypes = {
  myOrderShowState: PropTypes.shape().isRequired,
  createMyOrder: PropTypes.func.isRequired,
  getMyOrder: PropTypes.func.isRequired,
  currentUserState: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  myOrderShowState: state.myOrderShowState,
  currentUserState: state.currentUser

})

const mapDispatchToProps = {
  getMyOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersShow)

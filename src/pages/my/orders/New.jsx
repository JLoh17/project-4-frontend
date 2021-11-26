import React from 'react'
import FormsDeliveryDetails from '@/forms/delivery-details'
import SideOrderSummary from '@/components/SideSummary'

const MyOrdersNew = () => (
  <div id="pages-orders-new" className="container my-3">
    <h1 className="text-center">Delivery details</h1>
    <div className="row mt-4">
      <div className="col-12 col-lg-6 mb-3">
        <SideOrderSummary />
      </div>
      <div className="col-12 col-lg-6">
        <FormsDeliveryDetails />
      </div>
    </div>
  </div>
)

export default MyOrdersNew

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMyProfile } from '@/actions/my/profile/profile'

import PrivateRoute from '@/components/PrivateRouteUser'
import AdminPrivateRoute from '@/components/PrivateRouteAdmin'

import LayoutsNavbar from '@/components/Navbar'
import Searchbar from '@/components/Searchbar'
import CompsCategorybar from '@/components/Category'
import CompsFooter from '@/components/Footer'
import CompLoading from '@/components/Loading'

import PagesHome from '@/pages/Home'
import ProductIndex from '@/pages/ProductIndex'
import ProductShow from '@/pages/ProductShow'

import MyCart from '@/pages/my/Cart'
import MyOrdersShow from '@/pages/my/orders/Show'
import MyPointBalance from '@/pages/my/Pointbalance'
import MyOrdersIndex from '@/pages/my/orders/Index'
import AdminOrders from '@/pages/admin/Orders'
import AdminProducts from '@/pages/admin/Product'

import PaymentSuccess from '@/pages/stripe/Success'
import PaymentCancelled from '@/pages/stripe/Cancel'

import PagesNotFound from '@/pages/NotFound'

const App = (props) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    props.getMyProfile().finally(() => {
      setLoaded(true)
    })
  })

  return (
    <Router>
      {
          loaded ? (
            <>
              <LayoutsNavbar />
              {/* temporary fix; to merge searchbar and categorybar together */}
              <div className="sticky-top stickybar">
                <Searchbar />
                <CompsCategorybar />
              </div>
              <Switch>
                <Route exact path="/" component={PagesHome} />

                <Route exact path="/products" component={ProductIndex} />
                <Route exact path="/products/:id" component={ProductShow} />

                <PrivateRoute exact path="/my/cart" component={MyCart} />
                <PrivateRoute exact path="/my/orders" component={MyOrdersIndex} />
                <PrivateRoute exact path="/my/orders/:id" component={MyOrdersShow} />
                {/* <Route exact path="/my/orders/payment" component={MyOrdersShow} /> // Payment */}

                <PrivateRoute exact path="/payment-success" component={PaymentSuccess} />
                <PrivateRoute exact path="/payment-cancelled" component={PaymentCancelled} />

                {/* <Route exact path="/my/profile" component={MyProfile} /> // MyProfile */}
                <PrivateRoute exact path="/my/pointbalance" component={MyPointBalance} />
                {/* <Route exact path="/my/wishlist" component={MyWishlist} /> // MyWishlist */}

                <AdminPrivateRoute exact path="/admin/orders" component={AdminOrders} />
                <AdminPrivateRoute exact path="/admin" component={AdminProducts} />

                <Route component={PagesNotFound} />
              </Switch>
              <CompsFooter />
            </>
          ) : (
            <div className="container my-3">
              <CompLoading />
            </div>
          )
        }
    </Router>
  )
}

App.propTypes = {
  getMyProfile: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  getMyProfile
}

export default connect(null, mapDispatchToProps)(App)

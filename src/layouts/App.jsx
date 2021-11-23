import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import CompsSearchbar from '@/components/Navbar'
import Searchbar from '@/components/Searchbar'
import CompsCategorybar from '@/components/Category'
import CompsFooter from '@/components/Footer'

import PagesHome from '@/pages/Home'
import PagesAnother from '@/pages/Another'
import PagesNotFound from '@/pages/NotFound'

const App = () => (
  <Router>
    <CompsSearchbar />
    <Searchbar />
    <CompsCategorybar />
    <Switch>
      <Route exact path="/" component={PagesHome} />
      <Route exact path="/another" component={PagesAnother} />

      {/* <Route exact path="/products" component={ProductIndex} /> // Product Index */}
      {/* <Route exact path="/products/:id" component={ProductShow} /> // Product Show */}

      {/* <Route exact path="/another" component={MyCart} /> // MyCart */}
      {/* <Route exact path="/another" component={MyOrdersNew} /> // MyOrdersNew - Delivery details */}
      {/* <Route exact path="/another" component={MyOrdersShow} /> // Payment */}
      {/* <Route exact path="/another" component={MyOrdersIndex} /> // MyOrdersIndex */}
      {/* <Route exact path="/another" component={PagesAnother} /> // MyOrderShow */}

      {/* <Route exact path="/another" component={MyProfile} /> // MyProfile */}
      {/* <Route exact path="/another" component={MyPointBalance} /> // MyPointBalance */}
      {/* <Route exact path="/another" component={MyWishlist} /> // MyWishlist */}

      {/* <Route exact path="/another" component={AdminOrders} /> // AdminOrders */}
      {/* <Route exact path="/another" component={AdminIndex} /> // AdminIndex */}

      <Route component={PagesNotFound} />
    </Switch>
    <CompsFooter />
  </Router>
)

export default App

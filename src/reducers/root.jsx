import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/my/current-user'
import ReducersProductIndex from '@/reducers/product/product-index'
import ReducersProductShow from '@/reducers/product/product-show'
import ReducersMyCart from '@/reducers/my/my-cart'
import ReducersMyOrderShow from '@/reducers/my/orders/show'
import ReducersMyOrderIndex from '@/reducers/my/orders/'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  productState: ReducersProductIndex,
  productShowState: ReducersProductShow,
  myCartState: ReducersMyCart,
  myOrderShowState: ReducersMyOrderShow,
  myOrdersIndexState: ReducersMyOrderIndex,

  router: connectRouter(history)
})

export default createReducersRoot

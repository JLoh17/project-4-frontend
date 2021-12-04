import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/my/current-user'
import ReducersProductIndex from '@/reducers/product/product-index'
import ReducersProductShow from '@/reducers/product/product-show'
import ReducersMyCart from '@/reducers/my/my-cart'
import ReducersMyOrderShow from '@/reducers/my/orders/show'
import ReducersMyOrderIndex from '@/reducers/my/orders/'
import ReducersMyPointBalanceIndex from '@/reducers/my/profile/balance'
import ReducersAdminOrderState from '@/reducers/admin/order'

const createReducersRoot = (history) => combineReducers({
  productState: ReducersProductIndex,
  currentUser: ReducersCurrentUser,
  productShowState: ReducersProductShow,
  myCartState: ReducersMyCart,
  myOrderShowState: ReducersMyOrderShow,
  myOrdersIndexState: ReducersMyOrderIndex,
  myPointBalanceState: ReducersMyPointBalanceIndex,
  adminOrderState: ReducersAdminOrderState,

  router: connectRouter(history)
})

export default createReducersRoot

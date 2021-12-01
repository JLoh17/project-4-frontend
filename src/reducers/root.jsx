import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/my/current-user'
import ReducersProductIndex from '@/reducers/product/product-index'
import ReducersProductShow from '@/reducers/product/product-show'
import ReducersMyCart from '@/reducers/my/my-cart'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  productState: ReducersProductIndex,
  productShowState: ReducersProductShow,
  myCartState: ReducersMyCart,

  router: connectRouter(history)
})

export default createReducersRoot

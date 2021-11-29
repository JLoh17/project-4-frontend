import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/my/current-user'
import ReducersProductIndex from '@/reducers/product/product-index'
import ReducersProductShow from '@/reducers/product/product-show'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  productState: ReducersProductIndex,
  productShowState: ReducersProductShow,

  router: connectRouter(history)
})

export default createReducersRoot

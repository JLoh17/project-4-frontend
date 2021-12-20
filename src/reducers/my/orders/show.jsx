import produce from 'immer'

import {
  GET_MY_ORDERS_SHOW,
  SET_MY_ORDERS_SHOW
} from '@/actions/my/order/show'

const initialState = {
  order: null,
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_ORDERS_SHOW: {
      return produce(state, (draft) => {
        draft.order = action.payload.order
      })
    }
    case GET_MY_ORDERS_SHOW: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}

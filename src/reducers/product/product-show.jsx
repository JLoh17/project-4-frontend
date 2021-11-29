import produce from 'immer'

import {
  SET_PRODUCT_SHOW,
  GET_PRODUCT_SHOW
} from '@/actions/product/show'

const initialState = {
  product: null,
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_SHOW: {
      return produce(state, (draft) => {
        draft.product = action.payload.product
      })
    }
    case GET_PRODUCT_SHOW: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}

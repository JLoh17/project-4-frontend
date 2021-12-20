import produce from 'immer'

import {
  SET_PRODUCTLIST,
  GET_PRODUCTLIST,
  SET_PRODUCTLISTNEW,
  SET_PRODUCTLISTFEATURE
} from '@/actions/product/'

const initialState = {
  meta: null,
  cardList: [],
  newProduct: [],
  featured: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTLIST: {
      return produce(state, (draft) => {
        draft.cardList = action.payload.product
        draft.meta = action.payload.meta
      })
    }
    case SET_PRODUCTLISTNEW: {
      return produce(state, (draft) => {
        draft.newProduct = action.payload.product
      })
    }
    case SET_PRODUCTLISTFEATURE: {
      return produce(state, (draft) => {
        draft.featured = action.payload.product
      })
    }
    case GET_PRODUCTLIST: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }

    default: {
      return state
    }
  }
}

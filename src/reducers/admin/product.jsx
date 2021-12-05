import produce from 'immer'

import {
  SET_ADMINPRODUCTLIST,
  GET_ADMINPRODUCTLIST,
  // EDIT_ADMIN_ORDERSTATUS,
  // UPDATE_ADMIN_ORDERSTATUS,
  CREATE_ADMIN_PRODUCT,
  REMOVE_PRODUCT,
  DESTROY_PRODUCT
} from '@/actions/admin/product'

const initialState = {
  meta: null,
  adminProduct: [],
  product: [],
  isLoading: false,
  isCreateAdminProductLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMINPRODUCTLIST: {
      return produce(state, (draft) => {
        draft.adminProduct = action.payload.product
        draft.meta = action.payload.meta
      })
    }
    case GET_ADMINPRODUCTLIST: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    // case EDIT_ADMIN_ORDERSTATUS: {
    //   return produce(state, (draft) => {
    //     const index = draft.listAdminOrder.findIndex((order) => order.id === action.payload.order.id)
    //     if (index !== -1) draft.listAdminOrder[index] = action.payload.order
    //   })
    // }
    // case UPDATE_ADMIN_ORDERSTATUS: {
    //   return produce(state, (draft) => {
    //     draft.isLoading = action.payload.loading
    //   })
    // }
    case CREATE_ADMIN_PRODUCT: {
      return produce(state, (draft) => {
        draft.isCreateAdminProductLoading = action.payload.loading
      })
    }
    case REMOVE_PRODUCT: {
      return produce(state, (draft) => {
        const index = draft.product.findIndex((product) => product.id === action.payload)
        if (index !== -1) draft.product.splice(index, 1)
      })
    }
    case DESTROY_PRODUCT: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}

import produce from 'immer'

import {
  SET_ADMINPRODUCTLIST,
  GET_ADMINPRODUCTLIST,
  CREATE_ADMIN_PRODUCT,
  ADD_PRODUCT_TO_ADMININDEX,
  REMOVE_PRODUCT,
  DESTROY_PRODUCT
} from '@/actions/admin/product'

const initialState = {
  meta: null,
  adminProduct: [],
  addProduct: null,
  isCreateAdminProductLoading: false,
  isDestroyProductLoading: true,
  isLoading: false
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
    case ADD_PRODUCT_TO_ADMININDEX: {
      return produce(state, (draft) => {
        draft.adminProduct.unshift(action.payload)
      })
    }
    case REMOVE_PRODUCT: {
      return produce(state, (draft) => {
        const index = draft.adminProduct.findIndex((product) => product.id === action.payload) // no need to find the id as deleting the whole thing
        if (index !== -1) draft.adminProduct.splice(index, 1)
      })
    }
    case DESTROY_PRODUCT: {
      return produce(state, (draft) => {
        draft.isDestroyProductLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}

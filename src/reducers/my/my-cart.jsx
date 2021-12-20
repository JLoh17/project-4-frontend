import produce from 'immer'

import {
  UNSET_MY_CART,
  SET_CART,
  GET_CART,
  EDIT_CART_QUANTITY,
  UPDATE_CART_QUANTITY,
  REMOVE_CART_ITEM,
  DESTROY_CART_ITEM
} from '@/actions/my/cart/index'

import {
  ADD_PRODUCT_TO_CART,
  CREATE_CART_ITEM
} from '@/actions/my/cart/new'

const initialState = {
  cart: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return produce(state, (draft) => {
        draft.cart.push(action.payload.newCartItem)
      })
    }
    case CREATE_CART_ITEM: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }

    case SET_CART: {
      return produce(state, (draft) => {
        draft.cart = action.payload.cart
      })
    }
    case GET_CART: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    case UNSET_MY_CART: {
      return produce(state, (draft) => {
        draft.cart = []
      })
    }

    case EDIT_CART_QUANTITY: {
      return produce(state, (draft) => {
        const index = draft.cart.findIndex((item) => item.id === action.payload.cart.id) // matches the item in the cart
        if (index >= 0) draft.cart[index] = action.payload.cart // bigger/less than 0 otherwise will return false
        // we want to use .quantity as we are only changing the quantity in this case, otherwise the response time of the API will become slower
        // golden standard for API response time is 100ms
      })
    }
    case UPDATE_CART_QUANTITY: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }

    case REMOVE_CART_ITEM: {
      return produce(state, (draft) => {
        const index = draft.cart.findIndex((cart) => cart.id === action.payload)
        if (index !== -1) draft.cart.splice(index, 1)
      })
    }
    case DESTROY_CART_ITEM: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}

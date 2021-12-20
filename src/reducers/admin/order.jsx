import produce from 'immer'

import {
  SET_MYADMINORDERS,
  GET_MYADMINORDERS,
  EDIT_ADMIN_ORDERSTATUS,
  UPDATE_ADMIN_ORDERSTATUS
} from '@/actions/admin/order'

const initialState = {
  meta: null,
  listAdminOrder: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MYADMINORDERS: {
      return produce(state, (draft) => {
        draft.listAdminOrder = action.payload.orders
        draft.meta = action.payload.meta
      })
    }
    case GET_MYADMINORDERS: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    case EDIT_ADMIN_ORDERSTATUS: {
      return produce(state, (draft) => {
        const index = draft.listAdminOrder.findIndex((order) => order.id === action.payload.order.id)
        if (index !== -1) draft.listAdminOrder[index] = action.payload.order

        // the above looks at listAdminOrder and finds the order that matches the id and updates it. listAdminOrder refers to the initial state above.
        // if only one order, then order should be singular, as is this case here since we are looking for one order
        // draft makes a copy of the state and compares between the two, then updates the change accordingly
      })
    }
    case UPDATE_ADMIN_ORDERSTATUS: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}

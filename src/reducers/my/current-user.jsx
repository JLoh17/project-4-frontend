import produce from 'immer'

import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  EDIT_MY_PROFILE,
  UPDATE_MY_PROFILE
} from '@/actions/my/profile/profile'

const initialState = {
  currentUser: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return produce(state, (draft) => {
        draft.currentUser = action.payload
      })
    }
    case UNSET_CURRENT_USER: {
      return produce(state, (draft) => {
        draft.currentUser = null
      })
    }
    case EDIT_MY_PROFILE: {
      return produce(state, (draft) => {
        const index = draft.currentUser.findIndex((order) => order.id === action.payload.currentUser.id)
        if (index !== -1) draft.currentUser[index] = action.payload.order
      })
    }
    case UPDATE_MY_PROFILE: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}

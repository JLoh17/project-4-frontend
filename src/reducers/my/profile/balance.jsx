import produce from 'immer'

import {
  SET_MYPOINTSINDEX,
  GET_POINTSINDEX
} from '@/actions/my/profile/balance'

const initialState = {
  meta: null,
  point: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MYPOINTSINDEX: {
      return produce(state, (draft) => {
        draft.point = action.payload.order
        draft.meta = action.payload.meta
      })
    }
    case GET_POINTSINDEX: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}

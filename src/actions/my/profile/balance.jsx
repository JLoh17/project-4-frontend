import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_MYPOINTSINDEX = 'SET_MYPOINTSINDEX'
export const setPointsIndex = (payload) => ({ type: SET_MYPOINTSINDEX, payload })

// Need to do get to set loading, then dispatch the data in setPointsIndex to store data in the reducer, then dispatch to unset the loading as false
// Connect in pages is needed for dispatch to work
export const GET_POINTSINDEX = 'GET_POINTSINDEX'

export const getPointsIndex = (filter = {}) => (dispatch) => {
  dispatch(loading(GET_POINTSINDEX, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/my/profile/balance`,
    params: filter,
    withCredentials: true // requires this otherwise it won't send
  }).then((resp) => {
    dispatch(setPointsIndex(resp.data))
  }).finally(() => {
    dispatch(loading(GET_POINTSINDEX, { loading: false }))
  })
}

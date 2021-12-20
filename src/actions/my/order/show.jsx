import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_MY_ORDERS_SHOW = 'SET_MY_ORDERS_SHOW'
export const setMyOrdersShow = (payload) => ({ type: SET_MY_ORDERS_SHOW, payload })

// Need to do get to set loading, then dispatch the data in setMyOrdersShow to store data in the reducer, then dispatch to unset the loading as false
// Connect in pages is needed for dispatch to work
export const GET_MY_ORDERS_SHOW = 'GET_MY_ORDERS_SHOW'
export const getMyOrder = (OrderId) => (dispatch) => {
  dispatch(loading(GET_MY_ORDERS_SHOW, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/my/orders/${OrderId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(setMyOrdersShow(resp.data))
  }).finally(() => {
    dispatch(loading(GET_MY_ORDERS_SHOW, { loading: false }))
  })
}

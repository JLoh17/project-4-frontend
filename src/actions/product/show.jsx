import axios from 'axios'
import { loading } from '@/actions/loading'

export const SET_PRODUCT_SHOW = 'SET_PRODUCT_SHOW'
export const setProductShow = (payload) => ({ type: SET_PRODUCT_SHOW, payload })

// Need to do get to set loading, then dispatch the data in setProductShow to store data in the reducer, then dispatch to unset the loading as false
export const GET_PRODUCT_SHOW = 'GET_PRODUCT_SHOW'
export const getProductShow = (id) => (dispatch) => {
  dispatch(loading(GET_PRODUCT_SHOW, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/products/${id}`
  }).then((resp) => {
    dispatch(setProductShow(resp.data))
  }).finally(() => {
    dispatch(loading(GET_PRODUCT_SHOW, { loading: false }))
  })
}

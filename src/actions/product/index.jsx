import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_PRODUCTLIST = 'SET_PRODUCTLIST'
export const setProductList = (payload) => ({ type: SET_PRODUCTLIST, payload })

export const GET_PRODUCTLIST = 'GET_PRODUCTLIST'
export const getProductList = (filter = {}) => (dispatch) => {
  dispatch(loading(GET_PRODUCTLIST, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/products`,
    params: filter
  }).then((resp) => {
    dispatch(setProductList(resp.data))
  }).finally(() => {
    dispatch(loading(GET_PRODUCTLIST, { loading: false }))
  })
}

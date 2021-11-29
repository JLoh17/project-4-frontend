import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_PRODUCTLIST = 'SET_PRODUCTLIST'
export const setProductList = (payload) => ({ type: SET_PRODUCTLIST, payload })

export const SET_PRODUCTLISTNEW = 'SET_PRODUCTLISTNEW'
export const setProductListNew = (payload) => ({
  type: SET_PRODUCTLISTNEW, payload })

export const SET_PRODUCTLISTFEATURE = 'SET_PRODUCTLISTFEATURE'
export const setProductListFeature = (payload) => ({
  type: SET_PRODUCTLISTFEATURE, payload })

export const GET_PRODUCTLIST = 'GET_PRODUCTLIST'
export const getProductList = (filter = {}) => (dispatch) => {
  dispatch(loading(GET_PRODUCTLIST, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/products`,
    params: filter
  }).then((resp) => {
    if (filter.isNew) {
      dispatch(setProductListNew(resp.data))
    } else if (filter.isFeature) {
      dispatch(setProductListFeature(resp.data))
    } else {
      dispatch(setProductList(resp.data))
    }
  }).finally(() => {
    dispatch(loading(GET_PRODUCTLIST, { loading: false }))
  })
}

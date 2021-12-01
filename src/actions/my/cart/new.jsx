import axios from 'axios'

import { loading } from '@/actions/loading'

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const addProductToCart = (payload) => ({ type: ADD_PRODUCT_TO_CART, payload })
export const CREATE_CART_ITEM = 'CREATE_CART_ITEM'
export const createCartItem = (values) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_CART_ITEM, { loading: true }))
  axios({
    method: 'POST',
    url: `${process.env.API_DOMAIN}/api/my/cart`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(addProductToCart(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_CART_ITEM, { loading: false }))
  })
})

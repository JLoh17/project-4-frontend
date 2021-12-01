import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_CART = 'SET_CART'
export const setCart = (payload) => ({ type: SET_CART, payload })

export const GET_CART = 'GET_CART'
export const getCart = () => (dispatch) => {
  dispatch(loading(GET_CART, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/my/cart`,
    params: '',
    withCredentials: true // requires this otherwise it won't send
  }).then((resp) => {
    dispatch(setCart(resp.data))
  }).finally(() => {
    dispatch(loading(GET_CART, { loading: false }))
  })
}

export const EDIT_CART_QUANTITY = 'EDIT_CART_QUANTITY'
export const editCartQuantity = (payload) => ({ type: EDIT_CART_QUANTITY, payload })

export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY'
export const updateCartQuantity = (values, id) => (dispatch) => {
  dispatch(loading(UPDATE_CART_QUANTITY, { loading: true }))
  axios({
    method: 'PUT',
    url: `${process.env.API_DOMAIN}/api/my/cart/${id}`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(editCartQuantity(resp.data))
  }).finally(() => {
    dispatch(loading(UPDATE_CART_QUANTITY, { loading: false }))
  })
}

export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const removeCartItem = (payload) => ({ type: REMOVE_CART_ITEM, payload })
export const DESTROY_CART_ITEM = 'DESTROY_CART_ITEM'
export const destroyCartItem = (CartId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(DESTROY_CART_ITEM, { loading: true }))
  axios({
    method: 'DELETE',
    url: `${process.env.API_DOMAIN}/api/my/cart/${CartId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(removeCartItem(CartId))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(DESTROY_CART_ITEM, { loading: false, id: CartId }))
  })
})

import axios from 'axios'

import { loading } from '@/actions/loading'

import { unsetMyCart } from '@/actions/my/cart/index'

export const CREATE_MY_ORDER = 'CREATE_MY_ORDER'
export const createMyOrder = (values) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_MY_ORDER, { loading: true }))
  axios({
    method: 'POST',
    url: `${process.env.API_DOMAIN}/api/my/orders`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(unsetMyCart())
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_MY_ORDER, { loading: false }))
  })
})

export const updateOrderDetails = (values, OrderId) => () => new Promise((resolve, reject) => {
  axios({
    method: 'PUT',
    url: `${process.env.API_DOMAIN}/api/my/orders/${OrderId}/pay`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    resolve(resp.data)
  }).catch((err) => {
    reject(err)
  })
})

import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_ADMINPRODUCTLIST = 'SET_ADMINPRODUCTLIST'
export const setAdminProductList = (payload) => ({ type: SET_ADMINPRODUCTLIST, payload })

export const GET_ADMINPRODUCTLIST = 'GET_ADMINPRODUCTLIST'
export const getAdminProductList = (filter = {}) => (dispatch) => {
  dispatch(loading(GET_ADMINPRODUCTLIST, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/admin/products`,
    params: filter,
    withCredentials: true
  }).then((resp) => {
    dispatch(setAdminProductList(resp.data))
  }).finally(() => {
    dispatch(loading(GET_ADMINPRODUCTLIST, { loading: false }))
  })
}

export const ADD_PRODUCT_TO_ADMININDEX = 'ADD_PRODUCT_TO_ADMININDEX'
export const addProductToAdminIndex = (payload) => ({ type: ADD_PRODUCT_TO_ADMININDEX, payload })
export const CREATE_ADMIN_PRODUCT = 'CREATE_ADMIN_PRODUCT'
export const createProduct = (values) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_ADMIN_PRODUCT, { loading: true }))
  axios({
    method: 'POST',
    url: `${process.env.API_DOMAIN}/api/admin/products`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
    dispatch(addProductToAdminIndex(resp.data))
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_ADMIN_PRODUCT, { loading: false }))
  })
})

// Deleting the product
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const removeProduct = (payload) => ({ type: REMOVE_PRODUCT, payload })
export const DESTROY_PRODUCT = 'DESTROY_PRODUCT'
export const deleteProduct = (id) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(DESTROY_PRODUCT, { loading: true }))
  axios({
    method: 'DELETE',
    url: `${process.env.API_DOMAIN}/api/admin/products/${id}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(removeProduct(id))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(DESTROY_PRODUCT, { loading: false, id }))
  })
})

// export const EDIT_ADMIN_ORDERSTATUS = 'EDIT_ADMIN_ORDERSTATUS'
// export const editAdminOrderStatus = (payload) => ({ type: EDIT_ADMIN_ORDERSTATUS, payload })

// export const UPDATE_ADMIN_ORDERSTATUS = 'UPDATE_ADMIN_ORDERSTATUS'
// // Refer to handleChange in admin-orders
// export const updateAdminOrderStatus = (values, OrderId) => (dispatch) => {
//   dispatch(loading(UPDATE_ADMIN_ORDERSTATUS, { loading: true }))
//   axios({
//     method: 'PUT',
//     url: `${process.env.API_DOMAIN}/api/admin/orders/${OrderId}`,
//     data: values,
//     withCredentials: true
//   }).then((resp) => {
//     dispatch(editAdminOrderStatus(resp.data))
//   }).finally(() => {
//     dispatch(loading(UPDATE_ADMIN_ORDERSTATUS, { loading: false }))
//   })
// }

import axios from 'axios'
import { loading } from '@/actions/loading'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const setCurrentUser = (payload) => ({ type: SET_CURRENT_USER, payload })

export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER'
export const unsetCurrentUser = () => ({ type: UNSET_CURRENT_USER })

export const getMyProfile = () => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/my/profile`,
    withCredentials: true
  }).then((resp) => {
    dispatch(setCurrentUser(resp.data))
    resolve(resp)
  }).catch((err) => {
    dispatch(unsetCurrentUser())
    reject(err)
  })
})

export const EDIT_MY_PROFILE = 'EDIT_MY_PROFILE'
export const editMyProfile = (payload) => ({ type: EDIT_MY_PROFILE, payload })

export const UPDATE_MY_PROFILE = 'UPDATE_MY_PROFILE'
// Refer to handleChange in admin-orders
export const updateMyProfile = (values) => () => new Promise((resolve, reject) => {
  axios({
    method: 'PUT',
    url: `${process.env.API_DOMAIN}/api/my/profile`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    resolve(resp.data)
  }).catch((err) => {
    reject(err)
  })
})

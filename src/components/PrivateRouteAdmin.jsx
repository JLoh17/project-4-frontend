import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

const AdminPrivateRoute = ({ component: Component, currentUserState: { currentUser }, ...rest }) => {
  if (!currentUser) {
    toast.error('Please Login First!', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  if (!currentUser.isAdmin) {
    toast.error('You cannot access this page!', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          currentUser && currentUser.isAdmin ? <Component {...props} /> : <Redirect to="/" />
        )}
      />
    </>
  )
}

AdminPrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape()
  ]).isRequired,
  currentUserState: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser
})

export default connect(mapStateToProps)(AdminPrivateRoute)

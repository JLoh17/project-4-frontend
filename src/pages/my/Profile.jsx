import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getMyProfile, updateMyProfile } from '@/actions/my/profile/profile'
import MyProfileForm from '@/forms/profile-update'

const MyProfile = ({ currentUserState: { currentUser }, ...props }) => {
  useEffect(() => {
    props.getMyProfile()
  }, [])

  const submitMyProfile = (values) => {
    const { history: { push } } = props

    props.updateMyProfile(values).then(() => {
      push('/my/profile')
    })
  }

  if (!currentUser) return null

  return (
    <div id="my-profile" className="container p-3">
      <h1 className="p-3 m-0 text-center">Edit my profile </h1>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6">
          <MyProfileForm
            initialValues={{
              firstName: currentUser.firstName || '',
              lastName: currentUser.lastName || '',
              address: currentUser.address || '',
              email: currentUser.email || '',
              telephone: currentUser.telephone || ''
            }}
            onSubmit={submitMyProfile}
          />
        </div>
      </div>

    </div>
  )
}

MyProfile.propTypes = {
  currentUserState: PropTypes.shape().isRequired,
  getMyProfile: PropTypes.func.isRequired,
  updateMyProfile: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser

})

const mapDispatchToProps = {
  getMyProfile,
  updateMyProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)

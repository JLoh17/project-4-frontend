import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import FormsAuthLogin from '@/forms/login'

function ModalsLogin({ close, onSubmit }) {
  return (

    <Modal show onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Please login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormsAuthLogin
          onSubmit={onSubmit}
        />
      </Modal.Body>
    </Modal>
  )
}

ModalsLogin.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ModalsLogin

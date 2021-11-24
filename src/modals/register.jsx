import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import FormsAuthSignup from '@/forms/register'

function ModalsRegister({ close, onSubmit }) {
  return (

    <Modal show onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Register an account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormsAuthSignup
          onSubmit={onSubmit}
        />
      </Modal.Body>
    </Modal>
  )
}

ModalsRegister.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ModalsRegister

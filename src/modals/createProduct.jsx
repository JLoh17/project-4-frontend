import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import FormsCreateProduct from '@/forms/createProduct'

function ModalsCreateProduct({ close, onSubmit }) {
  return (

    <Modal show onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Create/edit product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormsCreateProduct
          onSubmit={onSubmit}
        />
      </Modal.Body>
    </Modal>
  )
}

ModalsCreateProduct.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ModalsCreateProduct

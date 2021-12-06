import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAdminProductList, createProduct, deleteProduct } from '@/actions/admin/product'

import ModalsCreateProduct from '@/modals/createProduct'

const AdminIndex = ({ adminProductState: { adminProduct, isLoading }, ...props }) => {
  useEffect(() => {
    props.getAdminProductList() // from Actions - passing the query
  }, [])

  const [createProductModal, setCreateProductModal] = useState(false)

  const openCreateProductModal = () => {
    setCreateProductModal(true)
  }

  const closeCreateProductModal = () => {
    setCreateProductModal(false)
  }

  // TODO - how to refresh after delete, and delete images as well
  const deleteOrderClick = (id) => {
    props.deleteProduct(id)
  }

  const createProductSubmit = (values) => {
    const newValues = { ...values }

    if (values.imageURL) {
      newValues.Images = [
        {
          imageURL: values.imageURL // need to do this section as formik assumes imageURL is in the same table as product, which it isn't
        }
      ]
    }

    props.createProduct(newValues).then(() => {
      closeCreateProductModal()
    })
  }

  return (
    <div id="admin-index" className="py-3 container text-center">
      <h1 className="py-3">Admin product page</h1>
      <button type="button" className="btn btn-primary mb-3" onClick={openCreateProductModal}>Create new product</button>
      {
          adminProduct.map((product) => (
            <div className="d-flex justify-content-center text-format" key={product.id}>
              <p className="mr-3 my-1">ProductID: {product.id}</p>
              <p className="mr-3 my-1">Name: {product.productName}</p>
              <p className="mr-3 my-1">Price: ${product.price}</p>
              <p className="fas fa-trash-alt trashBtn my-2" onClick={() => deleteOrderClick(product.id)} />
            </div>
          ))
        }
      { createProductModal && <ModalsCreateProduct close={closeCreateProductModal} onSubmit={createProductSubmit} /> }
    </div>
  )
}

AdminIndex.propTypes = {
  adminProductState: PropTypes.shape().isRequired,
  getAdminProductList: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  createProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  adminProductState: state.adminProductState
})

const mapDispatchToProps = {
  getAdminProductList,
  createProduct,
  deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminIndex)

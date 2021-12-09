import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAdminProductList, createProduct, deleteProduct } from '@/actions/admin/product'
import Loading from '@/components/Loading'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

import ModalsCreateProduct from '@/modals/createProduct'
import Pagination from '@mui/material/Pagination'

const AdminIndex = ({ adminProductState: { adminProduct, meta, isLoading }, ...props }) => {
  useEffect(() => {
    props.getAdminProductList() // from Actions - passing the query
  }, [])

  const [createProductModal, setCreateProductModal] = useState(false)

  const getPage = (e, page) => {
    props.getAdminProductList({ page })
  }

  const productShow = (productId) => {
    const { history: { push } } = props
    push(`/products/${productId}`)
  }

  if (adminProduct.length === 0) return null

  const { page } = meta
  const { totalPages } = meta

  const openCreateProductModal = () => {
    setCreateProductModal(true)
  }

  const closeCreateProductModal = () => {
    setCreateProductModal(false)
  }

  // TODO - Delete images as well
  const deleteOrderClick = (id) => {
    props.deleteProduct(id)
  }

  const createProductSubmit = (values) => {
    const newValues = { ...values }

    if (values.imageURL) {
      newValues.Images = [
        {
          imageURL: values.imageURL, // need to do this section as formik assumes imageURL is in the same table as product, which it isn't
          imageURL2: values.imageURL2,
          imageURL3: values.imageURL3
        }
      ]
    }

    props.createProduct(newValues).then(() => {
      closeCreateProductModal()
    })
  }

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return (
    <div id="admin-index" className="py-3 container text-center">
      <h1 className="py-3">Admin product page</h1>
      <button type="button" className="btn btn-primary mb-3" onClick={openCreateProductModal}>Create new product</button>

      <Table className="table">
        <Thead>
          <Tr>
            <Th>Product ID</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th />
          </Tr>
        </Thead>

        <Tbody>
          {
          adminProduct.map((product) => (
            <Tr className="text-format" key={product.id}>
              <Td onClick={() => productShow(product.id)}>{product.id}</Td>
              <Td onClick={() => productShow(product.id)}>{product.productName}</Td>
              <Td onClick={() => productShow(product.id)}>{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Td>
              <Td>
                <div className="fas fa-trash-alt" onClick={() => deleteOrderClick(product.id)} />
              </Td>
            </Tr>
          ))
        }
        </Tbody>
      </Table>

      { createProductModal && <ModalsCreateProduct close={closeCreateProductModal} onSubmit={createProductSubmit} /> }
      <Pagination
        className="d-flex justify-content-center pt-3"
        variant="outlined"
        color="primary"
        count={totalPages}
        page={page}
        showFirstButton="1" // jumps to first page
        showLastButton="1" // jumps to last page
        onChange={getPage}
      />
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

import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import qs from 'query-string'
import AddToCart from '@/components/AddtoCart'
import Loading from '@/components/Loading'
import { toast } from 'react-toastify'

import { getProductList } from '@/actions/product/index' // from Actions
import Pagination from '@mui/material/Pagination'

const ProductIndex = ({ productState: { cardList, meta, isLoading }, currentUserState: { currentUser }, history: { push }, ...props }) => { // cardList is from the reducer
  useEffect(() => {
    const query = qs.parse(props.location.search) // the query path
    props.getProductList(query) // from Actions - passing the query
  }, [])

  useEffect(() => {
    const query = qs.parse(props.location.search)
    props.getProductList(query) // from Actions
  }, [props.location.search]) // on update

  const productShow = (productId) => {
    push(`/products/${productId}`)
  }

  // Gets the page, as well as preventing going back to page 1 if on another page when refresh
  const getPage = (e, page) => {
    const query = { ...qs.parse(props.location.search), page }
    push(`/products?${qs.stringify(query)}`)
  }

  if (cardList.length === 0) return null

  const { page } = meta
  const { totalPages } = meta

  const toastifyId = 'randomId'

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  if (!currentUser) {
    toast.error('Please login to add to cart', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: toastifyId
    })

    return (
      <div id="product-index" className="container">
        <header className="text-center">
          <h1 className="py-3">Products</h1>
        </header>

        <div className="row pb-3 my-auto">
          {
            cardList.map((product) => (
              <Card className="col-6 col-md-4 col-lg-3 mx-auto" key={product.id}>
                <Card.Img variant="top" src={product.Images?.[0]?.imageURL} onClick={() => productShow(product.id)} className="cursor-icon" />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title onClick={() => productShow(product.id)} className="cursor-icon">{product.productName}</Card.Title>
                    <div className="far fa-heart" />
                  </div>
                  <Card.Text>${(product.price.toLocaleString(undefined, { minimumFractionDigits: 2 }))}</Card.Text>
                  <AddToCart product={product} quantity={1} currentUser={currentUser} />
                </Card.Body>
              </Card>

            ))
          }
        </div>

        <Pagination
          className="d-flex justify-content-center p-3"
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

  return (
    <div id="product-index" className="container">
      <header className="text-center">
        <h1 className="py-3">Products</h1>
      </header>

      <div className="row pb-3 my-auto">
        {
            cardList.map((product) => (
              <Card className="col-6 col-md-4 col-lg-3 mx-auto" key={product.id}>
                <Card.Img variant="top" src={product.Images?.[0]?.imageURL} onClick={() => productShow(product.id)} className="cursor-icon" />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title onClick={() => productShow(product.id)} className="cursor-icon">{product.productName}</Card.Title>
                    <div className="far fa-heart" />
                  </div>
                  <Card.Text>${(product.price.toLocaleString(undefined, { minimumFractionDigits: 2 }))}</Card.Text>
                  <AddToCart product={product} quantity={1} currentUser={currentUser} />
                </Card.Body>
              </Card>

            ))
          }
      </div>

      <Pagination
        className="d-flex justify-content-center p-3"
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

ProductIndex.propTypes = {
  productState: PropTypes.shape().isRequired, // productState is connected to Root
  getProductList: PropTypes.func.isRequired, // connected to Actions
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
  currentUserState: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  productState: state.productState, // connected to Root
  currentUserState: state.currentUser

})

const mapDispatchToProps = {
  getProductList // connected to Actions
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)

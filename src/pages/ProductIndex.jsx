import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import qs from 'query-string'
import AddToCart from '@/components/AddtoCart'
import Loading from '@/components/Loading'

import { getProductList } from '@/actions/product/index' // from Actions
import Pagination from '@mui/material/Pagination'

const ProductIndex = ({ productState: { cardList, meta, isLoading }, ...props }) => { // cardList is from the reducer
  useEffect(() => {
    const query = qs.parse(props.location.search) // the query path
    props.getProductList(query) // from Actions - passing the query
  }, [])

  useEffect(() => {
    const query = qs.parse(props.location.search)
    props.getProductList(query) // from Actions
  }, [props.location.search]) // on update

  const productShow = (productId) => {
    const { history: { push } } = props
    push(`/products/${productId}`)
  }

  const getPage = (e, page) => {
    props.getProductList({ page })
  }

  if (cardList.length === 0) return null

  const { page } = meta
  const { totalPages } = meta

  // TODO - to ask Denis (when less than 4 products the cards shrink in size from col

  if (isLoading) {
    return (
      <div>
        <Loading />
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
                  <AddToCart product={product} quantity={1} />
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
  location: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  productState: state.productState // connected to Root
})

const mapDispatchToProps = {
  getProductList // connected to Actions
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)

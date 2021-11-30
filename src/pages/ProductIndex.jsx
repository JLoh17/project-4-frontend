import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import qs from 'query-string'

import { getProductList } from '@/actions/product/index' // from Actions

const ProductIndex = ({ productState: { cardList }, ...props }) => { // cardList is from the reducer
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

  // TODO - Add to Cart functionality
  // TODO - Wishlist functionality on the font awesome
  // TODO - to ask Denis (when less than 4 products the cards shrink in size from col

  return (
    <div id="product-index" className="container">
      <header className="text-center">
        <h1 className="py-3">Products</h1>
      </header>

      <div className="d-flex align-center">
        {/* <div className="col-12"> */}
        <div className="row pb-3">
          {
              cardList.map((product) => (
                <Card className="col-sm-6 col-md-4 col-lg-3 p-0 mx-auto" key={product.id}>
                  <Card.Img variant="top" src={product.Images?.[0]?.imageURL} onClick={() => productShow(product.id)} className="cursor-icon" />
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title onClick={() => productShow(product.id)} className="cursor-icon">{product.productName}</Card.Title>
                      <div className="far fa-heart" />
                    </div>
                    <Card.Text>${(product.price.toLocaleString(undefined, { minimumFractionDigits: 2 }))}</Card.Text>
                    <Button variant="primary" className="btn-block">Add to Cart</Button>
                  </Card.Body>
                </Card>

              ))
            }

        </div>
        {/* </div> */}
      </div>
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

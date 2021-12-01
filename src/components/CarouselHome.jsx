import React, { useEffect } from 'react'
import Carousel from 'react-grid-carousel'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getProductList } from '@/actions/product/index' // from Actions

const CarouselHome = ({ productState: { featured }, productShow, ...props }) => { // featured comes from the reducer
  useEffect(() => {
    props.getProductList({ isFeature: true }) // from Actions
  }, [])

  return (
    <div id="carousel-home">
      <h3>Featured Products</h3>
      <Carousel cols={5} loop className="p-3">
        {featured.map((product) => (
          <Carousel.Item key={product.id}>
            <div
              className="card my-3 mx-auto cursor-icon"
              style={{ width: '15rem' }}
              onClick={() => productShow(product.id)}
            >
              <img src={product.Images?.[0]?.imageURL} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">${(product.price.toLocaleString(undefined, { minimumFractionDigits: 2 }))}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

CarouselHome.propTypes = {
  productState: PropTypes.shape().isRequired, // productState is connected to Root
  getProductList: PropTypes.func.isRequired, // connected to Actions
  productShow: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  productState: state.productState // connected to Root
})

const mapDispatchToProps = {
  getProductList // connected to Actions
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselHome)

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import CarouselHome from '@/components/CarouselHome'
import CardHome from '@/components/CardHome'

const PagesHome = (isLoading, props) => {
  const productShow = (productId) => {
    const { history: { push } } = props // cannot do history in the component as the router is tied to home page only, not the component <CarouselHome> and <CardHome>
    push(`/products/${productId}`)
  }

  return (
    <div id="pages-home" className="container-fluid">
      <div className="container align-center p-3">
        <div className="row my-3">
          <div className="col d-flex justify-content-center points">
            <div className="fab fa-pied-piper-pp mr-3" />
            <p>Earn 1 PulsePoint for every $10</p>
          </div>
          <div className="col d-flex justify-content-center delivery">
            <div className="fas fa-truck mr-3" />
            <p>Free delivery over $500</p>
          </div>
        </div>
      </div>
      <CarouselHome productShow={productShow} />
      <h3 className="my-3">New Products</h3>
      <CardHome productShow={productShow} />
    </div>
  )
}

PagesHome.propTypes = {
  history: PropTypes.shape().isRequired // productState is connected to Root
}

export default PagesHome

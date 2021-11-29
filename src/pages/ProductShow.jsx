import React, { useEffect } from 'react'
import CarouselProduct from '@/components/CarouselProduct'
import ProductSelector from '@/components/ProductSelector'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getProductShow } from '@/actions/product/show' // from Actions

const ProductShow = ({ productShowState: { product }, ...props }) => {
  useEffect(() => {
    props.getProductShow(id)
  }, [])

  return (
    <div id="product-show" className="container">

      <div className="my-3">
        <div className="row">
          <div className="col-md">
            <h1 className="my-3">{product.productName}</h1>
            <CarouselProduct images={product.Image} />
          </div>
          <div className="col-md">
            <ProductSelector product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

ProductShow.propTypes = {
  getProductShow: PropTypes.func.isRequired,
  productShowState: PropTypes.shape().isRequired // productShowState is connected to Root

}

const mapStateToProps = (state) => ({
  productShowState: state.productShowState // connected to Root
})

const mapDispatchToProps = {
  getProductShow // connected to Actions
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)

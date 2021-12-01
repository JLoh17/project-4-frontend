import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductShow } from '@/actions/product/show' // from Actions

import CarouselProduct from '@/components/CarouselProduct'
import ProductSelector from '@/components/ProductSelector'
import Loading from '@/components/Loading'

const ProductShow = ({ productShowState: { product, isLoading }, ...props }) => {
  const { id } = useParams() // useParams grabs the id from the address, the other way is to use match which can only be used if it is wrapped by a router

  useEffect(() => {
    props.getProductShow(id)
  }, [])

  if (isLoading) {
    return (
      <div className="container my-3">
        <Loading />
      </div>
    )
  }

  if (!product) return null // always need to do this regardless

  return (
    <div id="product-show" className="container">

      <div className="my-3">
        <div className="row">
          <div className="col-md">
            <h1 className="my-3">{product.productName}</h1>
            <CarouselProduct images={product.Images} />
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

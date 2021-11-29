import React, { useState } from 'react'
import CarouselProduct from '@/components/CarouselProduct'
import ProductSelector from '@/components/ProductSelector'

const ProductShow = () => {
  useState()

  return (
    <div id="product-show" className="container">

      <div className="my-3">
        <div className="row">
          <div className="col-md">
            <h1 className="my-3">Product Name</h1>
            <CarouselProduct />
          </div>
          <div className="col-md">
            <ProductSelector />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductShow

import React from 'react'
import PropTypes from 'prop-types'

import { Carousel } from 'react-responsive-carousel'

const CarouselProduct = ({ images }) => (
  <div id="carousel-product">
    <Carousel>
      {
        images.map((image) => (
          <div key={image.id}>
            <img src={image.imageURL} />
          </div>
        ))
      }
    </Carousel>
  </div>
)

CarouselProduct.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()).isRequired
}

export default CarouselProduct

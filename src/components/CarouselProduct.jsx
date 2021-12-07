import React from 'react'
import PropTypes from 'prop-types'

import { Carousel } from 'react-responsive-carousel'

const CarouselProduct = ({ images }) => {
  if (!images) return null

  const renderImages = () => { // this only works if you have multiple images columns for one product
    const imgs = []

    for (let i = 0; i < 3; i += 1) {
      const url = images?.[0]?.[`imageURL${i === 0 ? '' : i + 1}`]
      if (url) {
        imgs.push(
          <div key={url}>
            <img src={url} />
          </div>
        )
      }
    }

    return imgs
  }

  return (
    <div id="carousel-product">
      <Carousel>
        {renderImages()}
      </Carousel>
    </div>
  )
}

CarouselProduct.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()).isRequired
}

export default CarouselProduct

import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const CarouselProduct = () => (
  <div id="carousel-product">
    <Carousel>
      <div>
        <img src="https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_starlight.jpg" />
      </div>
      <div>
        <img src="https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_midnight.jpg" />
      </div>
      <div>
        <img src="https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_blue.jpg" />
      </div>
    </Carousel>
  </div>
)

export default CarouselProduct

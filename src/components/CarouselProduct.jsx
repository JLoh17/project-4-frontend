import React from 'react'
// import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const CarouselProduct = () => (
  <div id="carousel-product">
    <Carousel>
      <div>
        <img src="https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_starlight.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_midnight.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_blue.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  </div>
)

export default CarouselProduct

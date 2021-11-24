import React, { useState } from 'react'
import Carousel from 'react-grid-carousel'

const cards = [
  {
    id: '1',
    src: 'https://images.hktv-img.com/images/HKTV/16493/LOG_MXMASTER3_BLK_main_53009919_20201029171358_01_1200.jpg',
    title: 'Some Title',
    price: '$10'
  }, {
    id: '2',
    src: 'https://images.hktv-img.com/images/HKTV/12752/339481_main_74712191_20211005152223_01_1200.jpg',
    title: 'Some Title',
    price: '$10'
  }, {
    id: '3',
    src: '//image.converse.com.cn/resources/product/162050C001/162050C001_1H_NEW.png?2021112301',
    title: 'Some Title',
    price: '$10'
  }, {
    id: '4',
    src: '//image.converse.com.cn/resources/product/10021937281/10021937281_1H_NEW.png?2021112301',
    title: 'Some Title',
    price: '$10'
  }, {
    id: '5',
    src: 'https://www.fortress.com.hk/medias/Reebok-Dumbbell-Blac-12059907.jpg?context=bWFzdGVyfGZyb250cHJkfDg2NjQ2fGltYWdlL2pwZWd8ZnJvbnRwcmQvaGQ5L2gwNC85NTI3MTE5MTgzOTAyLmpwZ3wyMDc0MzFjZDdlZjk2Y2I5YzEyOTMzYTJkZDY0NDBjMTI3MzI3MTAxNjRkM2YzNTJhMDYyODBmNzVlOWVlY2Rk',
    title: 'Some Title',
    price: '$10'
  }, {
    id: '6',
    src: 'https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_blue.jpg',
    title: 'Some Title',
    price: '$10'
  }, {
    id: '7',
    src: 'https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_starlight.jpg',
    title: 'Some Title',
    price: '$10'
  }, {
    id: '8',
    src: 'https://shop.theclub.com.hk/media/catalog/product/cache/2fcb0be76f5f36e732067d937460935a/i/p/iphone13mini_midnight.jpg',
    title: 'Some Title',
    price: '$10'
  }, {
    id: '9',
    src: 'https://www.fortress.com.hk/medias/PS5-Console-12520265.jpg?context=bWFzdGVyfGZyb250cHJkfDk3MjQ0fGltYWdlL2pwZWd8ZnJvbnRwcmQvaDI5L2hjZC85ODU4NDE0Mzc5MDM4LmpwZ3xjODQ1MjcxMDIxMDE0ZmNkMjE4ZDM1MmI1MDgzMGE4ZGUxYjcyOTQ1ZTQ0OWE1ZTJjZjQ2Y2U3ZjBjZWY1MDU0',
    title: 'Some Title',
    price: '$10'
  }, {
    id: '10',
    src: 'https://www.fortress.com.hk/medias/FORERUNNER-55-Engli-12452629.jpg?context=bWFzdGVyfGZyb250cHJkfDkwNjQzfGltYWdlL2pwZWd8ZnJvbnRwcmQvaDg4L2gxOS85NzgxMzQ5NTgwODMwLmpwZ3xjMTdhNTk1Yzg2MWE0YjE1NDEzOTIyYzYwYWIxNDgyMDkzMWNiNzdiOTY1NGU5OTg2OGQ5MDIxYjk1ZmYzNGNj',
    title: 'Some Title',
    price: '$10'
  }

]

const CarouselHome = () => {
  useState()

  return (
    <>
      <h3>Featured Products</h3>
      <Carousel cols={5} loop className="p-3">
        {cards.map((val) => (
          <Carousel.Item key={val.id}>
            <div className="card my-3 mx-auto" style={{ width: '15rem' }}>
              <img src={val.src} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.price}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default CarouselHome

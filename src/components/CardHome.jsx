import React, { useState } from 'react'

const Card = [
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
  }
]

const CardHome = () => {
  useState()

  return (
    <div id="CardHome" className="col-9 mx-auto">
      <div className="row mb-3 align-center d-flex justify-content-between">
        {Card.map((order) => (
          <div className="card-deck col-6 col-md-3 p-1">
            <div className="card" key={order.id}>
              <img src={order.src} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{order.title}</h5>
                <p className="card-text">{order.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardHome

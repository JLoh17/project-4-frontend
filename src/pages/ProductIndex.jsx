import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductIndex = () => {
  const [fill, setFill] = useState('false')
  // useEffect()

  const setToggle = () => {
    setFill(!fill)
  }

  const CardList = [
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

  return (
    <div id="product-index" className="container-fluid">
      <header className="text-center">
        <h1 className="py-3">Products</h1>
      </header>

      <div className="d-flex">
        <div className="col-12">
          <div className="row pb-3">
            {
              CardList.map((card) => (
                <Card className="card-resize col-lg-3 mx-auto" key={card.id}>
                  <Card.Img variant="top" src={card.src} />
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title>{card.title}</Card.Title>
                      {/* Should be card.Wishlists.length === 0  instead of fill */}
                      <div className={fill ? 'far fa-heart' : 'fas fa-heart'} onClick={setToggle} />

                    </div>
                    <Card.Text>{card.price}</Card.Text>
                    <Button variant="primary" className="btn-block">Add to Cart</Button>
                  </Card.Body>
                </Card>

              ))
            }

          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductIndex

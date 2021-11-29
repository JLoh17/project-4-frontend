import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getProductList } from '@/actions/product/index' // from Actions

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

const CardHome = ({ productState: { newProduct }, ...props }) => { // this comes from the reducer
  useEffect(() => {
    props.getProductList({ isNew: true }) // from Actions
  }, [])

  return (
    <div id="CardHome" className="col-9 mx-auto">
      <div className="row mb-3 align-center d-flex ">

        {newProduct.map((product) => (
          <div className="card-deck col-6 col-md-3 p-1">
            <div className="card" key={product.id}>
              <img src={product.Images?.[0]?.imageURL} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

CardHome.propTypes = {
  productState: PropTypes.shape().isRequired, // productState is connected to Root
  getProductList: PropTypes.func.isRequired // connected to Actions
}

const mapStateToProps = (state) => ({
  productState: state.productState // connected to Root
})

const mapDispatchToProps = {
  getProductList // connected to Actions
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHome)

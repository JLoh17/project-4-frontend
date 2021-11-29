import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getProductList } from '@/actions/product/index' // from Actions

const CardHome = ({ productState: { newProduct }, ...props }) => { // this comes from the reducer
  useEffect(() => {
    props.getProductList({ isNew: true }) // from Actions
  }, [])

  return (
    <div id="CardHome" className="col-9 mx-auto">
      <div className="row mb-3 align-center d-flex ">

        {newProduct.map((product) => (
          <div className="card-deck col-sm-6 col-md-4 col-lg-3 p-1">
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

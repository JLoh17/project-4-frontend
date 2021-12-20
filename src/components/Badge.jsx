import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'react-bootstrap'
import { connect } from 'react-redux'

import { getCart } from '@/actions/my/cart/index'

const CompsBadge = ({ myCartState: { cart }, ...props }) => {
  useEffect(() => {
    props.getCart()
  }, [])

  if (!cart) return null

  if (cart.length === 0) return null

  const subTotal = (cart.reduce((prevSum, item) => (prevSum + item.quantity), 0))

  return (
    <>
      <Badge variant="info" className="mx-1 badge"><span /> {cart.length} </Badge>
    </>
  )
}

CompsBadge.propTypes = {
  myCartState: PropTypes.shape().isRequired,
  getCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  myCartState: state.myCartState
})

const mapDispatchToProps = {
  getCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CompsBadge)

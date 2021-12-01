import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createCartItem } from '@/actions/my/cart/new'

import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'

const AddToCart = ({ product, ...props }) => {
const [buttonDisable, setButtonDisable] = useState(false)

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'

import { authSignup, authLogin, authLogout } from '@/actions/auth'
import ModalsRegister from '@/modals/register'
import ModalsLogin from '@/modals/login'

import logo from '@/assets/logo.png'

class LayoutsNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showRegisterModal: false,
      showLoginModal: false
    }

    this.openRegisterModal = this.openRegisterModal.bind(this)
    this.closeRegisterModal = this.closeRegisterModal.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.openLoginModal = this.openLoginModal.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleRegisterSubmit(values) {
    this.props.authSignup(values).then(() => {
      this.closeRegisterModal()
    })
  }

  handleLoginSubmit(values) {
    this.props.authLogin(values).then(() => {
      this.closeLoginModal()
    })
  }

  handleLogoutClick() {
    const { history: { push } } = this.props
    this.props.authLogout().then(() => {
      push('/')
    })
  }

  openRegisterModal() {
    this.setState({ showRegisterModal: true })
  }

  closeRegisterModal() {
    this.setState({ showRegisterModal: false })
  }

  openLoginModal() {
    this.setState({ showLoginModal: true })
  }

  closeLoginModal() {
    this.setState({ showLoginModal: false })
  }

  renderCollapse() {
    const { currentUserState: { currentUser } } = this.props

    // if User is Admin and Logged in
    if (currentUser && currentUser.isAdmin) {
      return (
        <>
          <Nav className="ml-auto">
            <NavDropdown alignRight title={<span><i className="fas fa-user-check mx-1" />My Admin Profile</span>}>
              <NavDropdown.Item as={NavLink} to="/admin/orders">Admin Orders</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/admin/index">Create/edit product</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={this.handleLogoutClick} eventKey="5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      )
    }

    // if a User (non-admin) is logged in
    if (currentUser) {
      return (
        <>
          <Nav className="ml-auto dropdown-box">
            <NavDropdown
              alignRight
              title={(
                <>
                  <span>Hello {currentUser.firstName}</span>
                  <br /><span>Account & lists</span>
                </>
              )}
            >
              <NavDropdown.Item as={NavLink} to="/my/profile">Edit My Profile</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/my/orders">My Order History</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/my/pointbalance">My Points balance</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/my/wishlist">My Wishlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={this.handleLogoutClick} eventKey="4">Logout</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/my/cart" eventKey="3" className="my-auto">
              <span className="fas fa-shopping-cart" /> My Cart
              {/* <CartBadge /> */}
            </Nav.Link>
          </Nav>
        </>
      )
    }

    // return this only if no one is logged in
    return (
      <>
        <Nav className="ml-auto">
          <Nav.Link onClick={this.openRegisterModal} eventKey="1">
            <span className="fas fa-user-plus me-1" /> Register
          </Nav.Link>
          <Nav.Link onClick={this.openLoginModal} eventKey="2">
            <span className="fas fa-user-check"> Login</span>
          </Nav.Link>
        </Nav>
      </>
    )
  }

  render() {
    const { showRegisterModal, showLoginModal } = this.state

    return (
      <div id="navbar">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand as={NavLink} to="/"><img src={logo} className="navbar-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {this.renderCollapse()}
          </Navbar.Collapse>
        </Navbar>
        { showRegisterModal && <ModalsRegister close={this.closeRegisterModal} onSubmit={this.handleRegisterSubmit} /> }
        { showLoginModal && <ModalsLogin close={this.closeLoginModal} onSubmit={this.handleLoginSubmit} /> }
      </div>
    )
  }
}

LayoutsNavbar.propTypes = {
  history: PropTypes.shape().isRequired,
  currentUserState: PropTypes.shape().isRequired,
  authLogout: PropTypes.func.isRequired,
  authSignup: PropTypes.func.isRequired,
  authLogin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser
})

const mapDispatchToProps = {
  authLogout,
  authSignup,
  authLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LayoutsNavbar))

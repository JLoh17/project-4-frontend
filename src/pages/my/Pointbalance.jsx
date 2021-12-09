import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPointsIndex } from '@/actions/my/profile/balance'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import Pagination from '@mui/material/Pagination'
import { Link } from 'react-router-dom'

const MyPointBalance = ({ myPointBalanceState: { point, meta }, currentUserState: { currentUser }, ...props }) => {
  useEffect(() => {
    props.getPointsIndex()
  }, [])

  const orderShow = (OrderId) => {
    const { history: { push } } = props
    push(`/my/orders/${OrderId}`)
  }

  const getPage = (e, page) => {
    props.getPointsIndex({ page })
  }

  if (point.length === 0) return null

  const pointsBalance = (currentUser.pointsBalance).toLocaleString(undefined, { minimumFractionDigits: 0 })

  const { page } = meta
  const { totalPages } = meta

  return (
    <div id="point-balance" className="container p-3">
      <h1 className="my-3">Your point balance is: {pointsBalance} </h1>

      {
        (point.length === 0) ? (
          <div className="my-3 text-center">
            <div> You current have no points. You can purchase products to earn points which can be used to offset future purchases</div>
            <div> <Link to="/products"> View Products </Link></div>
          </div>
        ) : (
          <>
            <h3 className="my-4">Recent history:</h3>
            <Table className="table text-center">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Order Number</Th>
                  <Th>Net points</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
              point.map((balance) => (
                <Tr key={balance.id} className="point-balance">
                  <Td onClick={() => orderShow(balance.OrderId)}>{balance.createdAt.slice(0, 10)}</Td>
                  <Td onClick={() => orderShow(balance.OrderId)}>{balance.OrderId}</Td>
                  <Td onClick={() => orderShow(balance.OrderId)}>{balance.points}</Td>
                </Tr>
              ))
              }
              </Tbody>
            </Table>
            <Pagination
              className="d-flex justify-content-center p-3"
              variant="outlined"
              color="primary"
              count={totalPages}
              page={page}
              showFirstButton="1" // jumps to first page
              showLastButton="1" // jumps to last page
              onChange={getPage} // based on MUI, the changing page is this
            />
          </>

        )
      }
    </div>
  )
}

MyPointBalance.propTypes = {
  currentUserState: PropTypes.shape().isRequired,
  myPointBalanceState: PropTypes.shape().isRequired,
  getPointsIndex: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser,
  myPointBalanceState: state.myPointBalanceState

})

const mapDispatchToProps = {
  getPointsIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPointBalance)

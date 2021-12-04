import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getPointsIndex } from '@/actions/my/profile/balance'

const MyPointBalance = ({ myPointBalanceState: { point }, currentUserState: { currentUser }, ...props }) => {
  useEffect(() => {
    props.getPointsIndex()
  }, [])

  const pointsBalance = (currentUser.pointsBalance).toLocaleString(undefined, { minimumFractionDigits: 0 })

  return (
    <div id="point-balance" className="container p-3">
      <h1 className="my-3">Your point balance is: {pointsBalance} </h1>
      <h3 className="my-4">Recent history:</h3>
      <Table className="table text-center">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Order Number</Th>
            <Th>Net points gain/loss</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
        point.map((balance) => (
          <Tr key={balance.id}>
            <Td>{balance.createdAt.slice(0, 10)}</Td>
            <Td>{balance.OrderId}</Td>
            <Td>{balance.points}</Td>
          </Tr>
        ))
        }
        </Tbody>
      </Table>
    </div>
  )
}

MyPointBalance.propTypes = {
  currentUserState: PropTypes.shape().isRequired,
  myPointBalanceState: PropTypes.shape().isRequired,
  getPointsIndex: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser,
  myPointBalanceState: state.myPointBalanceState

})

const mapDispatchToProps = {
  getPointsIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPointBalance)

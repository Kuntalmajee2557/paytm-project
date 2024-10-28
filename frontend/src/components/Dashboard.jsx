import React from 'react'
import Appbar from './Appbar'
import Balance from './Balance'
import Users from './Users'

function Dashboard() {
  return (
    <div className=' h-screen m-5'>
      <Appbar />
      <Balance />
      <Users />

    </div>
  )
}

export default Dashboard
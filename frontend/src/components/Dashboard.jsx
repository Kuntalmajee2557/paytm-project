import React, { useEffect, useState } from 'react'
import Appbar from './Appbar'
import Balance from './Balance'
import Users from './Users'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  })
  const location = useLocation()
  const token = location.state.token
  console.log(token)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/app/v1/user/profile',{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      console.log(response)
      setUser(response.data.user)
    }
    fetchData()
  }, [])
  
  return (
    <div className=' h-screen m-5'>
      <Appbar user={user} />
      <Balance  user={user} token={token} />
      <Users token={token}/>

    </div>
  )
}

export default Dashboard
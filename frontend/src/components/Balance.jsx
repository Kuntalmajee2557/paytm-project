import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Balance({user, token}) {
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/app/v1/account/balance',{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setBalance(response.data.balance)
      console.log(response.data.balance)
    }
    fetchData()
  }, [])
  return (
    <div className='flex'>
        <p className='font-bold text-xl ml-5 my-5'>Your Balance</p>
        <p className='font-semibold text-xl ml-3 my-5'>{balance}</p>
    </div>
  )
}

export default Balance
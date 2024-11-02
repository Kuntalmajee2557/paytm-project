import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function SendMoney() {
  const location = useLocation()
  const navigate = useNavigate()
  const user = location.state.user
  const token = location.state.token
  // console.log("send" + token)
  const [amount, setAmount] = useState(0)
  console.log(user)
  async function clickHandler() {
    console.log("enter")
    const response = await axios.post('http://localhost:3000/app/v1/account/transfer', 
      {
        userId : user._id,
        amount : Number(amount)
    },
     { headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response)
    alert('done')
    navigate('/dashboard', {state:{token: token}})
  }
  
  return (
    <div className=' h-screen flex justify-center items-center'>
      <div className='bg-white h-1/2 w-1/3 rounded-lg flex flex-col p-14 justify-between drop-shadow-2xl'>
        <div>
          <h1 className='text-center text-5xl font-bold'>Send Money</h1>
        </div>
        <div className='flex flex-col justify-end gap-2'>
          <div className='flex flex-row items-center gap-3 '>
            <div className='size-14 rounded-full bg-green-500 flex justify-center items-center'>
              <p className=' text-white font-bold text-3xl' >{user.username.charAt(0).toUpperCase()}</p>
            </div>
            <p className='text-4xl font-bold'>{user.firstName} {user.lastName}</p>
          </div>

          <label for='amount' className='font-bold text-xl text'>Amount (in RS)</label>
          <input id='amount' type="text" className=' border rounded-sm border-input w-full px-2 py-1' onChange={e => setAmount(e.target.value) } />
          <button className='bg-green-500 text-white p-2 m-1 rounded-md mt-4 ' onClick={clickHandler}>Initiate Transfer</button>
        </div>
      </div>
    </div>
  )
}

export default SendMoney
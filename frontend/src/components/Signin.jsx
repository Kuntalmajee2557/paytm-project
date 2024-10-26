import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  function signupClickHandler(){
    navigate("/signup")
  }
  function signinClickHandler(){
    navigate("/dashboard")
  }


  return (
    <div className='relative flex flex-col justify-center items-center'>
      <h1>Sign In</h1>
      <input type="text" onChange={e => setUsername(e.target.value)} placeholder='Username' className='border m-1 rounded-sm' />
      <input type="text" onChange={e => setPassword(e.target.value)} placeholder='Password' className='border m-1 rounded-sm' />
      <button onClick={signinClickHandler} className='bg-black text-white p-2 m-1 rounded-md'>Signin</button>
      <button onClick={signupClickHandler} className='bg-black text-white p-2 m-1 rounded-md'>Singup</button>

      <p>{password}</p>
      <p>{username}</p>
    </div>
  )
}

export default Signin
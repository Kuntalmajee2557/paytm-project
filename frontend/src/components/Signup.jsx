import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  function signupClickHandler(){
    navigate("/dashboard")
  }
  function signinClickHandler(){
    navigate("/signin")
  }

  return (
    <div className='relative flex flex-col justify-center items-center'>
      <h1>Sign Up</h1>
      <input type="text" onChange={e => setUsername(e.target.value)} placeholder='Username' className='border m-1 rounded-sm' />
      <input type="text" onChange={e => setFirstname(e.target.value)} placeholder='Firstname' className='border m-1 rounded-sm' />
      <input type="text" onChange={e => setLastname(e.target.value)} placeholder='Lastname' className='border m-1 rounded-sm' />
      <input type="text" onChange={e => setPassword(e.target.value)} placeholder='Password' className='border m-1 rounded-sm' />
      <button onClick={signupClickHandler} className='bg-black text-white p-2 m-1 rounded-md'>Signup</button>
      <button onClick={signinClickHandler} className='bg-black text-white p-2 m-1 rounded-md'>Singin</button>
      
        <p>{firstname}</p>
        <p>{password}</p>
        <p>{username}</p>
        <p>{lastname}</p>
 
      


    </div>
  )
}

export default Signup
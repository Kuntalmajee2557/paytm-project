import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Heading from './Heading'
import InputBox from './InputBox'
import Button from './Button'
import BottomWarning from './BottomWarning'
import SubHeading from './SubHeading'

function Signup() {
  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  function signupClickHandler() {
    navigate("/dashboard")
  }
  function signinClickHandler() {
    navigate("/signin")
  }

  return (
    <div className="container bg-white h-screen max-w-full flex justify-center items-center" >
      <div className='wrapper py-28 px-48 rounded-md bg-slate-300'>
      <div className=' flex flex-col justify-center items-center bg-white border border-white h-1/3 px-7 py-10 rounded-md'>
        <Heading content='Sign Up' />
        <SubHeading content='Enter your information to create an account' ></SubHeading>
        <InputBox label="Username" content='JhonDoe User' value={username} setValue={setUsername}></InputBox>
        <InputBox label="Firstname" content='Jhon' value={firstname} setValue={setFirstname}></InputBox>
        <InputBox label="Lastname" content='Doe' value={lastname} setValue={setLastname}></InputBox>
        <InputBox label="Password" content='12345' value={password} setValue={setPassword}></InputBox>

        <Button content="singup" onclickHandler={signupClickHandler}></Button>
        <BottomWarning text='Already have an account? ' buttontext='Sign  in' onclickHandler={signinClickHandler}></BottomWarning>


        <p>{firstname}</p>
        <p>{password}</p>
        <p>{username}</p>
        <p>{lastname}</p>




      </div>
      </div>

    </div>

  )
}

export default Signup
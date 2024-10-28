import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Heading from './Heading'
import SubHeading from './SubHeading'
import InputBox from './InputBox'
import Button from './Button'
import BottomWarning from './BottomWarning'

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
    <div className="container bg-white h-screen max-w-full flex justify-center items-center" >
      <div className='wrapper py-28 px-48 rounded-md bg-slate-300'>
      <div className=' flex flex-col justify-center items-center bg-white border border-white h-1/3 px-7 py-10 rounded-md'>
        <Heading content='Sign Up' />
        <SubHeading content='Enter your information to log in your account' ></SubHeading>
        <InputBox label="Username" content='JhonDoe User' value={username} setValue={setUsername}></InputBox>
        <InputBox label="Password" content='12345' value={password} setValue={setPassword}></InputBox>

        <Button content="Sing in" onclickHandler={signinClickHandler}></Button>
        <BottomWarning text="Don't have an account?" buttontext='Sign  up' onclickHandler={signupClickHandler}></BottomWarning>


        <p>{password}</p>
        <p>{username}</p>




      </div>
      </div>

    </div>

  )
}

export default Signin
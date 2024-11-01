import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import SendMoney from './components/SendMoney'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={ <Signin/>}></Route>
        <Route path='/dashboard' element={ <Dashboard/>}></Route>
        <Route path='/send' element={ <SendMoney/>}></Route>
      </Routes>



    </BrowserRouter>
  )
}

export default App

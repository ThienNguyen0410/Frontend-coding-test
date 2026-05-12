import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Otp from './pages/otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/otp" element={<Otp></Otp>}></Route>
    </Routes>
    </>
  )
}

export default App

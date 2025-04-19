import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  { Router,Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Sell from './pages/Sell.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Shop from './pages/Shop.jsx'
import Profile from './pages/Profile.jsx'
import Buy from './pages/Buy.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/sell" element={<Sell/>} />  
      <Route path="/login" element={<Login/>} />  
      <Route path="/signup" element={<Signup/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/profile" element={<Profile />} /> 
      <Route path="/buy/:productId" element={<Buy />} />
      </Routes>

    </>
  )
}

export default App

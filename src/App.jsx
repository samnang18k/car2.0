import { useState } from 'react'
import './App.css'
import MainLayout from './Layout/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import Shop from './pages/Shop'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import AuthLayout from './Layout/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  element={<MainLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route element={<AuthLayout/>}>
            <Route path='/login' element={<Login/>} />
            <Route  path='/register' element={<Register />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

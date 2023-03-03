import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import { Footer } from './Components/Footer'
import Videos from './Components/Videos'
import Upload from './Components/Upload'
import Login from './Components/Login'
import Singup from './Components/Singup'

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Singup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

// import { useState } from 'react'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import { Checkout } from './pages/Checkout'
import { Checkout2 } from './pages/Checkout2'
import { Checkout3 } from './pages/Checkout3'
import { Checkout4 } from './pages/Checkout4'
import { Checkout5 } from './pages/Checkout5'
import { Home } from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout/overview' element={<Checkout />} />
          <Route path='/checkout/two' element={<Checkout2 />} />
          <Route path='/checkout/three' element={<Checkout3 />} />
          <Route path='/checkout/four' element={<Checkout4 />} />
          <Route path='/checkout/five' element={<Checkout5 />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './view/Home'
import Footer from './components/Footer'
import Heritage from './view/Heritage'
import Sensations from './view/Sensations'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/heritage'} element={<Heritage />}/>
          <Route path={'/sensations'} element={<Sensations />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}


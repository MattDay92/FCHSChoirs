import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './view/Home'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={'/'} element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


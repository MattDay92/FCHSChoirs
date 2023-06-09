import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './view/Home'
import Footer from './components/Footer'
import Heritage from './view/Heritage'
import Sensations from './view/Sensations'
import Calendar from './view/Calendar'
import Legacy from './view/Legacy'
import Bella from './view/Bella'
import Sig from './view/Sig'
import Support from './view/Support'
import Newsletter from './view/Newsletter'
import Fees from './view/Fees'
import Contact from './view/Contact'
import ByLaws from './view/ByLaws';


export default function App() {
  const [background, changeBackground] = useState('')
  const [loaded, setLoaded] = useState(false)

  const random = () => {
    const myCovers = ['heritage', 'sensations', 'bella', 'legacy', 'sig', 'christmas']
    const randomCover = Math.floor(Math.random() * myCovers.length);

    changeBackground(myCovers[randomCover])
  }

  setTimeout(() => {
    setLoaded(true)
  }, "2000");

  useEffect(() => {
    random()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Nav random={random} />
          <Routes>
            <Route path={'/'} element={<Home background={background} />} />
            <Route path={'/heritage'} element={<Heritage />} />
            <Route path={'/sensations'} element={<Sensations />} />
            <Route path={'/legacy'} element={<Legacy />} />
            <Route path={'/sig'} element={<Sig />} />
            <Route path={'/bella'} element={<Bella />} />
            <Route path={'/calendar'} element={<Calendar />} />
            <Route path={'/newsletter'} element={<Newsletter />} />
            <Route path={'/support'} element={<Support />} />
            <Route path={'/fees'} element={<Fees />} />
            <Route path={'/contact'} element={<Contact />} />
          </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  )
}


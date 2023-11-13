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
import Dynamic from './view/Dynamic'
import VoceAlta from './view/VoceAlta'
import PaymentThankYou from './view/PaymentThankYou'
import KidsCamp from './view/KidsCamp'
import Musical from './view/Musical'
import PageNotFound from './view/PageNotFound'
import Tickets from './view/Tickets'


export default function App() {
  const [background, changeBackground] = useState('')
  const [loaded, setLoaded] = useState(false)

  const random = () => {
    const myCovers = ['heritage', 'sensations', 'bella', 'legacy', 'sig']
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
            <Route exact path={'/'} element={<Home background={background} />} />
            <Route exact path={'/heritage'} element={<Heritage />} />
            <Route exact path={'/sensations'} element={<Sensations />} />
            <Route exact path={'/legacy'} element={<Legacy />} />
            <Route exact path={'/sig'} element={<Sig />} />
            <Route exact path={'/bella'} element={<Bella />} />
            <Route exact path={'/dynamic'} element={<Dynamic />} />
            <Route exact path={'/vocealta'} element={<VoceAlta />} />
            <Route exact path={'/calendar'} element={<Calendar />} />
            <Route exact path={'/newsletter'} element={<Newsletter />} />
            <Route exact path={'/support'} element={<Support />} />
            <Route exact path={'/fees'} element={<Fees />} />
            <Route exact path={'/contact'} element={<Contact />} />
            <Route exact path={'/payment-thank-you'} element={<PaymentThankYou />} />
            <Route exact path={'/tickets'} element={<Tickets />} />
            {/* <Route exact path={'/kidscamp'} element={<KidsCamp />} /> */}
            {/* <Route exact path={'/musical'} element={<Musical />} /> */}
            <Route path={'*'} element={<PageNotFound />} />
          </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  )
}


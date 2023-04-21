import React, {useState, useEffect} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './view/Home'
import Footer from './components/Footer'
import Heritage from './view/Heritage'
import Sensations from './view/Sensations'
import Calendar from './view/Calendar'


export default function App() {
  const [background, changeBackground] = useState('')

  const random = () => {
    const myCovers = ['heritage', 'sensations', 'bella', 'legacy', 'sig']
    const randomCover = Math.floor(Math.random() * myCovers.length);

    changeBackground(myCovers[randomCover])

    console.log(background)
  }

  useEffect(()=>{
    random()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Nav random={random} />
        <Routes>
          <Route path={'/'} element={<Home background={background} />}/>
          <Route path={'/heritage'} element={<Heritage />}/>
          <Route path={'/sensations'} element={<Sensations />}/>
          <Route path={'/calendar'} element={<Calendar />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}


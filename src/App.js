import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getDatabase, ref, set, onValue } from 'firebase/database'
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
import Purchase from './view/Purchase'
import Velocity from './view/Velocity'
import Admin from './view/Admin'


export default function App({ storage, database }) {
  const [background, changeBackground] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [showPopUp, setShowPopUp] = useState(true)
  const [link, setLink] = useState('')
  const [breakfastClubLink, setBreakfastClubLink] = useState('')
  const [featuredInfo, setFeaturedInfo] = useState('')

  const getNewsletterLink = () => {
    const db = getDatabase()
    const newsletter = ref(db, '/link/linkURL')

    onValue(newsletter, (snapshot) => {
      const data = snapshot.val()
      let link = '';

      setLink(data)
      const linkName = data
      for (let x = 0; x < linkName.length; x++) {
        if (linkName[x] === '?') {
          link = linkName.substring(0, x + 1);
          break;
        }
      }

      if (link) {
        setLink(link);
      }
    })
  }

  const getBreakfastClubLink = () => {
    const db = getDatabase()
    const BreakfastClub = ref(db, '/breakfastLink/linkURL')

    onValue(BreakfastClub, (snapshot) => {
      const data = snapshot.val()
      let link = '';

      setBreakfastClubLink(data)
    })
  }

  const getFeaturedInfo = () => {
    const db = getDatabase()
    const FeaturedTitle = ref(db, '/featuredTitle')

    onValue(FeaturedTitle, (snapshot) => {
      const data = snapshot.val()
      let link = '';

      setFeaturedInfo(data)
    })

  }

  const random = () => {
    const myCovers = ['heritage', 'sensations', 'bella', 'legacy', 'sig']
    const randomCover = Math.floor(Math.random() * myCovers.length);

    changeBackground(myCovers[randomCover])
  }

  const closeAd = () => {
    const homePopUp = document.getElementById('popup')
    homePopUp.style.display = "none"

    setShowPopUp(false)
  }

  setTimeout(() => {
    setLoaded(true)
  }, "2000");

  useEffect(() => {
    random()
    getNewsletterLink()
    getBreakfastClubLink()
    getFeaturedInfo()
  }, [])



  

  return (
    <div>
      <BrowserRouter>
        <Nav random={random} breakfastClubLink={breakfastClubLink} />
        <Routes>
          <Route exact path={'/'} element={<Home background={background} featuredInfo={featuredInfo} closeAd={closeAd} setShowPopUp={setShowPopUp} showPopUp={showPopUp} />} />
          <Route exact path={'/heritage'} element={<Heritage />} />
          <Route exact path={'/sensations'} element={<Sensations />} />
          <Route exact path={'/legacy'} element={<Legacy />} />
          <Route exact path={'/sig'} element={<Sig />} />
          <Route exact path={'/bella'} element={<Bella />} />
          <Route exact path={'/dynamic'} element={<Dynamic />} />
          <Route exact path={'/vocealta'} element={<VoceAlta />} />
          <Route exact path={'/velocity'} element={<Velocity />} />
          <Route exact path={'/calendar'} element={<Calendar />} />
          <Route exact path={'/newsletter'} element={<Newsletter link={link} storage={storage} />} />
          <Route exact path={'/support'} element={<Support />} />
          <Route exact path={'/fees'} element={<Fees />} />
          <Route exact path={'/contact'} element={<Contact />} />
          <Route exact path={'/payment-thank-you'} element={<PaymentThankYou />} />
          <Route exact path={'/tickets'} element={<Tickets />} />
          <Route exact path={'/purchase'} element={<Purchase />} />
          <Route exact path={'/admin4161'} element={<Admin storage={storage} />} />
          {/* <Route exact path={'/kidscamp'} element={<KidsCamp />} /> */}
          {/* <Route exact path={'/musical'} element={<Musical />} /> */}
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Showfest from '../components/photos/ShowFestLogo.webp'
import Jared from '../components/photos/JaredSlothowerHeadshot.webp'
import JaredCover from '../components/photos/shrek.webp'
export default function VoiceLessons() {

  return (
    <div className='fullpage'>

      <div className='hero-image heritage'>
        <div className='overlay-cover'>
          <img className='cover-img' alt='Heritage Singers' src={JaredCover} />
        </div>
      </div>
      <div className='hero-title'>
        <h1>Private Voice Lessons</h1>
      </div>
      <div className='col-6 bio m-auto'>
        <div className='text-center my-3'><img src={Jared} className='directorIMG' alt='Jared Slothower - Vocal Coach' /></div>
        <div className='text-center'>
          <h4>Jared Slothower</h4>
          <h5>Private Vocal Coach</h5>
          <p>Jared Slothower is a multifaceted musician and teacher based in Indianapolis, Indiana. He
            currently serves as the Tenor 2 section leader at Second Presbyterian Church, Staff accompanist
            at Anderson University, and has a private studio of 25 students. His favorite roles have included
            Cinderella’s Prince (Into the Woods), The Minstrel (Once Upon a Mattress), and Danilo (The
            Merry Widow). He has been a soloist and ensemble member of numerous choirs and orchestras,
            including CCM Chamber Choir, Indianapolis Opera, Kantorei, Elysian Voices, Ball State Concert
            Choir, Indianapolis Baroque Orchestra, Rock Valley Pops Orchestra, and Rock Valley College
            Concert Choir. He had the privilege of studying voice with Dr. Gwen Coleman and Dr. Daniel
            Narducci. Jared is excited to start working at Franklin Community High School this year and
            can’t wait to start working with the students! Jared lives in Indianapolis with his husband and
            their two dogs and cat.</p>
          <h5>Email:  slothowerjared@gmail.com</h5>
        </div>
      </div>

      <div className='row calendar col-8 m-auto mb-5 d-flex justify-content-center'>
        <iframe src="https://calendar.google.com/calendar/embed?src=96c20dcca22423be44d5fd32bcf8cc52a2f47920169d5f5db15fab129ddf2be3%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis"></iframe>      
      </div>



    </div >
  )
}

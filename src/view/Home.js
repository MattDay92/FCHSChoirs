import React, { useEffect, useState } from 'react'
import Showfest from '../components/photos/ShowFestLogo.png'
import BellaStLouis from '../components/photos/bella.JPG'
import SigStLouis from '../components/photos/sig.JPG'
import Arch from '../components/photos/arch.jpeg'


export default function Home() {

  const myCovers = ['heritage', 'sensations']
  const random = Math.floor(Math.random() * myCovers.length);


  return (
    <div className='fullpage'>
      {/* <img className='home-cover' src={Cover} /> */}
      <div className='hero-image sensations'>
        <div className='overlay-cover'>
        </div>
      </div>
      <div className='hero-title'>
        <h1>Franklin Community High School Choirs</h1>
      </div>
      <div className='row showfest d-flex justify-content-center align-items-center my-5'>
        <div className='col-4'>
          <img className='showfest-logo' src={Showfest} />
        </div>
        <div className='col-4 text-center'>
          <p className='text-white'>Hello, Directors! Preparations are under way for Franklin Community High School’s ShowFest 2024, to be held on Friday, January 26th, and Saturday, January 27th, 2024. A registration discount of 50 – 100 dollars will be given to every group that registers before August 1st!</p>
          <a className='btn'>More Information</a>
        </div>
      </div>
      <div className='container featured col-8'>
        <h2 className='text-center text-white my-5'>St. Louis Tour 2023</h2>
        <div className='carousel d-flex justify-content-center mb-5'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={BellaStLouis} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={SigStLouis} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Arch} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <p className='text-center text-white'>Members of Signature Sound and Bella Voce traveled to St. Louis as part of the Heritage Music Festival.
          The students explored the City Museum, visited the St. Louis Arch, had a great time at Six Flags,
          and of course competed at the prestigious Heritage Music Festival.
          The choirs tied for first overall, with each other!</p>
      </div>
      <div className='row text-center'>
        <h2>Follow FCOMM Choirs!</h2>
        <span>
          <a className='mx-5' href='https://www.facebook.com/profile.php?id=100063582283607' target='_blank'><i class="fa-brands fa-square-facebook"></i></a>
          <a className='mx-5' href='https://www.tiktok.com/@fcommchoirs?_t=8bdc5aHkR9m&_r=1' target='_blank'><i class="fa-brands fa-tiktok"></i></a>
        </span>
      </div>
    </div>
  )
}

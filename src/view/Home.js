import React, { useEffect, useState } from 'react'
import Showfest from '../components/photos/ShowFestLogo.png'
import HeritageSingers from '../components/photos/heritage.jpg'
import SigPic from '../components/photos/sig.JPG'
import SensationsPic from '../components/photos/sensations.jpg'
import LegacyPic from '../components/photos/legacy.JPG'
import BellaPic from '../components/photos/bella.jpg'
import ChristmasPic from '../components/photos/ChristmasBella.JPG'
import BellaStLouis from '../components/photos/bella.jpg'
import SigStLouis from '../components/photos/sig.JPG'
import Arch from '../components/photos/arch.jpeg'
import Button from '@mui/material/Button';



export default function Home({ background }) {

  return (
    <div className='fullpage'>
      {background === 'sensations' ? <>
        <div className='hero-image'>
          <div className='overlay-cover'>
            <img className='cover-img' src={SensationsPic} />
          </div>
        </div></> : background === 'heritage' ?
        <>
          <div className='hero-image'>
            <div className='overlay-cover'>
              <img className='cover-img' src={HeritageSingers} />
            </div>
          </div></> : background === 'legacy' ?
          <>
            <div className='hero-image'>
              <div className='overlay-cover'>
                <img className='cover-img' src={LegacyPic} />
              </div>
            </div></> : background === 'sig' ?
            <>
              <div className='hero-image'>
                <div className='overlay-cover'>
                  <img className='cover-img' src={SigPic} />
                </div>
              </div></> : background === 'bella' ?
              <>
                <div className='hero-image'>
                  <div className='overlay-cover'>
                    <img className='cover-img' src={BellaPic} />
                  </div>
                </div></> : background === 'christmas' ?
                <>
                  <div className='hero-image'>
                    <div className='overlay-cover'>
                      <img className='cover-img' src={ChristmasPic} />
                    </div>
                  </div></> :
                <>
                  <div className='hero-image'>
                    <div className='overlay-cover'>
                    </div>
                  </div>
                </>
      }
      <div className='hero-title'>
        <h1>Franklin Community High School Choirs</h1>
      </div>
      <div className='row showfest d-flex justify-content-center align-items-center my-5'>
        <div className='col-4 showfest-img'>
          <img className='showfest-logo' src={Showfest} />
        </div>
        <div className='col-4 showfest-info text-center'>
          <p className='text-white'>Hello, Directors! Preparations are under way for Franklin Community High School’s ShowFest 2024, to be held on Friday, January 26th, and Saturday, January 27th, 2024. A registration discount of 50 – 100 dollars will be given to every group that registers before August 1st!</p>
          <Button variant='contained' className='btn' href='https://docs.google.com/forms/d/e/1FAIpQLScXk6K1JQTBv9z4MmUciYgdG9-3pGBAzAwYHx3cS8r3sEbeaQ/viewform' target='_blank'>More Information</Button>
        </div>
      </div>
      <div className='container featured col-8'>
        <h2 className='text-center text-white my-5'>St. Louis Tour 2023</h2>
        <div className='carousel d-flex justify-content-center'>
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
      <h2>Thank You to our Sponsors!</h2>
      <div className='row text-center sponsors px-0 mx-0 my-4'>
        <div className='sponsors1'>
          <h3>Director's Circle - $1,000 +</h3>
          <h4>Ray Skillman New Whiteland, IN</h4>
          <h4>Paul Humbles and American Family Insurance</h4>
          <h4>Tillina Marke Key Enterprise</h4>
        </div>
        <div className='sponsors2 d-flex justify-content-center'>
          <div className='sponsor-col'>
            <h3>Platinum Level - $500 - $999</h3>
            <h5>Mayor Steve Barnett</h5>
            <h5>Ray's Trash Service</h5>
            <h5>Generations Custom Auto & Collision, INC</h5>
            <h5>Franklin Muffler, Brakes & More</h5>
            <h5>BoJack's Bar & Grill</h5>
            <h5>RSQ Fire Protection, LLC</h5>
          </div>
          <div className='sponsor-col'>
            <h3>Gold Level - $250 - $499</h3>
            <h5>Bradley Hubler Chevrolet</h5>
            <h5>Winters Heating and Cooling</h5>
            <h5>US Hydrovac Inc.</h5>
          </div>
        </div>
        <div className='sponsors3'>
          <h3>Silver Level - $100 - $249</h3>
          <div className='d-flex justify-content-center'>
            <div className='sponsor-col'>
              <h5>Family Tradition Painting</h5>
              <h5>JG Tile & Baths</h5>
              <h5>Corona's Sticky Designz</h5>
              <h5>Joe Stafford, Medicare/Life Specialist</h5>
              <h5>Turning Point Church</h5>
              <h5>Linda Cummings</h5>
            </div>
            <div className='sponsor-col'>
              <h5>Janis Poynter</h5>
              <h5>Kelly Ann Barker</h5>
              <h5>Nina Koch</h5>
              <h5>D & V Mercer</h5>
              <h5>Vaught Family Eye Care</h5>
              <h5>Greene's Auto Service</h5>
            </div>
          </div>
          <h3>Bronze Level - $50 - $99</h3>
          <div>
            <h5>Indy Property Chicks</h5>
          </div>
        </div>
      </div>
      <div className='text-center social'>
        <h2>Follow FCOMM Choirs!</h2>
        <span>
          <a className='mx-5' href='https://www.facebook.com/profile.php?id=100063582283607' target='_blank'><i class="fa-brands fa-square-facebook"></i></a>
          <a className='mx-5' href='https://www.tiktok.com/@fcommchoirs?_t=8bdc5aHkR9m&_r=1' target='_blank'><i class="fa-brands fa-tiktok"></i></a>
        </span>
      </div>
    </div >
  )
}

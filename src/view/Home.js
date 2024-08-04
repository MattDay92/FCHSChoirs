import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import popupIMG from '../components/photos/CarWashCancelled.jpg'
import Showfest from '../components/photos/ShowFestLogo.webp'
import HeritageSingers from '../components/photos/HeritageFall.webp'
import SigPic from '../components/photos/SigFall.webp'
import SensationsPic from '../components/photos/SensationsFall.webp'
import LegacyPic from '../components/photos/CombinedGirlsFall.webp'
import Featured1 from '../components/photos/AllState1.JPG'
import Featured2 from '../components/photos/AllState2.JPG'
import BellaPic from '../components/photos/BellaFall.webp'
import Button from '@mui/material/Button';
import Sponsor1 from '../components/photos/MainSealLogoFullColor.webp'
import Sponsor2 from '../components/photos/Paul-Humbles.webp'
import Sponsor3 from '../components/photos/Barnett-Logo.webp'
import Sponsor4 from '../components/photos/CSCLogoBlue.webp'
import Sponsor5 from '../components/photos/NaptownDerby.webp'
import Sponsor6 from '../components/photos/FranklinMufflerBrakesandMore.png'
import Sponsor7 from '../components/photos/FootwearSupplyFall.jpg'
import Sponsor8 from '../components/photos/BLLogo.webp'
import WinterConcert from '../components/photos/WinterConcert2023Poster.webp'
import ShowFestMenu from '../components/files/ShowFestMenu.pdf'


export default function Home({ background, closeAd, showPopUp }) {

  return (
    <div className='fullpage'>

      {background === 'sensations' ? <>
        <div className='hero-image'>
          <div className='overlay-cover'>
            <img className='cover-img' alt='Sensations' src={SensationsPic} />
          </div>
        </div></> : background === 'heritage' ?
        <>
          <div className='hero-image'>
            <div className='overlay-cover'>
              <img className='cover-img' alt='Heritage Singers' src={HeritageSingers} />
            </div>
          </div></> : background === 'legacy' ?
          <>
            <div className='hero-image'>
              <div className='overlay-cover'>
                <img className='cover-img' alt='Legacy' src={LegacyPic} />
              </div>
            </div></> : background === 'sig' ?
            <>
              <div className='hero-image'>
                <div className='overlay-cover'>
                  <img className='cover-img' alt='Signature Sound' src={SigPic} />
                </div>
              </div></> : background === 'bella' ?
              <>
                <div className='hero-image'>
                  <div className='overlay-cover'>
                    <img className='cover-img' alt='Bella Voce' src={BellaPic} />
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


      <div className='row showfest d-flex justify-content-center align-items-center'>
        <div className='col-4 showfest-img'>
          <img className='showfest-logo' alt='ShowFest Logo' src={Showfest} />
        </div>
        <div className='col-4 showfest-info text-center'>
          <h3 className='text-white'>New Date!</h3>
          <h3 className='text-white'>February 21st and 22nd, 2025</h3>
          <p>We are pleased to offer affordable and delicious vendors and food trucks, a state of the art performance space with experience audio engineers, a spacious and accommodating high school, and quality judges that will provide meaningful feedback for your show choirs and concert choirs.
          </p>
          <div className='showfest-btns'>
            <Button variant='contained' className='btn my-2' href='https://docs.google.com/forms/d/e/1FAIpQLScOo1RKmqRFcavQtixyE9BBjiyBrFCIoY62s5fQh1OKZWfEUw/viewform?usp=sf_link' target='_blank'>More Information</Button>
          </div>
        </div>
      </div>


      <div className='container featured col-8'>
        <h2 className='text-center text-white my-5'>All State Choir 2024</h2>
        <div className='carousel d-flex justify-content-center'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Featured1} loading='lazy' alt='All State Choir Performance' className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={Featured2} alt='Franklin Students at All State Choir 2024' fetchpriority="low" className="d-block w-100" />
              </div>
              {/* <div className="carousel-item">
                <img src={Arch} alt='Franklin choirs at St Louis Arch' fetchpriority="low" className="d-block w-100" />
              </div> */}
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
        <p className='text-center text-white mt-3'>We were beyond proud to be represented by seventeen amazing students at the
          2024 Indiana All State Choir performance on January 13th!  These kids were admitted to this choir through a rigorous
          audition process, and got to sing collegiate level music with the best singers from across the state.  Congratulations
          to these amazing students!</p>
      </div>
      <h2 className='sponsor-thank-you'>Thank You to our Sponsors!</h2>
      <div className='row text-center sponsors px-0 mx-0 my-5'>
        <div className='sponsors1'>
          <h3>Director's Circle - $1,000 +</h3>
          <div className='d-flex justify-content-around'>
            <div className='sponsor-img-div sponsor1-img-div'><img className='sponsor-img w-100' alt='Generations of Graham' src={Sponsor1} /></div>
            <div className='sponsor-img-div sponsor1-img-div'><img className='sponsor-img w-100' alt='Paul Humbles Agency' src={Sponsor2} /></div>
          </div>
          <h4 className='my-3'>Jason & Melissa Sailor</h4>
        </div>
        <div className='sponsors2'>
          <div className='sponsor-col'>
            <h3>Platinum Level - $500 - $999</h3>
            <div className='sponsor-toomanyIMG'>
              <div className='sponsor-col'>
                <div className='sponsor-img-div mb-2'><img className='sponsor-img' alt='Steve Barnett - Mayor' src={Sponsor3} /></div>
                <div className='sponsor-img-div mb-2'><img className='sponsor-img' alt='Commercial Sewer Cleaning' src={Sponsor4} /></div>
                <div className='sponsor-img-div mb-2'><img className='sponsor-img' alt='Naptown Roller Derby' src={Sponsor5} /></div>
                <div className='sponsor-img-div mb-2'><img className='sponsor-img' alt='Bruning Law' src={Sponsor8} /></div>
              </div>
              <div className='sponsor-col'>
                <div className='sponsor-img-div mb-2'><img className='sponsor-img' alt='Franklin Muffler, Brakes, & More' src={Sponsor6} /></div>
                <div className='sponsor-img-div mb-2'><img className='sponsor-img' alt='Footwear Supply' src={Sponsor7} /></div>
              </div>
            </div>
          </div>
          <div className='sponsor-col bottom-sponsor-2'>
            <h3>Gold Level - $250 - $499</h3>
            <h5>Franklin Family Dentistry</h5>
            <h5>Weichert Realtors, Cooper Group Indy - The Nohe Team</h5>
            <h5>LaConina Mexican Restaurant</h5>
            <h5>Edward Jones</h5>
            <h5>Vaught Family Eye Care</h5>
            <h5>Grandpa Jeff's Trail Rides</h5>
            <h5>Middle David Candles</h5>
          </div>
        </div>
        <div className='sponsors3 d-flex justify-content-center'>
          <div className='sponsor-col'>
            <h3>Silver Level</h3>
            <h5>Enzo Pizza, Franklin</h5>
            <h5>Electric Key Records</h5>
            <h5>Ko's Martial Arts Academy</h5>
            <h5>Mike & Denita Pickett</h5>
            <h5>Franklin Jewelers</h5>
            <h5>Franklin Insurance Agency</h5>
            <h5>Allied Handling & Equipment</h5>
          </div>
          <div className='sponsor-col'>
            <h3>Bronze Level</h3>
            <h5>Deb Brown-Nally, Carpenter Realtors</h5>
            <h5>Tractor Supply Co., Franklin</h5>
            <h5>Maye's Grill</h5>
            <h5>celebrativity.com</h5>
          </div>

        </div>
      </div>
      <div className='text-center social'>
        <h2>Follow FCOMM Choirs!</h2>
        <span>
          <a className='social-icon' href='https://www.facebook.com/profile.php?id=100063582283607' target='_blank'><i class="fa-brands fa-square-facebook"></i></a>
          <a className='social-icon' href='https://www.tiktok.com/@fcommchoirs?_t=8bdc5aHkR9m&_r=1' target='_blank'><i class="fa-brands fa-tiktok"></i></a>
        </span>
      </div>
    </div >
  )
}

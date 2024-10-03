import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import popupIMG from '../components/photos/FallConcertPoster.webp'
import Showfest from '../components/photos/ShowFestLogo.webp'
import HeritageSingers from '../components/photos/HeritageFall.webp'
import SigPic from '../components/photos/SigFall.webp'
import SensationsPic from '../components/photos/SensationsFall.webp'
import LegacyPic from '../components/photos/CombinedGirlsFall.webp'
import Featured1 from '../components/photos/AllState1.JPG'
import Featured2 from '../components/photos/AllState2.JPG'
import TrunkorTreat from '../components/photos/TrunkorTreat.webp'
import BellaPic from '../components/photos/BellaFall.webp'
import Button from '@mui/material/Button';
import Sponsor1 from '../components/photos/Generations.webp'
import Sponsor2 from '../components/photos/Paul-Humbles.webp'
import WinterConcert from '../components/photos/WinterConcert2023Poster.webp'
import ShowFestMenu from '../components/files/ShowFestMenu.pdf'
import Musical from '../components/photos/SeussicalSquare.png'


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

      <div className='row showfest musical-home d-flex justify-content-center align-items-center'>
        <div className='col-4 showfest-info text-center'>
          <h3 className='text-white'>November 21 - 24, 2024</h3>
          <p>The Franklin Community High School Choral Department is proud to present this year's fall musical, <em>Seussical</em>!  Featuring all of the
            Dr. Seuss characters you love, <em>Seussical</em> is a show that the whole family can enjoy!
          </p>
          <h4>Tickets Available Now!</h4>
          <div className='showfest-btns'>
            <Button variant='contained' className='btn my-2' href='/musical'>More Information</Button>
          </div>
        </div>
        <div className='col-3 showfest-img'>
          <img className='showfest-logo' alt='ShowFest Logo' src={Musical} />
        </div>
      </div>


      <div className='row showfest d-flex justify-content-center align-items-center'>
        <div className='col-3 mt-5 showfest-img'>
          <img className='showfest-logo' alt='Trunk or Treat Poster' src={TrunkorTreat} />
        </div>
        <div className='col-4 showfest-info text-center'>
          <h3>Trunk or Treat 2024</h3>
          <h3 className='text-white'>October 30th from 6 - 8 PM</h3>
          <p>Support the Franklin Choirs with a night of fun, <em>safe</em> trick or treating!  Games, music, bounce houses and more!  Only $8 per child at the door to enter!</p>
        </div>
      </div>



      <h2 className='sponsor-thank-you'>Thank You to our Sponsors!</h2>
      <div className='row text-center sponsors px-0 mx-0 my-5'>
        <div className='sponsors1'>
          <h3>Director's Circle - $1,000 +</h3>
          <div className='d-flex justify-content-around flex-wrap'>
            <div className='sponsor-img-div sponsor1-img-div'><img className='sponsor-img w-100' alt='Generations of Graham' src={Sponsor1} /></div>
            <div className='sponsor-img-div sponsor1-img-div'><img className='sponsor-img w-100' alt='Paul Humbles Agency' src={Sponsor2} /></div>
            <div className='w-100 my-3 '><h4>Zeta Chapter of Tri Kappa Inc.</h4></div>
          </div>
        </div>
        <div className='sponsors2'>
          <div className='sponsor-col'>
            <h3>Platinum Level - $500 - $999</h3>
            <h5>Mayor Steve Barnett</h5>
            <h5>JWG Inc.</h5>
            <h5>Commercial Sewer Cleaning Company Inc.</h5>
            <h5>Farley Health Solutions</h5>
            <h5>Greene's Auto & Tire Service</h5>
            <h5>Michael & Denita Pickett</h5>
            <h5>Grandpa Jeff's Trail Rides</h5>
            <h5>Remix Pest Control</h5>
          </div>
          <div className='sponsor-col bottom-sponsor-2'>
            <h3>Gold Level - $250 - $499</h3>
            <h5>Bradley Chevrolet</h5>
            <h5>Under One Woof</h5>
            <h5>The Dave Price Team Mortgage Lender</h5>
          </div>
        </div>
        <div className='sponsors3 d-flex justify-content-center'>
          <div className='sponsor-col'>
            <h3>Silver Level</h3>
            <h5>Baird Wealth Management</h5>
            <h5>Franklin Insurance Agency</h5>
            <h5>PrintWorks</h5>
            <h5>T-Shirt Express</h5>
          </div>
          {/* <div className='sponsor-col'>
            <h3>Bronze Level</h3>
            
          </div> */}

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

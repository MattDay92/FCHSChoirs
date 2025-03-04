import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import popupIMG from '../components/photos/FallConcertPoster.webp'
import Showfest from '../components/photos/ShowFestLogo.webp'
import HeritageSingers from '../components/photos/Heritage2025Comp.webp'
import SigPic from '../components/photos/SigFall.webp'
import SensationsPic from '../components/photos/Sensations2025Comp.webp'
import LegacyPic from '../components/photos/CombinedGirlsFall.webp'
import BellaPic from '../components/photos/BellaFall.webp'
import Button from '@mui/material/Button';
import Sponsor1 from '../components/photos/Generations.webp'
import Sponsor2 from '../components/photos/Paul-Humbles.webp'
import Sponsor3 from '../components/photos/tri-kappa-logo.png'
import Featured1 from '../components/photos/Featured1.jpg'
import Featured2 from '../components/photos/Featured2.jpg'
import Featured3 from '../components/photos/Featured3.jpg'
import ShowFestMenuFriday from '../components/files/ShowFestMenuFriday.png'
import ShowFestMenuSaturday from '../components/files/ShowFestMenuSaturday.png'
import ShowFestVendors from '../components/files/Showfest2025Vendors.png'
// import Musical from '../components/photos/SeussicalSquare.png'


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
          <h2>ShowFest 2025</h2>
          <h3>Congratulations to our winning choirs!</h3>
          <div className='row d-flex justify-content-between'>
            <p>Ben Davis Premiers</p>
            <p>Pendleton Emerald Suites</p>
            <p>Whiteland Expressions</p>
            <p>Whiteland Rhythm Masters</p>
          </div>
        </div>
      </div>
      <div className='row showfest d-flex justify-content-center align-items-center'>
        <div className='col-4 mb-5 showfest-info text-center'>
          <h2>ShowFest 2026</h2>
          <h3 className='text-white'>February 20th and 21st</h3>
          <p>Registration for ShowFest 2026 is open!  </p>
          <div className='showfest-btns'>
            <Button variant='contained' className='btn my-2' href='https://docs.google.com/forms/d/e/1FAIpQLSdkBNqJuE2C_Hg5W88kgw99JQBOWUDq_8gC5ynAK_Cc_UUdsQ/viewform?usp=header' target='_blank'>Register</Button>
          </div>
        </div>
        <div className='col-4 mb-5 showfest-info text-center'>
          <h2>Kings Island 2026</h2>
          <h3 className='text-white'>May 16th and 17th</h3>
          <p>More information coming soon!  </p>
          <div className='showfest-btns'>
            <Button variant='contained' className='btn my-2' href='https://docs.google.com/forms/d/e/1FAIpQLSfq3SQ2UBnmNgWgV-y2JFTcmN1TfYLYbOJZD_fN1ieGD6ajtw/viewform' target='_blank'>Register</Button>
          </div>
        </div>
      </div>

      <h2>ShowFest 2025</h2>
      <div className='home-featured-IMG-div'>
        <div className='featured-IMG-1'>
          <img className='FeaturedIMG' alt='Featured Photo' src='https://firebasestorage.googleapis.com/v0/b/fcomm-choirs.firebasestorage.app/o/files%2Ffeatured1?alt=media&token=b751f92b-36b2-480a-a703-9acff43da9b2' />
        </div>
        <div className='featured-IMG-2'>
          <img className='FeaturedIMG' alt='Featured Photo' src='https://firebasestorage.googleapis.com/v0/b/fcomm-choirs.firebasestorage.app/o/files%2Ffeatured2?alt=media&token=b751f92b-36b2-480a-a703-9acff43da9b2' />
        </div>
        <div className='featured-IMG-3'>
          <img className='FeaturedIMG' alt='Featured Photo' src='https://firebasestorage.googleapis.com/v0/b/fcomm-choirs.firebasestorage.app/o/files%2Ffeatured3?alt=media&token=b751f92b-36b2-480a-a703-9acff43da9b2' />
        </div>
      </div>

        <h2 className='sponsor-thank-you'>Thank You to our Sponsors!</h2>
        <div className='row text-center sponsors px-0 mx-0 my-5'>
          <div className='sponsors1'>
            <h3>Director's Circle - $1,000 +</h3>
            <div className='d-flex justify-content-around flex-wrap'>
              <div className='sponsor-img-div sponsor1-img-div'><img className='sponsor-img' alt='Generations of Graham' src={Sponsor1} /></div>
              <div className='sponsor-img-div sponsor1-img-div'><img className='sponsor-img' alt='Paul Humbles Agency' src={Sponsor2} /></div>
              <div className='sponsor-img-div sponsor1-img-div'><img className='sponsor-img w-50' alt='Zeta Chapter of Tri Kappa Inc.' src={Sponsor3} /></div>
            </div>
            <div>
              <h4>Duane & Vonda Mercer</h4>
            </div>
          </div>
          <div className='sponsors2'>
            <div>
              <h3>Platinum Level - $500 - $999</h3>
              <div className='d-flex justify-content-around flex-wrap'>
                <div className='sponsor-col'>
                  <h5>Mayor Steve Barnett</h5>
                  <h5>JWG Inc.</h5>
                  <h5>Commercial Sewer Cleaning Company Inc.</h5>
                  <h5>Farley Health Solutions</h5>
                  <h5>Greene's Auto & Tire Service</h5>
                  <h5>Michael & Denita Pickett</h5>
                </div>
                <div className='sponsor-col'>
                  <h5>Grandpa Jeff's Trail Rides</h5>
                  <h5>Remix Pest Control</h5>
                  <h5>Franklin, Muffler, Brakes & More</h5>
                  <h5>Beck Automotive</h5>
                  <h5>Pennington Brothers Enterprise</h5>
                  <h5>Tom Thompson</h5>
                </div>
              </div>
            </div>
            <div className='sponsor-col bottom-sponsor-2'>
              <h3>Gold Level - $250 - $499</h3>
              <h5>Bradley Chevrolet</h5>
              <h5>Under One Woof</h5>
              <h5>The Dave Price Team Mortgage Lender</h5>
              <h5>Promise Advisory Group</h5>
            </div>
          </div>
          <div className='sponsors3 d-flex justify-content-center'>
            <div className='sponsor-col'>
              <h3>Silver Level</h3>
              <h5>Baird Wealth Management</h5>
              <h5>Franklin Insurance Agency</h5>
              <h5>PrintWorks</h5>
              <h5>T-Shirt Express</h5>
              <h5>Ray & Carmen Lane</h5>
              <h5>Nimble Thimbles Quilt Club</h5>
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

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Showfest from '../components/photos/ShowFestLogo.webp'
import HeritageSingers from '../components/photos/HeritageFall.webp'
import SigPic from '../components/photos/SigFall.webp'
import SensationsPic from '../components/photos/SensationsFall.webp'
import LegacyPic from '../components/photos/CombinedGirlsFall.webp'
import BellaPic from '../components/photos/BellaFall.webp'
import BellaStLouis from '../components/photos/bella.webp'
import SigStLouis from '../components/photos/sig.webp'
import Arch from '../components/photos/arch.webp'
import Button from '@mui/material/Button';
import Sponsor1 from '../components/photos/MainSealLogoFullColor.webp'
import Sponsor2 from '../components/photos/Paul-Humbles.webp'
import Sponsor3 from '../components/photos/Barnett-Logo.webp'
import Sponsor4 from '../components/photos/CSCLogoBlue.webp'
import Sponsor5 from '../components/photos/NaptownDerby.webp'
import TrunkorTreat from '../components/photos/TrunkorTreat2023.png'



export default function Home({ background }) {

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
          <p className='text-white'>Hello, Directors! Preparations are under way for Franklin Community High School’s ShowFest 2024, to be held on Saturday, January 27th, 2024.</p>
          <Button variant='contained' className='btn' href='https://docs.google.com/forms/d/e/1FAIpQLScXk6K1JQTBv9z4MmUciYgdG9-3pGBAzAwYHx3cS8r3sEbeaQ/viewform' target='_blank'>More Information</Button>
        </div>
      </div>
      {/* <div className='row kidscamp d-flex justify-content-center align-items-center'>
        <div className='col-4 kidscamp-title2'>
          <h1>Kid's Camp 2023</h1>
        </div>
        <div className='col-4 kidscamp-info text-center'>
          <p className='text-white'>Every year, the Franklin Show Choirs host a Kindergarten through 6th grade Kid's Show Choir Camp as a fundraiser.
            Participating elementary students will then be invited to perform with the high schoolers at our fall concert on September 28th!</p>
          <div className='kidscamp-buttons'>
            <Button variant='contained' className='btn' href='https://docs.google.com/forms/d/e/1FAIpQLSeoWaaCk_Hl8ZZcILm4DUxF_9spR0Al7fn5I6cjcGpB-5_cZQ/viewform' target='_blank'>Register</Button>
            <Button variant='contained' className='btn' href='https://www.canva.com/design/DAFJrvY0YqM/1H2UsZqFyFEhRtuoZRPLEg/view?utm_content=DAFJrvY0YqM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target='_blank'>More Information</Button>
            <Link to={'/kidscamp'}><Button variant='contained' className='btn'>Pay Fee</Button></Link>
          </div>
        </div>
        <div className='col-4 kidscamp-title1'>
          <h1>Kid's Camp 2023</h1>
        </div>
      </div> */}
      <div className='row kidscamp d-flex justify-content-center align-items-center'>
        <div className='col-4 kidscamp-title2'>
          <h1>Trunk or Treat 2023</h1>
        </div>
        <div className='col-3 TrunkorTreatIMGDiv text-center'>
          <img className='TrunkorTreatIMG w-100' src={TrunkorTreat} />
        </div>
        <div className='col-4 kidscamp-title1'>
          <h1>Trunk or Treat 2023</h1>
        </div>
      </div>
      <div className='container featured col-8'>
        <h2 className='text-center text-white my-5'>St. Louis Tour 2023</h2>
        <div className='carousel d-flex justify-content-center'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={BellaStLouis} loading='lazy' alt='Bella Voce in St Louis' className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={SigStLouis} alt='Signature Sound in St Louis' fetchpriority="low" className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={Arch} alt='Franklin choirs at St Louis Arch' fetchpriority="low" className="d-block w-100" />
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
        <p className='text-center text-white mt-3'>Members of Signature Sound and Bella Voce traveled to St. Louis as part of the Heritage Music Festival.
          The students explored the City Museum, visited the St. Louis Arch, had a great time at Six Flags,
          and of course competed at the prestigious Heritage Music Festival.
          The choirs tied for first overall, with each other!</p>
      </div>
      <h2 className='sponsor-thank-you'>Thank You to our Sponsors!</h2>
      <div className='row text-center sponsors px-0 mx-0 my-5'>
        <div className='sponsors1'>
          <h3>Director's Circle - $1,000 +</h3>
          <div className='d-flex justify-content-around'>
            <div className='sponsor-img-div'><img className='sponsor-img' src={Sponsor1} /></div>
            <div className='sponsor-img-div'><img className='sponsor-img' src={Sponsor2} /></div>
          </div>
          <h4 className='my-3'>Jason & Melissa Sailor</h4>
        </div>
        <div className='sponsors2'>
          <div className='sponsor-col'>
            <h3>Platinum Level - $500 - $999</h3>
              <div className='sponsor-img-div mb-2'><img className='sponsor-img' src={Sponsor3} /></div>
              <div className='sponsor-img-div mb-2'><img className='sponsor-img' src={Sponsor4} /></div>
              <div className='sponsor-img-div'><img className='sponsor-img' src={Sponsor5} /></div>
              <h4 className='pt-3'>Franklin Muffler, Brakes & More</h4>
              <h4>Footwear Supply</h4>
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
            <h5>Laura B Haw - Life & Health Insurance Broker</h5>
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

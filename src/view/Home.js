import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import popupIMG from '../components/photos/NobleRomansD2D.jpg'
import Showfest from '../components/photos/ShowFestLogo.webp'
import CoffeeHouseFive from '../components/photos/coffeehousefivelogo.png'
import HeritageSingers from '../components/photos/Heritage2025Comp.webp'
import SigPic from '../components/photos/SigFall.webp'
import SensationsPic from '../components/photos/Sensations2025Comp.webp'
import LegacyPic from '../components/photos/CombinedGirlsFall.webp'
import BellaPic from '../components/photos/BellaFall.webp'
import Button from '@mui/material/Button';
import Sponsor1 from '../components/photos/Farley.webp'
import Sponsor2 from '../components/photos/Paul-Humbles.webp'
import Sponsor3 from '../components/photos/tri-kappa-logo.png'
import Featured1 from '../components/photos/Featured1.jpg'
import Featured2 from '../components/photos/Featured2.jpg'
import Featured3 from '../components/photos/Featured3.jpg'
// import Musical from '../components/photos/SeussicalSquare.png'


export default function Home({ background, closeAd, showPopUp, featuredInfo }) {

  return (
    <div className='fullpage'>

      {showPopUp === true ? <>
        <div id='popup'>
          <div className='row concert-ad'>
            <button className='popup-close-btn' onClick={closeAd}><i class="fa-solid fa-x"></i></button>
            <div className='col-4 popup-img'>
              <img className='popup-logo' alt='Dine to Donate' src={popupIMG} />
            </div>
            <div className='col-4 popup-info text-center'>
              <h3 className='text-white'>Dine to Donate</h3>
              <h4>Thursday, 2/26</h4>
              <p>Eat at Noble Roman's in Franklin on Thursday, 2/26 from 11AM to 9:30 PM to support FCHS Choirs!</p>

              {/* <Button variant='contained' className='btn my-2' href='https://thefranklinpac.anywhereseat.com/' target='_blank'>ShowFest Livestream</Button> */}

            </div>
          </div>
        </div>
      </>
        :
        <></>
      }

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
        <div className='col-3 showfest-img'>
          <img className='showfest-logo' alt='CoffeeHouse Five Logo' src={CoffeeHouseFive} />
        </div>
        <div className='col-4 showfest-info text-center'>
          <h2>CoffeeHouse Five Fundraiser</h2>
          <p>Support our talented local high school show choir students by purchasing from Coffeehouse Five! When you specify a student's name at checkout, 40% of your purchase goes directly toward their choir fees.  </p>
          <div className='showfest-btns'>
            <Button variant='contained' className='btn my-2' href='https://coffeehouse-five-orders.square.site/shop/fchs-choral-boosters/S4LEGHGNCT5GFQGJ7ORIB5N2?page=1&limit=30&sort_by=category_order&sort_order=asc&fbclid=IwY2xjawNSWeRleHRuA2FlbQIxMQABHiyH1AUxe3yMXPvYamdvvcrcoNU98YUZm2AdZq3LsXDYrNTrD5QHpcKxfOma_aem_9zAzd40y8etzavW8XiBMHg' target='_blank'>More Information</Button>
          </div>
        </div>
      </div>


      <h2>{featuredInfo.linkURL}</h2>
      <div className='home-featured-IMG-div'>
        <div>
          <div className='featured-IMG-1'>
            <img className='FeaturedIMG' alt='Featured Photo' src='https://firebasestorage.googleapis.com/v0/b/fcomm-choirs.firebasestorage.app/o/files%2Ffeatured1?alt=media&token=b751f92b-36b2-480a-a703-9acff43da9b2' />
            <p>{featuredInfo.caption}</p>
          </div>
          <div className='featured-IMG-2'>
            <img className='FeaturedIMG' alt='Featured Photo' src='https://firebasestorage.googleapis.com/v0/b/fcomm-choirs.firebasestorage.app/o/files%2Ffeatured2?alt=media&token=b751f92b-36b2-480a-a703-9acff43da9b2' />
            <p>{featuredInfo.caption}</p>
          </div>
          <div className='featured-IMG-3'>
            <img className='FeaturedIMG' alt='Featured Photo' src='https://firebasestorage.googleapis.com/v0/b/fcomm-choirs.firebasestorage.app/o/files%2Ffeatured3?alt=media&token=b751f92b-36b2-480a-a703-9acff43da9b2' />
            <p>{featuredInfo.caption}</p>
          </div>
        </div>
      </div>



      <h2 className='sponsor-thank-you'>Thank You to our Sponsors!</h2>
      <div className='row text-center sponsors px-0 mx-0 my-5'>
        <div className='sponsors1'>
          <h3>Director's Circle - $1,000 +</h3>
          <div className='d-flex justify-content-around flex-wrap'>
            <div className='sponsor-img-div sponsor1-img-div'><img className='sponsor-img' alt='Generations of Graham' src={Sponsor1} /></div>
            <div className='sponsor-img-div sponsor1-img-div'><img className='sponsor-img' alt='Paul Humbles Agency' src={Sponsor2} /></div>
          </div>
          <div className='directors-circle-text'>
            <h4>Jason & Melissa Sailor</h4>
            <h4>Michael & Denita Pickett</h4>
          </div>
        </div>
        <div className='sponsors2'>
          <div>
            <h3>Platinum Level - $500 - $999</h3>
            <div className='d-flex justify-content-around flex-wrap'>
              <div className='sponsor-col'>
                <h5>Mayor Steve Barnett</h5>
                <h5>Commercial Sewer Cleaning</h5>
              </div>
              <div className='sponsor-col'>
                <h5>Grandpa Jeff's Trail Rides</h5>
                <h5>Franklin, Muffler, Brakes & More</h5>
              </div>
            </div>
          </div>
          <div className='sponsor-col bottom-sponsor-2'>
            <h3>Gold Level - $250 - $499</h3>
            <h5>Bradley Hubler Chevrolet</h5>
            <h5>Baldwin Excavating</h5>
            <h5>Vaught Family Eye Care</h5>
            <h5>Line X of Columbus</h5>
          </div>
        </div>
        <div className='sponsors3 d-flex justify-content-center'>
          <div className='sponsor-col'>
            <h3>Silver Level</h3>
            <h5>Spotlight Scoopers</h5>
            <h5>Irish Brothers Pest Control</h5>

          </div>
          <div className='sponsor-col'>
            <h3>Community Sponsors</h3>
            <h5>A Trophy Business</h5>
            <h5>PrintWorks</h5>
            <h5>Johnson County REMC</h5>
            <h5>Noble Roman's</h5>
            <h5>Millie's Ice Cream</h5>
            <h5>Ritters Frozen Custard</h5>
            <h5>M&M Custard (Freddie's)</h5>
            <h5>Jill Fleener</h5>
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

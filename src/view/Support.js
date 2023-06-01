import React from 'react'
import ShrekPic from '../components/photos/shrek.JPG'

import { Link } from 'react-router-dom'


export default function Support() {
  return (
    <div className='fullpage'>
            <div className='hero-image shrek'>
                <div className='overlay-cover'>
                    <img className='cover-img' src={ShrekPic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Support FCOMM Choirs</h1>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center text-center'>
                    <p className='col-10'>YOU can help support next year’s FCHS Musical! At the Johnson County Community foundation, 
                    an FCHS MUSICAL ENDOWMENT FUND was set up by Ray & Goldie Jones and the Elizabeth Jones families to support our musicals. 
                    The larger this fund grows, the more funds we will receive for future performances. If you would like more information about 
                    the fund or would like to contribute, please visit www.jccf.org/fchs-musical-endowment-fund. 
                    You may also call 317-738-2213 or email frontdesk@jccf.org for more information. There are many associated costs with putting on a great musical production 
                    and contributing to the FCHS MUSICAL ENDOWMENT FUND is a great way to help! Thank you for your consideration. We appreciate 
                    any donation you make. </p> 
                    <h4>The FCHS Choral Music Department</h4>
                </div>
            
            </div>
        </div>
  )
}

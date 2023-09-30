import React from 'react'
import DynamicBanner from '../components/photos/DynamicFall.webp'

export default function Dynamic() {
    return (
        <div className='fullpage'>
            <div className='hero-image heritage'>
                <div className='overlay-cover'>
                    <img className='cover-img' alt='Dynamic Choir' fetchpriority="high" src={DynamicBanner} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Dynamic</h1>
            </div>

            <div className='container mt-5'>
                <div className='row d-flex justify-content-center text-center'>
                    <p className='col-10'>Dynamic is a beginning tenor/bass ensemble that focuses primarily on traditional 
                    concert choir repertoire and voice-building.  Every year, Dynamic competes at the ISSMA Organizational 
                    Contest, performs at all in-house concerts, and members participate in the annual choir tour. </p>
                </div>
            </div>
        </div>
    )
}

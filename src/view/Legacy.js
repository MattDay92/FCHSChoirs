import React from 'react'
import LegacyPic from '../components/photos/LegacyFall.webp'


export default function Legacy() {
    return (
        <div className='fullpage'>
            <div className='hero-image legacy'>
                <div className='overlay-cover'>
                <img className='cover-img' alt='Legacy Show Choir' src={LegacyPic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Legacy</h1>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center text-center'>
                    <p className='col-10'>Legacy is an intermediate treble show choir from Franklin Community High School.
                        Directed and choreographed by Johnnie Ray Hughes, this relatively new ensemble is ready to lift to new heights in their show.
                        Please enjoy the flight.</p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2024 Season</h2>
                    <h4>Franklin Community ShowFest</h4>
                    <h4>Brownsburg Bulldog Spectacular</h4>
                </div>
                <div className='row text-center my-5'>
                    <h2>Follow Legacy!</h2>
                    <a href='https://www.instagram.com/fcommlegacy/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

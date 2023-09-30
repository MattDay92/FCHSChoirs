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
                        This group of singers is excited to spread their wings at the Fishers Spotlighter Showcase,
                        the Ben Davis Giant Spectacular, and the Brownsburg Bulldog Spectacular in 2023.
                        Directed and choreographed by Johnnie Ray Hughes, this relatively new ensemble is ready to lift to new heights in their show.
                        Please enjoy the flight.</p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2023 Season</h2>
                    <h4>Ben Davis Giant Spectacular</h4>
                    <h4>East Noble Knight Edition</h4>
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

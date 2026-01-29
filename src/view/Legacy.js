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
                    <p className='col-10'>Legacy is the newest show choir at Franklin Community High School, 
                        and consists of singers from all grades.  Legacy will appear this year at The Anderson 
                        A-Town Showdown, the Pendleton Arabian Spectacular, and the Brownsburg Bulldog Spectacular.  
                        They are choreographed and directed by Johnnie Ray Hughes, with arrangements by Anita Cracauer.  
                        Please join Legacy on their journey back home!</p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2026 Season</h2>
                    <h4>Fishers Silver Spotlight Invitational</h4>
                    <h4>Franklin Community ShowFest</h4>
                    <h4>Pendleton Arabian Spectacular</h4>
                </div>
                <div className='row text-center my-5'>
                    <h2>Follow Legacy!</h2>
                    <a href='https://www.instagram.com/fcommlegacy/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

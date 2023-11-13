import React from 'react'
import SensationsPic from '../components/photos/SensationsFall.webp'

export default function Sensations() {
    return (
        <div className='fullpage'>
            <div className='hero-image'>
                <div className='overlay-cover sensations'>
                    <img className='cover-img' alt='Sensations' src={SensationsPic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Sensations</h1>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center text-center'>
                    <p className='col-10'>Comprised of fifty students from grades 9-12, this 
                    advanced treble show choir is excited to conquer their fears and take the 
                    stage at competitions all across Indiana.  They will be terrifying audiences 
                    at the Brownsburg Bulldog Spectacular, the Ben Davis Giant Spectacular, the 
                    Fishers Spotlight Competition, and at the South Dearborn Opening Knight Showcase.  
                    The Sensations have been creeping and crawling through Midwestern competitions 
                    or many years, and have enjoyed many Grand Champion and caption awards, as 
                    well as performing at ISSMA Show Choir state finals.  Last year, they were 
                    named as Grand Champions of the East Noble Showcase. They are directed by 
                    Kelly Cassady Day and Johnnie Ray Hughes, and choreographed by Jerico Hughes.  
                    Please brace yourselves to face your fears as the Sensations present their 
                    2023-2024 show “Phobia.”</p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2024 Season</h2>
                    <h4>Franklin Community ShowFest</h4>
                    <h4>Fishers Silver Spotlight Invitational</h4>
                    <h4>Ben Davis Giant Spectacular</h4>
                    <h4>South Dearborn Opening Knight Showcase</h4>
                    <h4>Brownsburg Bulldog Spectacular</h4>
                </div>
                <div className='row text-center my-5'>
                    <h2>Follow Sensations!</h2>
                    <a href='https://www.instagram.com/fcommsensations/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

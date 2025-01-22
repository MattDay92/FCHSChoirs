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
                    <p className='col-10'>Comprised of students from grades 10-12, Franklin Community High School’s 
                        premier treble show choir is flooding competitions all over central Indiana this season.  
                        They will be blowing through the Fishers Silver Spotlight Competition, the Anderson A-Town 
                        Showdown, The Pendleton Arabian Spectacular, the Bishop Luers Invitational, the Brownsburg 
                        Bulldog Spectacular, and finishing their season at the Noblesville State Championships.  
                        They have been shaking things up at competitions for years, winning multiple grand championship 
                        and caption awards, and have made multiple appearances at the Indiana State School Music 
                        Association Show Choir State Finals.  Sensations is directed by Kelly Cassady Day and Johnnie R. Hughes, 
                        their music is arranged by Dan Scoville and Jerico Hughes, and they are choreographed by Jerico Hughes.  
                        Hang on to your hats and prepare for Sensations to sweep in like tornados and rock you like a hurricane.</p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2025 Season</h2>
                    <h4>Fishers Silver Spotlight Invitational</h4>
                    <h4>Anderson A-Town Showdown</h4>
                    <h4>Franklin Community ShowFest</h4>
                    <h4>Pendleton Arabian Spectacular</h4>
                    <h4>Bishop Luers Invitational</h4>
                    <h4>Brownsburg Bulldog Spectacular</h4>
                    <h4>Noblesville State Championships</h4>
                </div>
                <div className='row text-center my-5'>
                    <h2>Follow Sensations!</h2>
                    <a href='https://www.instagram.com/fcommsensations/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

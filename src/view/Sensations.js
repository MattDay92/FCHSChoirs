import React from 'react'
import SensationsPic from '../components/photos/Sensations2025Comp.webp'

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
                        premier treble show choir is excited to unveil their show at competitions throughout the 
                        midwest this season, including the Fishers Silver Spotlight, the Noblesville Indiana 
                        Championship, the Lafayette Jefferson Xtreme Showdown, the Wheaton-Warrenville Singer 
                        Classic, and the Batesville Singers Showcase.  Sensations has enjoyed a history of competition 
                        success over the years, and have been awarded many caption and grand champion awards.  
                        Choreographed by Jerico Hughes, directed by Kelly Cassady and Johnnie Ray Hughes, with 
                        arrangements by Matt Day and Jerico Hughes, these masked superheroes are hoping to look 
                        behind the facade and save the day.  Prepare to join the masquerade and get ready for 
                        some mayhem with Sensations!</p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2026 Season</h2>
                    <h4>Batesville Singers Showcase</h4>
                    <h4>Fishers Silver Spotlight Invitational</h4>
                    <h4>Franklin Community ShowFest</h4>
                    <h4>Lafayette Jefferson Xtreme Show Choir Showdown</h4>
                    <h4>Pendleton Arabian Spectacular</h4>
                    <h4>Wheaton Warrenville South Choral Classic</h4>
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

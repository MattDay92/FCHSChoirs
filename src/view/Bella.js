import React from 'react'
import BellaPic from '../components/photos/BellaFall.webp'


export default function Bella() {
    return (
        <div className='fullpage'>
            <div className='hero-image bella'>
                <div className='overlay-cover'>
                    <img className='cover-img' alt='Bella Voce' src={BellaPic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Bella Voce</h1>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center text-center'>
                    <h2>2025 ISSMA Concert Choir State Champions!</h2>
                    <p className='col-10'>Bella Voce, the varsity treble concert choir of 
                        Franklin Community High School, is directed by Kelly Cassady Day and 
                        assisted by Johnnie Ray Hughes. They are accompanied by Charissa Garrigus.  
                        Bella explores a variety of repertoire styles, focusing on building great 
                        vocal technique and exploring new musical genres and languages. This group 
                        has enjoyed a history of competitive success, including winning the Heritage 
                        Competition in St. Louis in 2023, and is looking forward to improving 
                        throughout the season at the Fishers Spotlighter Showcase, the the Anderson 
                        A-Town Showdown, the Brownsburg Bulldog Spectacular,  and the ISSMA State Qualifying competition.  </p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2025 Season</h2>
                    <h4>Fishers Silver Spotlight Invitational</h4>
                    <h4>Anderson A-Town Showdown</h4>
                    <h4>Brownsburg Bulldog Spectacular</h4>
                    <h4>ISSMA State Qualifying</h4>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import BellaPic from '../components/photos/BellaFall.webp'
import StateChamps from '../components/photos/BellaStateChamps.webp'


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
                    <img className='bella-state-champs-img mb-5' src={StateChamps} />
                    <p className='col-10'>Bella Voce, the varsity treble concert choir of Franklin Community 
                        High School, is directed by Kelly Cassady Day and assisted by Johnnie Ray Hughes. 
                        They are accompanied by Charissa Garrigus.  Bella explores a variety of repertoire 
                        styles, focusing on building great vocal technique and exploring new musical genres 
                        and languages. This group has enjoyed a history of competitive success, including 
                        winning the Heritage Competition in St. Louis in 2023, and the Indiana State School 
                        of Music state championship in 2025, and they are looking forward to improving 
                        throughout the season at the Fishers Spotlighter Showcase, the Pendleton Arabian 
                        Spectacular, the Lafayette Jefferson Xtreme Showdown, and the ISSMA State Qualifying 
                        competition.</p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2026 Season</h2>
                    <h4>Fishers Silver Spotlight Invitational</h4>
                    <h4>Lafayette Jefferson Xtreme Showdown</h4>
                    <h4>Pendleton Heights Arabian Spectacular</h4>
                    <h4>ISSMA State Qualifying</h4>
                </div>
            </div>
        </div>
    )
}

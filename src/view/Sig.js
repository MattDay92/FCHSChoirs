import React from 'react'
import SigPic from '../components/photos/SigFall.webp'


export default function Sig() {
    return (
        <div className='fullpage'>
            <div className='hero-image sig'>
                <div className='overlay-cover'>
                    <img className='cover-img' alt='Signature Sound' src={SigPic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Signature Sound</h1>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center text-center'>
                    <p className='col-10'>Comprised of primarily upper classmen, Signature Sound is the premier mixed concert choir
                        at Franklin Community High School.  Signature Sound has appeared many times at ISSMA State Finals and had the honor
                        of placing in the top ten in the 2022 season.  Signature Sound competes throughout the state, and also won the Heritage
                        Festival in St. Louis, Missouri in 2023.  Directed by Johnnie Ray Hughes and assisted by Kelly Cassady Day,
                        Signature Sound is looking forward to the competitive season at the Fishers Spotlighter Showcase,
                        the Ben Davis Giant Spectacular, the Brownsburg Bulldog Spectacular, and ISSMA State Qualifying competition.  </p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2024 Season</h2>
                    <h4>Franklin Community ShowFest</h4>
                    <h4>Fishers Silver Spotlight Invitational</h4>
                    <h4>Ben Davis Giant Spectacular</h4>
                    <h4>Brownsburg Bulldog Spectacular</h4>
                    <h4>ISSMA State Qualifying</h4>
                </div>
            </div>
        </div>
    )
}

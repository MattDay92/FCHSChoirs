import React from 'react'
import VoceAltaBanner from '../components/photos/VoceAltaFall.webp'

export default function VoceAlta() {
    return (
        <div className='fullpage'>
            <div className='hero-image heritage'>
                <div className='overlay-cover'>
                    <img className='cover-img' alt='Voce Alta' fetchpriority="high" src={VoceAltaBanner} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Voce Alta</h1>
            </div>

            <div className='container mt-5'>
                <div className='row d-flex justify-content-center text-center'>
                    <p className='col-10'>Voce Alta is a beginning treble ensemble that focuses primarily on traditional 
                    concert choir repertoire and voice-building.  Every year, Voce Alta competes at the ISSMA Organizational 
                    Contest, performs at all in-house concerts, and members participate in the annual choir tour.  </p>
                </div>
            </div>
        </div>
    )
}

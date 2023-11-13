import React, { useEffect } from 'react'
import SensationsPic from '../components/photos/SensationsFall.webp'

export default function Tickets() {

    useEffect(() => {
        window.location.href='https://thefranklinpac.ludus.com/index.php'
    }, [])

    return (
        <div className='fullpage'>
            <div className='hero-image'>
                <div className='overlay-cover sensations'>
                    <img className='cover-img' alt='Sensations' src={SensationsPic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Tickets</h1>
            </div>
            <div className='container'>
                <div className='row text-center my-5'>
                    <h2>Redirecting to thefranklinpac.ludus.com...</h2>
                </div>
            </div>
        </div>
    )
}

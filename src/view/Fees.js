import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ChristmasPic from '../components/photos/ElfChristmas2023-2.webp'
import ConcertChoirFees from '../components/ConcertChoirFees'
import HeritageFees from '../components/HeritageFees'
import LegacyFees from '../components/LegacyFees'

export default function Fees() {
    // const [choir, setChoir] = useState('')



    return (
        <div className='fullpage text-center'>
            <div className='hero-image christmas'>
                <div className='overlay-cover'>
                    <img src={ChristmasPic} alt='Christmas Choir' className='cover-img' />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Pay Fees</h1>
            </div>

            <div className='payment-inputs'>
                <a href='https://collectcheckout.com/r/z1onc' target='_blank' rel="noreferrer" className='btn payment-btn' >
                    Make Payment
                </a>
                <a href='https://collectcheckout.com/r/ig0nzrcuedjf81djcguxlamro6oz0l' target='_blank' rel="noreferrer" className='btn payment-btn'>
                    Set Up Recurring Payments for Fees
                </a>
            </div>




            {/* <div className='container my-5 col-10 my-5 text-center'>
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Choir
                    </button>
                    <ul class="dropdown-menu">
                        <a><Link className="dropdown-item" onClick={() => { setChoir('Bella') }}>Bella Voce Payments</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setChoir('Dynamic') }}>Dynamic Payments</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setChoir('Heritage') }}>Heritage Singers Payments</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setChoir('Legacy') }}>Legacy Payments</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setChoir('Sensations') }}>Sensations Payments</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setChoir('Sig') }}>Signature Sound Payments</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setChoir('Voce') }}>Voce Alta Payments</Link></a>
                    </ul>
                </div>
                <div className='my-5'>
                    {choir === 'Bella' ? <><h2>Bella Voce</h2><ConcertChoirFees /></> :
                        choir === 'Dynamic' ? <><h2>Dynamic</h2><ConcertChoirFees /></> :
                            choir === 'Heritage' ? <><h2>Heritage Singers</h2><HeritageFees /></> :
                                choir === 'Legacy' ? <><h2>Legacy</h2><LegacyFees /></> :
                                    choir === 'Sensations' ? <><h2>Sensations</h2><HeritageFees /></> :
                                        choir === 'Voce' ? <><h2>Voce Alta</h2><ConcertChoirFees /></> :
                                            choir === 'Sig' ? <><h2>Signature Sound</h2><ConcertChoirFees /></> :
                                                <></>}
                </div>
            </div> */}
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import KidsCampFlyer from '../components/photos/KidsCamp2026.png'
import Header from '../components/photos/Heritage2025Comp.webp'


export default function KidsCamp() {
    const [choir, setChoir] = useState('')



    return (
        <div className='fullpage text-center'>
            <div className='hero-image christmas'>
                <div className='overlay-cover'>
                    <img src={Header} alt='Heritage 2025' className='cover-img' />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Kids Camp</h1>
            </div>
            <div className='row showfest d-flex justify-content-center align-items-center'>
                <div className='col-3 showfest-img'>
                    <img className='showfest-logo' alt='Kids Camp Flyer' src={KidsCampFlyer} />
                </div>
                <div className='col-4 showfest-info text-center'>
                    <h2>Kids Camp 2026</h2>
                    <h3>Saturday, April 18th</h3>
                    <p>Registration is only $40.  Kids Camp attendees will receive a t-shirt and the opportunity to perform at the FCHS Spring Choir Concert.</p>
                    <div className='showfest-btns'>
                        <Button variant='contained' className='btn my-2' href='https://docs.google.com/forms/d/e/1FAIpQLSfMaERHxlRJPC7IQoZuuDEmR7ScxMrSMoxbPjP3v9Rnb_gKNQ/viewform' target='_blank'>Register Now!</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

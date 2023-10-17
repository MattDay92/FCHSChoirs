import React from 'react'
import ShrekPic from '../components/photos/shrek.webp'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <div className='hero-image shrek'>
                <div className='overlay-cover'>
                    <img className='cover-img' alt='Shrek' src={ShrekPic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Page Not Found</h1>
            </div>
            <div className='my-5 text-center col-10 m-auto'>
                <h2 className='my-5'>We're sorry, but the page you're looking for does not exist.  Please return home and try again. </h2>
                <Link to={'/'} className='btn'>Return Home</Link>
            </div>
        </div>
    )
}

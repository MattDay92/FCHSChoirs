import React, {useState, useEffect} from 'react'

export default function Header({background}) {
    

    if (background === 'sensations') {
        return (
            <div className='hero-image sensations'>
                <div className='overlay-cover'>
                </div>
            </div>
        )
    } else if (background === 'heritage') {
        return (
            <div className='hero-image heritage'>
                <div className='overlay-cover'>
                </div>
            </div>
        )
    } else {
        <div className='hero-image'>
            <div className='overlay-cover'>
            </div>
        </div>
    }
}

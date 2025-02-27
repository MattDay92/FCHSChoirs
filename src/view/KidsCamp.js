import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Header from '../components/photos/Heritage2025Comp.webp'


export default function KidsCamp() {
    const [choir, setChoir] = useState('')



    return (
        <div className='fullpage text-center'>
            <div className='hero-image christmas'>
                <div className='overlay-cover'>
                    <img src={Header} alt='Christmas Choir' className='cover-img' />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Kids Camp</h1>
            </div>
            <Button variant='contained' className='btn' href='https://www.canva.com/design/DAFJrvY0YqM/1H2UsZqFyFEhRtuoZRPLEg/view?utm_content=DAFJrvY0YqM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target='_blank'>More Information</Button>

        </div>
    )
}

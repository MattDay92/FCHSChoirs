import React from 'react'
import VelocityIMG from '../components/photos/Heritage2025Comp.webp'
import { Link } from 'react-router-dom'

export default function Velocity() {
    return (
        <div className='fullpage'>
            <div className='hero-image heritage'>
                <div className='overlay-cover'>
                    <img className='cover-img' alt='Heritage Singers' src={VelocityIMG} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Velocity</h1>
            </div>

            <div className='container'>
                <div className='row d-flex justify-content-center text-center'>
                    <p className='col-10'>The Heritage Singers are the premier mixed show choir from Franklin Community High School.
                        Heritage Singers was established when the school district was founded and has enjoyed a history of musical excellence and teamwork.
                        Heritage is directed by Johnnie Ray Hughes and Kelly Cassady Day and is choreographed by Jerico Hughes and Victoria Brindis.
                        Please enjoy this message from Heritage Singers that anything is possible.</p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2024 Season</h2>
                    
                </div>
                
            </div>
        </div>
    )
}

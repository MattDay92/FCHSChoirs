import React from 'react'
import { Link } from 'react-router-dom'

export default function Heritage() {
    return (
        <div className='fullpage'>
            <div className='hero-image heritage'>
                <div className='overlay-cover'>
                </div>
            </div>
            <div className='hero-title'>
                <h1>Heritage Singers</h1>
            </div>

            <div className='container'>
                <div className='row d-flex justify-content-center text-center my-5'>
                    <p className='col-10'>The Heritage Singers are the premier mixed show choir from Franklin Community High School.
                        Heritage Singers was established when the school district was founded and has enjoyed a history of musical excellence and teamwork.
                        Heritage is directed by Johnnie Ray Hughes and Kelly Cassady Day and is choreographed by Jerico Hughes and Victoria Brindis.
                        Please enjoy this message from Heritage Singers that anything is possible.</p>
                </div>
                <div className='row text-center'>
                    <h2>2023 Season</h2>
                    <h4>Fishers Silver Spotlight Invitational</h4>
                    <h4>Ben Davis Giant Spectacular</h4>
                    <h4>Ross Legacy Championship</h4>
                    <h4>East Noble Knight Edition</h4>
                    <h4>Brownsburg Bulldog Spectacular</h4>
                </div>
                <div className='row text-center my-5'>
                    <h2>Follow Heritage Singers!</h2>
                    <a href='https://www.instagram.com/heritagesingers_/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

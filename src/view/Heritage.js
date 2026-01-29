import React from 'react'
import HeritageSingers from '../components/photos/Heritage2025Comp.webp'
import { Link } from 'react-router-dom'

export default function Heritage() {
    return (
        <div className='fullpage'>
            <div className='hero-image heritage'>
                <div className='overlay-cover'>
                    <img className='cover-img' alt='Heritage Singers' src={HeritageSingers} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Heritage Singers</h1>
            </div>

            <div className='container'>
                <div className='row d-flex justify-content-center text-center'>
                    <p className='col-10'>Heritage Singers, FCHS’s premier Varsity mixed Show Choir, has been stirring the
                        hearts of audiences in Franklin for more than sixty years.  Heritage Singers includes students from
                        grades 9-12, and has enjoyed a history of competitive success throughout the midwest, winning many
                        caption and grand champion awards.  This year, Heritage will be hoping for love at first sight to
                        strike at the Fishers Silver Spotlight Competition,the Anderson A-Town Showdown, The Pendleton Arabian
                        Spectacular, the Bishop Luers Invitational, the Brownsburg Bulldog Spectacular, and finishing their
                        season at the Noblesville State Championships.  Heritage Singers are directed by Johnnie Ray Hughes
                        and Kelly Cassady Day, choreographed by Jerico Hughes, with arrangements by Jerico Hughes and Dan Scoville.
                        Prepare to follow your heart and turn up the heat with the FCHS Heritage Singers- EVERYBODY SAY LOVE!! </p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2026 Season</h2>
                    <h4>Batesville Singers Showcase</h4>
                    <h4>Fishers Silver Spotlight Invitational</h4>
                    <h4>Franklin Community ShowFest</h4>
                    <h4>Lafayette Jefferson Xtreme Show Choir Showdown</h4>
                    <h4>Pendleton Arabian Spectacular</h4>
                    <h4>Wheaton Warrenville South Choral Classic</h4>
                    <h4>Noblesville State Championships</h4>
                </div>
                <div className='row text-center my-5'>
                    <h2>Follow Heritage Singers!</h2>
                    <a href='https://www.instagram.com/heritagesingers_/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

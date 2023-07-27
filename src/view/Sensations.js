import React from 'react'
import SensationsPic from '../components/photos/sensations.jpg'

export default function Sensations() {
    return (
        <div className='fullpage'>
            <div className='hero-image'>
                <div className='overlay-cover sensations'>
                    <img className='cover-img' src={SensationsPic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Sensations</h1>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center text-center'>
                    <p className='col-10'>Sensations is a varsity treble ensemble made up of students in 9th-12th grade.
                        After appearing at ISSMA show choir state finals in 2022, Sensation Nation is excited to “grow” and improve in the 2023 season.
                        This garden of young singers is directed by Kelly Cassady Day and Johnnie Ray Hughes and is choreographed by Jerico Hughes and Victoria Brindis.
                        Please enjoy your visit to our garden.</p>
                </div>
                <div className='row text-center my-5'>
                    <h2>2023 Season</h2>
                    <h4>Fishers Silver Spotlight Invitational</h4>
                    <h4>Ben Davis Giant Spectacular</h4>
                    <h4>Ross Legacy Championship</h4>
                    <h4>East Noble Knight Edition</h4>
                    <h4>Brownsburg Bulldog Spectacular</h4>
                </div>
                <div className='row text-center my-5'>
                    <h2>Follow Sensations!</h2>
                    <a href='https://www.instagram.com/fcommsensations/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

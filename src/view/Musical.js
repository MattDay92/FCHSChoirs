import React from 'react'
import TitlePic from '../components/photos/LBLOGODOG.jpeg'
import Button from '@mui/material/Button';
import Sponsor1 from '../components/photos/BradleyBarnetLogo.webp'
import Sponsor2 from '../components/photos/FEMoran2.webp'

export default function Musical() {
    return (
        <div className='fullpage'>
            <div className='hero-image LBLogo'>
                <div className='overlay-cover overlay-cover-lb'>
                    <img className='cover-img cover-img-lb' alt='Legally Blonde Logo' src={TitlePic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1></h1>
            </div>
            <div className='container'>
                <h3 className='my-5'>October 26 - 29, 2023</h3>
                <div className='row mb-5 d-flex justify-content-center text-center'>
                    <p className='col-10'>A fabulously fun award-winning musical based on the adored movie, Legally Blonde The Musical, follows the
                        transformation of Elle Woods as she tackles stereotypes and scandal in pursuit of her dreams. Action-packed and exploding with
                        memorable songs and dynamic dances - this musical is so much fun, it should be illegal!</p>

                    <p className='col-10'>Elle Woods appears to have it all. Her life is turned upside down when her boyfriend Warner dumps her so he can attend Harvard Law.
                        Determined to get him back, Elle ingeniously charms her way into the prestigious law school. While there, she struggles with peers,
                        professors and her ex. With the support of some new friends, though, Elle quickly realizes her potential and sets out to prove
                        herself to the world.</p>
                </div>
                <div className='d-flex justify-content-around text-center my-5'>
                    <Button variant='contained' className='btn' href='https://thefranklinpac.ludus.com/200440615' target='_blank'>Tickets</Button>
                    <Button variant='contained' className='btn' href='https://www.canva.com/design/DAFjXqlIyXc/gv4ErTHPgy7Fvq9yotM69Q/view?utm_content=DAFjXqlIyXc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target="_blank">Cast List</Button>
                </div>
                <h2 className='sponsor-thank-you'>Thank You to our Musical Sponsors!</h2>
                <div className='row text-center sponsors px-0 mx-0 my-5'>
                    <div className='sponsors1'>
                        <h3>Platinum Level - $500 - $999</h3>
                        <div className='d-flex justify-content-around'>
                            <div className='sponsor-img-div'><img className='sponsor-img' src={Sponsor1} /></div>
                            <div className='sponsor-img-div'><img className='sponsor-img' src={Sponsor2} /></div>
                        </div>
                    </div>
                    <div className='sponsors2'>
                        <div className='sponsor-col bottom-sponsor-2'>
                            <h3>Gold Level - $250 - $499</h3>
                            <h5>Franklin Family Dentistry</h5>
                            <h5>Torrance & Sons Heating and Cooling</h5>
                            <h5>Andrews-Harvey Family</h5>
                        </div>
                    </div>
                    <div className='sponsors3 d-flex justify-content-center'>
                        <div className='sponsor-col'>
                            <h3>Silver Level</h3>
                            <h5>Irish Brothers Pest Control</h5>
                            <h5>Vonda & Duane Mercer</h5>
                            <h5>Keller Williams Hometown Real Estate</h5>
                            <h5>Cuttin' Loose Hair Design</h5>
                        </div>

                        <div className='sponsor-col'>
                            <h3>Bronze Level</h3>
                            <h5>Ray & Carmen Lane</h5>
                            <h5>Millie's Ice Cream</h5>
                        </div>
                    </div>
                </div>
                <div className='row text-center mb-5'>
                    <h2>Follow Legally Blonde!</h2>
                    <a href='https://www.instagram.com/legally_blonde_fchs/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import TitlePic from '../components/photos/Heritage2025Comp.webp'
import Button from '@mui/material/Button';
import Sponsor1 from '../components/photos/BradleyBarnetLogo.webp'
import Sponsor2 from '../components/photos/FEMoran2.webp'

export default function Musical() {
    return (
        <div className='fullpage'>
            <div className='hero-image-musical'>
                <div className='overlay-cover-musical'>
                    <img className='cover-img cover-img-musical' alt='Seussical Logo' src={TitlePic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1></h1>
            </div>
            <div className='container'>
                <h3 className='my-5'>November 21 - 24, 2024</h3>
                <div className='row mb-5 d-flex justify-content-center text-center'>
                    <p className='col-10'>The Cat in the Hat tells the story of Horton, an elephant who discovers a speck of dust containing Whos, including Jojo, a Who child sent off to military school for thinking too many "thinks." Horton faces a double challenge--not only must he protect the Whos from a world of naysayers and dangers, but he must guard an abandoned egg, left to his care by the irresponsible Mayzie La Bird. Although Horton faces ridicule, danger, kidnapping, and a trial, the intrepid Gertrude McFuzz never loses faith in him. Ultimately, the powers of friendship, loyalty, family, and community are challenged and emerge triumphant.</p>

    
                </div>
                <div className='d-flex justify-content-around text-center my-5'>
                    <Button variant='contained' className='btn' href='https://thefranklinpac.ludus.com/index.php' target='_blank'>Tickets</Button>
                    {/* <Button variant='contained' className='btn' href='https://www.canva.com/design/DAFjXqlIyXc/gv4ErTHPgy7Fvq9yotM69Q/view?utm_content=DAFjXqlIyXc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target="_blank">Cast List</Button> */}
                </div>
                {/* <h2 className='sponsor-thank-you'>Thank You to our Musical Sponsors!</h2>
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
                </div> */}
                <div className='row text-center mb-5'>
                    <h2>Follow Seussical!</h2>
                    <a href='https://www.instagram.com/legallyblonde_fchs/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

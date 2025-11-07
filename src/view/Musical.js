import React from 'react'
import TitlePic from '../components/photos/MaryPoppinsHeader.webp'
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
                <h3 className='my-5'>November 6 - 9, 2024</h3>
                <div className='row mb-5 d-flex justify-content-center text-center'>
                    <p className='col-10'>Based on the books by P.L. Travers and the classic Walt Disney film, Cameron Mackintosh and 
                        Disney's Mary Poppins delighted Broadway audiences for over 2,500 performances and received nominations for 
                        nine Olivier and seven Tony Awards, including Best Musical.</p>

                        <p>The jack-of-all trades, Bert, introduces us to England in 1910 and the troubled Banks family. Young Jane 
                            and Michael have sent many a nanny packing before Mary Poppins arrives on their doorstep. Using a combination 
                            of magic and common sense, she must teach the family members how to value each other again. Mary Poppins takes 
                            the children on many magical and memorable adventures, but Jane and Michael aren't the only ones upon whom 
                            she has a profound effect. Even grown-ups can learn a lesson or two from the nanny who advises that "Anything 
                            can happen if you let it."</p>

                        <p>Mary Poppins is an enchanting mixture of irresistible story, unforgettable songs, breathtaking dance numbers 
                            and astonishing stagecraft.</p>


                </div>
                <div className='d-flex justify-content-around text-center my-5'>
                    <Button variant='contained' className='btn' href='https://thefranklinpac.ludus.com/index.php' target='_blank'>Tickets</Button>
                    <Button variant='contained' className='btn' href='https://www.canva.com/design/DAGiSrUJf-U/f_aOhKxf-HxbPG3i0IJbSA/view?utm_content=DAGiSrUJf-U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h154b6d8b16' target="_blank">Cast List</Button>
                </div>
               
                <div className='row text-center mb-5'>
                    <h2>Follow Mary Poppins!</h2>
                    <a href='https://www.instagram.com/marypoppins_fchs/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

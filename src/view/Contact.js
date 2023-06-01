import React from 'react'
import Kelly from '../components/photos/Kelly.jpeg'
import Johnnie from '../components/photos/Johnnie.jpeg'
import ChristmasPic from '../components/photos/ChristmasBella.JPG'


export default function Contact() {
    return (
        <div className='fullpage'>
            <div className='hero-image christmas'>
                <div className='overlay-cover'>
                <img src={ChristmasPic} className='cover-img' />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Contact</h1>
            </div>
            <div className='director-bios row col-10 mx-auto my-3'>
                <div className='col-6 bio'>
                    <div className='text-center my-3'><img src={Kelly} className='director' /></div>
                    <div className='text-center'>
                        <h4>Kelly Cassady Day</h4>
                        <p>Kelly Cassady Day, new to Franklin Community High School, is entering her ninth year of teaching after teaching for five years at North Montgomery High School and three years at Decatur Central High School. Kelly, originally from northern Indiana, graduated summa cum laude from Butler University in 2013 with a Bachelor of Music in Education and a minor in History.</p>
                        <p>During her years teaching, she has directed concert choirs and competitive show choirs, pop a cappella groups, and directed many musicals. She is an active performer, appearing in many local and regional musical theater productions, as well as acting as a soloist for many local churches. Some favorite roles include Elle in Legally Blonde, Sarah Brown in Guys and Dolls, and Audrey in Little Shop of Horrors. Kelly also co-directs and performs with Circle City Chamber Choir, a local professional vocal ensemble.</p>
                        <p>In addition to pursuing her passion for the choral art form and education, she is an avid hobby baker and recipe developer and runs a small recipe blog, kellylikestobake.com.</p>
                        <h5>Email:  dayk@franklinschools.org</h5>
                    </div>
                </div>
                <div className='col-6 bio'>
                    <div className='text-center my-3'><img src={Johnnie} className='director' /></div>
                    <div className='text-center'>
                        <h4>Johnnie Ray Hughes</h4>
                        <p>Johnnie Ray Hughes is in his 4th year of teaching and he has been fortunate to have those 4 years here at FCOMM. He is from Indianapolis and graduated from Franklin Central High School. Johnnie graduated from Ball State University with a BS in Vocal & General Music Education.</p>
                        <p>Johnnie is an active performer in the Indianapolis area. Where he performs with the Indianapolis Men’s Chorus and Impromptu A Cappella group. Johnnie also worked with many schools as a freelance choreographer for show choir and musical productions. During the summer, Johnnie teaches private vocal lessons.</p>
                        <p>Johnnie is dedicated to the success of each of his students. He pushes them to constantly be their best and treat everyone with love and respect.</p>
                        <p>“Respect is one of the greatest expression of love” -Miguel Angle Ruiz</p>
                        <h5>Email:  hughesj@franklinschools.org</h5>
                    </div>
                </div>
            </div>
            <div className='CBO-contact row col-10 d-flex justify-content-center my-5 mx-auto'>
                <div className='text-center bio col-3'>
                    <h4>CBO President</h4>
                    <p>Paula Fleener</p>
                    <p>fchs.cbo.president@gmail.com</p>
                </div>
                <div className='text-center bio col-3'>
                    <h4>CBO Vice-President</h4>
                    <p>Jamie Marshall</p>
                </div>
                <div className='text-center bio col-3'>
                    <h4>CBO Costume Coordinator</h4>
                    <p>Kristin Blount</p>
                </div>
                <div className='text-center bio col-3'>
                    <h4>CBO Secretary</h4>
                    <p>April Brandon</p>
                </div>
                <div className='text-center bio col-3'>
                    <h4>Music Department Secretary</h4>
                    <p>Emily Bradley</p>
                    <p>bradleye@franklinschools.org</p>
                </div>
                <div className='text-center bio col-3'>
                    <h4>Charms Coordinator</h4>
                    <p>Melissa Gray</p>
                    <p>fchschoirfees@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

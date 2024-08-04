import React from 'react'
import Kelly from '../components/photos/Kelly.webp'
import Johnnie from '../components/photos/Johnnie.webp'
import Charissa from '../components/photos/Charissa.webp'
import ChristmasPic from '../components/photos/ChristmasBella.webp'


export default function Contact() {
    return (
        <div className='fullpage'>
            <div className='hero-image christmas'>
                <div className='overlay-cover'>
                <img src={ChristmasPic} alt='Christmas Choir' className='cover-img' />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Contact</h1>
            </div>
            <div className='director-bios row col-10 mx-auto my-3'>
                <div className='col-6 bio'>
                    <div className='text-center my-3'><img src={Kelly} className='directorIMG' alt='Kelly Day - Director' /></div>
                    <div className='text-center'>
                        <h4>Kelly Cassady Day</h4>
                        <h5>Director</h5>
                        <p>Kelly Cassady Day is entering her eleventh year of teaching, and third at Franklin, after teaching for five years at North Montgomery High School and three years at Decatur Central High School. Kelly, originally from northern Indiana, graduated summa cum laude from Butler University in 2013 with a Bachelor of Music in Education and a minor in History.</p>
                        <p>During her years teaching, she has directed concert choirs and competitive show choirs, pop a cappella groups, and directed many musicals. She is an active performer, appearing in many local and regional musical theater productions, as well as acting as a soloist for many local churches. Some favorite roles include Elle in Legally Blonde, Sarah Brown in Guys and Dolls, and Audrey in Little Shop of Horrors. Kelly also co-directs and performs with Circle City Chamber Choir, a local professional vocal ensemble.</p>
                        <p>In addition to pursuing her passion for the choral art form and education, she is an avid hobby baker and recipe developer and runs a small recipe blog, kellylikestobake.com.</p>
                        <h5>Email:  dayk@franklinschools.org</h5>
                    </div>
                </div>
                <div className='col-6 bio'>
                    <div className='text-center my-3'><img src={Johnnie} className='directorIMG' alt='Johnnie Hughes - Director' /></div>
                    <div className='text-center'>
                        <h4>Johnnie Ray Hughes</h4>
                        <h5>Director</h5>
                        <p>Johnnie Ray Hughes is in his 4th year of teaching and he has been fortunate to have those 4 years here at FCOMM. He is from Indianapolis and graduated from Franklin Central High School. Johnnie graduated from Ball State University with a BS in Vocal & General Music Education.</p>
                        <p>Johnnie is an active performer in the Indianapolis area. Where he performs with the Indianapolis Men’s Chorus and Impromptu A Cappella group. Johnnie also worked with many schools as a freelance choreographer for show choir and musical productions. During the summer, Johnnie teaches private vocal lessons.</p>
                        <p>Johnnie is dedicated to the success of each of his students. He pushes them to constantly be their best and treat everyone with love and respect.</p>
                        <p>“Respect is one of the greatest expression of love” -Miguel Angle Ruiz</p>
                        <h5>Email:  hughesj@franklinschools.org</h5>
                    </div>
                </div>
                {/* <div className='col-6 bio'>
                    <div className='text-center my-3'><img src={Johnnie} className='director' /></div>
                    <div className='text-center'>
                        <h4>Christine Cannon</h4>
                        <h5>Music Department Secretary</h5>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <h5>Email:  </h5>
                    </div>
                </div> */}
                <div className='col-6 bio m-auto'>
                    <div className='text-center my-3'><img src={Charissa} className='directorIMG' alt='Charissa Garrigus - Accompanist' /></div>
                    <div className='text-center'>
                        <h4>Charissa Garrigus</h4>
                        <h5>Accompanist</h5>
                        <p>Pianist Charissa Garrigus began studying the instrument at age 4. Her musical journey has taken her through all sorts of genres from playing clarinet in orchestras, small ensembles, and symphonic and marching bands, to jazz piano, accompanying, and (of course) classical piano. She studied piano, music education, and literary studies at the University of Indianapolis, and has numerous years of experience teaching PreK-8th grade general music, band, and choir.</p>
                        <p>Currently, Charissa also performs with Classical Music Indy’s Random Acts of Music, and holds the position of Organist and Choral Accompanist at University Heights United Methodist Church. Charissa keeps up an active performance schedule, featuring often in concert with Sound Ecologies, an Indy-based arts non-profit she runs with her husband Luke Garrigus.</p>
                        <p>As a performer and recitalist, Charissa has been honored to premiere both solo and collaborative works of local composers including songs, piano solos, instrumental ensembles, and even a piano concerto in which she was the featured soloist. She has appeared on recordings for Classical Music Indy and Sound Ecologies as well. </p>
                        <p>Charissa is working towards a Masters in Musicology at Butler University, and is committed to a lifelong pursuit of her craft. When she’s not working on musical pursuits, Charissa loves to read, drink tea, listen to spooky podcasts, hike, play games, and spend time with her splendid husband, incredible family, pernicious puppies, and lovely friends.</p>
                        <h5>Email:  charissa@catlinco.com</h5>
                    </div>
                </div>
            </div>
            <div className='CBO-contact row col-10 d-flex justify-content-center my-5 mx-auto'>
                <div className='text-center bio col-3'>
                    <h4>CBO President</h4>
                    <p>Jamie Marshall</p>
                    <p>fchs.cbo.president@gmail.com</p>
                </div>
                <div className='text-center bio col-3'>
                    <h4>CBO President-Elect</h4>
                    <p>Valarie Bagwell</p>
                </div>
                <div className='text-center bio col-3'>
                    <h4>CBO Costume Coordinator</h4>
                    <p>Amanda Golden</p>
                </div>
                <div className='text-center bio col-3'>
                    <h4>CBO Secretary</h4>
                    <p>April Brandon</p>
                </div>
                <div className='text-center bio col-3'>
                    <h4>Treasurer</h4>
                    <p>Paula Fleener</p>
                </div>
            </div>
        </div>
    )
}

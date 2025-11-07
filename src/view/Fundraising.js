import React from 'react'
import Cover from '../components/photos/MaryPoppinsCover.webp'
import Button from '@mui/material/Button';
import CoffeeHouseFive from '../components/photos/coffeehousefivelogo.png'



export default function Fundraising() {
    return (
        <div className='fullpage'>
            <div className='hero-image christmas'>
                <div className='overlay-cover'>
                    <img src={Cover} alt='Mary Poppins' className='cover-img' />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Fundraising</h1>
            </div>
            <div className='row showfest d-flex justify-content-center align-items-center'>
                <div className='col-3 showfest-img'>
                    <img className='showfest-logo' alt='CoffeeHouse Five Logo' src={CoffeeHouseFive} />
                </div>
                <div className='col-4 showfest-info text-center'>
                    <h2>CoffeeHouse Five Fundraiser</h2>
                    <p>Support our talented local high school show choir students by purchasing from Coffeehouse Five! When you specify a student's name at checkout, 40% of your purchase goes directly toward their choir fees.  </p>
                    <div className='showfest-btns'>
                        <Button variant='contained' className='btn my-2' href='https://coffeehouse-five-orders.square.site/shop/fchs-choral-boosters/S4LEGHGNCT5GFQGJ7ORIB5N2?page=1&limit=30&sort_by=category_order&sort_order=asc&fbclid=IwY2xjawNSWeRleHRuA2FlbQIxMQABHiyH1AUxe3yMXPvYamdvvcrcoNU98YUZm2AdZq3LsXDYrNTrD5QHpcKxfOma_aem_9zAzd40y8etzavW8XiBMHg' target='_blank'>More Information</Button>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>
                <h2>Upcoming Fundraisers</h2>
                <div className='CBO-contact row col-10 d-flex justify-content-center my-5 mx-auto'>
                {/* <div className='text-center bio col-3'>
                    <h3>Popcorn</h3>
                    <h5>10/6 - 10/24</h5>
                </div>
                <div className='text-center bio col-3'>
                    <h3>Trunk or Treat</h3>
                    <h5>10/30</h5>
                </div> */}
                <div className='text-center bio col-3'>
                    <h3>Trash Bags</h3>
                    <h5>11/3 - 11/21</h5>
                </div>
                <div className='text-center bio col-3'>
                    <h3>Candy Bars</h3>
                    <h5>1/12 - ??</h5>
                </div>
                <div className='text-center bio col-3'>
                    <h3>Pastries</h3>
                    <h5>1/26 - ??</h5>
                </div>
            </div>
            </div>

        </div>
    )
}

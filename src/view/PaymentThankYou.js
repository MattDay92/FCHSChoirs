import React from 'react'
import ChristmasPic from '../components/photos/ChristmasBella.webp'

export default function PaymentThankYou() {
  return (
    <div className='fullpage'>
        <div className='hero-image christmas'>
                <div className='overlay-cover'>
                <img src={ChristmasPic} alt='Christmas Choir' className='cover-img' />
                </div>
            </div>
        <div className='col-10 m-auto'>
        <h3>Thank you for your payment.  You will receive a receipt in your email.  If you do not receive one, please contact us.  </h3>
        </div>
    </div>
  )
}

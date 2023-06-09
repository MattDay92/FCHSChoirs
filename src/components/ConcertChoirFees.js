import { ClassNames } from '@emotion/react'
import React from 'react'

export default function ConcertChoirFees() {
    return (
        <div className='container'>
            <button className="btn my-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Payment Details
            </button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header d-flex justify-content-center">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Concert Choir Payment Information</h5>
                </div>
                <div class="offcanvas-body d-flex justify-content-center">
                    <div className='col-10'>

                        <h5>September 30, 2022 – $50</h5>

                        <h5>March 1, 2023  – $50 unless parent volunteered at ShowFest 2023</h5>

                        <p>**Families with outstanding balances from previous years must be paid in full by September 30th to receive Fall concert performance attire.</p>

                        <p>**Please note: we know that circumstances can arise that can make it difficult to make these payments, and we can be flexible or offer other options.  If you are experiencing financial hardship, know that you will not be barred from participation as long as you communicate with the directors and develop a plan for meeting your financial obligation.  We cannot help unless we know, so please do not hesitate to reach out to us.**</p>

                        <p className='offcanvas-last'>You are responsible for the rental cost of your performance outfit, dance shoes, and other associated fees even if you must be removed from the group. Fundraisers will be provided for you to help cover the cost of your performance outfit and activity fee. Final cost will need to be paid in full before you will receive your choir outfit unless you have made other arrangements. We will work with you on payments, but you must contact the directors as soon as possible to set up a plan. Communication is key!</p>

                    </div>

                </div>
            </div>


            <h5>Select a payment option below. Type in your student’s name above the option you select. If you select “Make a Payment” button, you will type in the dollar amount you wish to pay. “Set Up Recurring Payments” allows you to select a recurring amount that will be automatically billed.</h5>

            <div className='d-flex justify-content-center'>
                <form className='my-5 col-6 payment-form'>
                    <input className='form-control' placeholder='Student Name' />
                    <button className='btn btn-sm my-3 mx-2' type='submit'>One-Time Payment</button>
                    <button className='btn btn-sm my-3 mx-2' type='submit'>Set-Up Recurring Payment</button>
                </form>
            </div>
        </div>
    )
}

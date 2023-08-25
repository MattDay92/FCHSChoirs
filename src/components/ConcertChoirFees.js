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

            <h4 className='pb-5'>***If you are in a show choir, you do not need to pay a concert choir fee***</h4>


            <h5>Select a payment option below. Type in your student’s name above the option you select. If you select “Make a Payment” button, you will type in the dollar amount you wish to pay. “Set Up Recurring Payments” allows you to select a recurring amount that will be automatically billed.</h5>

            <div className='d-flex justify-content-around'>
                <form className='payment-form' target="_blank" action="https://hosted.transactionexpress.com/Transaction/Transaction/Index" method="POST">

                    <input type="hidden" name="HostedKey" id="HostedKey" value="4ea64b87-7bef-497c-b44c-8145ad685e3a" />

                    <input type="hidden" name="Gateway_ID" id="Gateway_ID" value="9057196840" />

                    <input type="hidden" name="IndustryCode" id="IndustryCode" value="2" />

                    <input type="hidden" name="Amount" id="Amount" value="" />

                    <input type="hidden" name="RecurringType" id="RecurringType" value="N" />

                    <input type="hidden" name="RecurringAmount" id="RecurringAmount" value="" />

                    <input type="hidden" name="RURL" id="RURL" value="https://www.fchschoirs.com/payment-thank-you/" />
                    <input type="hidden" name="CURL" id="CURL" value="https://www.fchschoirs.com/fees/" />
                    <input type="hidden" name="CustRefID" id="CustRefID" value="Payment submitted" />

                    <input type="hidden" name="AVSRequired" id="AVSRequired" value="Y" />

                    <input type="hidden" name="CVV2Required" id="CVV2Required" value="Y" />

                    <input type="hidden" name="EmailRequired" id="EmailRequired" value="Y" />

                    <input type="hidden" name="PostRspMsg" id="PostRspMsg" value="N" />

                    <input type="hidden" name="PaymentType" id="PaymentType" value="CC" />
                    <span>Student Name:</span> 
                    <input className='form-control mb-2' required type="text" name="CustRefID" id="CustRefID" placeholder="Enter Name Here" />

                    <button className='btn btn-sm' type="Submit" name="Submit" id="Submit" >Make a Payment</button>

                </form>
                <form className='payment-form' target="_blank" action="https://hosted.transactionexpress.com/Transaction/Transaction/Index" method="POST">

                    <input type="hidden" name="HostedKey" id="HostedKey" value="4ea64b87-7bef-497c-b44c-8145ad685e3a" />

                    <input type="hidden" name="Gateway_ID" id="Gateway_ID" value="9057196840" />

                    <input type="hidden" name="IndustryCode" id="IndustryCode" value="2" />

                    <input type="hidden" name="Amount" id="Amount" value="na" />

                    <input type="hidden" name="RecurringType" id="RecurringType" value="A" />

                    <input type="hidden" name="RecurringAmount" id="RecurringAmount" value="" />
                    <input type="hidden" name="RURL" id="RURL" value="https://www.fchschoirs.com/payment-thank-you/" />
                    <input type="hidden" name="CURL" id="CURL" value="https://www.fchschoirs.com/fees/" />
                    <input type="hidden" name="CustRefID" id="CustRefID" value="Autopay submitted" />
                    <input type="hidden" name="AVSRequired" id="AVSRequired" value="Y" />

                    <input type="hidden" name="CVV2Required" id="CVV2Required" value="Y" />

                    <input type="hidden" name="EmailRequired" id="EmailRequired" value="N" />

                    <input type="hidden" name="PostRspMsg" id="PostRspMsg" value="N" />

                    <input type="hidden" name="PaymentType" id="PaymentType" value="CC" />
                    <span>Student Name:</span> <input required className='form-control mb-2' type="text" name="CustRefID" id="CustRefID" placeholder="Enter Name Here" />

                    <button className='btn btn-sm' type="Submit" name="Submit" id="Submit" >Set Up Recurring Payments</button>

                </form>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Header from '../components/photos/KidsCampFall.jpeg'


export default function KidsCamp() {
    const [choir, setChoir] = useState('')



    return (
        <div className='fullpage text-center'>
            <div className='hero-image christmas'>
                <div className='overlay-cover'>
                    <img src={Header} alt='Christmas Choir' className='cover-img' />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Kids Camp</h1>
            </div>
            <Button variant='contained' className='btn' href='https://www.canva.com/design/DAFJrvY0YqM/1H2UsZqFyFEhRtuoZRPLEg/view?utm_content=DAFJrvY0YqM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target='_blank'>More Information</Button>

            <div className='container my-5 col-10 text-center'>

                <div className='row m-auto'>
                    <h3>Select a payment option below. Type in your child’s name above the option you select. If you select “Make a Payment” button, you will type in the dollar amount you wish to pay. </h3>
                </div>
                <div className='payment-inputs'>
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
    
                </div>
            </div>
        </div>
    )
}

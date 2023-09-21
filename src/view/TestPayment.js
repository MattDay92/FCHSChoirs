import React from 'react'

export default function TestPayment() {
    return (
        <div className='fullpage text-center my-5'>
            <div className='row m-auto'>
                <h5>The "Make Payment" button below will allow you to make a one-time only payment of up to $750 or a recurring scheduled payment.</h5>
                <h5 className='gold-text'>Please enter your student's name in the box labeled "Customer Reference ID" </h5>
            </div>
            <form action="https://hostedpaynow.com/v2/paynowapp/processpayment" method="post" target="_blank"> <br />
                <input type="hidden" name="cmd" value="_xclick" /> <br />
                <input type="hidden" name="tokenuid" value="218bb4c3e98e423abfe16eefbf17882a@=f2f10ed801090741a5803645688f1109fb511508cebd866d723ec554e36c13fd" /><br /> <br />
                <button className='btn payment-btn' name="submit" type="submit" >
                    Make Payment
                </button>
            </form>
        </div>
    )
}

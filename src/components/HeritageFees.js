import React, { useState } from 'react'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';



export default function HeritageFees() {


  return (
    <div className='container'>
      <button className="btn my-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Payment Details
      </button>

      <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header d-flex justify-content-center">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Heritage Singers/Sensations Payment Information</h5>
        </div>
        <div class="offcanvas-body d-flex justify-content-center">
          <div className='col-10'>
            <h5>A deposit of $50 is due at the time of your returned contract on May 9th.</h5>

            <h4>***FEES & PAYMENT SCHEDULE***</h4>

            <h5>HERITAGE SINGERS & SENSATIONS- Full $750</h5>
            <p>($900  if a student does not have an adult volunteer for 1 shift at ShowFest 2023)</p>

            <h5>**Families must have all outstanding balances from the previous year paid by August 1st, 2022</h5>

            <h5>May 9th– $50 deposit</h5>

            <h5>June 15th – $100</h5>

            <h5>July 15th- $100</h5>

            <h5>August 15th – $100</h5>

            <h5>September 15th – $100 </h5>
            <p>fee payments must be up to date in order to costumes for the Fall concert</p>

            <h5>October 15th -$100</h5>

            <h5>November 15th – $100 </h5>
            <p>$650 of total fee due for outfits for Christmas concert – Students who are not up to date with fees by Dec. 15th will be blocked out of the competition season set until fees are caught up or arrangement has been made with the CBO.</p>

            <h5>January 15th – $100</h5>

            <h5>February 15th-$150</h5>
            <p>if parent did not participate or help at ShowFest 2023</p>

            <p>**Students who participate in both Sensations and Heritage Singers (doublers) will pay full price for one show choir and $360 for the second choir. The $360 will cover the cost of outfits, choreography, travel, and arrangement fees.  Sensations/Heritage Doublers would add $40 to each payment of  the payment schedule above.</p>

            <p>Doublers who double Legacy would need to add $180 to cover costs of outfits, choreography, travel, and arrangement fees. Legacy Doublers would add $20 to each payment of the payment schedule above.</p>

            <p>**Note: In order to maintain the financial health of the FCHS choirs, students and families must be fully responsible for their participation fees.  If any student is not making an attempt to pay fees, the CBO and the directors reserve the right to remove students from competitions, withhold costumes, and seek assistance from collections services.</p>

            <p>Accessory and trip costs not included:  make-up, shoes, tights, undergarments, hair pieces, etc</p>

            <p>**Heritage and Sensations members do not need to pay a Concert Choir fee.</p>

            <p>These dates detail important payment deadlines.  It is suggested that payments be made on a monthly basis so that no one will fall behind. Please communicate if you have a special concern or request and arrangements will be made if possible.  Communication is key!  Financial aid is available for those that have a need.  Please talk with Sarah Bullington to get information. All May- July fees need to be paid online at FCHSchoirs.com. Payments may also be brought in and deposited in the choir room’s payment box once school begins.  Cash payments made during the school year are highly discouraged but will be accepted; however, no receipt will be given.  All statements and invoices will be distributed via email through Charms.  Students that withdraw from participation for any reason will still be responsible for covering their portion of the costs for the entirety of the year.  (the FULL amount of $750 if before the start of second Semester, $900 if after the start of second Semester.</p>

            <p className='offcanvas-last'>Note: the Choir Booster Organization is a not-for-profit entity, and as such is legally prohibited from offering refunds for any reason. This includes fundraising dollars, trip money, and student fees. If a student fundraises beyond the cost of their participation fees, that money goes into the general booster budget.</p>

          </div>

        </div>
      </div>
      

      <div className='payment-inputs'>
          <a href='https://collectcheckout.com/r/z1onc' target='_blank' rel="noreferrer" className='btn payment-btn' >
            Make Payment
          </a>
      </div>
    </div >
  )
}

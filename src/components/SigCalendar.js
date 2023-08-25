import React from 'react'

export default function SigCalendar() {
  return (
    <div className='container'>
    <div className='row calendar d-flex justify-content-center'>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FIndiana%2FIndianapolis&title=Signature%20Sound&src=NzVlY2U5NTdiMTcyNDdjODJhMjM0ZjQwMGQ3ZTc2ODdlZTg3MjQ5OWRmNjFjNjA3YjQ0OTY2MDA5OWFlYWIzN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NDcxODZmYTMyOTIzYTk5YzNhZmFiM2YxM2I1NTc3NDYwNGU3YTI0YmM1ZWMyY2I5YjdlOTI3OTM2N2U2N2EyM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%237986CB"></iframe>
    </div>

    <div class="dropdown subscribe-btn">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subscribe
        </button>
        <ul class="dropdown-menu">
            <li><a href='webcal://calendar.google.com/calendar/ical/47186fa32923a99c3afab3f13b55774604e7a24bc5ec2cb9b7e9279367e67a23%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
            <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=47186fa32923a99c3afab3f13b55774604e7a24bc5ec2cb9b7e9279367e67a23%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
        </ul>
    </div>
</div>
  )
}

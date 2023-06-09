import React from 'react'

export default function VoceAltaCalendar() {
  return (
    <div className='container'>
    <div className='row calendar d-flex justify-content-center'>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FIndiana%2FIndianapolis&title=Voce%20Alta&src=NzVlY2U5NTdiMTcyNDdjODJhMjM0ZjQwMGQ3ZTc2ODdlZTg3MjQ5OWRmNjFjNjA3YjQ0OTY2MDA5OWFlYWIzN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWIzNTUxMDE1Mjc4MDFhMTZmM2ZkNTkyMzcwZDBlMzNjYzljZDU2NWI2OTJhZDE3ZjkyNmUxNDUwYTA1Y2ZjYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%23C0CA33"></iframe>           
    </div>

    <div class="dropdown subscribe-btn">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subscribe
        </button>
        <ul class="dropdown-menu">
            <li><a href='webcal://https://calendar.google.com/calendar/ical/5b355101527801a16f3fd592370d0e33cc9cd565b692ad17f926e1450a05cfcb%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
            <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=5b355101527801a16f3fd592370d0e33cc9cd565b692ad17f926e1450a05cfcb%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
        </ul>
    </div>
</div>
  )
}

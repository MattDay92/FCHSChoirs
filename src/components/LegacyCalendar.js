import React from 'react'

export default function LegacyCalendar() {
  return (
    <div className='container'>
    <div className='row calendar d-flex justify-content-center'>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FIndiana%2FIndianapolis&title=Legacy&src=NzVlY2U5NTdiMTcyNDdjODJhMjM0ZjQwMGQ3ZTc2ODdlZTg3MjQ5OWRmNjFjNjA3YjQ0OTY2MDA5OWFlYWIzN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZTcxODg2YThkZTg0ZWQ0ZGMzZGNhZTQ3ZTVjN2E1MDM5ZDU4MjlmNDdjMThjN2Y4NGRjNDNkMGJiOThmNTgxN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%237CB342"></iframe>          
    </div>

    <div class="dropdown subscribe-btn">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subscribe
        </button>
        <ul class="dropdown-menu">
            <li><a href='webcal://https://calendar.google.com/calendar/ical/e71886a8de84ed4dc3dcae47e5c7a5039d5829f47c18c7f84dc43d0bb98f5817%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
            <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=e71886a8de84ed4dc3dcae47e5c7a5039d5829f47c18c7f84dc43d0bb98f5817%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
        </ul>
    </div>
</div>
  )
}

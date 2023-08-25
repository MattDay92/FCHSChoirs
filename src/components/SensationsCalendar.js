import React from 'react'

export default function SensationsCalendar() {
  return (
    <div className='container'>
    <div className='row calendar d-flex justify-content-center'>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FIndiana%2FIndianapolis&title=Sensations&src=NzVlY2U5NTdiMTcyNDdjODJhMjM0ZjQwMGQ3ZTc2ODdlZTg3MjQ5OWRmNjFjNjA3YjQ0OTY2MDA5OWFlYWIzN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YTZlZWExMzA4NTQyN2M3ZTQ5NTQxMWUwYTFmZWY0MDJhMjMwYWRkMDY3ODMwNWEwNDhhNWI2NTlmNTExZjk2MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%23616161"></iframe>    
    </div>

    <div class="dropdown subscribe-btn">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subscribe
        </button>
        <ul class="dropdown-menu">
            <li><a href='webcal://calendar.google.com/calendar/ical/a6eea13085427c7e495411e0a1fef402a230add0678305a048a5b659f511f961%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
            <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=a6eea13085427c7e495411e0a1fef402a230add0678305a048a5b659f511f961%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
        </ul>
    </div>
</div>
  )
}

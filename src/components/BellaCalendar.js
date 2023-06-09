import React from 'react'

export default function BellaCalendar() {
  return (
    <div className='container'>
    <div className='row calendar d-flex justify-content-center'>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FIndiana%2FIndianapolis&title=Bella%20Voce&src=NzVlY2U5NTdiMTcyNDdjODJhMjM0ZjQwMGQ3ZTc2ODdlZTg3MjQ5OWRmNjFjNjA3YjQ0OTY2MDA5OWFlYWIzN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDJiMjA1NWQ3NDBiNzY3YjJiYmYyM2VmNzNjZGE5NWZhN2RmNTdhYjg0YmFiYTY2MzhjYzJjZTAzMzY2NTU1NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%237CB342"></iframe>            
    </div>

    <div class="dropdown subscribe-btn">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subscribe
        </button>
        <ul class="dropdown-menu">
            <li><a href='webcal://https://calendar.google.com/calendar/ical/d2b2055d740b767b2bbf23ef73cda95fa7df57ab84baba6638cc2ce033665556%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
            <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=d2b2055d740b767b2bbf23ef73cda95fa7df57ab84baba6638cc2ce033665556%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
        </ul>
    </div>
</div>
  )
}

import React from 'react'

export default function MusicalCalendar() {
  return (
    <div className='container'>
    <div className='row calendar d-flex justify-content-center'>
        <iframe src="https://calendar.google.com/calendar/embed?src=8d2549a7ab2bd0112ec5d27e7d083f21b172c6a8885fe84bf097b937e005f5ee%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis"></iframe>            
    </div>

    <div class="dropdown subscribe-btn">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subscribe
        </button>
        <ul class="dropdown-menu">
            <li><a href='webcal://calendar.google.com/calendar/ical/8d2549a7ab2bd0112ec5d27e7d083f21b172c6a8885fe84bf097b937e005f5ee%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
            <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=8d2549a7ab2bd0112ec5d27e7d083f21b172c6a8885fe84bf097b937e005f5ee%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
        </ul>
    </div>
</div>
  )
}

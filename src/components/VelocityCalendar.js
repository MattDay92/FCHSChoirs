import React from 'react'

export default function VelocityCalendar() {
  return (
    <div className='container'>
    <div className='row calendar d-flex justify-content-center'>
    <iframe src="https://calendar.google.com/calendar/embed?src=0c62d3a4ca84d4957aee7d5f7a67cbf78f7c5742bc22fcbe9752a589a1172afa%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis"></iframe>
    </div>

    <div class="dropdown subscribe-btn">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subscribe
        </button>
        <ul class="dropdown-menu">
            <li><a href='webcal://calendar.google.com/calendar/ical/0c62d3a4ca84d4957aee7d5f7a67cbf78f7c5742bc22fcbe9752a589a1172afa%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
            <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=47186fa32923a99c3afab3f13b55774604e7a24bc5ec2cb9b7e9279367e67a23%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
        </ul>
    </div>
</div>
  )
}
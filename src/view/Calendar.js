import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


export default function Calendar() {
    return (
        <div className='fullpage'>
            <div className='row d-flex justify-content-center'>
                <iframe src="https://calendar.google.com/calendar/embed?src=mattdaymusic10%40gmail.com&ctz=America%2FNew_York"></iframe>
            </div>
            <div className='calendar-load'>
                <CircularProgress color='inherit' size={60} />
            </div>
            

            <div class="dropdown subscribe-btn">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Subscribe
                </button>
                <ul class="dropdown-menu">
                    <li><a href='webcal://calendar.google.com/calendar/ical/mattdaymusic10%40gmail.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
                    <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=mattdaymusic10%40gmail.com&ctz=America%2FNew_York" target='_blank'>Add to Google Calendar</a></li>
                </ul>
            </div>
        </div>
    )
}

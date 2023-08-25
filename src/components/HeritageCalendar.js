import React from 'react'

export default function HeritageCalendar() {
    return (
        <div className='container'>
            <div className='row calendar d-flex justify-content-center'>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FIndiana%2FIndianapolis&title=Heritage%20Singers&src=NzVlY2U5NTdiMTcyNDdjODJhMjM0ZjQwMGQ3ZTc2ODdlZTg3MjQ5OWRmNjFjNjA3YjQ0OTY2MDA5OWFlYWIzN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZjI2ZGUxMDBiMTQzODMzODQ1MTQ4NjkyOTY0ZTA3N2EyYWFiY2MyNWNhYWVmMDRjYzQyZmZlZGNmZDg1MmIwNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%23E4C441"></iframe>            
            </div>

            <div class="dropdown subscribe-btn">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Subscribe
                </button>
                <ul class="dropdown-menu">
                    <li><a href='webcal://calendar.google.com/calendar/ical/f26de100b143833845148692964e077a2aabcc25caaef04cc42ffedcfd852b04%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
                    <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=f26de100b143833845148692964e077a2aabcc25caaef04cc42ffedcfd852b04%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
                </ul>
            </div>
        </div>
    )
}

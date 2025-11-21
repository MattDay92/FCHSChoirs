import React from 'react'

export default function RockafellasCalendar() {
    return (
        <div className='container'>
            <div className='row calendar d-flex justify-content-center'>
                <iframe src="https://calendar.google.com/calendar/embed?src=c_8759aabeec6f69978a8a256795d6913cb11bb9d7161f9c07cbf3eb3f6e3aa02e%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis"></iframe>
            </div>

            <div class="dropdown subscribe-btn">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Subscribe
                </button>
                <ul class="dropdown-menu">
                    <li><a href='webcal://calendar.google.com/calendar/ical/c_8759aabeec6f69978a8a256795d6913cb11bb9d7161f9c07cbf3eb3f6e3aa02e%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
                    <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=c_8759aabeec6f69978a8a256795d6913cb11bb9d7161f9c07cbf3eb3f6e3aa02e%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
                </ul>
            </div>
        </div>
    )
}
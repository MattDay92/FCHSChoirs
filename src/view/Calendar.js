import React from 'react'

export default function Calendar() {
    return (
        <div className='fullpage'>
            <div className='row d-flex justify-content-center my-5'>
                <iframe src="https://calendar.google.com/calendar/embed?src=mattdaymusic10%40gmail.com&ctz=America%2FNew_York"></iframe>
            </div>
            <div className='row calendar-load'>
                <div className="spinner-border text-light" role="status"></div>
                <div>Loading Calendar...</div>
            </div>
        </div>
    )
}

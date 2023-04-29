import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


export default function Calendar() {
    return (
        <div className='fullpage'>
            <div className='row d-flex justify-content-center my-5'>
                <iframe src="https://calendar.google.com/calendar/embed?src=mattdaymusic10%40gmail.com&ctz=America%2FNew_York"></iframe>
            </div>
            <div className='calendar-load'>
                <CircularProgress color='inherit' size={60}/>
            </div>
        </div>
    )
}

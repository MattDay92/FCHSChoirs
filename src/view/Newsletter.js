import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


export default function Newsletter() {
    return (
        <div className='fullpage'>
            <div className='row newsletter d-flex justify-content-center my-5'>
                <iframe loading="lazy"
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFfcJxPJCw&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                </iframe>
            </div>
            <div className='calendar-load'>
                <CircularProgress color='inherit' size={60}/>
            </div>
        </div>
    )
}

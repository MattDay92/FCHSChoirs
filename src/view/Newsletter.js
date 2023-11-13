import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


export default function Newsletter() {
    return (
        <div className='fullpage'>
            <div className='row newsletter d-flex justify-content-center'>
                <iframe loading="lazy" src="https://www.canva.com/design/DAFz9zruUxw/nBQa_uysLFUVOK70zPVXvg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">  </iframe>
            </div>
            <div className='calendar-load'>
                <CircularProgress color='inherit' size={60} />
            </div>
        </div>
    )
}

import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function ByLaws() {
    return (
        <div className='fullpage'>
            <div className='bylaws row d-flex justify-content-center'>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vQPeJBqkW7yVvrsCaLjGqYF2fyNDIPCRIlaF6WHy1csc5xtrt4xUVkKCrkIGdQG8Q/pub?embedded=true"></iframe>
            </div>
            <div className='calendar-load'>
                <CircularProgress color='inherit' size={60} />
            </div>
        </div>
    )
}

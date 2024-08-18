import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


export default function Newsletter({ link }) {

    


    return (
        // <div className='fullpage'>
        //     <div className='row newsletter d-flex justify-content-center'>
        //         <iframe loading="lazy" src="https://www.canva.com/design/DAGOCG1FNrE/SlcKnaicauWHJGwZh-Wn1g/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">  </iframe>
        //     </div>
        //     <div className='calendar-load'>
        //         <CircularProgress color='inherit' size={60} />
        //     </div>
        // </div>

        <div className='fullpage'>
            <div className='row newsletter d-flex justify-content-center'>
                <iframe loading="lazy" src={`${link}embed`} allowfullscreen="allowfullscreen" allow="fullscreen">  </iframe>
            </div>
            <div className='calendar-load'>
                <CircularProgress color='inherit' size={60} />
            </div>
        </div>
    )
}

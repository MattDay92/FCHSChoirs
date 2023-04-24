import React from 'react'

export default function Newsletter() {
    return (
        <div className='fullpage'>
            <div className='row newsletter d-flex justify-content-center my-5'>
                <iframe loading="lazy"
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFfcJxPJCw&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                </iframe>
            </div>
            <div className='row calendar-load'>
                <div className="spinner-border text-light" role="status"></div>
                <div>Loading Newsletter...</div>
            </div>
        </div>
    )
}

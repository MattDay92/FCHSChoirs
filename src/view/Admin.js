import React from 'react'
import { getDatabase, ref as refDB, set } from 'firebase/database'
import Alert from '@mui/material/Alert';





export default function Admin({ link }) {

    const updateNewsletter = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const linkURL = event.target.newsletterLink.value

        console.log('ran')

        set(refDB(db, 'link'), {
            linkURL
        }).then(() => {
            alert('Newsletter link updated successfully!');
        }).catch((error) => {
            console.error('Error saving data:', error);
            alert('An error occurred while updating the newsletter link. Please try again.');
        });
    }

    return (
        <div className='fullpage'>
            <h1 className='my-5'>Admin Page</h1>
            <form className='my-5 w-75 m-auto text-center' onSubmit={updateNewsletter}>
                <input className='form-control' name='newsletterLink' placeholder='Insert Newsletter URL' />
                <button className='btn my-2' type='submit'>Submit Link</button>
            </form>
        </div>
    )
}

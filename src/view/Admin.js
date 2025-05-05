import React, { useState, useEffect } from 'react'
import { getDatabase, ref as refDB, set } from 'firebase/database'
import { getStorage, ref, uploadBytes, uploadBytesResumable, uploadString, getDownloadURL } from 'firebase/storage'
import Alert from '@mui/material/Alert';






export default function Admin({ link, storage }) {
    const [fileUpload, setFileUpload] = useState('')
    const [fileUploadName, setFileUploadName] = useState('')
    const [fileDownload, setFileDownload] = useState('')
    const [newsletterUpload, setNewsletterUpload] = useState('')
    const [newsletterUploadName, setNewsletterUploadName] = useState('')

    const updateNewsletter = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const linkURL = event.target.newsletterLink.value

        set(refDB(db, 'link'), {
            linkURL
        }).then(() => {
            alert('Newsletter link updated successfully!');
        }).catch((error) => {
            console.error('Error saving data:', error);
            alert('An error occurred while updating the newsletter link. Please try again.');
        });
    }

    const updateFeaturedTitle = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const linkURL = event.target.featuredTitle.value
        const caption = event.target.featuredCaption.value

        set(refDB(db, 'featuredTitle'), {
            linkURL: linkURL,
            caption: caption
        }).then(() => {
            alert('Featured Title updated successfully!');
        }).catch((error) => {
            console.error('Error saving data:', error);
            alert('An error occurred while updating the featured title. Please try again.');
        });
    }

    const updateBreakfastClub = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const linkURL = event.target.breakfastClubLink.value

        set(refDB(db, 'breakfastLink'), {
            linkURL
        }).then(() => {
            alert('Breakfast Club link updated successfully!');
        }).catch((error) => {
            console.error('Error saving data:', error);
            alert('An error occurred while updating the Breakfast Club link. Please try again.');
        });
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]

        console.log(selectedFile)

        let reader = new FileReader();

        reader.readAsDataURL(selectedFile)

        reader.onload = () => {
            console.log(reader.result);
            setFileUpload(reader.result)
            setFileUploadName(event.target.name)
        }

        reader.onerror = () => {
            console.log(reader.error)
        }
    }

    const handleNewsletterFileChange = (event) => {
        const selectedFile = event.target.files[0]

        console.log(selectedFile)

        let reader = new FileReader();

        reader.readAsDataURL(selectedFile)

        reader.onload = () => {
            console.log(reader.result);
            setNewsletterUpload(reader.result)
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0]; // "YYYY-MM-DD"
            const fileExtension = selectedFile.name.split('.').pop(); // Keep original extension

            setNewsletterUploadName(`WeekOf${formattedDate}.${fileExtension}`);
        }

        reader.onerror = () => {
            console.log(reader.error)
        }
    }

    const handleUpload = () => {
        const filesRef = ref(storage, `files/${fileUploadName}`)

        if (fileUpload) {
            uploadString(filesRef, fileUpload, 'data_url').then((snapshot) => {
                console.log('Uploaded a file!');
            })
        }

        if (fileUploadName) {
            downloadFile('files', fileUploadName)
        }
    };

    const handleNewsletterUpload = () => {
        const filesRef = ref(storage, `newsletters/${newsletterUploadName}`)

        if (newsletterUpload) {
            uploadString(filesRef, newsletterUpload, 'data_url').then((snapshot) => {
                console.log('Uploaded a file!');
            })
        }

        if (newsletterUploadName) {
            downloadFile('newsletters', newsletterUploadName)
        }
    };

    const downloadFile = (type, name) => {
        const gsReference = ref(storage, `gs://fcomm-choirs.firebasestorage.app/${type}/${name}`)

        getDownloadURL(gsReference)
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = (event) => {
                    const link = xhr.responseURL
                    setFileDownload(link)
                    console.log('Ran Download')
                };
                xhr.open('GET', url);
                xhr.send()
            })
            .catch((error) => {
                console.log('ERROR Downloading File')
            })
    }

    useEffect(() => {
        handleUpload()
    }, [fileUpload])

    useEffect(() => {
        handleNewsletterUpload()
    }, [newsletterUpload])

    return (
        <div className='fullpage'>
            <h1 className='my-5'>Admin Page</h1>

            <h2 className='mt-5'>
                Upload Newsletter for Week of {new Date().toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </h2>
            <div className='col-10 m-auto d-flex justify-content-between mb-5'>
                <form className='m-auto'>
                    <input type='file' name='Newsletter' onChange={handleNewsletterFileChange} />
                </form>
            </div>

            {/* <form className='my-5 w-75 m-auto text-center' onSubmit={updateNewsletter}>
                <input className='form-control' name='newsletterLink' placeholder='Insert Newsletter URL' />
                <button className='btn my-2' type='submit'>Submit Newsletter Link</button>
            </form> */}
            <form className='my-5 w-75 m-auto text-center' onSubmit={updateBreakfastClub}>
                <input className='form-control' name='breakfastClubLink' placeholder='Insert Breakfast Club URL' />
                <button className='btn my-2' type='submit'>Submit Breakfast Club Link</button>
            </form>
            <form className='my-5 w-75 m-auto text-center' onSubmit={updateFeaturedTitle}>
                <input className='form-control' name='featuredTitle' placeholder='Insert Featured Photo Section Title' />
                <input className='form-control' name='featuredCaption' placeholder='Insert Featured Photo Section Caption' />
                <button className='btn my-2' type='submit'>Submit Featured Info</button>
            </form>
            <div className='col-10 m-auto d-flex justify-content-between'>
                <form className='m-auto'>
                    <div className='col-8'><img className='w-100' id='featured1' src='https://firebasestorage.googleapis.com/v0/b/fcomm-choirs.firebasestorage.app/o/files%2Ffeatured1?alt=media&token=b751f92b-36b2-480a-a703-9acff43da9b2' /></div>
                    <input type='file' name='featured1' onChange={handleFileChange} />
                </form>
                <form className='m-auto'>
                    <div className='col-8'><img className='w-100' id='featured1' src='https://firebasestorage.googleapis.com/v0/b/fcomm-choirs.firebasestorage.app/o/files%2Ffeatured2?alt=media&token=b751f92b-36b2-480a-a703-9acff43da9b2' /></div>
                    <input type='file' name='featured2' onChange={handleFileChange} />
                </form>
                <form className='m-auto'>
                    <div className='col-8'><img className='w-100' id='featured1' src='https://firebasestorage.googleapis.com/v0/b/fcomm-choirs.firebasestorage.app/o/files%2Ffeatured3?alt=media&token=b751f92b-36b2-480a-a703-9acff43da9b2' /></div>
                    <input type='file' name='featured3' onChange={handleFileChange} />
                </form>
            </div>
           
            
        </div>
    )
}

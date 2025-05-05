import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import SensationsPic from '../components/photos/Sensations2025Comp.webp'




export default function Newsletter({ link, storage }) {
    const [newsletterArchive, setNewsletterArchive] = useState([])


    useEffect(() => {
        let isMounted = true;

        const listFilesInFolder = async (folderPath, storage) => {
            const folderRef = ref(storage, folderPath);

            try {
                const result = await listAll(folderRef);
                const filesWithMeta = await Promise.all(
                    result.items.map(async (itemRef) => {
                        const metadata = await getMetadata(itemRef);
                        const url = await getDownloadURL(itemRef);
                        return {
                            name: itemRef.name,
                            url,
                            timeCreated: metadata.timeCreated
                        };
                    })
                );

                const sorted = filesWithMeta.sort(
                    (a, b) => new Date(b.timeCreated) - new Date(a.timeCreated)
                );

                if (isMounted) {
                    setNewsletterArchive(sorted);
                }
            } catch (error) {
                if (isMounted) {
                    console.error("Error listing files:", error);
                }
            }
        };

        listFilesInFolder('newsletters', storage);

        return () => {
            isMounted = false;
        };
    }, [storage]);

    useEffect(() => {
        console.log(newsletterArchive)
    }, [newsletterArchive])

    return (
        // <div className='fullpage'>
        //     <div className='row newsletter d-flex justify-content-center'>
        //         <iframe loading="lazy" src="https://www.canva.com/design/DAGOCG1FNrE/SlcKnaicauWHJGwZh-Wn1g/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">  </iframe>
        //     </div>
        //     <div className='calendar-load'>
        //         <CircularProgress color='inherit' size={60} />
        //     </div>
        // </div>

        // <div className='fullpage'>
        //     <div className='row newsletter d-flex justify-content-center'>
        //         <iframe loading="lazy" src={link} allowfullscreen="allowfullscreen" allow="fullscreen">  </iframe>
        //     </div>
        //     <div className='calendar-load'>
        //         <CircularProgress color='inherit' size={60} />
        //     </div>
        // </div>

        <div className='fullpage'>
            <div className='hero-image'>
                <div className='overlay-cover sensations'>
                    <img className='cover-img' alt='Sensations' src={SensationsPic} />
                </div>
            </div>
            <div className='hero-title'>
                <h1>Newsletter</h1>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div>
                    {newsletterArchive.length ?
                        <a href={newsletterArchive[0]?.url} target="_blank" rel="noopener noreferrer" className='btn payment-btn'>
                            Download This Week's <br />FCOMM Choirs Newsletter
                        </a> :
                        <button disabled className='btn payment-btn'>Download This Week's <br />FCOMM Choirs Newsletter</button>
                    }
                </div>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Newsletter Archive
                    </a>

                    <ul className="dropdown-menu">
                        {newsletterArchive.map((item, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

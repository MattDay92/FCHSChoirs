import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import BellaCalendar from '../components/BellaCalendar'
import SigCalendar from '../components/SigCalendar'
import HeritageCalendar from '../components/HeritageCalendar'
import SensationsCalendar from '../components/SensationsCalendar'
import VoceAltaCalendar from '../components/VoceAltaCalendar'
import DynamicCalendar from '../components/DynamicCalendar'
import LegacyCalendar from '../components/LegacyCalendar'
import AllChoirsCalendar from '../components/AllChoirsCalendar'
import MusicalCalendar from '../components/MusicalCalendar';


export default function Calendar() {
    const [calendar, setCalendar] = useState('')

    return (
        <div className='fullpage'>

            <div className='container col-10 my-5'>
                <div class="dropdown text-center">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Calendar
                    </button>
                    <ul class="dropdown-menu">
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('All') }}>All Choir Events</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('Bella') }}>Bella Voce</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('Dynamic') }}>Dynamic</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('Heritage') }}>Heritage Singers</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('Legacy') }}>Legacy</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('Musical') }}>Musical</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('Sensations') }}>Sensations</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('Sig') }}>Signature Sound</Link></a>
                        <a><Link className="dropdown-item" onClick={() => { setCalendar('Voce') }}>Voce Alta</Link></a>
                    </ul>
                </div>
                <div className='mt-5'>
                    {calendar === 'Bella' ? <><h2>Bella Voce</h2><BellaCalendar /></> :
                        calendar === 'Dynamic' ? <><h2>Dynamic</h2><DynamicCalendar /></> :
                            calendar === 'Heritage' ? <><h2>Heritage Singers</h2><HeritageCalendar /></> :
                                calendar === 'Legacy' ? <><h2>Legacy</h2><LegacyCalendar /></> :
                                    calendar === 'Sensations' ? <><h2>Sensations</h2><SensationsCalendar /></> :
                                        calendar === 'Voce' ? <><h2>Voce Alta</h2><VoceAltaCalendar /></> :
                                            calendar === 'Sig' ? <><h2>Signature Sound</h2><SigCalendar /></> :
                                                calendar === 'Musical' ? <><h2>Musical</h2><MusicalCalendar /></>:
                                                <><h2>All Choir Events</h2><AllChoirsCalendar /></>
                                                }
                </div>
                <p className='text-center my-2'>Note:  When subscribing, please add each choir individually along with the "All Choir Events" calendar for the most accurate information. </p>
            </div>
        </div>
    )
}

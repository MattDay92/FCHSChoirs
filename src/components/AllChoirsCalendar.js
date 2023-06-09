import React from 'react'

export default function AllChoirsCalendar() {
  return (
    <div className='container'>
    <div className='row calendar d-flex justify-content-center'>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FIndiana%2FIndianapolis&title=All%20Choir%20Events&src=NzVlY2U5NTdiMTcyNDdjODJhMjM0ZjQwMGQ3ZTc2ODdlZTg3MjQ5OWRmNjFjNjA3YjQ0OTY2MDA5OWFlYWIzN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDJiMjA1NWQ3NDBiNzY3YjJiYmYyM2VmNzNjZGE5NWZhN2RmNTdhYjg0YmFiYTY2MzhjYzJjZTAzMzY2NTU1NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZWViYTRmZTMwNWJhZTM3OTM2OTkzMjM2NWNkM2QxMWRjYTdhZGVmMWY0NzFjY2RmMjYzZTQwZDRlN2ExNTRhZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZjI2ZGUxMDBiMTQzODMzODQ1MTQ4NjkyOTY0ZTA3N2EyYWFiY2MyNWNhYWVmMDRjYzQyZmZlZGNmZDg1MmIwNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZTcxODg2YThkZTg0ZWQ0ZGMzZGNhZTQ3ZTVjN2E1MDM5ZDU4MjlmNDdjMThjN2Y4NGRjNDNkMGJiOThmNTgxN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=OGQyNTQ5YTdhYjJiZDAxMTJlYzVkMjdlN2QwODNmMjFiMTcyYzZhODg4NWZlODRiZjA5N2I5MzdlMDA1ZjVlZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YTZlZWExMzA4NTQyN2M3ZTQ5NTQxMWUwYTFmZWY0MDJhMjMwYWRkMDY3ODMwNWEwNDhhNWI2NTlmNTExZjk2MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NDcxODZmYTMyOTIzYTk5YzNhZmFiM2YxM2I1NTc3NDYwNGU3YTI0YmM1ZWMyY2I5YjdlOTI3OTM2N2U2N2EyM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWIzNTUxMDE1Mjc4MDFhMTZmM2ZkNTkyMzcwZDBlMzNjYzljZDU2NWI2OTJhZDE3ZjkyNmUxNDUwYTA1Y2ZjYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%237CB342&color=%23F4511E&color=%23E4C441&color=%237CB342&color=%23c65abc&color=%23616161&color=%237986CB&color=%23C0CA33"></iframe>        
    </div>

    <div class="dropdown subscribe-btn">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subscribe
        </button>
        <ul class="dropdown-menu">
            <li><a href='webcal://https://calendar.google.com/calendar/ical/8d2549a7ab2bd0112ec5d27e7d083f21b172c6a8885fe84bf097b937e005f5ee%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
            <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=8d2549a7ab2bd0112ec5d27e7d083f21b172c6a8885fe84bf097b937e005f5ee%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
        </ul>
    </div>
</div>
  )
}

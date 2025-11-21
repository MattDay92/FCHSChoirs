import React from 'react'

export default function AllChoirsCalendar() {
  return (
    <div className='container'>
    <div className='row calendar d-flex justify-content-center'>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FIndiana%2FIndianapolis&showPrint=0&src=NzVlY2U5NTdiMTcyNDdjODJhMjM0ZjQwMGQ3ZTc2ODdlZTg3MjQ5OWRmNjFjNjA3YjQ0OTY2MDA5OWFlYWIzN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDJiMjA1NWQ3NDBiNzY3YjJiYmYyM2VmNzNjZGE5NWZhN2RmNTdhYjg0YmFiYTY2MzhjYzJjZTAzMzY2NTU1NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZWViYTRmZTMwNWJhZTM3OTM2OTkzMjM2NWNkM2QxMWRjYTdhZGVmMWY0NzFjY2RmMjYzZTQwZDRlN2ExNTRhZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZjI2ZGUxMDBiMTQzODMzODQ1MTQ4NjkyOTY0ZTA3N2EyYWFiY2MyNWNhYWVmMDRjYzQyZmZlZGNmZDg1MmIwNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZTcxODg2YThkZTg0ZWQ0ZGMzZGNhZTQ3ZTVjN2E1MDM5ZDU4MjlmNDdjMThjN2Y4NGRjNDNkMGJiOThmNTgxN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=OGQyNTQ5YTdhYjJiZDAxMTJlYzVkMjdlN2QwODNmMjFiMTcyYzZhODg4NWZlODRiZjA5N2I5MzdlMDA1ZjVlZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YTZlZWExMzA4NTQyN2M3ZTQ5NTQxMWUwYTFmZWY0MDJhMjMwYWRkMDY3ODMwNWEwNDhhNWI2NTlmNTExZjk2MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NDcxODZmYTMyOTIzYTk5YzNhZmFiM2YxM2I1NTc3NDYwNGU3YTI0YmM1ZWMyY2I5YjdlOTI3OTM2N2U2N2EyM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MGM2MmQzYTRjYTg0ZDQ5NTdhZWU3ZDVmN2E2N2NiZjc4ZjdjNTc0MmJjMjJmY2JlOTc1MmE1ODlhMTE3MmFmYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWIzNTUxMDE1Mjc4MDFhMTZmM2ZkNTkyMzcwZDBlMzNjYzljZDU2NWI2OTJhZDE3ZjkyNmUxNDUwYTA1Y2ZjYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y184NzU5YWFiZWVjNmY2OTk3OGE4YTI1Njc5NWQ2OTEzY2IxMWJiOWQ3MTYxZjljMDdjYmYzZWIzZjZlM2FhMDJlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285f4&color=%237cb342&color=%23f4511e&color=%23e4c441&color=%237cb342&color=%23f4511e&color=%23616161&color=%237986cb&color=%23f6bf26&color=%23c0ca33&color=%237cb342"></iframe>        
    </div>
    <div className='dropdown subscribe-btn'>
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subscribe
        </button>
        <ul class="dropdown-menu">
            <li><a href='webcal://calendar.google.com/calendar/ical/75ece957b17247c82a234f400d7e7687ee872499df61c607b449660099aeab37%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
            <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=75ece957b17247c82a234f400d7e7687ee872499df61c607b449660099aeab37%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis" target='_blank'>Add to Google Calendar</a></li>
        </ul>
    </div>
</div>
  )
}

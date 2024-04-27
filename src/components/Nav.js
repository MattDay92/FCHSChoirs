import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ random }) {

  return (
    <div>
      <nav className="navbar navbar-expand-xl bg-light py-0">
        <div className="container-fluid">
          <Link onClick={random} className="navbar-brand" to={'/'}>FCOMM Choirs</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
            <a className="nav-item">
              <Link className="nav-link" aria-current="page" to={'/calendar'}>Calendar</Link>
            </a>
            <a className="nav-item">
              <Link className="nav-link" aria-current="page" to={'/newsletter'}>Newsletter</Link>
            </a>
            <a className="nav-item">
              <Link className="nav-link" to={'/contact'}>Contact</Link>
            </a>
            {/* <a className='nav-item'>
              <Link className='nav-link' to={'/musical'}>Legally Blonde</Link>
            </a> */}
            <a className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ensembles
              </a>
              <div className="nav-item dropdown-menu nav-dropdown-menu">
                <Link className="dropdown-item" to={'/bella'}>Bella Voce</Link>
                <Link className="dropdown-item" to={'/dynamic'}>Dynamic</Link>
                <Link className="dropdown-item" to={'/heritage'}>Heritage Singers</Link>
                <Link className="dropdown-item" to={'/legacy'}>Legacy</Link>
                <Link className="dropdown-item" to={'/sensations'}>Sensations</Link>
                <Link className="dropdown-item" to={'/sig'}>Signature Sound</Link>
                <Link className="dropdown-item" to={'/vocealta'}>Voce Alta</Link>
              </div>
            </a>
            <a className="nav-item dropdown nav-dropdown-menu">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Documents
              </a>
              <div className="dropdown-menu nav-dropdown-menu">
                <a className='dropdown-item' target='_blank' href='https://docs.google.com/document/d/e/2PACX-1vQPeJBqkW7yVvrsCaLjGqYF2fyNDIPCRIlaF6WHy1csc5xtrt4xUVkKCrkIGdQG8Q/pub'>ByLaws</a>
                <a className='dropdown-item' target='_blank' href='https://docs.google.com/document/d/10wykCkms8F9Mv4ZVhM3Wy-Do_dlNp0w1_EhSQ7snDbs/edit?usp=sharing'>Student Handbook</a>
              </div>
            </a>
            <a className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Support
              </a>
              <div className="nav-item dropdown-menu nav-dropdown-menu">
                <Link className="nav-link" to={'/support'}>Support Us</Link>
                <Link className='nav-link' to={'/purchase'}>Purchase/Rent Costumes</Link>
              </div>
            </a>
            <a className="nav-item">
              <Link className="nav-link" to={'/fees'}>Pay Fees</Link>
            </a>
            <a className="nav-item">
              <a className="nav-link" href='https://thefranklinpac.ludus.com/index.php' target='_blank'><strong>Tickets</strong></a>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

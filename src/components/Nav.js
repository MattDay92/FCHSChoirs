import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({random}) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-0">
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
            <a className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ensembles
              </a>
              <div className="nav-item dropdown-menu">
                <Link className="dropdown-item" to={'/bella'}>Bella Voce</Link>
                <a className="dropdown-item" href="#">Dynamic</a>
                <Link className="dropdown-item" to={'/heritage'}>Heritage Singers</Link>
                <Link className="dropdown-item" to={'/legacy'}>Legacy</Link>
                <Link className="dropdown-item" to={'/sensations'}>Sensations</Link>
                <Link className="dropdown-item" to={'/sig'}>Signature Sound</Link>
                <a className="dropdown-item" href="#">Voce Alta</a>
              </div>
            </a>
            <a className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Documents
              </a>
              <div className="dropdown-menu">
                <a className='dropdown-item' target='_blank' href='https://docs.google.com/document/d/e/2PACX-1vQPeJBqkW7yVvrsCaLjGqYF2fyNDIPCRIlaF6WHy1csc5xtrt4xUVkKCrkIGdQG8Q/pub'>ByLaws</a>
              </div>
            </a>
            <a className="nav-item">
              <Link className="nav-link" to={'/support'}>Support Us</Link>
            </a>
            <a className="nav-item">
              <Link className="nav-link" to={'/fees'}>Pay Fees</Link>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

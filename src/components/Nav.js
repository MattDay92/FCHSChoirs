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
              <a className="nav-link" href="#">Contact</a>
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
                Forms
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Form #1</a>
                <a className="dropdown-item" href="#">Form #2</a>
                <a className="dropdown-item" href="#">Form #3</a>
              </div>
            </a>
            <a className="nav-item">
              <Link className="nav-link" to={'/support'}>Support</Link>
            </a>
            {/* <a className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Opportunities
              </a>
              <div className="dropdown-menu">
                <a><a className="dropdown-item" href="#">Majoring in Music</a></a>
              </div>
            </a> */}
            <a className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pay Fees
              </a>
              <div className="dropdown-menu">
                <a><a className="dropdown-item" href="#">Bella Voce Payments</a></a>
                <a><a className="dropdown-item" href="#">Dynamic Payments</a></a>
                <a><a className="dropdown-item" href="#">Heritage Singers Payments</a></a>
                <a><a className="dropdown-item" href="#">Legacy Payments</a></a>
                <a><a className="dropdown-item" href="#">Sensations Payments</a></a>
                <a><a className="dropdown-item" href="#">Voce Alta Payments</a></a>
              </div>
            </a>
            {/* <a className="nav-item">
              <a className="nav-link" href="#">ShowFest 2024</a>
            </a> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

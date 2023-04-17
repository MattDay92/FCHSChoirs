import React from 'react'

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">FCHS Choirs</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Calendar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Ensembles
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Bella Voce</a></li>
                  <li><a className="dropdown-item" href="#">Dynamic</a></li>
                  <li><a className="dropdown-item" href="#">Heritage Singers</a></li>
                  <li><a className="dropdown-item" href="#">Legacy</a></li>
                  <li><a className="dropdown-item" href="#">Sensations</a></li>
                  <li><a className="dropdown-item" href="#">Voce Alta</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Forms
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Form #1</a></li>
                  <li><a className="dropdown-item" href="#">Form #2</a></li>
                  <li><a className="dropdown-item" href="#">Form #3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Fundraisers</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Opportunities
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Majoring in Music</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pay Fees
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Bella Voce Payments</a></li>
                  <li><a className="dropdown-item" href="#">Dynamic Payments</a></li>
                  <li><a className="dropdown-item" href="#">Heritage Singers Payments</a></li>
                  <li><a className="dropdown-item" href="#">Legacy Payments</a></li>
                  <li><a className="dropdown-item" href="#">Sensations Payments</a></li>
                  <li><a className="dropdown-item" href="#">Voce Alta Payments</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ShowFest 2024</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

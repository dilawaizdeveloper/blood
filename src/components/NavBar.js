import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-gradient px-5 my-2 py-0 navcss">
  <div className="container-fluid">
    
      <img className="nav-img-style" src="/images/logo.png" width={55} />
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav px-5 mb-2 mb-lg-1">
        <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown px-3">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item dropdown px-3">
          <Link className="nav-link" to="/event">Event</Link>
        </li>
        <li className="nav-item dropdown px-3">
          <Link className="nav-link" to="/donate">Donate</Link>
        </li>
        <li className="nav-item dropdown px-3">
          <Link className="nav-link" to="/search">Search</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}



export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
   
<div className="container-fluid"></div>
<section className="bg-dark fixed-top ">
  <div className="container">
    <div className="row top-bar" style={{paddingBottom: 5}}>
      <div className="col" style={{textAlign: 'left'}}>
        <span className="text-white">
          <i className="fas fa-envelope" />&nbsp; &nbsp;
          bloodbuddies@gmail.com
        </span>
        <span className="text-white">
          |
        </span>
        <span className="text-white ">
          <i className="fas fa-phone" />&nbsp;&nbsp;
          +923 00000000
        </span>
      </div>
      <div className="col" style={{textAlign: 'right'}}>
        <span>
          <a href="#" style={{color: '#fff', textDecoration: 'none'}}><i className="fa-brands fa-facebook" /></a>
        </span>
        <span>
          <a href="#" style={{color: '#fff'}}><i className="fab fa-instagram" /></a>
        </span>
      </div>
    </div>
  </div>
</section>

<div className="overflow-hidden   ">
<nav className="navbar navbar-expand-lg  fixed-top navbar-light navcss ">
  <div className="container">
    {/* logo  */}
    <Link className="navbar-brand" to="#"><img src="/images/logo.png" alt width="100px" height="49px" /></Link></div>
  {/* toggle button */}
  <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon " />
  </button>
  {/* sidebar */}
  <div className="sidebar offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    {/* sidebar header  */}
    <div className="offcanvas-header border-bottom">
<Link className="navbar-brand fs-4" to="#"><img src="/images/logo.png" alt width="90px" height="49px" /></Link>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    {/* sidebar body  */}
    <div className="offcanvas-body mx-auto">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item mx-3">
         
        <Link className="nav-link navbar-text" to="/">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link navbar-text" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link navbar-text" to="/contact">CONTACT </Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link navbar-text" to="/bloodinfo">Blood Info</Link>
        </li>
      </ul>
      {/* login  */}
      <div className="mt-2 me-5 pe-5">
        <Link to="/register" className="b1 text-white text-decoration-none px-3 py-2 rounded-3">Register</Link>
      </div>
    </div>
  </div>
</nav>
</div>

    </>
  )
}



export default NavBar

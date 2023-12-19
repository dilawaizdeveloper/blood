import React from 'react'
const Footer = () => {
  return (
    <>
     <div className="container-fluid s1 fixed-end">
  <footer className="py-5">
    <div className="row">
      <div className="n1 col-2">
        <h5>CONTACT US</h5>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: 'white', height: 2}} />
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">PHONE</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">+923 000000001</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">EMAIL</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">bloodbuddies@gmail.com</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">ADDRESS</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">X, Y, Z Lahore.</a></li>
        </ul>
      </div>
      <div className="n1 col-2">
        <h5>QUICK LINKS</h5>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: 'white', height: 2}} />
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">HOME</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">ABOUT</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">CONTACT</a></li>
        </ul></div>
      <div className="n1 col-2">
        <div className="n2 mt-5">
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">BLOOD INFO</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">DONATE</a></li>  
          </ul></div>
      </div>
      <div className="n1 col-4 ">
        <img className="logo1" src="/images/logo.png" alt="logo" width={150} height={80} />
        <p style={{color: 'white'}}><b>BLOOD BUDDIES</b></p>
        {/* <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div> */}
      </div>
    </div>
    <div className>
      <div className="social-links">
        <a href="#"><i className="fab fa-facebook-f" /></a> &nbsp; 
        <a href="#"><i className="fab fa-instagram" /></a>
      </div>
    </div>
    <div className=" justify-content-between py-3 my-2 border-top">
      <p style={{textAlign: 'center', color: 'white'}}> 2023 Copyright © All rights are reserved by BloodBuddies.</p>
    </div>
  </footer>
</div>

    </>
  )
}

export default Footer

import React from 'react'
import Footer from '../components/Footer'

const Search = () => {
  return (
    <>
      <h1>Search</h1>
      <div className="container-fluid ">
        <img src="/images/home.png" className="d-block w-100" alt="..." />
        <div className="option carousel-caption">
          <h1>YOUR BLOOD <br /> THEIR HOPE</h1>
          <p>
          Join the noble cause of saving lives through blood donation; your simple act of kindness can leave a lasting, positive impact on someone in need.</p>
          <div class="item-button">
                      <button><h6>Read More</h6></button>
                    </div>
        </div>
      </div>
      {/* portion 1  */}
      <div className="row row-cols-1 row-cols-md-3 g-5 mx-5 mt-3">
  <div className="col">
  <div className="card">
  <div className="card-title">
        <center><h2 className="card-title mt-2">OUR MISSION</h2></center>
  </div>
      <img src="images/image10.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text home-text">Our mission is clear ,We save lives through blood donation. With  dedication and your support, we make a difference in our communities.</p>
      </div>
    </div>
  </div>

  <div className="col">
  <div className="card">
  <div className="card-title ">
         <center><h2 className="card-title mt-2">EDUCATIONL RESOURSE</h2></center>
  </div>
      <img src="images/h2.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text home-text">Explore our educational resources to learn about the importance of blood donation, the donation process, and how you can become a part of this life-saving mission.</p>
      </div>
    </div>
  </div>

  <div className="col">
  <div className="card">
  <div className="card-title">
         <center><h2 className="card-title mt-2">CONTACT US</h2></center>
  </div>
      <img src="images/h3.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text home-text">If you have any questions, suggestions, or need assistance, please don't hesitate to reach out to us. We're here to help you with your blood donation journey.</p>
      </div>
    </div>
  </div>
</div>

      {/* portion 2 */}
      <div className="container-fluid home-quote">
       <h4>" In every drop of donated blood, there's a story of hope, compassion, and the <br /> power to heal. "</h4>
      </div>

      {/* portion 3 */}

      <div className="contaier home-video-con">
        <div className="row">
          <div className="col video-text">
            <h2>We Can Count On Us</h2>
            <p>  Blood donation is an act of compassion that saves lives, strengthens communities, and offers health benefits to donors.
           By understanding the vital importance of blood donation,
            we can all contribute to the well-being of our society. Each donation is a precious gift of life,
             and by increasing awareness and participation, we can ensure that this invaluable resource remains readily available to those in need.
              So, consider rolling up your sleeve and making a difference today – your blood donation could be the lifeline someone is desperately waiting for.
        </p>
          </div>
          <div className="col ">
          <video width="430" height="560" controls>
        <source src="video/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img src="images/h1.png" alt="" /> */}
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Search

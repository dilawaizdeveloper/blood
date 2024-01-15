import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="container-fluid slider-margin home-image">
        <div className="container-fluid ">
          <div className="option">
            <h1 className="heading-text">
              YOUR BLOOD <br /> THEIR HOPE
            </h1>
            <p className="about-text-1">
              Join the noble cause of saving lives through blood donation; your
              simple act of kindness can leave a lasting, positive impact on
              someone in need.
            </p>
            <div className="botton-align">
              <a
                href="/bloodinfo"
                className="home-button text-white text-decoration-none px-3 py-2 rounded-3"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* portion 1 */}
      {/* search bar  */}
      <div className="container-fluid mt-1 s1">
        <div className="row row1">
          <div className="col-md-6 offset-md-3">
            <div className="header">
              <h1 className="text-center">Search Donors</h1>
              <hr
                className="text-center"
                style={{ height: 3, color: "white" }}
              />
              <p className="text-center" style={{ color: "grey" }}>
                Donate the Blood to help others
              </p>
            </div>
          </div>
          <div className="row row1 g-2">
            <div className="col-md">
              <div className="form-floating ">
                <select
                  className="form-select text-center"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option selected>-- Select Area --</option>
                  <option value="Town Ship">Town Ship</option>
                  <option value="Jhor Town">Jhor Town</option>
                  <option value="Garden Town">Garden Town</option>
                  <option value="iqbal town">Iqbal Town</option>
                  <option value="gulberg">Gulberg</option>
                </select>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select
                  className="form-select text-center"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option selected>Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <a
            href="#"
            className="b1 text-white text-decoration-none px-3 py-2 rounded-3"
          >
            Search
          </a>
        </div>{" "}
      </div>

      {/* portion 1  */}
      <div className="row row-cols-1 row-cols-md-3 g-5 mx-5 mt-3">
        <div className="col">
          <div className="card">
            <div className="card-title">
              <center>
                <h2 className="card-title mt-2 heading-text">OUR MISSION</h2>
              </center>
            </div>
            <img src="images/image10.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text home-text about-text-1">
                Our mission is clear ,We save lives through blood donation. With
                dedication and your support, we make a difference in our
                communities.
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-title ">
              <center>
                <h2 className="card-title mt-2 heading-text">
                  EDUCATIONL RESOURSE
                </h2>
              </center>
            </div>
            <img src="images/h2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text home-text about-text-1">
                Explore our educational resources to learn about the importance
                of blood donation, the donation process, and how you can become
                a part of this life-saving mission.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-title">
              <center>
                <h2 className="card-title mt-2 heading-text">CONTACT US</h2>
              </center>
            </div>
            <img src="images/h3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text home-text about-text-1">
                If you have any questions, suggestions, or need assistance,
                please don't hesitate to reach out to us. We're here to help you
                with your blood donation journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* portion 2 */}
      <div className="container-fluid home-quote  ">
        <h4 className="heading-text">
          " In every drop of donated blood, there's a story of hope, compassion,
          and the <br /> power to heal. "
        </h4>
      </div>

      {/* portion 3 */}

      <div className="contaier home-video-con">
        <div className="row">
          <div className="col video-text">
            <h2 className="heading-text">We Can Count On Us</h2>
            <p className="about-text-1">
              {" "}
              Blood donation is an act of compassion that saves lives,
              strengthens communities, and offers health benefits to donors. By
              understanding the vital importance of blood donation, we can all
              contribute to the well-being of our society. Each donation is a
              precious gift of life, and by increasing awareness and
              participation, we can ensure that this invaluable resource remains
              readily available to those in need. So, consider rolling up your
              sleeve and making a difference today – your blood donation could
              be the lifeline someone is desperately waiting for.
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

      <Footer />
    </>
  );
};

export default Home;

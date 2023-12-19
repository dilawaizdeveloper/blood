import React from 'react'

const Contact = () => {
  return (
    <>
         <h1>Contact us</h1>
    <div>
  <div className="container-fluid contact-header">
    <div className="row contact-text ">
      <div className="col-lg-6 handsome" data-aos="fade-in">
        <br /><br />
        &nbsp;&nbsp;<h3 className="contact-title ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTACT US</h3>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your contribution is matters. 
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contactc us today to discover 
          the ways<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you can  get involved and 
          begin distributing<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;blood to those in need</p>
      </div>
    </div>
  </div>
  {/* location */}
  <div className="container-fluid contact-map">
    <div style={{width: '100%'}}><iframe width="100%" height={400} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=Iqbal%20town%20Lahore%20Pakistan+(Blood%20Buddies)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.maps.ie/population/"&gt;Population mapping&lt;/a&gt;</iframe></div>
  </div>
  {/* location */}

</div>
<div className="container-fluid  ">
  <div className="row d-flex justify-content-center ">
    {/* Mission  */}
    <section className="contact-form-init">
    <div className="container contact-container">
      <div className="contactForm">
        <form>
          <h2>Let's start<br />The conversation</h2>
          <div className="inputbox ">
            <input type="text" name required="required" />
            <span>Your Name</span>
          </div>
          <div className="inputbox ">
            <input type="text" name required="required" />
            <span>Your Phone</span>
          </div>
          <div className="inputbox ">
            <input type="text" name required="required" />
            <span>Your Email</span>
          </div>
          <div className="inputbox ">
            <textarea required="required" defaultValue={""} />
            <span>type your message---</span>
          </div>
          <div className="inputbox ">
            <input type="submit" name defaultValue="send" />
          </div>
        </form>
      </div>
    </div>
  </section>
    {/* Vision */}
    <div className="col-sm-4 m-5 mvs" style={{width: '35rem', border: 'none'}}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="text">
        <h4>Our Statement</h4>
        <p className="card-text about-text-1">Our vision is a Pakistan where no one has to suffer or perish due to a shortage of blood. We aspire to create a social network of selfless donors, united by their willingness to give the gift of life. We aim to make voluntary blood donation a part of everyday life.</p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Contact

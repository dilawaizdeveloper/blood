import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <>
    <NavBar/>
      <div className="form-container slider-margin">
        <h1 >register page</h1>
  <div className=" container  form-css">
    <h2 className='heading-text'>Donar Information</h2>
    <form action="/action_page.php" noValidate>
      <table className=''>
        <tbody><tr>
            <td>  
              <label htmlFor="name">Full Name:</label>
            </td>
            <td>
              <input type="text" id="name" name="name" required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label className="form-lable" htmlFor="date">D.O.B:</label>
            </td>
            <td>
              <input type="date" id="date" name="date" required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label className="form-lable" htmlFor="City">City:</label>
            </td>
            <td>
              <input type="text" id="City" name="City" required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label className="form-lable" htmlFor="area">Area:</label>
            </td>
            <td>
              <input type="text" id="area" name="area" required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="bloodgroup">Blood Group:</label>
            </td>
            <td>
              <input type="text" id="bloodgroup" name="bloodgroup" required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="phone"> Contact No:</label>
            </td>
            <td>
              <input type="text" id="phone" name="phone" required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label className="form-lable" htmlFor="email">Email:</label>
            </td>
            <td>
              <input type="email" id="email" name="email" required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="gender">Gender:</label>
            </td>
            <td>
              <label className="form-lable">
                <input type="radio" name="gender" defaultValue="male" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" defaultValue="female" />
                Female
              </label>
            </td>
          </tr>
          <tr>
            <td colSpan={2}> <input className="submit-decore" type="submit" defaultValue="Submit" />
            </td>
            <td />
          </tr>
        </tbody></table>
    </form>
  </div>
</div>
<br />
    <Footer/>

    </>
  )
}

export default Register

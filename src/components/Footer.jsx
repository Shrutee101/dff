import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* column1 */}
          <div className='col'>
            <h4>URBAN ESTATE</h4>
            <ul className='list-unstyled'>
              <li>Mobile Apps</li>
              <li>Our Services</li>
              <li>Price Trends</li>
              <li>Post your property</li>
              

            </ul>
          </div>
          {/* column2 */}
          <div className='col'>
            <h4>Company</h4>
            <ul className='list-unstyled'>
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers with us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          {/* column3 */}
          <div className='col'>
            <h4>Our Partners</h4>
            <ul className='list-unstyled'>
              <li>PaisaBazar.com</li>
              <li>Naukri.com</li>
              <li>AmbitionBox.com</li>
              <li>Brijj.com</li>
            </ul>
            

            <div className='mt-5'>
              <h4>Download the App</h4>
              <ul className='list-unstyled mt-3'>
              <li><img src='./playstore.svg' width="150px"/></li>
              <li className='mt-3'><img src='./appstore.svg' width="150px"/></li>
              
            </ul>
              
            </div>
          </div>
          {/* column4 */}
          <div className='col'>
            <h4>Contact Us</h4>
            <ul className='list-unstyled'>
              <li>Toll Free - 1800 41 99099</li>
              <li>Monday - Saturday (9.00 AM to 11.00 PM IST)</li>
              <li>Email - feedback@urbanestate.com</li>
            </ul>
            

            <div className='mt-5'>
              <h4>Connect with us</h4>
              <ul className='list-unstyled mt-3'>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
              </a>
              
            </ul>
              
            </div>
              
            
          </div>

        </div>
        <hr />
       
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} URBAN ESTATE | All rights reserved 
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
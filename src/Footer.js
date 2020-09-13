import React, { Fragment } from 'react';
import Footer_logo from './pictures/Footer_logo.png'

const Footer = () => {
    return (
        <div>
            <Fragment>
      <div className=" footer">
        <div className="footer_div">
        <img src={Footer_logo}   className="logo"  />
         <h4 className='footer_h4' >  Trafalgar </h4>
          <br />
          <p className="footer_p">
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
for everyone
          </p>

          <p>&copy; Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>

        <div className="mine">
          <h4 className='heads'>Company</h4>
          <p>About</p>
          <p>Testimonials</p>
          <p>Find a doctor</p>
          <p>Apps</p>
        </div>

        <div className="mine">
          <h4 className='heads'>Region</h4>
    
      <p>Indonesia</p>
      <p>Singapore</p>
      <p>Hongkong</p>
      <p>Canada</p>
        </div>

        <div className="mine">
          <h4 className='heads'>Help</h4>
          
      <p>Help center</p>
      <p>Contact support</p>
      <p>Instructions</p>
      <p>How it Works</p>
        </div>
    </div>
      
    </Fragment>
        </div>
        
    )
}

export default Footer

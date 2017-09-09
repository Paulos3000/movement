import React from 'react'

const Contact = ({ name }) => (
   <div className="contact">

      <a href="mailto:alexanderaddison1@gmail.com" target="_blank" className="social-icon social-icon--email">
         <i className="fa fa-envelope-o"></i>
      </a>
      <a href="tel:+44 7491 889832" target="_blank" className="social-icon social-icon--phone">
         <i className="fa fa-phone-square"></i>
      </a>
      <a href="https://www.instagram.com/alexanderaddisonhealth/" target="_blank" className="social-icon social-icon--instagram">
         <i className="fa fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/alex.addison.16" target="_blank" className="social-icon social-icon--facebook">
         <i className="fa fa-facebook-square"></i>
      </a>

   </div>
)

export default Contact

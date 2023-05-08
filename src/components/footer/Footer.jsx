import React from 'react'
import "./Footer.css"
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsDribbble} from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>EKAM B</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Porfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/ekambehl/' target={"_blank"}><BsLinkedin/></a>
        <a href='https://github.com/EkamBehl' target={"_blank"}><BsGithub/></a>
        <a href='https://dribbble.com' target={"_blank"}><BsDribbble/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ekam Behl. All rights reserved
        </small>
      </div>
    </footer>
    
  )
}

export default Footer
import React from 'react'
import "./Header.css"
import CTA from './CTA'
import Socials from './Socials'
import myImage from '../../Assets/ekam.png'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Ekam Behl</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>
        <Socials/>
        
        
      </div>
    </header>
  )
}

export default Header
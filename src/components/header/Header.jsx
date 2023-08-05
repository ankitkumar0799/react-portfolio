import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocials from './Headersocials'

function Header() {
  return (
    <header >
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Ankit</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        
        <Headersocials />
      <div className='me'>
        <img src={ME} alt="me" className='img'/>
      </div>
      <a href="#contact" className='Scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
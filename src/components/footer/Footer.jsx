import React from 'react'
import './footer.css'
import { AiOutlineGithub,AiFillLinkedin } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">Ankit</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>

        <li><a href="#contact">Contact</a></li>
        

      </ul>

              <div className="footer__socails">
          <a href="https://www.linkedin.com/in/ankit-kumar-aa11a2265/"><AiFillLinkedin/></a>
          <a href="https://github.com/ankitkumar0799"><AiOutlineGithub/></a>

        </div>

        <div className='footer__copyright'>
          <small>&copy; Ankit All Rights Reserve.</small>
          </div>
    </footer>
  )
}

export default Footer
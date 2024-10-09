import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>DAIANA MICHELS</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/people/Daiana-Michels/100002464927226/'><FaFacebookF/></a>
        <a href='https://www.instagram.com/daiana.michels/'><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Daiana Eger Michels. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
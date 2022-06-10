import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id='footer' className='footer_container'>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
            <a href="https://www.linkedin.com/in/htalhahassan786" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/HTalhaHassan" target='_blank'><FaGithub/></a>
        </div>
        <div className='footer_copyright'>
            <small>&copy;Talha Hassan. All rights reserved</small>
        </div>
    </section>
  )
}

export default Footer
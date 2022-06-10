import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={ME} alt="About" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className='about_card'>
                        <FaAward className='about_icon'/>
                        <h5>Experience</h5>
                        <small>2+ Year Experience</small>
                    </article>
                    <article className='about_card'>
                        <FiUsers className='about_icon'/>
                        <h5>Clients</h5>
                        <small>100+ Worldwide</small>
                    </article>
                    <article className='about_card'>
                        <VscFolderLibrary className='about_icon'/>
                        <h5>Projects</h5>
                        <small>50+ Completed</small>
                    </article>
                </div>
                <p>
                    A Computer Science graduate having more than one year of experience as a Freelance Software Engineer. 
                    I have worked with React.Js on the FrontEnd and Node.Js on the BackEnd. 
                    Apart from working on MERN stack, I also have a strong background in working with Vanilla JavaScript and pure CSS.
                    My freelance experience gave me exposure to international clients and my communication skills got improved by working with both technical and business stakeholders.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About
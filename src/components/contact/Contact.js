import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = (props) => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
            <div className="contact_options">
                <article className='contact_option'>
                    <MdOutlineEmail className='contact_option-icon'/>
                    <h4>Email</h4>
                    <h5>Htalhahassan786@gmail.com</h5>
                    <a href="mailto:Htalhahassan786@gmail.com">Send a message</a>
                </article>
            </div>
            <div className="contact_options">
                <article className='contact_option'>
                        <BsWhatsapp className='contact_option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>03029672338</h5>
                        <a href="https://api.whatsapp.com/send?phone=+923029672338">Send a message</a>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Contact
import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services_container">
            <article className='service'>
                <div className='service_head'>
                    <h3>Graphic Designing</h3>
                </div>
                <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Attractive Flayers Designing</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Attractive Logo Designing</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Photo Retouching</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Beautiful Card Designing</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Picture Editing</p>
                    </li>
                </ul>
            </article>
            <article className='service'>
                <div className='service_head'>
                    <h3>Frontend Development</h3>
                </div>
                <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Website Designing</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Frontend Designing Using HTML CSS</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Frontend Designing Using React Js</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Responsive Design</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Interactive Design</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Website Development</p>
                    </li>
                </ul>
            </article>
            <article className='service'>
                <div className='service_head'>
                    <h3>Backend Development</h3>
                </div>
                <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Integeration of Server</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Integeration of Database</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Dynamic Website</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Backend Development</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Fully Responsive Web App</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services
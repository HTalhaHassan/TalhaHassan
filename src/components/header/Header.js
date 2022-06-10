import React, { useEffect, useState } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {

  const[toogle,settoogle]=useState(false);

  useEffect(()=>{
    toogletheme()
  },[])
  
  const toogletheme=()=>{
      settoogle(!toogle)
      if(toogle){
        document.documentElement.style.setProperty('--color-bg', '#0d0d0d');
        document.documentElement.style.setProperty('--color-bg-variant', '#1a1a1a');
        document.documentElement.style.setProperty('--color-primary', ' #b3b3b3');
        document.documentElement.style.setProperty('--color-primary-variant', 'rgba(255,255,255,0.6)');
        document.documentElement.style.setProperty('--color-white', 'white');
        document.documentElement.style.setProperty('--color-light', 'rgba(255,255,255,0.6)');
      }
      else{
        document.documentElement.style.setProperty('--color-bg', '#1f1f38');
        document.documentElement.style.setProperty('--color-bg-variant', '#2c2c6c');
        document.documentElement.style.setProperty('--color-primary', '#4db5ff');
        document.documentElement.style.setProperty('--color-primary-variant', 'rgba(77,181,255,0.4)');
        document.documentElement.style.setProperty('--color-white', '#fff');
        document.documentElement.style.setProperty('--color-light', 'rgba(255,255,255,0.6)');
      }
  }

  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Talha Hassan</h1>
            <h5 className='text-light'>Web Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
                <img src={ME} alt=""/>
            </div>
            <a href="#" className='scroll_down' onClick={toogletheme}>{toogle?'Black Theme':'Blue Theme'}</a> 
        </div>
    </header>
  )
}

export default Header
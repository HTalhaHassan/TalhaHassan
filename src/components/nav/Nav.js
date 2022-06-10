import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiMailStarLine} from 'react-icons/ri'
import { useEffect, useState } from 'react'


const Nav = () => {
    const[activenav,setactivenav]=useState('#');

    const changecolor=()=>{
      if(window.scrollY>0 && window.scrollY<900){
        setactivenav('#');
      }
      if(window.scrollY>900 && window.scrollY<1600){
        setactivenav('#about');
      }
      if(window.scrollY>1600 && window.scrollY<2300){
        setactivenav('#experience');
      }
      if(window.scrollY>2300 && window.scrollY<3000){
        setactivenav('#services');
      }
      if(window.scrollY>3000 && window.scrollY<3700){
        setactivenav('#portfolio');
      }
      if(window.scrollY>3700){
        setactivenav('#contact');
      }
    }

    useEffect(()=>{
      changecolor()
      window.addEventListener("scroll", changecolor)
    },[])

  return (
    <nav>
        <a href="#" onClick={()=>setactivenav('#')} className={activenav==='#'?'active':''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=>setactivenav('#about')} className={activenav==='#about'?'active':''}><AiOutlineUser/></a>
        <a href="#experience" onClick={()=>setactivenav('#experience')} className={activenav==='#experience'?'active':''}><BiBook/></a>
        <a href="#services" onClick={()=>setactivenav('#services')} className={activenav==='#services'?'active':''}><RiServiceLine/></a>
        <a href="#portfolio" onClick={()=>setactivenav('#portfolio')} className={activenav==='#portfolio'?'active':''}><RiMailStarLine/></a>
        <a href="#contact" onClick={()=>setactivenav('#contact')} className={activenav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
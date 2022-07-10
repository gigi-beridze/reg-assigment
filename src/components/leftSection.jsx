import React from 'react'
import '../index.css'
import '../styles/leftSection.scss'
import LeftSectionImage from '../images/bgChess.png'
import RegBackground from '../images/bgReg.png'

const LeftSection = (props) => {
  return (
    <section className='leftSection'>
   {
    props.name ? 
      <img src={LeftSectionImage} alt="" /> 
    : 
      <div>
        <img src={RegBackground} alt=""/>
        <span>“When you see a good move, </span>
        <span>look for a better one.” &nbsp;</span>
        <span>-emanuel lasker &nbsp;</span>
      </div>
    }  
    </section>
  )
}


export default LeftSection
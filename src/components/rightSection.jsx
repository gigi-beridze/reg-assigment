import React from 'react'
import '../index.css'
import '../styles/rightSection.scss'
import buttonIcon from '../images/buttonIcon.png'
import { useNavigate } from 'react-router-dom'


const RightSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register')
  }
  return (
    <section className='rightSection'>
      <div className="textArea">
        <span className='whiteText'>chess says <span className='smallText'>a lot about</span></span>
        <div>
          <span className='whiteText'>who we are</span>
        </div>
        <div className="button">
          <button onClick={handleClick} className='btn'>Get Started <img src={buttonIcon} alt="" /></button>
        </div>
      </div>
    </section>
  )
}

export default RightSection
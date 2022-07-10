import React from 'react'
import '../index.css'
import '../styles/header.scss'
import HeaderIcon from '../images/HeaderIcon.png'

const Header = () => {
  return (
    <div className="header">
        <img src={HeaderIcon} alt="" />
    </div>
  )
}

export default Header
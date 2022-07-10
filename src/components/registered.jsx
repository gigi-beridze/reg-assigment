import React from 'react'
import Header from './header'
import LeftSection from './leftSection'
import RegisteredImage from '../images/registered.png'
import FinishedImage from '../images/finished.png'

const registered = () => {
  return (
    <section className='rightRegForm'>
        <div className="rightSide">
            <Header />
            <section className='leftSection'>
                <img src={RegisteredImage} alt="" />
            </section>
        </div>
        <div className="finished">
          <img src={FinishedImage} alt="" />
        </div>
    </section>
  )
}

export default registered
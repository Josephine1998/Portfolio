import React from 'react'
import CTA from './CTA'
import HOODIE from '../../assets/hoodie.jpg'
function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h3>Josephine Aliu</h3>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        <div className="avatar">
          <img src={HOODIE} alt="HOODIE" />
        </div>
      </div>
    </header>
  )
}

export default header
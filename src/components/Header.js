import React from 'react'

import AahSVG from './svg/header/AahSVG'

const Header = () => (
   <div className='header'>
      <div className="header__aah-logo">
         <AahSVG />
      </div>
      <h1 className='header__title'>Alexander Addison Health</h1>
      <h3 className='header__subtitle'>Nutrition Coaching | Sports Massage | Something Else</h3>
   </div>
)

export default Header

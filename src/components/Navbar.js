import React from 'react'
import Scrollchor from 'react-scrollchor';
import classNames from 'classnames'

const Navbar = ({ navIsSticky }) => {

   let stickyClass = classNames({
      'sticky': navIsSticky,
      '': !navIsSticky,
    });

   return (
      <nav className={`nav ${stickyClass}`}>
         <ul className="nav__list">
            <li className="nav__item">
               <Scrollchor to="#top" animate={ {duration: 600} }>Home</Scrollchor>
            </li>
            <li className="nav__item">
               <Scrollchor to="#one" animate={ {duration: 600} }>Section 1</Scrollchor>
            </li>
            <li className="nav__item">
               <Scrollchor to="#two" animate={ {duration: 600} }>Section 2</Scrollchor>
            </li>
            <li className="nav__item">
               <Scrollchor to="#three" animate={ {duration: 600} }>Section 3</Scrollchor>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar

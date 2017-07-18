import React from 'react'
import Scrollchor from 'react-scrollchor';
import classNames from 'classnames'

const Nav = ({ navIsSticky, menuIsOpen, toggleMenu }) => {

   let stickyClass = classNames({
      'sticky': navIsSticky,
      '': !navIsSticky,
    });

    let menuOpenClosed = classNames({
      'menu-open': menuIsOpen,
      '': !menuIsOpen,
    });

   return (
      <nav className={`nav ${stickyClass} ${menuOpenClosed}`}>

         <div className="nav__structure">

            <ul className="nav__list">

               <div className={`nav__burger`} onClick={toggleMenu}>
                  >
               </div>

               <li className="nav__item">
                  <Scrollchor to="#top" animate={ {duration: 600} }>Home</Scrollchor>
               </li>

               <li className="nav__item">
                  <Scrollchor to="#about" animate={ {duration: 600} }>About</Scrollchor>
               </li>

               <li className="nav__item">
                  <Scrollchor to="#elements" animate={ {duration: 600} }>Elements</Scrollchor>
               </li>

               <li className="nav__item">
                  <Scrollchor to="#products" animate={ {duration: 600} }>Products</Scrollchor>
               </li>

               <li className="nav__item">
                  <Scrollchor to="#contact" animate={ {duration: 600} }>Contact</Scrollchor>
               </li>

            </ul>

         </div>

      </nav>
   )
}

export default Nav

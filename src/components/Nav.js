import React from 'react'
import Scrollchor from 'react-scrollchor';
import classNames from 'classnames'

const Nav = ({ navIsSticky, menuIsClosed, toggleMenu }) => {

   let stickyClass = classNames({
      'sticky': navIsSticky,
      '': !navIsSticky,
    });

    let menuOpenClosed = classNames({
      'menu-closed': menuIsClosed,
      '': !menuIsClosed,
    });

   return (
      <nav className={`nav ${stickyClass} ${menuOpenClosed}`}>

         <div className="nav__structure">

            <ul className="nav__list">

               <li className={`nav__burger`} onClick={toggleMenu}>
                  <span className="nav__burger-chevron">
                     >
                  </span>
               </li>

               <li className="nav__item" onClick={toggleMenu}>
                  <Scrollchor to="#top" animate={ {duration: 600} }>Home</Scrollchor>
               </li>

               <li className="nav__item" onClick={toggleMenu}>
                  <Scrollchor to="#about" animate={ {duration: 600} }>About</Scrollchor>
               </li>

               <li className="nav__item" onClick={toggleMenu}>
                  <Scrollchor to="#elements" animate={ {duration: 600} }>Elements</Scrollchor>
               </li>

               <li className="nav__item" onClick={toggleMenu}>
                  <Scrollchor to="#products" animate={ {duration: 600} }>Products</Scrollchor>
               </li>

               <li className="nav__item" onClick={toggleMenu}>
                  <Scrollchor to="#contact" animate={ {duration: 600} }>Contact</Scrollchor>
               </li>

            </ul>

         </div>

      </nav>
   )
}

export default Nav

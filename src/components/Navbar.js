import React from 'react'
import Scrollchor from 'react-scrollchor';
import classNames from 'classnames'

const Navbar = ({ navIsSticky }) => {

   let stickyClass = classNames({
      'sticky': navIsSticky,
      '': !navIsSticky,
    });

   return (
      <nav className={`navbar navbar-default ${stickyClass}`}>
         <div className="container-fluid">
            <ul className="nav navbar-nav">
               <li className="active">
                  <Scrollchor to="#top" animate={ {duration: 600} }>Home</Scrollchor>
               </li>
               <li>
                  <Scrollchor to="#one" animate={ {duration: 600} }>Section 1</Scrollchor>
               </li>
               <li>
                  <Scrollchor to="#two" animate={ {duration: 600} }>Section 2</Scrollchor>
               </li>
               <li>
                  <Scrollchor to="#three" animate={ {duration: 600} }>Section 3</Scrollchor>
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar

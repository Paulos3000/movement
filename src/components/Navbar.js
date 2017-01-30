import React from 'react'
import Scrollchor from 'react-scrollchor';

const Navbar = () => {

   return (
      <nav className="navbar navbar-default">
         <div className="container-fluid">
            <ul className="nav navbar-nav">
               <li className="active">
                  <Scrollchor to="#one">Section 1</Scrollchor>
               </li>
               <li>
                  <Scrollchor to="#two" animate={ {offset: 0, duration: 400} }>Section 2</Scrollchor>
               </li>
               <li>
                  <Scrollchor to="#three">Section 3</Scrollchor>
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar

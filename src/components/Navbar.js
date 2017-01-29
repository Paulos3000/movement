import React from 'react'

// var Scroll  = require('react-scroll');
//
// var Link       = Scroll.Link;
// var Element    = Scroll.Element;
// var Events     = Scroll.Events;
// var scroll     = Scroll.animateScroll;
// var scrollSpy  = Scroll.scrollSpy;
//
// const handleSetActive = (to) => {
//    console.log(to);
// }

const Navbar = () => {

   return (
      <nav className="navbar navbar-default">
         <div className="container-fluid">
            <ul className="nav navbar-nav">
               <li className="active">
                  <a href="#">Section 1</a>
               </li>
               <li>
                  <a href="#">Section 2</a>
               </li>
               <li>
                  <a href="#">Section 3</a>
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar

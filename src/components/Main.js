import React, { Component } from 'react'

import Lorem from 'react-lorem-component';
import Scrollchor from 'react-scrollchor';
import Waypoint from 'react-waypoint';

// import components...
import Header from './Header'
import Nav from './Nav'
import About from './About'
import Elements from './Elements'
import Products from './Products'
import Contact from './Contact'

export default class Main extends Component {

   constructor(props) {
      super(props)
      this.state = {
         navIsSticky: false,
         menuIsOpen: false
      }
   }

   toggleMenu = () => {
      console.log('flip burger');
      this.setState({
         menuIsOpen: !this.state.menuIsOpen
      })
   }
 
   render() {

      const handleWaypointEnter = () => {
         console.log('Non-sticky state')
         this.setState({
            navIsSticky: false,
         })
      }

      const handleWaypointLeave = () => {
         console.log('Sticky state');
         this.setState({
            navIsSticky: true
         })
      }

      return (
         <div className='app'>

            <div id='top'>
               <Header />
            </div>

            <Waypoint
               onEnter={handleWaypointEnter}
               onLeave={handleWaypointLeave}
            />

         <Nav  navIsSticky={this.state.navIsSticky}
               menuIsOpen={this.state.menuIsOpen}
               toggleMenu={this.toggleMenu}
         />

            <div id='about'>
               <About name="about" />
            </div>

            <div id='elements'>
               <Elements name="elements" />
            </div>

            <div id='products'>
               <Products name="products" />
            </div>

            <div id='contact'>
               <Contact name="contact" />
            </div>

            <footer>
               <div className='container'>
                  <h2>Footer content here...</h2>
               </div>
            </footer>

         </div>
      )
   }
}

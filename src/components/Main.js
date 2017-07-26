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
         menuIsClosed: true
      }
   }

   toggleMenu = () => {
      console.log('menu closed?', this.state.menuIsClosed)
      this.setState({
         menuIsClosed: !this.state.menuIsClosed
      })
   }

   handleWaypointEnter = () => {
      console.log('sticky nav?', this.state.navIsSticky)
      this.setState({
         navIsSticky: false
      })
   }

   handleWaypointLeave = () => {
      console.log('sticky nav?', this.state.navIsSticky)
      this.setState({
         navIsSticky: true
      })
   }

   render() {

      return (
         <div className='app'>

            <div id='top'>
               <Header />
            </div>


            <div id='about'></div>
            <Waypoint onEnter={this.handleWaypointEnter} onLeave={this.handleWaypointLeave} />

            <Nav  navIsSticky={this.state.navIsSticky}
                  menuIsClosed={this.state.menuIsClosed}
                  toggleMenu={this.toggleMenu}
            />

            <About name="about" />

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

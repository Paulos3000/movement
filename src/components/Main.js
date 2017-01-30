import React, { Component } from 'react'

import Lorem from 'react-lorem-component';
import Scrollchor from 'react-scrollchor';

import Waypoint from 'react-waypoint';

// import components...
import Header from './Header'
import Navbar from './Navbar'
import Section from './Section'

export default class Main extends Component {

   constructor(props) {
      super(props)
      this.state = {
         navIsSticky: false
      }
   }

   render() {

      const handleWaypointEnter = () => {
         console.log('Non-sticky state')
         this.setState({
            navIsSticky: false
         })
      }

      const handleWaypointLeave = () => {
         console.log('Sticky state')
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
         <Navbar navIsSticky={this.state.navIsSticky}/>

            <div id='one'>
               <Section name="one" className="element"/>
            </div>

            <div id='two'>
               <Section name="two" className="element"/>
            </div>

            <div id='three'>
               <Section name="three" className="element"/>
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

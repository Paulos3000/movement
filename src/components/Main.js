import React, { Component } from 'react'

import Lorem from 'react-lorem-component';
import Scrollchor from 'react-scrollchor';

// import components...
import Header from './Header'
import Navbar from './Navbar'
import Section from './Section'

const Main = () => (
   <div>
      <Header />
      <Navbar />
      <div id='one'>
         <Section name="one" className="element"/>
      </div>
      <div id='two'>
         <Section name="two" className="element"/>
      </div>
      <div id='three'>
         <Section name="three" className="element"/>
      </div>
   </div>
)

export default Main

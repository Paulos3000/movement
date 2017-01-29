import React, { Component } from 'react'

// import components...
import Header from './Header'
import Navbar from './Navbar'
import Section from './Section'

import Scroll from 'react-scroll'
// var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

// var Section = React.createClass({
//   componentDidMount: function() {
//
//     Events.scrollEvent.register('begin', function(to, element) {
//       console.log("begin", arguments);
//     });
//
//     Events.scrollEvent.register('end', function(to, element) {
//       console.log("end", arguments);
//     });
//
//     scrollSpy.update();
//
//   },
//   componentWillUnmount: function() {
//     Events.scrollEvent.remove('begin');
//     Events.scrollEvent.remove('end');
//   },
//   scrollToTop: function() {
//     scroll.scrollToTop();
//   },
//   scrollToBottom: function() {
//     scroll.scrollToBottom();
//   },
//   scrollTo: function() {
//     scroll.scrollTo(100);
//   },
//   scrollMore: function() {
//     scroll.scrollMore(100);
//   },
//   handleSetActive: function(to) {
//     console.log(to);
//   }

const Main = () => (
   <div>
      <Header />
      <Navbar />
      <Section name="one" className="element"/>
      <Section name="two" className="element"/>
      <Section name="three" className="element"/>
   </div>
)

export default Main

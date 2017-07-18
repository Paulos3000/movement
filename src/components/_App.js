import React, { Component } from 'react';
import Lorem from 'react-lorem-component';
import Scrollchor from 'react-scrollchor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="page-wrap">

          <h1 id="top">Smooth Page Scrolling with <strong id="scroll-chor">Scrollchor</strong></h1>

          <ul>
            <li><Scrollchor to="#two">Scroll to Section Two</Scrollchor></li>
            <li><Scrollchor to="three">Scroll to Section Three</Scrollchor></li>
          </ul>

          <h1 id="one">Section One</h1>
          <Lorem />

          <h1 id="two">Section Two</h1>
          <p><Scrollchor to="#top">Top</Scrollchor></p>
          <Lorem />

          <h1 id="three">Section Three</h1>
          <p><Scrollchor to="">Home</Scrollchor></p>
          <Lorem />

        </div>
      </div>
    );
  }
}

export default App;

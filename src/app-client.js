import React from 'react';
import ReactDOM from 'react-dom';

// import main stylesheet
import './styles/app.scss';

// Main Component...
import MainContainer from './components/MainContainer';

window.onload = () => {
   ReactDOM.render(<MainContainer onUpdate={() => window.scrollTo(0, 0)} />,
   document.getElementById('main'));
};

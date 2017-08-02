import React from 'react'

const About = ({ name }) => (
   <div className="about">
      <div className="image-container image-container--about">
         <img src="/img/about-bg.png"></img>
      </div>
      <div className="about__text-container">
         <p className="about__point">Improve your health and wellbeing by concentrating on 4 cental elements</p>
         <p className="about__point">Become happier and healthier through gradual behaviour changes</p>
         <p className="about__point">Bespoke exercise and nutrition plans for each member</p>
         <p className="about__point">Further your education in nutrition and exercise and make healthy behaviours sustainable</p>
      </div>
   </div>
)

export default About

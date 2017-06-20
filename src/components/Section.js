import React from 'react'

const Section = ({ name }) => (
   <div className={`section section-${name}`}>
      <div className='section__title'>
         <h2>Section {name}</h2>
      </div>
   </div>
)

export default Section

import React from 'react'

import MoveEducationSVG from './svg/products/MoveEducationSVG'
import MoverAndShakerSVG from './svg/products/MoverAndShakerSVG'
import MovementMasterSVG from './svg/products/MovementMasterSVG'

const Products = ({ name }) => (
   <div className="products">
      <div className="image-container image-container--products">
         <img src="/img/products-bg.jpg"></img>
      </div>
      <div className="products__item">
         <div className="products__icon products__icon--education">
            <MoveEducationSVG />
         </div>
         <h2 className="products__heading">Move Education</h2>
         <span className="products__caption">
            Exercise should not be mundane, nor a chore. We aim to expose each member to different ways of exercising that stimulate the mind and challenge the body.
         </span>
      </div>
      <div className="products__item">
         <div className="products__icon products__icon--shaker">
            <MoverAndShakerSVG />
         </div>
         <h2 className="products__heading">Mover And Shaker</h2>
         <span className="products__caption">
            Improve life choice that will impact your health positively whilst maintaining your sense of self.
         </span>
      </div>
      <div className="products__item">
         <div className="products__icon products__icon--master">
            <MovementMasterSVG />
         </div>
         <h2 className="products__heading">Movement Master</h2>
         <span className="products__caption">
            Move your taste buds. Become more educated on nutritional and healtheir food alternatives. Become a nutrition maestro.
         </span>
      </div>
   </div>
)

export default Products

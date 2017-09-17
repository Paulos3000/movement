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
            4-week programme providing basic education of nutrition and principles of movement.
         </span>
      </div>
      <div className="products__item">
         <div className="products__icon products__icon--shaker">
            <MoverAndShakerSVG />
         </div>
         <h2 className="products__heading">Mover And Shaker</h2>
         <span className="products__caption">
            12-week programme cementing the foundations and moving the body in new ways, becoming stronger and healthier.
         </span>
      </div>
      <div className="products__item">
         <div className="products__icon products__icon--master">
            <MovementMasterSVG />
         </div>
         <h2 className="products__heading">Movement Master</h2>
         <span className="products__caption">
            6-month programme creating long term strategies to maintain progress and create a platform for lifelong health.
         </span>
      </div>
   </div>
)

export default Products

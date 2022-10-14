import React from 'react'
import {cupcakes} from '../../services/catalogImages'

function CupCakes(props) {

  const {hidleCups, carousel2} = props

  return (
    <div className='container-products hide' ref={hidleCups}>
      <div className='carousel' ref={carousel2}>
        {cupcakes.map((cupcake, index) => {
            return(
                <div key={index} className='image'>
                  <img src={cupcake.img} alt="" />
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default CupCakes
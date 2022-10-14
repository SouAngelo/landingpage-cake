import React from 'react'
import {cakes} from '../../services/catalogImages'
import './cakes.sass'

function Cakes(props) {
    
  const {hidleCakes, carousel} = props
 
  return (
    <div className='container-products' ref={hidleCakes}>
      <div className='carousel' ref={carousel}>
        {cakes.map((cake, index) => {
            return(
                <div key={index} className='image'>
                  <img src={cake.img} alt="" />
                </div>
            )
        })}
      </div>
        
    </div>
  )
}

export default Cakes
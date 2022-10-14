import React from 'react'
import {cookies} from '../../services/catalogImages'

function Cookies(props) {

  const {hidleCookies, carousel3} = props

  return (
    <div className='container-products hide' ref={hidleCookies}>
      <div className='carousel' ref={carousel3}>
        {cookies.map((cookie, index) => {
            return(
                <div key={index} className='image'>
                  <img src={cookie.img} alt="" />
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Cookies
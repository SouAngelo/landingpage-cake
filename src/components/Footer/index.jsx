import React from 'react'
import './footer.sass'

function Footer() {
  return (
    <footer>
        <div className="logo">
              <h2>Cake's Before</h2>
          </div>
  
          <nav>
  
          <ul className='menu2'>
            <a href=""><li>Home</li></a>
            <a href=""><li>Catálogo</li></a>
            <a href=""><li>Sobre</li></a>
            <a href=""><li>Contato</li></a>
            
            <div className='icons'>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
            
          </ul>
  
          </nav>
    </footer>
  )
}

export default Footer
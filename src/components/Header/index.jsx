import React, {useState, useRef} from 'react'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import {Link} from 'react-scroll'
import './header.sass'

function Header() {
  const [open, setOpen] = useState(false)
  const hamb = useRef(null)
    
  const openHamburguer = () => {
          setOpen(!open)
          
          if(open === false){
              hamb.current.style.opacity = '1'
              // hamb.current.style.display ='flex'
              
          } else {
              // hamb.current.style.display ='none'
              hamb.current.style.opacity = '0'
              hamb.current.style.zIndex = -99
          }
      }
  
  
    return (
      <header>
          <div className="logo">
              <h2>Cake's Before</h2>
          </div>
  
          <nav>
          <Burger isOpen={ open } onClick={openHamburguer} id='burguer'/>
  
          <ul ref={hamb} className='menu'>
            <Link to='home' spy={true} smooth={true} offset={-80} duration={500} href="#home"><li>Home</li></Link>
            <Link to='home' spy={true} smooth={true} offset={580} duration={500} href="#catalogo"><li>Catálogo</li></Link>
            <Link to='home' spy={true} smooth={true} offset={1350} duration={500} href="#sobre"><li>Sobre</li></Link>
            <Link to='home' spy={true} smooth={true} offset={2350} duration={500} href="#contato"><li>Contato</li></Link>
            <span>
            <i className="fa-solid fa-phone"></i>
            <h1>11 2555-2555</h1>
            </span>
          </ul>
  
          </nav>
      </header>
    )
}

export default Header
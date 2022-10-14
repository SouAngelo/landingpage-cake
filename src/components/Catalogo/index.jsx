import React, { useRef } from 'react'
import Cakes from '../Cakes'
import Cookies from '../Cookies'
import CupCakes from '../CupCakes'
import './catalogo.sass'

function Catalogo() {

     // ref carousel li
        const liRef = useRef(null)

    // ref carousel img
    const carousel = useRef(null)
    const carousel2 = useRef(null)
    const carousel3 = useRef(null)
    
    // função para avançar ou voltar as imagens
    function backButton(e){
        e.preventDefault()
       
        carousel.current.scrollLeft -= carousel.current.offsetWidth
        carousel2.current.scrollLeft -= carousel2.current.offsetWidth
        carousel3.current.scrollLeft -= carousel3.current.offsetWidth

      }
    
      function nextButton(e){
        e.preventDefault()
       
        carousel.current.scrollLeft += carousel.current.offsetWidth
        carousel2.current.scrollLeft += carousel2.current.offsetWidth
        carousel3.current.scrollLeft += carousel3.current.offsetWidth

      }

    // refs para trocar os componentes

    const cake = useRef(null)
    const cupcake = useRef(null)
    const cookie = useRef(null)

// funcao de ver cake/cupcake/cookies na tela
function handleHide(e){

    if(e.target.innerHTML === 'Bolos'){
  
      cake.current.classList.remove('hide')
      cupcake.current.classList.add('hide')
      cookie.current.classList.add('hide')
  
    } else if(e.target.innerHTML === "CupCakes"){
  
      cake.current.classList.add('hide')
      cupcake.current.classList.remove('hide')
      cookie.current.classList.add('hide')
  
    } else{
  
      cake.current.classList.add('hide')
      cupcake.current.classList.add('hide')
      cookie.current.classList.remove('hide')
  
    }
  
  }

  function backLi(e){
    e.preventDefault()

    liRef.current.scrollLeft -= liRef.current.offsetWidth
  }

  function nextLi(e){
    e.preventDefault()

    liRef.current.scrollLeft += liRef.current.offsetWidth
  }

  return (
    <section className='section-catalog'>
        <h1>Catálogo</h1>

         <div className='navbar-catalog' id='catalogo'>
             <h2 onClick={handleHide}>Bolos</h2>
             <h2 onClick={handleHide}>CupCakes</h2>
             <h2 onClick={handleHide}>Cookies</h2>
         </div>

         <div className="container-catalogo">
             <div className='info-catalogo'>
                
                <div className='content-catalog'>
                    <h2>Customize</h2>
                    <p>Você pode escolher uma das seis opções para o bolo</p>
                </div>
                
                   <div className="arrows2">
                       <i className="fa-solid fa-arrow-left" onClick={backLi}></i>
                       <i className="fa-solid fa-arrow-right" onClick={nextLi}></i>
                    </div>

                  <ul ref={liRef}>
                    <li>Morango</li>
                    <li>Leite condensado</li>
                    <li>Chocolate BIS</li>
                    <li>Chantilly</li>
                    <li>Biscoito Oreo</li>
                    <li>Uvas</li>
                  </ul>

                <a href="">Pedir</a>
             </div>

             <div className="catalogo">

                <div className="arrows">
                   <i className="fa-solid fa-arrow-left" onClick={backButton}></i>
                   <i className="fa-solid fa-arrow-right" onClick={nextButton}></i>
                </div>

                <Cakes hidleCakes={cake} carousel={carousel}/>
                <CupCakes hidleCups={cupcake} carousel2={carousel2}/>
                <Cookies hidleCookies={cookie} carousel3={carousel3}/>

                <a href="">Pedir</a>
             </div>
         </div>
    </section>
  )
}

export default Catalogo
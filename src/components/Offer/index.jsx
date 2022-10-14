import React, { useRef } from 'react'
import './offer.sass'
import cake from '../../assets/cake.webp'

function Offer() {

  const carousel = useRef(null)

  function back(e){
    e.preventDefault()

    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  function next(e){
    e.preventDefault()

    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <section className='sessao-offer'>
       <div className='container-offer'>
        <h1 className='h1'>Bolo do Mês</h1>

        <div className='content-offer'>
          <div className='info-offer'>
              <h1 className='h1'>Oferta Especial</h1>

              <p>Na compra de três bolos de 1kg ou de dois bolos de 1.5kg e meio, você ganha um bolo de 1kg de presente</p>

              <a href="">Pedir</a>
          </div>

          <img src={cake} alt="" />
        </div>

       </div>

       <div className="comments container-about">
           <i className="fa-sharp fa-solid fa-grip-lines"></i>

           <div className="content-comments">
                <div className="arrows3">
                   <i className="fa-solid fa-arrow-left" onClick={back}></i>
                   <i className="fa-solid fa-arrow-right" onClick={next}></i>
                </div>

              <div className="carousel-content" ref={carousel}>
                 <p>Padaria maravilhosa, é sempre bom tomar café com uma xícara de chá e um pedaço do meu bolo favorito. 
                    Adoro recheio de Snickers. Quando não é possível vir ao café, sempre uso delivery. 
                    Padarias de bolo sempre funcionam rapidamente. Obrigado.</p>

                    <p>Padaria muito boa, é sempre bom tomar café com uma xícara de chá e um pedaço do meu bolo favorito. 
                    Adoro recheio de Snickers. Quando não é possível vir ao café, sempre uso delivery. 
                    Padarias de bolo sempre funcionam rapidamente. Obrigado.</p>

                    <p>Padaria perfeita, é sempre bom tomar café com uma xícara de chá e um pedaço do meu bolo favorito. 
                    Adoro recheio de Snickers. Quando não é possível vir ao café, sempre uso delivery. 
                    Padarias de bolo sempre funcionam rapidamente. Obrigado.</p>

                    <p>Padaria incrivel, é sempre bom tomar café com uma xícara de chá e um pedaço do meu bolo favorito. 
                    Adoro recheio de Snickers. Quando não é possível vir ao café, sempre uso delivery. 
                    Padarias de bolo sempre funcionam rapidamente. Obrigado.</p>

              </div>

           </div>
       </div>
    </section>
    
  )
}

export default Offer
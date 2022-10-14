import React from 'react'
import About from '../About'
import Catalogo from '../Catalogo'
import Contato from '../Contato'
import Footer from '../Footer'
import Offer from '../Offer'
import './main.sass'

function Main() {
  return (
    <main>
      <section className="home" id='home'>
        <div className="content-home">
           <h1>Bolos deliciosos para encomenda</h1>
           <a href="">Escolha um bolo</a>
        </div>
      </section>

      <Catalogo/>
      <About/>
      <Offer/>
      <Contato/>
      <Footer/>
    </main>
  )
}

export default Main
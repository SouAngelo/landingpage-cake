import React from 'react'
import img from '../../assets/confeitaria.webp'
import './contato.sass'

function Contato() {
  return (
    <section className='container-contato' id='contato'>
        <div className='section-ctt-img'>
            <h1 className='h1'>Rute Lins</h1>

            <div className='container-ctt-img'>
               <img src={img} alt="" />

               <div className='card-contact'>
                  <h1>Contatos</h1>

                    <div className='info-ctt'>
                       <h2>Telefone: 11 9999-9999</h2>
                       <h2>E-mail: email@email.com</h2>         
                       <h2>Endereço: Rua Endereço Ficticio, número 233</h2>

                       <i className="fa-brands fa-whatsapp"></i>
                    </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Contato
import React from 'react'
import './about.sass'

function About() {
  return (
    <section className='container-about'>
        {/* <i className="fa-sharp fa-solid fa-grip-lines"></i> */}

        <div className="about" id='sobre'>
           <h1 className='h1'>About</h1>

           <p>Somos especializados na venda de bolos, cupcakes e biscoitos sob encomenda, mas também temos duas cafeterias aconchegantes. 
            Nelas você pode não apenas experimentar alguns dos melhores bolos da nossa cidade, como também passar momentos maravilhosos com toda a família. 
            Permitimos que as pessoas encomendem bolos individuais de acordo com seu design para qualquer feriado.</p>
        </div>

        <hr />
    </section>
  )
}

export default About
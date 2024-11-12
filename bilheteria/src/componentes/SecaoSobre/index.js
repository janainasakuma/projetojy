import React from 'react';
import './style.css'

const SecaoSobre = () => {
    return (
    <section id='sobre'>
        <div className='sobre center'>
            <h2>SOBRE NÓS</h2>
                <p>fundada em 2001, em caraguatatuba - Sâo Paulo, a otica iniciou ...</p>
        

        <div className='elementos-sobre'>
            <picture>
                <img src='./assets/loja.png' 
                alt='Nossa loja'/>
            </picture>
        

        <div className='sobre-elementos primeiro-sobre'>
            <h4>NOSSAS FILIAIS</h4>
            <p>
                Hoje temos mais de 10 filiais pelo Brasil
            </p>
        </div>

        <div className='sobre-elementos'>
            <h4>ATENDIMENTO FLEXÍVEL</h4>
            <p>
                Nossa equipe é treinada para te atender da melhor forma possível
            </p>
            </div>
        
        <picture>
            <img src='./assets/atendimento.png' alt='Atendimento'/>
        </picture>
        
        </div>
        </div>
    </section>
    )
}

export default SecaoSobre;
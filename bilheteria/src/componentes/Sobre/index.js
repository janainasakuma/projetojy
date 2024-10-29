import React from 'react';
import './style.css';

const SecaoSobre = () => {
    return (
    <section id='Sobre'>
        <div className='sobre center'>
            <h2>SOBRE NÓS</h2>
            <p>fundada em (...)</p>
        </div>

        <div className='elementos-sobre'>
            <picture>
                <img src='./assets/loja.png' alt='Nossa'></img>
            </picture>
        </div>

        <div className='texto-elementos'>
            <h4>ATENDIMENTO FLEXIVEL</h4>
            <p>
                Nossa equipe (...)
            </p>
        </div>

        <picture>
            <img src='./assets/atendimento.png' alt='Atendimento'/>
        </picture>
    </section>

    )
}
import React from "react";
import './style.css';

const Produtos = () => {
    return (
        <section id="produtos">
            <div className="secao-produtos center">
            <h2 className="titulos">NOSSOS PRODUTOS</h2>
            <p>
                Trabalhamos com óculos de grau, óculos de sol, 
                lentes transitions nos modelos masculinos, femininos e infantis.
            </p>

            <p>
                Todos os nossos preços são acessíveis e contam com a 
                melhor qualidade do mercado.
            </p>
            <div className="oculos-img">
                <div className="card-oculos">
                    <h3>Óculos de Grau</h3>
                    <picture>
                        <img src="./assets/oculos01.png" alt="Óculos de grau"></img>
                    </picture>
                    <p>R$ 550,00</p>
                </div>

                <div className="card-oculos">
                    <h3>Óculos Transition</h3>
                    <picture>
                        <img src="./assets/oculos02.png" alt="Óculos de grau"></img>
                    </picture>
                    <p>R$ 1.550,00</p>
                </div>

                <div className="card-oculos">
                    <h3>Óculos de Sol</h3>
                    <picture>
                        <img src="./assets/oculos03.png" alt="Óculos de grau"></img>
                    </picture>
                    <p>R$ 750,00</p>
                </div>

                <div className="card-oculos">
                    <h3>Óculos Infantil</h3>
                    <picture>
                        <img src="./assets/oculos04.png" alt="Óculos de grau"></img>
                    </picture>
                    <p>R$ 250,00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Produtos;
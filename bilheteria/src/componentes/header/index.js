import React from 'react';
import './style.css';

const Header = () => {
    return (
        <Header>
            <div className='header center'>
                <picture>
                    <img src='./assets/logo.png' alt='logo otica'/>
                </picture>

                <nav>
                    <ul>
                        <li>
                            <a href='#'>Produtos</a>
                        </li>

                        <li>
                            <a href='#'>Sobre</a>
                        </li>

                        <li>
                            <a href='#'>Contatos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Header>
    )
}

export default Header;
import React from 'react';
import Logo from '../../assets/images/logo.png';
import './menu.css';
import Button from '../Menu/Button/index'; 
//import ButtonLink from './components/ButtonLink';

function Menu() { // Criando o componente Menu
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Educaflix" />
            </a>

            <Button as="a" className= "ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;

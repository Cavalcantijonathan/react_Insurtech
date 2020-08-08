import React from 'react';
import { Link } from 'react-router-dom'; // Componente Link
import Logo from '../../assets/images/logo.png';
import './menu.css';
import Button from '../Button'; 
//import ButtonLink from './components/ButtonLink';

function Menu() { // Criando o componente Menu
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Insurtechs" />
            </Link>

            <Button as={Link} className= "ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;


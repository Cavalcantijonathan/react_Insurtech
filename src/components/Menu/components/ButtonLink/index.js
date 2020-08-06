import React from 'react';

function ButtonLink(props) { // Criando o componente ButtonLink
    // props => { className: "o usuario passar", href: "/" }
    return (
        <a  href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;
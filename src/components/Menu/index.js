import React from 'react';
import tonyflix from '../../assets/img/tonyflix.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
    <nav className="Menu">
      <a href="/">
      <img className="tonyflix" src={tonyflix} alt="tonyflix logo" />
      </a>
      <ButtonLink className="ButtonLink" href="/">
       Novo vídeo
      </ButtonLink>
    </nav> 
    );
  }
  
  export default Menu;
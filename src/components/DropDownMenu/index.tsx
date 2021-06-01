import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

const DropDownMenu: React.FC = () => {

  const path = window.location.pathname

  return (
    <Container>
      <label>
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
        <nav>
          {path !== '/home' && (
            <>
              <Link to="/home">Home</Link>
              <hr />
            </>
          )}
          {path !== '/client' && (
            <>
              <Link to="/client">Cadastrar</Link>
              <hr />
            </>
          )}
          {path !== '/pro' && (
            <>
              <Link to="/pro">+ Profissional</Link>
              <hr />
            </>
          )}
          {path !== '/config' && (
            <>
              <Link to="/config">Configurações</Link>
            </>
          )}
        </nav>
      </label>
    </Container >
  );
}

export default DropDownMenu;
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
          {path !== '/patient' && (
            <>
              <Link to="/patient">Pacientes</Link>
              <hr />
            </>
          )}
          {path !== '/pro' && (
            <>
              <Link to="/pro">Profissionais</Link>
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
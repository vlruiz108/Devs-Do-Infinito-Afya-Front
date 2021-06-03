import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

const DropDownMenu: React.FC = () => {

  const path = window.location.pathname

  const items = [
    { name: 'Home', path: '/home' },
    { name: 'Pacientes', path: '/patient' },
    { name: 'Profissionais', path: '/pro' },
    { name: 'Configurações', path: '/config' }
  ]

  return (
    <Container>
      <label>
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
        <nav>
          {items.map((item, i) => {
            return path !== item.path && <Link to="item.path">{item.name}</Link>
          })}
        </nav>
      </label>
    </Container >
  );
}

export default DropDownMenu;
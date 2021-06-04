import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';
import { items } from '../MainNavBar'

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
          {items.map((item, i) => {
            return path !== item.path && <Link to={item.path}>{item.name}</Link>
          })}
        </nav>
      </label>
    </Container >
  );
}

export default DropDownMenu;
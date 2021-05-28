import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

const DropDownMenu: React.FC = () => {
  return (
    <Container>
      <label>
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
        <nav>
          <Link to="/home">Home</Link>
          <hr />
          <Link to="">Item 2</Link>
          <hr />
          <Link to="">Item 3</Link>
          <hr />
          <Link to="">Item 4</Link>
        </nav>
      </label >
    </Container >
  );
}

export default DropDownMenu;
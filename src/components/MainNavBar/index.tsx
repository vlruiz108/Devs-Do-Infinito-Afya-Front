import React, { MouseEvent } from 'react';

import { NavbarContent } from './styles';
import DropDownMenu from '../DropDownMenu';

import Logo from '../../assets/img/AGMed1.png'

import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const items = [
  { name: 'Home', path: '/home' },
  { name: 'Agendamentos', path: '/schedule' },
  { name: 'Prontuários', path: '/medrecord' },
  { name: 'Pacientes', path: '/patient' },
  { name: 'Profissionais', path: '/pro' },
  { name: 'Configurações', path: '/config' }
]

const MainNavBar: React.FC = () => {

  const history = useHistory();

  const path = window.location.pathname

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const btnPath = e.currentTarget.getAttribute('name')
    btnPath && history.push(btnPath);
  };

  return (
    <NavbarContent>
      <NavLink to="/home">
        <img src={Logo} alt="Logo AGmed" />
      </NavLink>
      <div id="navbar">
        {items.map((item, i) => {
          return path === item.path ?
            <Button key={i} onClick={handleClick} name={item.path} variant="contained" color="primary" disableElevation disabled>{item.name}</Button>
            :
            <Button key={i} onClick={handleClick} name={item.path} variant="contained" color="primary" disableElevation>{item.name}</Button>
        }
        )}
      </div>
      <DropDownMenu />
    </NavbarContent >
  );
}

export default MainNavBar;
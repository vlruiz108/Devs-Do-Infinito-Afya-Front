import React, { MouseEvent } from 'react';

import { NavbarContent } from './styles';
import DropDownMenu from '../DropDownMenu';

import Logo from '../../assets/img/AGMed1.png'

import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const MainNavBar: React.FC = () => {

  const history = useHistory();

  const path = window.location.pathname

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const btnPath = e.currentTarget.getAttribute('name')
    // e.currentTarget.style.display = 'none'
    btnPath && history.push(btnPath);
  };

  return (
    <NavbarContent>
      <NavLink to="/home">
        <img src={Logo} alt="Logo AGmed" />
      </NavLink>
      <div id="navbar">
        {path === "/home" ? (
          <Button onClick={handleClick} name="/home" variant="contained" color="primary" disableElevation disabled>
            Home
          </Button>
        ) : (
          <Button onClick={handleClick} name="/home" variant="contained" color="primary" disableElevation>
            Home
          </Button>
        )}
        {path === "/patient" ? (
          <Button onClick={handleClick} name="/patient" variant="contained" color="primary" disableElevation disabled>
            Pacientes
          </Button>
        ) : (
          <Button onClick={handleClick} name="/patient" variant="contained" color="primary" disableElevation>
            Pacientes
          </Button>
        )}
        {path === "/pro" ? (
          <Button onClick={handleClick} name="/pro" variant="contained" color="primary" disableElevation disabled>
            Profissionais
          </Button>
        ) : (
          <Button onClick={handleClick} name="/pro" variant="contained" color="primary" disableElevation>
            Profissionais
          </Button>
        )}
        {path === "/config" ? (
          <Button onClick={handleClick} name="/config" variant="contained" color="primary" disableElevation disabled>
            Configurações
          </Button>
        ) : (
          <Button onClick={handleClick} name="/config" variant="contained" color="primary" disableElevation>
            Configurações
          </Button>
        )}
      </div>
      <DropDownMenu />
    </NavbarContent >
  );
}

export default MainNavBar;
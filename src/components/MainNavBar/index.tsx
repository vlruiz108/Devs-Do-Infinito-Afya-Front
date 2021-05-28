import React from 'react';

import { NavbarContent } from './styles';
import DropDownMenu from '../DropDownMenu';

import Logo from '../../assets/img/AGMed1.png'

import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const MainNavBar: React.FC = () => {
  const history = useHistory();

  return (
    <NavbarContent>
      <NavLink to="/home">
        <img src={Logo} alt="Logo AGmed" />
      </NavLink>
      <div id="navbar">
        <Button onClick={() => { history.push('/home') }} variant="contained" color="primary" disableElevation disabled>
          Home
        </Button>
        <Button onClick={() => { history.push('/home') }} variant="contained" color="primary" disableElevation>
          Item 2
        </Button>
        <Button onClick={() => { history.push('/home') }} variant="contained" color="primary" disableElevation>
          Item 3
        </Button>
        <Button onClick={() => { history.push('/home') }} variant="contained" color="primary" disableElevation>
          Item 4
        </Button>
      </div>
      <DropDownMenu />
    </NavbarContent >
  );
}

export default MainNavBar;
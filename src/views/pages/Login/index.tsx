import React from 'react';

import { LoginContent } from './styles';

import TabBarPass from '../../../components/TabBarPass'

const Login: React.FC = () => {

  return (
    <LoginContent>
      <div className="container">
        <div className="col">
          <TabBarPass />
        </div>
        <footer>
          Devs do Infinito - Afya Labs 06/2021.
        </footer>
      </div>
    </LoginContent>
  );
}

export default Login;
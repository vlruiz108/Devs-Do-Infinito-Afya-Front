import React from 'react';

import TabBarPass from '../../../components/TabBarPass'

import { LoginContent } from './styles';

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
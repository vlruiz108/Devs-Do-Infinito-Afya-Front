import React from 'react';

import FormSignIn from '../../../components/FormSignIn';
import FormSignUp from '../../../components/FormSignUp';

import { LoginContent } from './styles';

const Login: React.FC = () => {
  return (
    <LoginContent>
      <div className="container">
        <div className="col">
          <FormSignUp />
          <FormSignIn />
        </div>
        <footer>
          Devs do Infinito - Afya Labs 06/2021.
        </footer>
      </div>
    </LoginContent>
  );
}

export default Login;
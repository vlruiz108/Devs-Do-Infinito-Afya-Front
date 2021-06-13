import React, { useEffect } from 'react';

import { LoginContent } from './styles';

import TabBar from '../../../components/TabBar';
import { AddCircle, Lock } from '@material-ui/icons';

import FormSignIn from '../../../components/TabBarComponents/FormSignIn';
import FormSignUp from '../../../components/TabBarComponents/FormSignUp';

import { toast } from 'react-toastify';

const Login: React.FC = () => {

  useEffect(() => {
    toast.info('Campos obrigatórios *')
  })

  return (
    <LoginContent>
      <div className="container">
        <div className="content">
          <TabBar
            FIcon={<Lock />}
            SIcon={<AddCircle />}
            FLabel="Login"
            SLabel="Cadastro"
            FContent={FormSignIn}
            SContent={FormSignUp}
          />
        </div>
        <footer>
          Devs do Infinito - Afya Labs 06/2021.
        </footer>
      </div>
    </LoginContent>
  );
}

export default Login;
import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';
import { FormSignInContent } from './styles';
import { toast } from 'react-toastify';

import { Button, TextField, CircularProgress } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

interface IUserLogin {
  usuario: string;
  senha: string;
}

const FormSignIn: React.FC = () => {

  const [formDataContent, setFormDataContent] = useState<IUserLogin>({} as IUserLogin);

  const [isLogged, setIsLogged] = useState<boolean>(false);

  const history = useHistory();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formDataContent.usuario === 'Teste' && formDataContent.senha === '12') {
      setIsLogged(true)
      toast.success('Sucesso no login!', {
        onClose: () => history.push('/home')
      })
    } else {
      toast.error('Falha no cadastro!')
    }
  }

  const handleReset = (MouseEventHandler: FormEvent<HTMLAnchorElement>) => {
    toast.info('Nova senha enviada por email')
  }

  return (
    <FormSignInContent>
      <form onSubmit={handleLogin}>
        <div className="icon">
          <LockIcon />
        </div>
        <h2>Faça o Login</h2>
        <TextField id="outlined-basic" label="Login*" type="text" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, usuario: e.target.value })}
        />
        <TextField id="outlined-basic" label="Senha*" type="password" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })}
        />
        <div className="components">
          {isLogged ? (
            <>
              <Button variant="contained" color="primary" type="submit" disabled>Login</Button>
              <CircularProgress size="20px" />
            </>
          ) : (
            <Button variant="contained" color="primary" type="submit">Login</Button>
          )}
          <a onClick={handleReset}> Esqueci minha senha</a>
        </div>
      </form>
    </FormSignInContent>
  );
}

export default FormSignIn;
import React, { useState, FormEvent, useCallback } from 'react';

import { FormSignInContent } from './styles';

import { api } from '../../../service/api';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, TextField, CircularProgress } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

interface IUserLogin {
  user_email: string;
  password: string;
}

const FormSignIn: React.FC = () => {

  const [formDataContent, setFormDataContent] = useState<IUserLogin>({} as IUserLogin);
  const [formDataError, setFormDataError] = useState<boolean>(false);

  const [isLogged, setIsLogged] = useState<boolean>(false);

  const history = useHistory();

  const loginSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLogged(true)
      setFormDataError(false)
      api.post('login', formDataContent).then(
        response => {
          localStorage.setItem('@TokenAGMed', response.data.token);
          toast.success('Sucesso no login!')
          history.push('/home')
        }
      ).catch(err => {
        toast.error('Dados inválidos, digite novamente')
        if (err.response.data.message === "Login incorreto") setFormDataError(true)
      }).finally(() => setIsLogged(false))
    }, [formDataContent, history])

  const handleReset = (MouseEventHandler: FormEvent<HTMLAnchorElement>) => {
    toast.info('Nova senha enviada por email')
  }

  return (
    <FormSignInContent>
      <form onSubmit={loginSubmit}>
        <div className="icon">
          <LockIcon />
        </div>
        <h2>Faça o Login</h2>
        <TextField id="email-login" label="Email" type="text" variant="outlined" size="small" color="primary" required error={formDataError}
          onChange={e => setFormDataContent({ ...formDataContent, user_email: e.target.value })}
        />
        <TextField id="password-login" label="Senha" type="password" variant="outlined" size="small" color="primary" required error={formDataError}
          onChange={e => setFormDataContent({ ...formDataContent, password: e.target.value })}
        />
        {isLogged ? (
          <Button variant="contained" color="primary" type="submit" disabled>
            <CircularProgress size="20px" />
          </Button>
        ) : (
          <Button variant="contained" color="primary" type="submit">Login</Button>
        )}
        <a onClick={handleReset}> Esqueci minha senha</a>
      </form>
    </FormSignInContent>
  );
}

export default FormSignIn;
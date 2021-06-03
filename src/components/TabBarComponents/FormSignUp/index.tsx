import React, { useState, FormEvent, useCallback } from 'react';

import { FormSignUpContent } from './styles';

import { api } from '../../../service/api';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, TextField, CircularProgress } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

interface IUserRegister {
  user_name: string;
  user_email: string;
  user_pass: string;
}

const FormSignUp: React.FC = () => {

  const [formDataContent, setFormDataContent] = useState<IUserRegister>({} as IUserRegister);

  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const history = useHistory();

  const RegisterSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsRegistered(true)
      api.post('register', formDataContent).then(
        response => {
          localStorage.setItem('@TokenAGMed', response.data.token);
          toast.success('Sucesso no cadastro!')
          history.push('/home')
        }
      ).catch(err => toast.error('Ooops, algo deu errado')).finally(() => {
        setIsRegistered(false)
      })
    }, [formDataContent])

  return (
    <FormSignUpContent>
      <form onSubmit={RegisterSubmit}>
        <div className="icon">
          <AddCircle />
        </div>
        <h2>Cadastre-se</h2>
        <TextField id="email-register" label="Email*" type="email" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, user_email: e.target.value })}
        />
        <TextField id="name-register" label="Nome*" type="text" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, user_name: e.target.value })}
        />
        <TextField id="password-register" label="Senha*" type="password" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, user_pass: e.target.value })}
        />
        {isRegistered ? (
          <Button variant="contained" color="primary" type="submit" disabled>
            <CircularProgress size="20px" />
          </Button>
        ) : (
          <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        )}
      </form>
    </FormSignUpContent>
  );
}

export default FormSignUp;
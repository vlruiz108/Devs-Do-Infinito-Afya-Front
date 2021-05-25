import React, { useState, FormEvent } from 'react';

import { FormSignUpContent } from './styles';
import { toast } from 'react-toastify';

import load from '../../assets/img/loading.gif';
import { Button, TextField } from '@material-ui/core';

interface IUserRegister {
  usuario: string;
  nome: string;
  senha: string;
}

const FormSignUp: React.FC = () => {

  const [formDataContent, setFormDataContent] = useState<IUserRegister>({} as IUserRegister);

  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const handleCadastro = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(formDataContent.usuario === 'Teste')) {
      setIsRegistered(true)
      toast.success('Sucesso no cadastro!', {
        onClose: () => setIsRegistered(false)
      })
    } else {
      toast.error('Falha no cadastro!')
    }
  }

  return (
    <FormSignUpContent>
      <form onSubmit={handleCadastro}>
        <h2>Cadastre-se:</h2>
        <TextField id="outlined-basic" label="Login" type="text" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, usuario: e.target.value })}
        />
        <TextField id="outlined-basic" label="Nome" type="text" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, nome: e.target.value })}
        />
        <TextField id="outlined-basic" label="Senha" type="password" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })}
        />
        {isRegistered ? (
          <Button variant="contained" color="primary" type="submit" disabled>
            <img src={load} alt="Loading" width="25px" height="auto" />
          </Button>
        ) : (
          <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        )}
      </form>
    </FormSignUpContent>
  );
}

export default FormSignUp;
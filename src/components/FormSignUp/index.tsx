import React, { useState, FormEvent } from 'react';

import { FormSignUpContent } from './styles';
import { toast } from 'react-toastify';

import { Button, TextField, CircularProgress } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

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
        <div className="icon">
          <AddCircle />
        </div>
        <h2>Cadastre-se</h2>
        <TextField id="outlined-basic" label="Login*" type="text" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, usuario: e.target.value })}
        />
        <TextField id="outlined-basic" label="Nome*" type="text" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, nome: e.target.value })}
        />
        <TextField id="outlined-basic" label="Senha*" type="password" variant="outlined" size="small" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })}
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
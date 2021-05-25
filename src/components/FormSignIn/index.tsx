import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';
import { FormSignInContent } from './styles';
import { toast } from 'react-toastify';

import load from '../../assets/img/loading.gif';
import { theme } from '../../assets/GlobalStyles'
import { ThemeProvider } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';

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

  return (
    <FormSignInContent>
      <form onSubmit={handleLogin}>
        <ThemeProvider theme={theme}>
          <h2>Faça o Login :</h2>
          <TextField id="outlined-basic" label="Login" type="text" variant="outlined" size="small" color="primary"
            onChange={e => setFormDataContent({ ...formDataContent, usuario: e.target.value })}
          />
          <TextField id="outlined-basic" label="Senha" type="password" variant="outlined" size="small" color="primary"
            onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })}
          />
          <div className="components">
            {isLogged ? (
              <Button variant="contained" color="primary" type="submit" disabled>
                <img src={load} alt="Loading" width="25px" height="auto" />
              </Button>
            ) : (
              <Button variant="contained" color="primary" type="submit">Login</Button>
            )}
            <a href="">Esqueci minha senha</a>
          </div>
        </ThemeProvider>
      </form>
    </FormSignInContent>
  );
}

export default FormSignIn;
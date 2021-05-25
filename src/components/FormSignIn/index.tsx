import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import load from '../../assets/img/loading.gif';
import { FormSignInContent } from './styles';

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
        <h2>Faça o Login :</h2>
        <input type="text" placeholder="Login"
          onChange={e => setFormDataContent({ ...formDataContent, usuario: e.target.value })}
        />
        <input type="password" placeholder="Senha"
          onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })}
        />
        <div className="components">
          {isLogged ?
            <button className="blocked" type="submit" disabled>
              <img src={load} alt="Loading" width="25px" height="auto" />
            </button>
            :
            <button type="submit">Login</button>
          }
          <a href="">Esqueci minha senha</a>
        </div>
      </form>
    </FormSignInContent>
  );
}

export default FormSignIn;
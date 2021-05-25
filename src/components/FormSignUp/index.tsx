import React, { useState, FormEvent } from 'react';

import { toast } from 'react-toastify';

import load from '../../assets/img/loading.gif';
import { FormSignUpContent } from './styles';

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
        <input type="text" placeholder="Login"
          onChange={e => setFormDataContent({ ...formDataContent, usuario: e.target.value })}
        />
        <input type="text" placeholder="Nome"
          onChange={e => setFormDataContent({ ...formDataContent, nome: e.target.value })}
        />
        <input type="password" placeholder="Senha"
          onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })}
        />
        {isRegistered ?
          <button className="blocked" type="submit" disabled>
            <img src={load} alt="Loading" width="25px" height="auto" />
          </button>
          :
          <button type="submit">Cadastrar</button>
        }
      </form>
    </FormSignUpContent>
  );
}

export default FormSignUp;
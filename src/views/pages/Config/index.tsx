import React, { useCallback, useState } from 'react';

import { ConfigContent } from './styles';

import MainNavBar from '../../../components/MainNavBar';
import { Button, TextField } from '@material-ui/core';
import { api } from '../../../service/api';

const Config: React.FC = () => {

  const [Profession, setProfession] = useState<string>({} as string);

  const ProfessionSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      api.post('/client', Profession, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
        }
      }).then(
        response => {
          console.log('Sucesso')
        }
      ).catch(err => console.log('Ooops, algo deu errado'))
    }, [Profession])

  return (
    <ConfigContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <form action="">
              <TextField label="Definir nova profissão" color="primary"
                onChange={e => setProfession(e.target.value)}
              />
              <label htmlFor="changePro">Editar Profissões</label>
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
              <Button variant="contained" color="primary"
                onClick={ProfessionSubmit}
              >Cadastrar</Button>
            </form>
          </div>
        </div>
      </div>
    </ConfigContent>
  );
}

export default Config;
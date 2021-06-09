import React, { useCallback, useEffect, useState } from 'react';

import { FormEditProfessionContent } from './styles';

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  CircularProgress
} from '@material-ui/core';

import { api } from '../../service/api';
import { IProfession } from '../../assets/FormAddClientConfig';

interface IProForm {
  profession_name: string;
  id_profession: string | unknown;
}
interface IProName {
  profession_name: string;
}

const FormEditProfessions: React.FC = () => {

  const [formPro, setFormPro] = useState<IProForm>({} as IProForm);

  const [professionName, setProfessionName] = useState<IProName>({} as IProName)

  const [profession, setProfession] = useState<IProfession[]>([])

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    api.get('profession', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        setProfession(response.data)
      }
    ).catch(err => {
      console.error(err)
    })
  }, [])

  const ProfessionNewSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setIsLoaded(true)
      api.post('profession', professionName, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
        }
      }).then(
        response => {
          console.log('Sucesso')
        }
      ).catch(err => console.log('Ooops, algo deu errado')).finally(() => {
        setIsLoaded(false)
      })
    }, [professionName])


  const ProfessionEditSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setIsLoaded(true)
      api.put('profession', formPro, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
        }
      }).then(
        response => {
          console.log('Sucesso')
        }
      ).catch(err => console.log('Ooops, algo deu errado')).finally(() => {
        setIsLoaded(false)
      })
    }, [formPro])

  return (
    <FormEditProfessionContent>
      <section>
        <TextField label="Definir nova profissão" color="primary" variant="outlined" required
          onChange={e => setProfessionName({ profession_name: e.target.value })}
        />
        {isLoaded ? (
          <Button variant="contained" color="primary" disabled>
            <CircularProgress size="20px" />
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={ProfessionNewSubmit}>
            Cadastrar nova profissão
          </Button>
        )}
      </section>
      <section>
        <FormControl color="primary" >
          <InputLabel id="profession" >Profissão*</InputLabel>
          <Select
            labelId="profession"
            label="Profissão"
            defaultValue={-1}
            variant="outlined"
            onChange={e => setFormPro({ ...formPro, id_profession: e.target.value })}
          >
            <MenuItem value='null'>
              <em>Escolha a profissão</em>
            </MenuItem>
            {profession.map((pro, i) => <MenuItem key={i} value={pro?.id}>{pro?.profession_name}</MenuItem>)}
          </Select>
        </FormControl>
        <TextField label="Definir profissão" color="primary" variant="outlined" required
          onChange={e => setFormPro({ ...formPro, profession_name: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={ProfessionEditSubmit}
        >Editar profissão</Button>
        {isLoaded ? (
          <Button variant="contained" color="primary" disabled>
            <CircularProgress size="20px" />
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={ProfessionEditSubmit}>
            Editar profissão
          </Button>
        )}
      </section>
    </FormEditProfessionContent>
  );
}

export default FormEditProfessions;
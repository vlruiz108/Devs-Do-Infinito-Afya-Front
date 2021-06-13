import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import { Button, CircularProgress, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { IAutoMedRec } from '../../../assets/FormAddClientConfig';
import { api } from '../../../service/api';

import { FormMRContent } from './styles';
import { toast } from 'react-toastify';

interface IMedRec {
  FK_id_attendances: string | undefined;
  description: string;
}

const FormAddMedRecords: React.FC = () => {

  const [patients, setPatients] = useState<IAutoMedRec[]>([])
  const [formMedRec, setFormMedRec] = useState<IMedRec>({} as IMedRec)

  const [isLoaded, setIsLoaded] = useState<boolean>(false);


  useEffect(() => {
    api.get('attendance', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        setPatients(response.data)
      }
    ).catch(err => console.error(err))
  }, [])

  const medRecSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoaded(true)
      api.post('historic', formMedRec, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
        }
      }).then(
        response => {
          toast.success('Sucesso no cadastro!')
        }
      ).catch(err => toast.error('Ooops algo deu errado, tente novamente mais tarde')).finally(() => setIsLoaded(false))
    }, [formMedRec])

  return (
    <FormMRContent>
      <form onSubmit={medRecSubmit}>
        <div id="box">
          <Autocomplete
            id="Patient-select"
            options={patients}
            fullWidth
            autoHighlight
            onChange={(e, value) => setFormMedRec({ ...formMedRec, FK_id_attendances: value?.id })}
            getOptionLabel={(option) => option.client_name}
            groupBy={(option) => new Date(option.attendance_date).toLocaleDateString('pt-br')}
            renderInput={(params) => <TextField {...params} label="Selecione a consulta (nome de paciente)" variant="outlined" required />}
          />
          <TextField
            id="outlined-textarea"
            className="row2"
            label="Adicionar ao Histórico do paciente"
            style={{ height: 270 }}
            onChange={e => setFormMedRec({ ...formMedRec, description: e.target.value })}
            multiline
            rowsMax={14}
            variant="outlined"
          />
          {isLoaded ? (
            <Button variant="contained" style={{ height: 55, width: 300 }} color="primary" disabled>
              <CircularProgress size="20px" />
            </Button>
          ) : (
            <Button variant="contained" style={{ height: 55, width: 300 }} color="primary" type="submit">Adicionar</Button>
          )}
        </div>
      </form>
    </FormMRContent>
  );
}

export default FormAddMedRecords;
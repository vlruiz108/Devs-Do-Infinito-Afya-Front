import React, { useCallback, useEffect, useState } from 'react';

import { IProfessional, IPatient } from '../../assets/FormAddClientConfig';
import {
  Button,
  CircularProgress,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@material-ui/core';

import { api } from '../../service/api';

import { FormAddSchedulesContent } from './styles';
import { Autocomplete } from '@material-ui/lab';
import { toast } from 'react-toastify';

interface ISchedule {
  attendance_date: string;
  attendance_time: string;
  attendance_value: string;
  FK_id_med_reg: string | undefined;
  FK_id_specialist: string | undefined;
}

const FormAddSchedules: React.FC = () => {

  const [formSchedule, setFormSchedule] = useState<ISchedule>({} as ISchedule)

  const [professionals, setProfessionals] = useState<IProfessional[]>([])

  const [patients, setPatients] = useState<IPatient[]>([])

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    api.get('specialist', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        setProfessionals(response.data)
      }
    ).catch(err => console.error(err))
    api.get('client', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        setPatients(response.data)
      }
    ).catch(err => console.error(err))
  }, [])

  const ScheduleSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setIsLoaded(true)
      api.post('attendance', formSchedule, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
        }
      }).then(
        response => {
          toast.success('Sucesso no cadastro!')
        }
      ).catch(err => toast.error('Ooops algo deu errado, tente novamente mais tarde')).finally(() => {
        setIsLoaded(false)
      })
    }, [formSchedule])

  return (
    <FormAddSchedulesContent>
      <h2>Agendar Consulta</h2>
      <form>
        <div id="box">
          <Autocomplete
            id="Patient-select"
            options={patients}
            autoHighlight
            style={{ height: 55 }}
            onChange={(e, value) => setFormSchedule({ ...formSchedule, FK_id_med_reg: value?.id })}
            renderOption={(option) => (
              <React.Fragment>
                {option.client_name} ({option.cpf.substr(0, 3)}.{option.cpf.substr(3, 3)}.{option.cpf.substr(6, 2)}-{option.cpf.substr(8, 3)})
              </React.Fragment>
            )}
            getOptionLabel={(option) => option.cpf}
            renderInput={(params) => <TextField {...params} label="Selecione o paciente" variant="outlined" required />}
          />
          <Autocomplete
            id="Pro-select"
            options={professionals}
            autoHighlight
            style={{ height: 55 }}
            groupBy={(option) => option.profession_name}
            onChange={(e, value) => setFormSchedule({ ...formSchedule, FK_id_specialist: value?.id })}
            getOptionLabel={(option) => option.specialist_name}
            renderInput={(params) => <TextField {...params} label="Selecione o Especialista" variant="outlined" required />}
          />
          <TextField
            id="date"
            label="Data"
            type="date"
            defaultValue="2021-06-14"
            className="row2"
            variant="outlined"
            onChange={e => setFormSchedule({ ...formSchedule, attendance_date: e.target.value })}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            label="Horário"
            type="time"
            defaultValue="12:30"
            className="row2"
            variant="outlined"
            onChange={e => setFormSchedule({ ...formSchedule, attendance_time: e.target.value })}
            required
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
          />
          <FormControl variant="outlined" className="row2" required>
            <InputLabel htmlFor="outlined-adornment-amount">Valor da consulta</InputLabel>
            <OutlinedInput
              type="number"
              id="outlined-adornment-amount"
              onChange={e => setFormSchedule({ ...formSchedule, attendance_value: e.target.value })}
              style={{ width: '100%' }}
              inputProps={{ min: 0 }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={140}
            />
          </FormControl>
          <div className="row3">
            {isLoaded ? (
              <Button variant="contained" style={{ height: 55, width: 300 }} color="primary">
                <CircularProgress size="20px" />
              </Button>
            ) : (
              <Button onClick={ScheduleSubmit} variant="contained" style={{ height: 55, width: 300 }} color="primary" type="submit">Cadastrar Paciente</Button>
            )}
          </div>
        </div>
      </form>
    </FormAddSchedulesContent >
  );

}

export default FormAddSchedules;
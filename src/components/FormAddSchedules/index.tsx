import React, { useEffect, useState } from 'react';

import { IProfessional, IPatient } from '../../assets/FormAddClientConfig';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@material-ui/core';

import { api } from '../../service/api';

import { FormAddSchedulesContent } from './styles';
import { Autocomplete } from '@material-ui/lab';

const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'VG', label: 'British Virgin Islands', phone: '1-284' },
  { code: 'VI', label: 'US Virgin Islands', phone: '1-340' },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];

const FormAddSchedules: React.FC = () => {

  const [professionals, setProfessionals] = useState<IProfessional[]>([])

  const [patients, setPatients] = useState<IPatient[]>([])

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
    api.get('specialist', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        setPatients(response.data)
      }
    ).catch(err => console.error(err))
  }, [])

  return (
    <FormAddSchedulesContent>
      <h2>Agendar Consulta</h2>
      <form>
        <div id="box">
          <Autocomplete
            id="Patient-select"
            options={countries}
            autoHighlight
            style={{
              height: 55,
              width: '43%'
            }}
            onChange={(e, value) => console.log(value?.label)}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} label="Selecione o paciente" variant="outlined" required />}
          />
          <Autocomplete
            id="Pro-select"
            options={countries}
            autoHighlight
            style={{
              height: 55,
              width: '43%'
            }}
            onChange={(e, value) => console.log(value?.label)}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} label="Selecione o Especialista" variant="outlined" required />}
          />
          <TextField
            id="date"
            label="Data"
            type="date"
            defaultValue="2017-05-24"
            className="row2"
            variant="outlined"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            label="Horário"
            type="time"
            defaultValue="07:30"
            className="row2"
            variant="outlined"
            required
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <FormControl variant="outlined" className="row2" required>
            <InputLabel htmlFor="outlined-adornment-amount">Valor da consulta</InputLabel>
            <OutlinedInput
              type="number"
              id="outlined-adornment-amount"
              style={{ width: '100%' }}
              inputProps={{ min: 0 }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={140}
            />
          </FormControl>
          <div className="row3">
            <Button variant="contained" style={{ height: 55 }} color="primary" type="submit">Cadastrar Paciente</Button>
          </div>
        </div>
      </form>
    </FormAddSchedulesContent >
  );

}

export default FormAddSchedules;
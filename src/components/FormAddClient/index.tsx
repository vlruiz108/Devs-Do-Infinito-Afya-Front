import React, { useState } from 'react';

import { FormAddClientContent } from './styles';

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';

interface IClientId {
  client_name: string;
  cpf: string;
  phone: string;
  cellphone: string;
  email: string;
  blood_type: string;
}

const FormAddClient: React.FC = () => {

  const [formDataContent, setFormDataContent] = useState<IClientId>({} as IClientId);

  return (
    <FormAddClientContent>
      <TextField id="name-client" label="Nome" color="secondary" variant="outlined" />
      <TextField id="cpf-client" label="CPF" color="secondary" variant="outlined" />
      <TextField id="phone-client" label="Telefone" color="secondary" variant="outlined" />
      <TextField id="email-client" label="Email" color="secondary" variant="outlined" />
      <FormControl id="blood-form--client" variant="outlined" color="secondary">
        <InputLabel id="blood-client">Tipo Sanguíneo</InputLabel>
        <Select
          labelId="blood-client"
          id="select-blood-client"
          label="Tipo Sanguíneo"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='A+'>A+</MenuItem>
          <MenuItem value='A-'>A-</MenuItem>
          <MenuItem value='B+'>B+</MenuItem>
          <MenuItem value='B-'>B-</MenuItem>
          <MenuItem value='O+'>O+</MenuItem>
          <MenuItem value='O-'>O-</MenuItem>
          <MenuItem value='AB+'>AB+</MenuItem>
          <MenuItem value='AB-'>AB-</MenuItem>
        </Select>
      </FormControl>
    </FormAddClientContent>
  );
}

export default FormAddClient;
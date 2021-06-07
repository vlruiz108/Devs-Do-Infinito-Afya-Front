import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import ListPro from '../../../components/ListPro';

const Teste: React.FC = () => {
  return (
    <div>
      <FormControl color="primary">
        <InputLabel id="blood-pro" >Profissão*</InputLabel>
        <Select
          labelId="blood-pro"
          label="Profissão"
        >
          <MenuItem value='null'>
            <em>Escolha a profissão</em>
          </MenuItem>
          <ListPro />
        </Select>
      </FormControl>
    </div>
  );
}

export default Teste;
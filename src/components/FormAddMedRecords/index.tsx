import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { IAutoMedRec } from '../../assets/FormAddClientConfig';
import { api } from '../../service/api';

import { FormMRContent } from './styles';

interface IMedRec {
  attendance_date: string | undefined;
  attendance_time: string;
  attendance_value: string;
  FK_id_med_reg: string | undefined;
  FK_id_specialist: string | undefined;
}

const FormAddMedRecords: React.FC = () => {

  const [patients, setPatients] = useState<IAutoMedRec[]>([])

  const [formSchedule, setFormSchedule] = useState<IMedRec>({} as IMedRec)

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

  return (
    <FormMRContent>
      <h2>Adicionar ao prontuário</h2>
      <form>
        <div id="box">
          <Autocomplete
            id="Patient-select"
            options={patients}
            autoHighlight
            style={{ height: 55 }}
            onChange={(e, value) => setFormSchedule({ ...formSchedule, attendance_date: value?.id })}
            getOptionLabel={(option) => option.attendance_date}
            renderInput={(params) => <TextField {...params} label="Selecione o paciente" variant="outlined" required />}
          />
        </div>
      </form>
    </FormMRContent>
  );
}

export default FormAddMedRecords;
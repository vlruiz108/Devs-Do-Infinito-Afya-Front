import React, { useState, useCallback } from 'react';

import { CPFInput, PhoneInput, ZipInput } from '../../../assets/MaskedInputs';
import { FormAddPatientContent } from './styles';

import { IPatientId, IZipContent } from '../../../assets/FormAddClientConfig';

import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';

import { api, apiAddress } from '../../../service/api';

const FormAddPatient: React.FC = () => {

  const [formDataContent, setFormDataContent] = useState<IPatientId>({} as IPatientId);

  const [ZipContent, setZipContent] = useState<IZipContent>({} as IZipContent);

  const patientSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      api.post('/addpatient', formDataContent).then(
        response => {
          toast.success('Sucesso no cadastro!')
          console.log(formDataContent)
        }
      ).catch(err => toast.error('Ooops, algo deu errado'))
    }, [formDataContent])

  const handleZip = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      apiAddress.get(`/${ZipContent.cep}/json`).then(
        response => {
          setFormDataContent({
            ...formDataContent,
            zip_code: response.data.cep,
            street: response.data.logradouro,
            district: response.data.bairro,
            locale: response.data.localidade,
            uf: response.data.uf
          })
          console.log(formDataContent)
        }
      ).catch(err => toast.error('Ooops, algo deu errado'))
    }, [ZipContent, formDataContent])

  return (
    <FormAddPatientContent>
      <form className="form-field">
        <TextField label="Nome*" color="secondary"
          onChange={e => setFormDataContent({ ...formDataContent, client_name: e.target.value })}
        />
        <CPFInput label="CPF*" color="secondary"
          onChange={e => setFormDataContent({ ...formDataContent, cpf: e.target.value })}
        />
        <TextField label="Email*" color="secondary"
          onChange={e => setFormDataContent({ ...formDataContent, email: e.target.value })}
        />
        <PhoneInput label="Telefone" color="secondary"
          onChange={e => setFormDataContent({ ...formDataContent, phone: e.target.value })}
        />
        <PhoneInput label="Celular" color="secondary"
          onChange={e => setFormDataContent({ ...formDataContent, cellphone: e.target.value })}
        />
        <FormControl color="secondary">
          <InputLabel id="blood-patient" >Tipo Sanguíneo*</InputLabel>
          <Select
            labelId="blood-patient"
            label="Tipo Sanguíneo"
            onChange={e => setFormDataContent({ ...formDataContent, blood_type: e.target.value })}
          >
            <MenuItem value='null'>
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
        <div>
          <ZipInput label="Cep" color="secondary"
            onChange={e => setZipContent({ ...ZipContent, cep: e.target.value })}
          />
          <Button id="check-address" onClick={handleZip} variant="contained" color="secondary" disableElevation>Verificar</Button>
        </div>
        <TextField label="Rua*" color="secondary" value={formDataContent.street} focused
          onChange={e => setFormDataContent({ ...formDataContent, street: e.target.value })}
        />
        <TextField label="Número*" color="secondary" value={formDataContent.number} focused
          onChange={e => setFormDataContent({ ...formDataContent, number: e.target.value })}
        />
        <TextField label="Bairro*" color="secondary" value={formDataContent.district} focused
          onChange={e => setFormDataContent({ ...formDataContent, district: e.target.value })}
        />
        <TextField label="Cidade*" color="secondary" value={formDataContent.locale} focused
          onChange={e => setFormDataContent({ ...formDataContent, locale: e.target.value })}
        />
        <TextField label="Estado*" color="secondary" value={formDataContent.uf} focused
          onChange={e => setFormDataContent({ ...formDataContent, uf: e.target.value })}
        />
      </form>
      <Button onClick={patientSubmit} variant="contained" color="secondary" type="submit">Cadastrar Paciente</Button>
    </FormAddPatientContent>
  );
}

export default FormAddPatient;
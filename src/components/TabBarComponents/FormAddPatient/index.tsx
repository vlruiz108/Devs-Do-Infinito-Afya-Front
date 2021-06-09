import React, { useState, useCallback } from 'react';

import { CPFInput, PhoneInput, ZipInput } from '../../MaskedInputs';
import { FormAddPatientContent } from './styles';

import { IPatientId, IZipContent } from '../../../assets/FormAddClientConfig';

import { Button, FormControl, InputLabel, MenuItem, Select, TextField, CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify';

import { api, apiAddress } from '../../../service/api';

const FormAddPatient: React.FC = () => {

  const [formDataContent, setFormDataContent] = useState<IPatientId>({} as IPatientId);

  const [ZipContent, setZipContent] = useState<IZipContent>({} as IZipContent);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const patientSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setIsLoaded(true)
      api.post('/client', formDataContent, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
        }
      }).then(
        response => {
          toast.success('Sucesso no cadastro!')
          console.log(formDataContent)
        }
      ).catch(err => toast.error('Ooops, algo deu errado')).finally(() => {
        setIsLoaded(false)
      })
    }, [formDataContent])

  const handleZip = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setIsLoaded(true)
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
      ).catch(err => toast.error('Ooops, algo deu errado')).finally(() => {
        setIsLoaded(false)
      })
    }, [ZipContent, formDataContent])

  return (
    <FormAddPatientContent>
      <form className="form-field">
        <TextField label="Nome*" color="primary" required
          onChange={e => setFormDataContent({ ...formDataContent, name: e.target.value })}
        />
        <CPFInput label="CPF*" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, cpf: e.target.value })}
        />
        <TextField label="Email*" color="primary" required
          onChange={e => setFormDataContent({ ...formDataContent, email: e.target.value })}
        />
        <PhoneInput label="Telefone" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, phone: e.target.value })}
        />
        <PhoneInput label="Celular" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, cellphone: e.target.value })}
        />
        <FormControl color="primary" required>
          <InputLabel id="blood-patient" >Tipo Sanguíneo*</InputLabel>
          <Select
            labelId="blood-patient"
            label="Tipo Sanguíneo"
            onChange={e => setFormDataContent({ ...formDataContent, blood_type: e.target.value })}
          >
            <MenuItem value='null'>
              <em>Escolha o tipo sanguíneo</em>
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
          <ZipInput label="CEP*" color="primary"
            onChange={e => setZipContent({ ...ZipContent, cep: e.target.value })}
          />
          {isLoaded ? (
            <Button id="check-address" variant="contained" color="primary" disableElevation disabled>Verificar</Button>
          ) : (
            <Button id="check-address" onClick={handleZip} variant="contained" color="primary" disableElevation>Verificar</Button>
          )}
        </div>
        <TextField label="Rua*" color="primary" value={formDataContent.street} focused required
          onChange={e => setFormDataContent({ ...formDataContent, street: e.target.value })}
        />
        <TextField label="Número*" color="primary" value={formDataContent.number} focused required
          onChange={e => setFormDataContent({ ...formDataContent, number: e.target.value })}
        />
        <TextField label="Bairro*" color="primary" value={formDataContent.district} focused required
          onChange={e => setFormDataContent({ ...formDataContent, district: e.target.value })}
        />
        <TextField label="Cidade*" color="primary" value={formDataContent.locale} focused required
          onChange={e => setFormDataContent({ ...formDataContent, locale: e.target.value })}
        />
        <TextField label="Estado*" color="primary" value={formDataContent.uf} focused required
          onChange={e => setFormDataContent({ ...formDataContent, uf: e.target.value })}
        />
      </form>
      { isLoaded ? (
        <Button variant="contained" color="primary" disabled>
          <CircularProgress size="20px" />
        </Button>
      ) : (
        <Button onClick={patientSubmit} variant="contained" color="primary">Cadastrar Paciente</Button>
      )}
    </FormAddPatientContent>
  );
}

export default FormAddPatient;
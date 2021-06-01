import React, { useState, FormEvent, useCallback } from 'react';

import { FormAddClientContent } from './styles';
import InputAdornment from '@material-ui/core/InputAdornment';

import { IClientId, IZipContent } from '../../assets/FormAddClientConfig';

import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';

import { api, apiAdress } from '../../service/api';

const FormAddClient: React.FC = () => {

  const [formDataContent, setFormDataContent] = useState<IClientId>({} as IClientId);

  const [ZipContent, setZipContent] = useState<IZipContent>({} as IZipContent);

  const clientSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      api.post('/addclient', formDataContent).then(
        response => {
          toast.success('Sucesso no cadastro!')
          console.log(formDataContent)
        }
      ).catch(err => toast.error('Ooops, algo deu errado'))
    }, [formDataContent])

  const handleZip = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      apiAdress.get(`/${ZipContent.cep}/json`).then(
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

  // const clientSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formDataContent)
  // }

  return (
    <FormAddClientContent>
      <form>
        <div className="form-fields">
          <TextField id="name-client" className="form-field" label="Nome*" color="secondary"
            onChange={e => setFormDataContent({ ...formDataContent, client_name: e.target.value })}
          />
          <TextField id="cpf-client" className="form-field" label="CPF*" color="secondary"
            onChange={e => setFormDataContent({ ...formDataContent, cpf: e.target.value })}
          />
          <TextField id="email-client" className="form-field" label="Email*" color="secondary"
            onChange={e => setFormDataContent({ ...formDataContent, email: e.target.value })}
          />
          <TextField id="phone-client" className="form-field" label="Telefone" color="secondary"
            onChange={e => setFormDataContent({ ...formDataContent, phone: e.target.value })}
          />
          <TextField id="cellphone-client" className="form-field" label="Celular" color="secondary"
            onChange={e => setFormDataContent({ ...formDataContent, cellphone: e.target.value })}
          />
          <FormControl id="blood-form--client" color="secondary">
            <InputLabel id="blood-client" >Tipo Sanguíneo*</InputLabel>
            <Select
              labelId="blood-client"
              id="select-blood-client"
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
          <div className="form-field">
            <TextField id="zip-client" label="CEP*" color="secondary"
              onChange={e => setZipContent({ ...ZipContent, cep: e.target.value })}
            />
            <Button id="check-zip" onClick={handleZip} variant="contained" color="secondary" disableElevation>Verificar</Button>
          </div>
          <TextField id="street-client" className="form-field" label="Rua*" color="secondary" value={formDataContent.street} focused
            onChange={e => setFormDataContent({ ...formDataContent, street: e.target.value })}
          />
          <TextField id="number-client" className="form-field" label="Número*" color="secondary" value={formDataContent.number} focused
            onChange={e => setFormDataContent({ ...formDataContent, number: e.target.value })}
          />
          <TextField id="district-client" className="form-field" label="Bairro*" color="secondary" value={formDataContent.district} focused
            onChange={e => setFormDataContent({ ...formDataContent, district: e.target.value })}
          />
          <TextField id="locale-client" className="form-field" label="Cidade*" color="secondary" value={formDataContent.locale} focused
            onChange={e => setFormDataContent({ ...formDataContent, locale: e.target.value })}
          />
          <TextField id="uf-client" className="form-field" label="Estado*" color="secondary" value={formDataContent.uf} focused
            onChange={e => setFormDataContent({ ...formDataContent, uf: e.target.value })}
          />
        </div>
      </form>
      <Button onClick={clientSubmit} variant="contained" color="secondary" type="submit">Cadastrar Paciente</Button>
    </FormAddClientContent >
  );
}

export default FormAddClient;
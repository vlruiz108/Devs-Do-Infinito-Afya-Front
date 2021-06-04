import React, { useCallback, useEffect, useState } from 'react';

import { CPFInput, PhoneInput, ZipInput } from '../../../assets/MaskedInputs';
import { FormAddProContent } from './styles';

import { IPros, IProId, IZipContent } from '../../../assets/FormAddClientConfig';

import { Button, FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';

import { api, apiAddress } from '../../../service/api';

const FormAddPro: React.FC = () => {

  const [pros, setPros] = useState<IPros[]>([])

  const [formDataContent, setFormDataContent] = useState<IProId>({} as IProId);

  const [ZipContent, setZipContent] = useState<IZipContent>({} as IZipContent);

  useEffect(() => {
    api.get('/profession', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        setPros(response.data)
      }
    ).catch(err => {
      console.error(err)
      // if (err.response.status === 401) {
      //   localStorage.removeItem('@TokenAGMed')
      //   toast.error('Sessão expirada, faça login novamente')
      // }
    })
  }, [])

  const proSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      api.post('/addpro', formDataContent).then(
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
      ).catch(err => { toast.error('Ooops, algo deu errado') })
    }, [ZipContent, formDataContent])

  return (
    <FormAddProContent>
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
          <InputLabel id="blood-pro" >Profissão*</InputLabel>
          <Select
            labelId="blood-pro"
            label="Profissão"
            onChange={e => setFormDataContent({ ...formDataContent, pro_type: e.target.value })}
          >
            <MenuItem value='null'>
              <em>None</em>
            </MenuItem>
            {pros.map((pro, i) => <MenuItem key={i} value={pro?.profession_name as any}>{pro?.profession_name}</MenuItem>)}
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
      <Button onClick={proSubmit} variant="contained" color="secondary" type="submit">Cadastrar Profissional</Button>
    </FormAddProContent >
  );
}

export default FormAddPro;
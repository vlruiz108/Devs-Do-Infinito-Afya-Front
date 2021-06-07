import React, { useCallback, useEffect, useState } from 'react';

import { CPFInput, PhoneInput, ZipInput } from '../../MaskedInputs';
import { FormAddProContent } from './styles';

import { IPros, IProId, IZipContent } from '../../../assets/FormAddClientConfig';

import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';

import { api, apiAddress } from '../../../service/api';

const FormAddPro: React.FC = () => {

  const [pros, setPros] = useState<IPros[]>([])

  const [formDataContent, setFormDataContent] = useState<IProId>({} as IProId);

  const [ZipContent, setZipContent] = useState<IZipContent>({} as IZipContent);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    api.get('profession', {
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
      setIsLoaded(true)
      api.post('specialist', formDataContent, {
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
      ).catch(err => { toast.error('Ooops, algo deu errado') }).finally(() => {
        setIsLoaded(false)
      })
    }, [ZipContent, formDataContent])

  return (
    <FormAddProContent>
      <form className="form-field">
        <TextField label="Nome*" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, name: e.target.value })}
        />
        <CPFInput label="CPF*" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, cpf: e.target.value })}
        />
        <TextField label="Email*" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, email: e.target.value })}
        />
        <PhoneInput label="Telefone" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, phone: e.target.value })}
        />
        <PhoneInput label="Celular" color="primary"
          onChange={e => setFormDataContent({ ...formDataContent, cellphone: e.target.value })}
        />
        <FormControl color="primary">
          <InputLabel id="blood-pro" >Profissão*</InputLabel>
          <Select
            labelId="blood-pro"
            label="Profissão"
            onChange={e => setFormDataContent({ ...formDataContent, pro_type: e.target.value })}
          >
            <MenuItem value='null'>
              <em>Escolha a profissão</em>
            </MenuItem>
            {pros.map((pro, i) => <MenuItem key={i} value={pro?.profession_name as any}>{pro?.profession_name}</MenuItem>)}
          </Select>
        </FormControl>
        <div>
          <ZipInput label="CEP*" color="primary"
            onChange={e => setZipContent({ ...ZipContent, cep: e.target.value })}
          />
          {isLoaded ? (
            <Button id="check-address" onClick={handleZip} variant="contained" color="primary" disableElevation disabled>Verificar</Button>
          ) : (
            <Button id="check-address" onClick={handleZip} variant="contained" color="primary" disableElevation>Verificar</Button>
          )}
        </div>
        <TextField label="Rua*" color="primary" value={formDataContent.street} focused
          onChange={e => setFormDataContent({ ...formDataContent, street: e.target.value })}
        />
        <TextField label="Número*" color="primary" value={formDataContent.number} focused
          onChange={e => setFormDataContent({ ...formDataContent, number: e.target.value })}
        />
        <TextField label="Bairro*" color="primary" value={formDataContent.district} focused
          onChange={e => setFormDataContent({ ...formDataContent, district: e.target.value })}
        />
        <TextField label="Cidade*" color="primary" value={formDataContent.locale} focused
          onChange={e => setFormDataContent({ ...formDataContent, locale: e.target.value })}
        />
        <TextField label="Estado*" color="primary" value={formDataContent.uf} focused
          onChange={e => setFormDataContent({ ...formDataContent, uf: e.target.value })}
        />
      </form>
      { isLoaded ? (
        <Button onClick={proSubmit} variant="contained" color="primary" type="submit" disabled>
          <CircularProgress size="20px" />
        </Button>
      ) : (
        <Button onClick={proSubmit} variant="contained" color="primary" type="submit">Cadastrar Paciente</Button>
      )}
    </FormAddProContent >
  );
}

export default FormAddPro;